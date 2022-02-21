'use strict'

{
    const item = 'апельсин';
    const count = 20;
    const category = 'фрукты';
    const price = 120;
    
    console.log(`общая сумма товара: ${count * price}`);
}

{
    const item = 'яблоко';
    const count = 50;
    const category = 'фрукты';
    const price = 70;

    console.log(`общая сумма товара: ${count * price}`);
}

{
    const item = 'груша';
    const count = 10;
    const category = 'фрукты';
    const price = 90;

    console.log(`общая сумма товара: ${count * price}`);
}

{
const nameItem = prompt('Наименование товара');

const countItems  = prompt('Количество товара');
const newCountItems = +countItems;
console.log(typeof newCountItems);

const categoryItems  = prompt('Категория товара');

const priceItems  = prompt('Цена товара');
const newpriceItems = +priceItems;
console.log(typeof newpriceItems);

const newCategoryItems = categoryItems.replace(('фрукты', 'фруктов'));

console.log(`На складе ${countItems} кг ${newCategoryItems}:  "${nameItem}" на сумму ${newCountItems * priceItems} деревянных`);
}

