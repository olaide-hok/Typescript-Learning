//

// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB)
// }

// console.log(merge({name: 'Max'}, {age: 30}));

// const mergedObj = merge({name: 'Max'}, {age: 30})

// mergedObj.name; // this doesn't work because the mergedObj object returned doesn't contain all the necessary information. 
// mergedObj.age; //same explanation as above.

function merge<T, U>(objA: T, objB: U) { // the types set here are dynamic
    return Object.assign(objA, objB); // returns the intersection of T & U
}

const mergedObj = merge({name: 'Max'}, {age: 30})
const mergedObj1 = merge({name: 'Max', hobbies: ["Sports"]}, {age: 30})

console.log(mergedObj.age);

const mergedObj2 = merge<{name: string, hobbies: string[]}, {age: number}>({name: 'Max', hobbies: ["Sports"]}, {age: 30}) // This is a redundant way generics helps prevent i.e. the parameter type specification in the angle brackets after the function name.