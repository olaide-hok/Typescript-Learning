// Enum Type example 

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

/*  In the enum type ie. Role below, if the value for the key entries are not declared,
* they are referenced to their default index position ie. 0, 1, 2 etc.
*/
enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

if (person.role === Role.AUTHOR) {
  console.log('is author');
}