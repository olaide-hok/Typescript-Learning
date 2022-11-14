

class Printer {
    message = 'This works!';

    showMessage() {
        console.log(this.message);        
    }
}

const p = new Printer();
const buttonn = document.querySelector('button')!;
buttonn.addEventListener('click', p.showMessage.bind(p))
