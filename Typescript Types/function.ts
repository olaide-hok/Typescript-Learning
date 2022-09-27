// Function output type decalaration and callback function output type decalaration. 

/**
 * 
 * @param n1 type decalaration of number
 * @param n2 type decalaration of number
 * @returns 
 */

function add(n1: number, n2: number) {
  return n1 + n2;
}

/**
 * @param num type decalaration of number
 * The printResult function has no return statement with type of "void"
 */

function printResult(num: number): void {
  console.log("Result: " + num);
}
printResult(add(5, 12));

/**
 * 
 * @param n1 type decalaration of number
 * @param n2 type decalaration of number
 * @param cb is a callback function with no return statement thus the
 * function return decalaration type is "void".
 */

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

/**
 * combineValues is a function that takes in two number
 * type parameters and returns a number type output.
 */
let combineValues: (a: number, b: number) => number;

//The combineValues use the add function
combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
