//

function merge(objA: object, objB: object) {
    return Object.assign(objA, objB)
}

console.log(merge({name: 'Max'}, {age: 30}));

const mergedObj = merge({name: 'Max'}, {age: 30})

mergedObj.name; // this doesn't work because the mergedObj object returned doesn't contain all the necessary information. 
mergedObj.age; //same explanation as above.