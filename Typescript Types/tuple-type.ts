// Tuple type example

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple type example
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// person.role.push('admin'); possible operation on the tuple not restricted by Typscript
// person.role[1] = 10; possible operation on the tuple not restricted by Typscript

// person.role = [0, 'admin', 'user']; possible operation on the tuple not restricted by Typscript

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
