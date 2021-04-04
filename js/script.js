class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div
class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            {
                title: 'Shirt',
                price: 150
            },
            {
                title: 'Socks',
                price: 50
            },
            {
                title: 'Jacket',
                price: 350
            },
            {
                title: 'Shoes',
                price: 250
            },
];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    totalSum() {
        let sum = 0;
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            sum += goodItem.price;
        });
        document.querySelector('.total-cost').innerHTML = sum;
    }
}

class CartItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div
class="cart-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class CartList {
    constructor() {
        this.cartItems = [];
    }
    fetchGoods() {
        this.cartItems = [
            {
                title: 'Jacket',
                price: 350
            },
            {
                title: 'Shoes',
                price: 250
            },
];
    }
    render() {
        let listHtml = '';
        this.cartItems.forEach(good => {
            const goodItem = new CartItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.cart-list').innerHTML = listHtml;
    }
    totalSum() {
        let sum = 0;
        this.cartItems.forEach(good => {
            const goodItem = new CartItem(good.title, good.price);
            sum += goodItem.price;
        });
        document.querySelector('.total-cost-cart').innerHTML = sum;
    }
    addItem() {} //Вместо fetch
    removeItem() {} //Вместо fetch
    checkout() {} //Перевести на страницу оплаты и отправить ей массив товаров в корзине
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.totalSum();
const list2 = new CartList();
list2.fetchGoods();
list2.render();
list2.totalSum();

/*3. *Некая сеть фастфуда предлагает несколько видов гамбургеров:
### Маленький (50 рублей, 20 калорий).
### Большой (100 рублей, 40 калорий). ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
### С сыром (+10 рублей, +20 калорий).
### С салатом (+20 рублей, +5 калорий).
### С картофелем (+15 рублей, +10 калорий). ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий). ### 3Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.*/


class Hamburger {
    constructor(size, filling, sauce, topping) {
        this.size = size;
        this.filling = filling;
        this.sauce = sauce;
        this.topping = topping;
    }
    render() {
        return `<div
class="hamburger-item"><h3>${this.size}</h3><p>${this.filling}</p><p>${this.sauce}</p><p>${this.topping}</p></div>`;
    }
    totalSum() {
        let sum = 0;
        let calor = 0;
        this.HamburgerOptions.forEach(hamburger => {
            const hamburgerOption = new Hamburger(hamburger.size,hamburger.filling,hamburger.sauce, hamburger.topping);
            sum += hamburgerOption.price;
            calor +=hamburgerOption.calories;
        });
        document.querySelector('.total-cost-hamburger').innerHTML = String(sum) + String(calor);
    }
}

class HamburgerList {
    constructor() {
        this.SizeOptions = [];
        this.FillingOptions = [];
        this.SauceOptions = [];
        this.ToppingOptions = [];
    }
    fetchSize() {
        this.SizeOptions = [
            {
                title: 'Small',
                price: 50,
                calories: 20
            },
            {
                title: 'Big',
                price: 100,
                calories: 40
            },
    ];
    }
    fetchFilling() {
        this.FillingOptions = [
            {
                title: 'Cheese',
                price: 10,
                calories: 20
            },
            {
                title: 'Lettuce',
                price: 20,
                calories: 5
            },
            {
                title: 'Potato',
                price: 15,
                calories: 10
            }
    ];
    }
    fetchSauce() {
        this.SauceOptions = [
            {
                title: 'Mayo',
                price: 20,
                calories: 5
                }

    ];
    }
    fetchTopping() {
        this.ToppingOptions = [
            {
                title: 'Spice',
                price: 15,
                calories: 0
                }

    ];
    }
}
