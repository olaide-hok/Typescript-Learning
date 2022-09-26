// An hobbies array in person object with string type specification for all of its content.
const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
