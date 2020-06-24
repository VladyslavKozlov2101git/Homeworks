'use strict'

//TASK 1


let n;

function fib(n){
    if (n==1||n==2)
    return 1;

    else
    return fib(n-2)+fib(n-1);}

    let number=+prompt('Введіть порядковий номер');
    console.log(fib(number));





//TASK 2
let n1 = 2000,
    num = 0;

function division (n1){
    while (n1 >= 50){
        n1 /= 2;
        num++;      
        
    }
    console.log(num - 1);
}

division (n1)

//TASK 3


let cabinet = {
    name : 'Владислав',
    tel : '0994007259',
    address : 'вул. Пушкіна, буд. 2',
    totalWeight : 2700,
    totalCosts : 830,
    items:{
        item1:{
            name: 'Чашка',
            price: 100,
            weight: 200
        },
        item2:{
            name: 'ложка',
            price: 30,
            weight: 100
        },
        item3:{
            name: 'Чайник',
            price: 550,
            weight: 2000
        },
        item4:{
            name: 'Кружка',
            price: 150,
            weight: 400
        }
    }
}
console.log(cabinet.items.item2.weight)