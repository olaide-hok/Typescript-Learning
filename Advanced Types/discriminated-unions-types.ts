// Discrimated Union is a type/pattern that can be used when working with union types that makes implementing type guard easier. It is also available when working with object types.

interface Bird {
    type: 'bird'; // a discrimated union
    flyingSpeed: number;
}

interface Horse {
    type: 'horse'; // a discrimated union
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    // if ('flyingSpeed' in animal) {
    //     console.log('Moving with speed: ' + animal.flyingSpeed);
    // }
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    
        default:
            break;
    }
    console.log('Moving at speed: ' + speed);    
}

moveAnimal({type: 'bird', flyingSpeed: 10})