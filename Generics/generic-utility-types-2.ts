// Generic Utility type Readonly - does not allow for mutation when used

const namess: Readonly<string[]> = ['Max', 'Anna'];
namess.push('Manu') //this operation is not possible due to the Readonly generic type utility
namess.pop(); //this operation is not possible due to the Readonly  generic type utility