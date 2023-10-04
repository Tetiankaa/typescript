// function calc(a, b, callbackFunc) {
//     callbackFunc(a,b);
// }
//
// function add(x, y) {
//     return x + y;
// }
//
// calc(10,20,add);

// // callbacks
// type CallBack = (x: number, y: number) => number; // specifies the shape of a callback function
//
// const plus = (x: number, y: number): number => x + y;
// const minus = (x: number, y: number): number => x - y;
// const calc = (a: number, b: number, cb: CallBack): number => cb(a, b);
//
// console.log(calc(3, 5, minus));
// console.log(calc(10, 2, plus));
// console.log(calc(20, 2, (a, b) => a / b));
// // *** \\
//
// type CallBack2 = (min: number, max: number) => any;
//
// const minMax = (arr: number[], cb: CallBack2): any => cb(Math.min(...arr), Math.max(...arr));
// const numbers = [9, 22, -30, 444, 85, 99, 1258];
//
// console.log(minMax(numbers, (min, max) => ({min, max})));

// async

// const random = (min = 500, max = 2000):number =>{
//     return Math.round(Math.random() * (max-min)+min)
// }

// const worker = (msg:string,cb:(message:string) => void): void =>{
//     setTimeout(()=>{
//         cb(msg)
//         },random()
//     )
// }
//
// worker("hello1",msg=>console.log(msg));
// worker("hello2",msg=>console.log(msg));
// worker("hello3",msg=>console.log(msg));
// worker("hello4",msg=>console.log(msg));
// worker("hello5",msg=>console.log(msg));

// callback hell - was used many years ago :))
// worker('hello1',msg=>{
//     console.log(msg);
//     worker("hello2",msg=>{
//         console.log(msg);
//         worker("hello3",msg=>{
//             console.log(msg);
//             worker('hello4',msg=>{
//                 console.log(msg);
//             })
//         })
//     })
// })


// const promiseWorker = (msg:string):Promise<string> => new Promise<string>(resolve => {
//     setTimeout(()=>{
//         resolve(msg)
//     },random())
// })

// promiseWorker("Hello1").then(value => console.log(value));
// promiseWorker("Hello2").then(value => console.log(value));
// promiseWorker("Hello3").then(value => console.log(value));
// promiseWorker("Hello4").then(value => console.log(value));

// promiseWorker("hello1")
//     .then(value => {
//         console.log(value);
//         return promiseWorker("hello2")
//     })
//     .then(value => {
//         console.log(value);
//         return promiseWorker('hello3')
//     })
//     .then(value => {
//         console.log(value);
//         return promiseWorker('hello4')
//     })
//     .then(value => {
//         console.log(value);
//     })


// stay alive

const random = (min = 500, max = 2000): number => {
    return Math.round(Math.random() * (max - min) + min);
}

const energy: number = 3000;

type callBack = (error: string, data?: number) => void;

const printMessage = (msg: string, energy: number): void => {
    console.log(msg);
    console.log(`I have ${energy} left`);
    console.log('-------------------------------');
};

// const wakeUp = (energy: number, cb: callBack): void => {
//     setTimeout(() => {
//         energy -= random();
//         if (energy <= 0) {
//             cb("Died before wake up")
//         } else {
//             printMessage("Wake up", energy);
//             cb(null,energy);
//         }
//     }, random())
// }
//
// const eat = (energy:number,cb:callBack):void =>{
//     setTimeout(()=>{
//         energy += random();
//         printMessage("have eaten",energy);
//         cb(null,energy);
//     },random())
// }
//
// const goToWork = (energy:number,cb:callBack): void =>{
//     setTimeout(()=>{
//         energy -= random();
//
//         if (energy <=0){
//             cb("Died before arrive to the workplace");
//         }else {
//             printMessage("Arrive to work",energy);
//             cb(null,energy);
//         }
//     },random())
// }
//
// const working = (energy:number,cb:callBack): void =>{
//     setTimeout(()=>{
//         energy -= random();
//         if (energy <=0){
//             cb("Died while working")
//         }else {
//             printMessage('has worked',energy);
//             cb(null,energy);
//         }
//     },random())
// }
//
// const haveLunch = (energy:number,cb:callBack): void =>{
//     setTimeout(()=>{
//         energy += random();
//         printMessage("have lunch",energy);
//         cb(null,energy);
//     },random())
// }
//
// const goToHome = (energy:number,cb:callBack):void =>{
//     setTimeout(()=>{
//         energy -=random();
//         if (energy <= 0){
//             cb("Died on the way to the home")
//         }else {
//             printMessage('arrived to home',energy);
//             cb(null,energy);
//         }
//     },random())
// }

// wakeUp(energy,(error1,data1)=>{
//     if (error1){
//         console.log(error1);
//         return
//     }
//     eat(data1,(error2, data2)=>{
//         goToWork(data2,(error3, data3)=>{
//             if (error3){
//                 console.log(error3);
//                 return;
//             }
//             working(data3,(error4,data4)=>{
//                 if (error4){
//                     console.log(error4);
//                     return;
//                 }
//                 haveLunch(data4,(error5,data5)=>{
//                     working(data5,(error6,data6)=>{
//                         if (error6){
//                             console.log(error6);
//                             return;
//                         }
//                         goToHome(data6,(error7)=>{
//                             if (error7){
//                                 console.log(error7);
//                                 return;
//                             }
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

const wakeUp = (energy: number): Promise<number> => new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        energy -= random();
        if (energy <= 0) {
            reject("Died before wake up");
            return;
        }
        printMessage("Wake up", energy);
        resolve(energy)
    }, random())
});

const haveBreakfast = (energy: number): Promise<number> => new Promise<number>(resolve => {
    setTimeout(() => {
        energy += random();
        printMessage("have eaten", energy);
        resolve(energy);
    }, random())
});

const goToWork = (energy: number): Promise<number> => new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        energy -= random();
        if (energy <= 0) {
            reject("Died before arrive to the workplace");
            return;
        }
        printMessage("Arrive to work", energy);
        resolve(energy);
    }, random())
})

const working = (energy: number): Promise<number> => new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        energy -= random();
        if (energy <= 0) {
            reject("Died while working");
            return;
        }

        printMessage("Has worked", energy);
        resolve(energy);
    }, random())
})

const haveLunch = (energy: number): Promise<number> => new Promise<number>((resolve) => {
    setTimeout(() => {
        energy += random();
        printMessage("Has lunch", energy);
        resolve(energy);
    }, random())
})

const toGoHome = (energy: number): Promise<number> => new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        energy -= random();
        if (energy <= 0) {
            reject("Died on the way to the home");
            return;
        }
        printMessage('arrived to home', energy);
    }, random())
})

// wakeUp(energy)
//     .then(value => haveBreakfast(value))
//     .then(value => goToWork(value))
//     .then(value => working(value))
//     .then(value => haveLunch(value))
//     .then(value => working(value))
//     .then(value => toGoHome(value))
//     .catch(error => console.log(error))

const startGame = async ():Promise<void> =>{
   try{
       let en = await wakeUp(energy);
       en = await haveBreakfast(en);
       en = await goToWork(en);
       en = await working(en);
       en = await haveBreakfast(en);
       en = await working(en);
       await toGoHome(en);
   }catch (e){
       console.log(e);
   }

}
startGame();