/**
 * Decorators are useful for meta-programming.
 * 
 * Instrument for writing code easier to use by other developers.
 * 
 * Helps guarantee that classes, implementations etc are correctly used.
 */

/**
 * How Decorators executes
 * It is not the instantiation of the class that matters, they don't run at runtime. They allow for behind the scenes setup work when a class is defined.
 * 
 * They are not event listeners. A decorator is a function that executes when a class is defined, when a method is registered etc. to store extra metadata about the class/method/accessor(getter or setter)/parameter.
 */

/**
 * Other Decorator Return Types
 * 
 * Decorators added to Methods and Accessor can return something that can be used by Typescript e.g.Log2 and Log3
 * 
 * Log2 and Log3 can return a brand new Property Descriptor. The Property Descriptor is a JavaScript thing.
 * 
 * For Accessor Decorators, it as the configurable(bool), enumerable(bool), get(fn), and set(fn).
 * 
 * For Method Decorators, it as the configurable(bool), enumerable(bool), value (fn return value), writable(bool).
 * 
 * Configurable - if the configurration can change after creation or can be deleted.
 * Enumerable - if an operation can be performed on it such as looping.
 * Writable - if it can be changed after the object has been created.
 * 
 * Decorators added to Properties and Parameters can also return something but will be ignored by Typescript i.e. they will not be used.
 * 
 * 
 */