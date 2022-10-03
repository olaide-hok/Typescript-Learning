// Using rest parameter to pass in multiple arguments into the add function
const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
      return curResult + curValue;
    }, 0);
  };
  
  const addedNumbers = add(5, 10, 2, 3.7);
  console.log(addedNumbers);

  // Using rest parameter in conjunction with a tuple ie. an array with already know
  // number of inputs and their respective types
  const add1 = (...numbers: [number, number, number]) => {
    return numbers.reduce((curResult, curValue) => {
      return curResult + curValue;
    }, 0);
  };

  const addedNumbers1 = add1(5, 10, 2);
