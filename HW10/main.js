'use strict'


//  TASK1

let hours =3,
    minutes =60,
    seconds =60,
    time = hours * minutes * seconds;
console.log(time + ' seconds in ' + hours + ' hours');


//  TASK2                                     

let num = 1;    
    num +=12;
    num -=14;
    num *=5;
    num /=7;
    num ++;
    num --;


//  TASK 3

let z=10,
    x=2,
    r=5,
    sum = z + x + r;
console.log (sum);


//  TASK 4

let a = 17,
    b = 10,    
    c = a - b,
    d = 7,
    result = c + d;
console.log (result);



//  TASK 5


let name = 'Владислав';

console.log (`Привет, ${name}!`)


//  TASK 6

let s = '1';
if (s==='1'){
    console.log ('Верно');
}else{
    console.log ('Неверно');
}




//  TASK 7
console.log ('TASK 7');



let item; //   undefined    undefined  дорівнює тільки null
if (item != true){
    console.log ('Верно');
}else{
    console.log ('Неверно');
}


item != true ? console.log ('Верно') : console.log ('Неверно'); 





//  TASK 8
console.log ('TASK 8');


let k = 4;
if (0< k <4){                                          
    console.log ('Верно');
}else{
    console.log ('Неверно');
}





//  TASK 9
console.log ('TASK 9');


let j=1,
    n=16;
if ( 3 < j < 12 || 7 <= n < 15){ 
    console.log ('Верно');
}else{
    console.log ('Неверно');
}





//TASK 10 v.1

let month = prompt('Enter number from 1 to 12, please!', '');

if (month <= 12 && month >= 1 ){
    switch ( month){
        case 1:
        case 2:
        case 12:
            alert ('It is a winter!');
            break;
        case 3:
        case 4:
        case 5:
            alert ('It is a spring');
            break;
        case 6:
        case 7:
        case 8: 
            alert ('Is is a summer');
            break;
        case 9:
        case 10:
        case 11: 
            alert ('Is is a fall');
            break;
    
    }
} else{
    alert ('Please enter the number! Try again!')
}



//TASK 10 v.2


if (month == 1 || month == 2 || month == 12 ){
    console.log ('It is a winter!');
} else if (month == 3 || month == 4 || month == 5 ){
    console.log ('It is a spring');
} else if (month == 6 || month == 7 || month == 8 ){
    console.log ('Is is a summer');
} else if (month == 9 || month == 10 || month == 11 ){
    console.log ('Is is a fall');}



    
//TASK 10 v.3

if (month==12 || month <3 && month >0 ){
    console.log ('It is a winter!');
} else if ( month >= 3 && month <=5){
    console.log ('It is a spring');
} else if (month >= 6 && month <=8 ){
    console.log ('Is is a summer');
} else if (month >= 9 && month <=11){
    console.log ('Is is a fall');
}








// TASK 11 v.1
console.log ('TASK 11');

for (let i=0; i <= 100 && i >= 0; i++){
    if (i%2==0){
        console.log (i)
    }

}


//TASK 11 v.2

let i=0;
while (i<=100){
    
    if (i%2==0){
        console.log (i)
    }
    i++
}
