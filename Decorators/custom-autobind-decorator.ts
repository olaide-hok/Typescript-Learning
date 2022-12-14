// Autobind decorator

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this)
            return boundFn
        },
    }
    return adjDescriptor
}

class Printer {
    message = 'This works!';

    @Autobind
    showMessage() {
        console.log(this.message);        
    }
}

const p = new Printer();
const buttonn = document.querySelector('button')!;
buttonn.addEventListener('click', p.showMessage)

// class Printer {
//     message = 'This works!';

//     showMessage() {
//         console.log(this.message);        
//     }
// }

// const p = new Printer();
// const buttonn = document.querySelector('button')!;
// buttonn.addEventListener('click', p.showMessage.bind(p))
