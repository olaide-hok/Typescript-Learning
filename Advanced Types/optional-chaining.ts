// When getting data from a backend/API and it's not known with certainty if in an object a certain property is defined.

// The optional chaining operator i.e. '?' helps us safely access nested properties in nested objects in an object data. if what is in front of the question mark is undefined, it will not access the thing thereafter and not throw a runtime error. It is basically an if-check feature.

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company'}
};

console.log(fetchedUserData?.job?.title);
