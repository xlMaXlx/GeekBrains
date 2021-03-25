class Item {
  constructor(price, disc) {
    this.price = price;
    this.disc = disc;
  }

  get actualPrice() {
    return this.price - (this.price * this.disc);
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }
  
  render(selector) {
    let goodsHtml = '';
    this.goods.forEach(({ title, price }) => {
      const good = new GoodsItem(title, price);
      goodsHtml += good.render();
    });
    document.querySelector(selector).innerHTML = `<ul>${goodsHtml}</ul>`;
  }
}

class GoodsItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  render() {
    return `<li>${this.name}: $${this.price}</li>`;
  }
}

class Cart {
  constructor() {
    this.items = []; // CartItem[]
  }

  push(cartItem) {
    this.items.push(cartItem);
  }

  delete(id) {
    // this.items.filter()
    // deletes item by id
  }
  
  get totalPrice(){
    return 0; // eval total price
  }
}
class CartItem extends Item {
  constructor(good, disc = 0) {
    super(good.price, disc);
    this.good = good;
  }
}

const cart = new Cart();
const addToCard = (good) => cart.push(new CartItem(good));

window.onload = () => {
  const goodsList = new GoodsList();
  goodsList.fetchGoods();
  goodsList.render('.products-list');
}
