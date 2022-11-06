/**
 * A decorator factory returns a decorator function which allows for configuration when assigned as a decorator to something. Allows passing of values to be passed to the decorator function.
 * @param logString a string parameter
 * @returns a decorator function
 */

function LoggerA(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@LoggerA("LOGGING - PERSON")
class PersonS {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers2 = new PersonS();

console.log(pers2);
