'use strict'

let n,
    a,
    b;

function fib(n){
    if (n==1||n==2) return 1;
    else return fib(n-2)+fib(n-1);		
    }
    let number=+prompt('Введіть порядковий номер');
console.log(fib(number));




// function fib(n){
//   a = ((1 + 5 ** 0.5) / 2)** n;
//   b = ((1 - 5 ** 0.5) / 2)** n;
//   return (a - b ) / 5 ** 0.5;
// } 

// console.log(fib(7))




