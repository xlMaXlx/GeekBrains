const goods = [
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
const renderGoodsItem = (title = "default", price = 0) => `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;

const renderGoodsList = (list= "") => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    console.log(goodsList);
    let newGoodsList = goodsList.join('');
    console.log(newGoodsList);
    document.getElementById("goodsListId").innerHTML = newGoodsList;
    //document.querySelector('.goods-list').innerHTML = goodsList;
}
renderGoodsList(goods);