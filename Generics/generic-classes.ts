class DataStorage<T extends string | number | boolean > {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      // indexof returns -1 if it doesn't find anything in the array.
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.addItem("Banana");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(23);
numberStorage.addItem(56);
numberStorage.removeItem(100);
console.log(numberStorage.getItems());

//Object in Javascript are reference types as against primitive types

// Methods in classes can as well use generic types and constrains specific to them.