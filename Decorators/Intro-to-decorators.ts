/**
 * Decorators are useful for meta-programming.
 * 
 * Instrument for writing code easier to use by other developers.
 * 
 * Helps guarantee that classes, implementations etc are correctly used.
 */

/**
 * How Decorators works
 * It is not the instantiation of the class that matters, they don't run at runtime. They allow for behind the scenes setup work when a class is defined.
 * 
 * They are not event listeners. A decorator is a function that executes when a class is defined, when a method is registered etc. to store extra metadata about the class/method/accessor(getter or setter)/parameter.
 */