
class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.addItem('Banana')
textStorage.removeItem('Max');
console.log(textStorage.getItems());


const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(23);
numberStorage.addItem(56);
numberStorage.removeItem(100);
console.log(numberStorage.getItems());