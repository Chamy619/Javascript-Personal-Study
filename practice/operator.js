'use strict'

console.log(10 < 6);

const obj1 = {name: 'chamy', age: 27};
const obj2 = {name: 'chamy', age: 27};
const obj3 = obj1;

console.log('obj1 == obj2 : ', obj1 == obj2);
console.log('obj1 === obj2 : ', obj1 === obj2);
console.log('obj1 === obj3 : ', obj1 === obj3);

obj3.name = 'ting';
console.log(obj1);

let i = 0;
do {
    console.log('i = ', i);
} while (i > 0);