// A Generic type is a type which is connected with some other type(s) and is really flexible regarding the exact type that the other type is.

const names: Array<string> = []; // a names array with entry type of string.
const alphanumeric: Array<string | number> = []; // an alphanumeric array with entry of union types i.e. either string or number.

// 'Array<string>' is an example of a generic type