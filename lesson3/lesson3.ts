// function* asd() {
//     const a = 5;
//     yield a;
//     console.log("!!!!!!!!!!!")
// }
//
// const generator = asd();
// console.log(generator)
// const next = generator.next();
// console.log(next);
//
// function* generateFileNames(): Generator<string> {
//     let index = 0;
//     while (true) {
//         yield `file${index++}.jpg`
//     }
// }
//
// const fileGen = generateFileNames();
// console.log(fileGen.next().value);
// console.log(fileGen.next().value);
// console.log('writing another code');
// console.log(fileGen.next().value);
//
// function* team1(n: number): Generator<string> {
//     for (let i = 1; i <= n; i++) {
//         yield `team1 -- worker ${i}`
//     }
// }
//
// function* team2(n: number): Generator<string> {
//     for (let i = 1; i <= n; i++) {
//         yield `team2 -- worker ${i}`
//
//     }
// }
//
// const teams = [team1(4), team2(6)];
//
// while (teams.length) {
//     const team = teams.shift();
//     const next = team.next();
//     console.log(next)
//
//     if (next.done){
//         continue
//     }
//
//     console.log(next.value);
//     teams.push(team);
//     console.log(teams);
// }

// interface IUser {
//     id:number;
//     name:string;
//     username:string;
//     email:string;
// }
//
// const getAllUsers = ():Promise<IUser[]> =>  fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
//
// const main = async ()=>{
//     const users = await getAllUsers();
//     const userContainerDiv = document.querySelector<HTMLDivElement>('#userContainer');
//
//     users.forEach(user=>{
//         const  div = document.createElement('div');
//         const button = document.createElement('button');
//         div.innerText = `${user.id} ${user.name} ${user.email} ===>`;
//         button.innerText = 'Posts';
//         button.onclick = ()=>{
//             location.href = `./posts.html?userId=${user.id}`;
//         }
//         div.appendChild(button);
//         userContainerDiv.appendChild(div);
//     })
// }
//
// void main();

const base = 'http://owu.linkpc.net/carsAPI/v1';
const cars = `${base}/cars`;

const urls = {
    cars: {
        base: cars,
        byId: (id: number): string => `${cars}/${id}`
    }
}

interface ICar {
    id?: number;
    brand: string;
    price: number;
    year: number;
}


const carService = {
    getAll: (): Promise<ICar[]> => fetch(urls.cars.base).then(value => value.json()),
    create: (data: ICar): Promise<ICar> => fetch(urls.cars.base, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json"},
    }).then(value => value.json()),
    delete: (id: number): Promise<Response> => fetch(urls.cars.byId(id),{method:'DELETE'})
}

class CarHtmlRender {
    static async showAll(): Promise<void> {
        this.formAction();
        const cars = await carService.getAll();
        const carContainer = document.querySelector<HTMLDivElement>('#carContainer');
        carContainer.innerText = '';

        cars.forEach(car => {
            const carDiv = document.createElement('div');
            carDiv.innerText = `${car.id}) ${car.brand} ${car.price} ${car.year}`;
            const button = document.createElement('button');
            button.innerText = 'delete';
            button.onclick = async () => {
                await carService.delete(car.id);
                await this.showAll();
            }
            carDiv.appendChild(button);
            carContainer.appendChild(carDiv);
        })
    }

    private static formAction(): void {
        const form = document.forms.namedItem('carForm');

        form.onsubmit = async (e: SubmitEvent): Promise<void> => {
            e.preventDefault();
            const {brand, price, year} = form as any as Record<'brand' | 'price' | 'year', HTMLFormElement>
            const car: ICar = {brand: brand.value, price: +price.value, year: +year.value};
            await carService.create(car);
            this.showAll();
            form.reset();

        }

    }
}
CarHtmlRender.showAll();
// Generator functions allow you to yield multiple values over time and are useful for scenarios where you need to produce
// a sequence of values lazily, or when you want to iterate over large datasets without loading them all into memory at once.

//The yield keyword is used inside a generator function to specify a value to be yielded to the caller.
// When the generator function encounters a yield statement, it pauses its execution and returns the yielded value to the caller.

//When next is called, the generator function continues its execution from where it was paused by the last yield statement.