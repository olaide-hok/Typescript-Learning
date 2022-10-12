// The custom 'type' can also be used instead of an interface. But they differ.
// Interfaces can only be used to describe the structure of an object, custom type can also do that and also store other types e.g. union types etc. Custom type is more flexibe.
// Interface are much more clearer than custom types.
// Interfaces can be implemented in a class.
// Interfaces can be used to share functionality not their concrete details and or values. 

interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user2: Greetable;

user2 = new Person("Max");

user2.greet("Hi there - I am");
console.log(user1);
