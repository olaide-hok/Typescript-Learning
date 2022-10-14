// Inheritance can be used with Interfaces by using the 'extends' keyword. Multiple interfaces can be inherited from all separated by comma.
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person2 implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user4: Greetable;

user4 = new Person1("Max");
// user1.name = 'Manu'; this shows that the initial value set cannot be changed due to the readonly modifier.

user3.greet("Hi there - I am");
console.log(user1);
