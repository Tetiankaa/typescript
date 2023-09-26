// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array: [string, number, boolean, string, number, boolean, string, number, boolean, string];
array[0] = "aa";
array[1] = 5;
array[2] = true;
array[3] = "hh";
array[4] = 74;
array[5] = false;
array[6] = "t";
array[7] = 12;
array[8] = true;
array[9] = "as";
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
interface IBook {
    title: string,
    pageCount: number,
    genre: string,
    authors?: IAuthors[];
}

let bookOfHarryPotter: IBook = {
    title: 'Harry Potter',
    pageCount: 450,
    genre: 'fantasy'
};
let bookOfTheLyingGame: IBook = {
    title: 'The Lying Game',
    pageCount: 320,
    genre: 'thrillers'
};
let bookOfOneByOne: IBook = {
    title: 'One by one',
    pageCount: 412,
    genre: 'thrillers'
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

interface IAuthors {
    name: string,
    age: number
}

let book1: IBook = {
    title: 'Book1',
    pageCount: 214,
    genre: 'drama',
    authors: [
        {name: 'First author', age: 54},
        {name: 'Second author', age: 47}
    ]
};
let book2: IBook = {
    title: 'Book2',
    pageCount: 141,
    genre: 'detective',
    authors: [
        {name: 'Some author', age: 31},
        {name: 'Other author', age: 38},
        {name: 'Author', age: 41}
    ]
};
let book3: IBook = {
    title: 'Book3',
    pageCount: 201,
    genre: 'fantasy',
    authors: [
        {name: 'Vasyl', age: 27},
        {name: 'Anna', age: 25}
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
interface IUser {
    name: string,
    age: number,
    password: string
}

let users: IUser[] = [
    {name: 'Vasyl', age: 45, password: 'qwe212'},
    {name: 'Anna', age: 41, password: '2846'},
    {name: 'Tanya', age: 25, password: 'hgg28'},
    {name: 'Petro', age: 17, password: 'qwhe212'},
    {name: 'Maksim', age: 16, password: 'fdjfn741'},
    {name: 'Oleksii', age: 36, password: '369852'},
    {name: 'Vlad', age: 45, password: '45jh1g5'},
    {name: 'Vadim', age: 85, password: 'ikkkk'},
    {name: 'Alina', age: 74, password: '74k5k'},
    {name: 'Yuriy', age: 36, password: 'd5d5d'}
];
console.log(users[0].password);
console.log(users[1]['password']);
console.log(users[2].password);
console.log(users[3]['password']);
console.log(users[4].password);
console.log(users[5]['password']);
console.log(users[6].password);
console.log(users[7]['password']);
console.log(users[8].password);
console.log(users[9]['password']);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x: number = 5252;
if (x !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}

let a: number = 0;
if (a !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time: number = 31;
if (time >= 0 && time <= 15) {
    console.log("Перша частина");
} else if (time >= 16 && time <= 30) {
    console.log("Друга частина");
} else if (time >= 31 && time <= 45) {
    console.log("Третя частина");
} else if (time >= 46 && time <= 59) {
    console.log("Четверта частина");
} else {
    console.log('Неправильне значення. Потрібно ввести значення від 0 до 59.')
}
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day: number = 18;
if (day >= 1 && day <= 10) {
    console.log("Перша декада");
} else if (day >= 11 && day <= 20) {
    console.log("Друга декада");
} else if (day >= 21 && day <= 31) {
    console.log("Третя декада");
} else {
    console.log("Неправильне значення. Потрібно ввести значення від 1 до 31.")
}
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekDay: number = 5;

switch (weekDay) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default :
        console.log("Wrong number. Please enter a number between 1 and 7 ")
}
//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
let firstNumber = +prompt("enter a first number");
let secondNumber = +prompt("enter a second number");

if (firstNumber > secondNumber) {
    console.log("First is higher")
} else if (secondNumber > firstNumber) {
    console.log("Second is higher")
} else if (firstNumber === secondNumber) {
    console.log("Are equal")
} else {
    console.log("wrong value. Try again.")
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x1 = prompt("enter something") || "default";
// console.log(x1)

let x2: any = "";
if (isNaN(x2) || x2 === null || x2 === "" || x2 === undefined || x2 === 0 || x2 === false) {
    console.log("default")
} else {
    console.log(x2)
}
// if (!x2){
//     console.log("default")
// }else if  (x2===NaN){
//     console.log("default")
// }else if (x2===null){
//     console.log("default")
// }else if (x2===""){
//     console.log("default")
// }else if (x2===undefined){
//     console.log("default")
// }else if (x2===0){
//     console.log("default")
// }else {
//     console.log(x2)
// }

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

interface ICourses {
    title: string,
    monthDuration: number
}

let coursesAndDurationArray: ICourses[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    if (course.monthDuration > 5) {
        console.log(`Super ${course.title}`)
    }
}