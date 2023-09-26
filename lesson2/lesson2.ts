// interface IUser<T>{
//     id:number,
//     name:string,
//     age?:number,
//     work:T[]
// }
//
// let user1:IUser<string> = {id:1,name:"TANYA",work:['java web-developer']};
// let user2:IUser<number> = {id:2,name:"Max",age:28,work:[1,5]};
//
// let user3: Partial<IUser<string>> = {name:'Petro'};
//
//
// interface IUserGreeting{
//     sayHello():void
// }
// class User implements IUserGreeting{
//     constructor(private name:string, public age:number) {
//     }
//
//     getName():string{
//         return this.name;
//     }
//
//     sayHello(): void {
//         console.log("Hello " + this.getName())
//     }
//
// }
//
// let user4 = new User("Tanya",27);
// console.log(user4.getName());
// user4.sayHello();

interface IUser {
    id: number,
    name: string,
    age: number
}
type IUserForm = Pick<IUser,"name" | "age">;

class UserService {
    private static readonly _userKey = 'users';

    private static _getUsers(): IUser[] {
        return JSON.parse(localStorage.getItem(this._userKey)) || [{id: 1, name: "Max", age: 26}]
    }
    static create(data:IUserForm):void{
        let users = this._getUsers();
        let id = users.length ? users.slice(-1)[0].id+1 :1;
        users.push({id,...data});
        this._setToStorage(users);
    }
    private static _deleteUser(id:number):void{
        const users = this._getUsers();
        const index =  users.findIndex(user=>user.id === id);
        users.splice(index,1);
        this._setToStorage(users);
    }

    static render(): void {
        const users = this._getUsers();

        const userContainer = document.querySelector('#userContainer') as HTMLDivElement;
        userContainer.innerHTML = '';

        const htmlUserContainer = users.map(user => {
            let div = document.createElement('div');
            let button = document.createElement('button');
            button.innerText = 'delete';
            button.onclick = () =>{
                this._deleteUser(user.id)
            }
            div.innerText = ` ${user.name} ${user.age} years old`;
            div.appendChild(button);
            return div;
        })

        if (htmlUserContainer.length){
            userContainer.append(...htmlUserContainer)
        }else {
            userContainer.innerText = "Users not exist";
        }

    }
    private static _setToStorage(data:IUser[]):void{
        localStorage.setItem(this._userKey,JSON.stringify(data));
        this.render();
    }
}
UserService.render();

const forms = document.forms['userForm'] as HTMLFormElement;
forms.onsubmit = (e:SubmitEvent) =>{
    e.preventDefault();
    const {name:{value:name},age:{value:age}} = forms as any as Record<keyof IUserForm, HTMLFormElement>
    UserService.create({name,age:+age});
    forms.reset();
}

// <> - defines a generic type parameter. Generics allow to handle multiple types of variables.

//Partial<T> utility type is used to create a new type that has all the properties of the original type T, but with each property marked as optional

// Access modifiers like private, public, and protected is used to control the visibility and accessibility of class members (properties and methods).
// Public: Accessible from anywhere.
// Private: Accessible only within the declaring class.
// Protected: Accessible within the declaring class and its subclasses.

//When you implement an interface with a class, the class must provide implementations for all the properties and methods specified in the interface.

// Once a readonly property is assigned a value, it cannot be changed or reassigned later. This is similar to declaring a constant value.

// static keyword is used to define properties or methods that belong to a class itself rather than to instances of the class.
// These properties and methods can be accessed using the class name without the need to create an instance of the class.

//The Pick utility type allows to create a new type by selecting specific properties from an existing type.

//The data parameter is explicitly defined as an object of type IUserForm, and this function expects that you will pass an object conforming
// to the IUserForm interface when you call it.
// This provides type checking and documentation, making it clear what kind of data is expected.

//HTMLFormElement - cast the result to the HTMLFormElement, indicating that you expect the form to be of this specific type.

//Record<keyof IUserForm, HTMLInputElement> - this allows TypeScript to understand the shape of the form object and ensure
// that the destructured properties are of type HTMLInputElement.