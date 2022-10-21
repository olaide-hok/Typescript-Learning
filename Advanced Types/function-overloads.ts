// Function overloads is a feature that allows for multiple function signature definition for a function. This means we can have multiple ways of calling a function with different parameters types yielding different result types.
type Combinable2 = string | number;
function add4(n: number, b: number): number;
function add4(n: string, b: string): string;
function add4(n: string, b: number): string;
function add4(n: number, b: string): string;

function add4(a: Combinable2, b: Combinable2) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add4('Max', ' Schwarz');
result.split(' ')