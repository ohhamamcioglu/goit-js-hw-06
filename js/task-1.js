const customer = {
  username: "Mango",
  balance: 24000, // başlangıç bakiyesi
  discount: 0.1,  // %10 indirim
  orders: ["Burger", "Pizza", "Salad"],

  // Bakiye bilgisini döndürür
  getBalance() {
    return this.balance; // this = customer
  },

  // İndirim oranını döndürür
  getDiscount() {
    return this.discount;
  },

  // İndirim oranını günceller
  setDiscount(value) {
    this.discount = value;
  },

  // Sipariş listesini döndürür
  getOrders() {
    return this.orders;
  },

  // Yeni siparişi ekler, bakiyeden düşer (indirimli fiyatla)
  addOrder(cost, order) {
    const discountedCost = cost - cost * this.discount;
    this.balance -= discountedCost;
    this.orders.push(order);
  }
};

// Metotları kullanıyoruz:
customer.setDiscount(0.15); // indirim oranını %15 yap
console.log(customer.getDiscount()); // ➤ 0.15

customer.addOrder(5000, "Steak"); // 5000 TL'lik ürün sipariş edildi
console.log(customer.getBalance()); // ➤ 19750 (24000 - 5000 + 750 indirim)
console.log(customer.getOrders()); // ➤ ["Burger", "Pizza", "Salad", "Steak"]
