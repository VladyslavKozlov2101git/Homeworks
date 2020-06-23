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
    i = 0;

function division (n1){
    while (n1 >= 50){
        n1 /= 2;
        i++;      
        
    }
    console.log(i - 1);
}

division (n1)

