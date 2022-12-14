function Logger1(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate1(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}


/**
 * The order in which decorators functions executes is bottom-up. The creation of the decorator factories executes as specified (i.e. line by line.)
 */

@Logger1("LOGGING")
@WithTemplate1("<h1>My Person Object</h1>", "app")
class Person4 {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const per3 = new Person4();

console.log(pers3);
