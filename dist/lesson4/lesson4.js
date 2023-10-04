const random = (min = 500, max = 2000) => {
    return Math.round(Math.random() * (max - min) + min);
};
const energy = 3000;
const printMessage = (msg, energy) => {
    console.log(msg);
    console.log(`I have ${energy} left`);
    console.log('-------------------------------');
};
const wakeUp = (energy) => new Promise((resolve, reject) => {
    setTimeout(() => {
        energy -= random();
        if (energy <= 0) {
            reject("Died before wake up");
            return;
        }
        printMessage("Wake up", energy);
        resolve(energy);
    }, random());
});
const haveBreakfast = (energy) => new Promise(resolve => {
    setTimeout(() => {
        energy += random();
        printMessage("have eaten", energy);
        resolve(energy);
    }, random());
});
const goToWork = (energy) => new Promise((resolve, reject) => {
    setTimeout(() => {
        energy -= random();
        if (energy <= 0) {
            reject("Died before arrive to the workplace");
            return;
        }
        printMessage("Arrive to work", energy);
        resolve(energy);
    }, random());
});
const working = (energy) => new Promise((resolve, reject) => {
    setTimeout(() => {
        energy -= random();
        if (energy <= 0) {
            reject("Died while working");
            return;
        }
        printMessage("Has worked", energy);
        resolve(energy);
    }, random());
});
const haveLunch = (energy) => new Promise((resolve) => {
    setTimeout(() => {
        energy += random();
        printMessage("Has lunch", energy);
        resolve(energy);
    }, random());
});
const toGoHome = (energy) => new Promise((resolve, reject) => {
    setTimeout(() => {
        energy -= random();
        if (energy <= 0) {
            reject("Died on the way to the home");
            return;
        }
        printMessage('arrived to home', energy);
    }, random());
});
const startGame = async () => {
    try {
        let en = await wakeUp(energy);
        en = await haveBreakfast(en);
        en = await goToWork(en);
        en = await working(en);
        en = await haveBreakfast(en);
        en = await working(en);
        await toGoHome(en);
    }
    catch (e) {
        console.log(e);
    }
};
startGame();
//# sourceMappingURL=lesson4.js.map