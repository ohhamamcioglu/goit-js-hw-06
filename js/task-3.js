class StringBuilder {
  // Private property
  #value;

  // Başlangıç değeri ile başlat
  constructor(initialValue) {
    this.#value = initialValue;
  }

  // Geçerli değeri döndür
  getValue() {
    return this.#value;
  }

  // Değerin sonuna ekle
  padEnd(str) {
    this.#value += str;
  }

  // Değerin başına ekle
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Hem başına hem sonuna ekle
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

// --------------------------------------------------

const builder = new StringBuilder(".");
console.log(builder.getValue()); // ➤ "."
builder.padStart("^");
console.log(builder.getValue()); // ➤ "^."
builder.padEnd("^");
console.log(builder.getValue()); // ➤ "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // ➤ "=^.^="
