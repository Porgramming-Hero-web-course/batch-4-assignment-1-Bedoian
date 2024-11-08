{
    // ---------------problem-07---------------

    class Car {
        make: string
        model: string
        year: number

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        getCarAge() {
            const carage = new Date().getFullYear() - this.year
            // console.log(carage);
            return carage
        }
    }

    const age = new Car('bajaj', 'discover', 2002)
    // age.getCarAge()

    // end
}