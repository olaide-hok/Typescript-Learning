// Default argument(s) must not be specified first
const add = (a: number, b: number = 5) => a + b;
printOutput(add(5, 2));
printOutput(add(10));

