
function mergeWithoutConstrain<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj3 =  mergeWithoutConstrain({name: 'Max', hobbies: ["Sports"]}, 30); 
console.log(mergedObj3); // the first object is printed in the console. 30 is not flagged by Typescript, not printed and an error is not thrown.


// Setting type constrain on the generic types by using the 'extends' keyword

function mergeWithConstrain<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// constrain can be set to any type i.e string, number, object etc.

const mergedObj4 =  mergeWithConstrain({name: 'Max', hobbies: ["Sports"]}, 30) // 30 is flagged here by Typescript that it is not an object