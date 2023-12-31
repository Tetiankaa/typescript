declare const random: (min?: number, max?: number) => number;
declare const energy: number;
type callBack = (error: string, data?: number) => void;
declare const printMessage: (msg: string, energy: number) => void;
declare const wakeUp: (energy: number) => Promise<number>;
declare const haveBreakfast: (energy: number) => Promise<number>;
declare const goToWork: (energy: number) => Promise<number>;
declare const working: (energy: number) => Promise<number>;
declare const haveLunch: (energy: number) => Promise<number>;
declare const toGoHome: (energy: number) => Promise<number>;
declare const startGame: () => Promise<void>;
