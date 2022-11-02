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
