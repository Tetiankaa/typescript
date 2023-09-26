 let x:string ;
x = '10500';

let a:number = 4;

let b: any[] = [5,'gg',55];

let c:number[] = [521,23,4712];

let d:string[] = ['ff','dd'];

// let obj:{id:number, name:string,skills:string[],status?:boolean};
//
// obj={
//     id:1,
//     name:'tanya',
//     skills:['html','javascript']
// }

 interface IUser{
     id:number;
     name:string;
     skills:string[];
     status?:boolean
 }

 let user1:IUser = {
     id:1,
     name:'tanya',
     skills:['java','html']
 }
 let user2:IUser = {
     id:1,
     name:'tanya',
     skills:['java','html'],
     status:true
 }

 function func(a:number,b:number):number{
     return a+b;
 }
 function func2(a:number,b:number):void{
     console.log(a,b)
 }

 //TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

// Data types in Typescript:
 //  - boolean - true or false values
 //  - number - whole numbers and floating point values
 //  - string - text values
 //  - array: Arrays can hold multiple values of the same or different data types. (number[]/// string[])
 //  - tuple: you can specify the types of its elements at specific positions. Tuples have a fixed length and can hold elements of different types.([string, number])
 //  - any  -  disables type checking and allows all types to be used.
 //  - void:  is used for functions that do not return any value.

 //Interfaces -  allows to specify the structure of an object, including the names and types of its properties and methods.
 // We can mark certain properties in an interface as optional by using the ?(question mark) symbol:

 //When creating a variable, there are two main ways TypeScript assigns a type:
 // Explicit -  writing out the type
 // Implicit -TypeScript will "guess" the type, based on the assigned value (infer)


 // Typescript settings:
 // 1. npm init -> click enter for all questions -> package.json: add "dependencies":"typescript": "the last version(CTRL + whitespace)"
 // -> in the terminal write "tsc -v" should display the version of ts -> tsc "--init" will create a file tsconfig.js
 // -> pass there:
 // {
 //   "compilerOptions": {
 //     "module": "commonjs",
 //     "declaration": true,
 //     "removeComments": true,
 //     "emitDecoratorMetadata": true,
 //     "experimentalDecorators": true,
 //     "allowSyntheticDefaultImports": true,
 //     "target": "es2020",
 //     "sourceMap": true,
 //     "outDir": "./dist",
 //     "baseUrl": "./",
 //     "incremental": true,
 //     "skipLibCheck": true,
 //     "strictNullChecks": false,
 //     "noImplicitAny": false,
 //     "strictBindCallApply": false,
 //     "forceConsistentCasingInFileNames": false,
 //     "noFallthroughCasesInSwitch": false
 //   },
 //   "files": [
 //     "lesson2/lesson2.ts"
 //   ]
 // }

 // -> tsc --project tsconfig.json ->open file package.json -> pass there:
 // "scripts": {
 //     "start": "tsc --project tsconfig.json --watch"
 //   },


