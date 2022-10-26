interface Lengthy {
    length: number
}

// The type of data returned is of little interest here. The important thing is that the type has a length property.
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.'
    } else if (element.length > 1) {
        descriptionText = 'Got' + element.length + ' elements.'
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe([]));
console.log(countAndDescribe(['sports', 'cooking']));


