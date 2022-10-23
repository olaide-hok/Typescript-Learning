// A Generic type is a type which is connected with some other type(s) and is really flexible regarding the exact type that the other type is.

const names: Array<string> = []; // a names array with entry type of string.
const alphanumeric: Array<string | number> = []; // an alphanumeric array with entry of union types i.e. either string or number.

// 'Array<string>' is an example of a generic type

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!')
    }, 2000);
})

// The main type is Promise the other type is the type of date returned.

promise.then(data => {
    data.split(' ') // Typescripts knows the promise is a generic type and the returned type is a string, hence a string method can be used on the returned data. If any other method is used other than that of strings, Typescript flags it. If the returned data is not a string, Typescript also flags it.
})