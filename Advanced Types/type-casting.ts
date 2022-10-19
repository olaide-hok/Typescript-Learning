// Type Casting helps to tell Typescript some value is of a specific type where Typescript is unable to detect this on its own.

//const userInputElement = <HTMLInputElement>document.getElementById('user-input')! // syntax one

const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // syntax two

userInputElement.value = 'Hi there!'

// The '!' allows to tell Typescript that the expression will never return null
// The line of code below gives an alternative to using the exclamation mark.
if (userInputElement) {
    (userInputElement as HTMLInputElement).value = 'Hi there!'
}