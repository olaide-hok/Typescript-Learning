
function mergeWithoutConstrain<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj3 =  mergeWithoutConstrain({name: 'Max', hobbies: ["Sports"]}, 30); 
console.log(mergedObj3); // the first object is printed in the console. 30 is not printed and an error is not thrown.


