const base = 'http://owu.linkpc.net/carsAPI/v1';
const cars = `${base}/cars`;
const urls = {
    cars: {
        base: cars,
        byId: (id) => `${cars}/${id}`
    }
};
const carService = {
    getAll: () => fetch(urls.cars.base).then(value => value.json()),
    create: (data) => fetch(urls.cars.base, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" },
    }).then(value => value.json()),
    delete: (id) => fetch(urls.cars.byId(id), { method: 'DELETE' })
};
class CarHtmlRender {
    static async showAll() {
        this.formAction();
        const cars = await carService.getAll();
        const carContainer = document.querySelector('#carContainer');
        carContainer.innerText = '';
        cars.forEach(car => {
            const carDiv = document.createElement('div');
            carDiv.innerText = `${car.id}) ${car.brand} ${car.price} ${car.year}`;
            const button = document.createElement('button');
            button.innerText = 'delete';
            button.onclick = async () => {
                await carService.delete(car.id);
                await this.showAll();
            };
            carDiv.appendChild(button);
            carContainer.appendChild(carDiv);
        });
    }
    static formAction() {
        const form = document.forms.namedItem('carForm');
        form.onsubmit = async (e) => {
            e.preventDefault();
            const { brand, price, year } = form;
            const car = { brand: brand.value, price: +price.value, year: +year.value };
            await carService.create(car);
            this.showAll();
            form.reset();
        };
    }
}
CarHtmlRender.showAll();
//# sourceMappingURL=lesson3.js.map