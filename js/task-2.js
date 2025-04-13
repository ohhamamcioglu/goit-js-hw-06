class Storage {
  // Private property
  #items;

  // Constructor: ilk mal listesini alır
  constructor(initialItems) {
    this.#items = initialItems;
  }

  // Mevcut öğeleri döndürür
  getItems() {
    return this.#items;
  }

  // Yeni bir öğe ekler
  addItem(newItem) {
    this.#items.push(newItem);
  }

  // Belirli bir öğeyi kaldırır
  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// ----------------------------

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); 
// ➤ ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); 
// ➤ ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); 
// ➤ ["Nanitoids", "Antigravitator", "Droid"]
