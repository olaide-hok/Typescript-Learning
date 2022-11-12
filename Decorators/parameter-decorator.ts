/**
 * Which argument(s) a decorator gets depends on where it is used.
 * If a decorator is added to a Method, it recieves three arguments, the first is the target property (instance=prototype of the object or static method = constructor function), the second is the name of the method, the third is the position descriptor.
 */

 function Log4 (target: any, name: string | Symbol, position: number) {
    console.log('Parameter Decorator!')
    console.log(target);
    console.log(name);
    console.log(position);    
}

class Product3 {
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

    @Log3 // Method Decorator
    getPriceWithTax(@Log4 // Parameter Decorator
         tax: number) {
        return this._price * (1 + tax);
    }
}