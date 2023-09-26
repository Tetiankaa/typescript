//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let str1: string = 'hello';
let str2: string = 'owu';
let str3: string = 'com';
let str4: string = 'ua';
let num1: number = 1;
let num2: number = 10;
let num3: number = -999;
let num4: number = 3.14;
let bool: boolean = true;
let bool2: boolean = false;
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(bool);
console.log(bool2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName: string;
let middleName: string;
let lastName: string;
firstName = 'Tetiana';
middleName='Borisyvna';
lastName = 'Korsun';
let person:string = `${firstName} ${middleName} ${lastName}`;
console.log(person);

//// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a :number = 100;
let b :string = '100';
let c :boolean = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

console.log(prompt("Please enter your name"));
console.log(prompt("Please enter your last name"));
console.log(+prompt("Please enter your date of birth"));