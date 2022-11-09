/**
 * Which argument(s) a decorator gets depends on where it is used.
 * If a decorator is added to a property, it recieves two arguments, the first is the target property, the second is the property name.
 */

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);   
    
}

class Product {
    @Log // This executes when the class definition is registered by JavaScript
    title: string;
    private _price: number;

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