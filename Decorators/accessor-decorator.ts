/**
 * Which argument(s) a decorator gets depends on where it is used.
 * If a decorator is added to an Accessor, it recieves three arguments, the first is the target property, the second is the name of the member i.e.accessor, the third is the property descriptor.
 */

const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor); 
}

class Product1 {
    @Log // Property Decorator. This executes when the class definition is registered by JavaScript
    title: string;
    private _price: number;

    @Log2 // Accessor decorator
    set price(val: number) {
        if (val > 0) {
            this._price = val
        } else {
            throw new Error('Invalid price - should be positive!')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p
    }

    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
}