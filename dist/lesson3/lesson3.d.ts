declare const base = "http://owu.linkpc.net/carsAPI/v1";
declare const cars = "http://owu.linkpc.net/carsAPI/v1/cars";
declare const urls: {
    cars: {
        base: string;
        byId: (id: number) => string;
    };
};
interface ICar {
    id?: number;
    brand: string;
    price: number;
    year: number;
}
declare const carService: {
    getAll: () => Promise<ICar[]>;
    create: (data: ICar) => Promise<ICar>;
    delete: (id: number) => Promise<Response>;
};
declare class CarHtmlRender {
    static showAll(): Promise<void>;
    private static formAction;
}
