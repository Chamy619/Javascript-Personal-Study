'use strict'

const fruits = ['apple', 'banana'];
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.forEach((fruit) => console.log(fruit));

fruits.push('watermellon', 'strawberry');
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.unshift('kiwi');
console.log(fruits);
fruits.shift();
console.log(fruits);

fruits.splice(1, 0, 'peach');   // 1 인덱스에 peach 추가하고 기존 값들은 뒤로 밀림
console.log(fruits);

fruits.splice(1, 1);    // 1 인덱스에 있는 원소 삭제
console.log(fruits);

console.log(fruits.indexOf('apple'));   // 0
console.log(fruits.indexOf('nothing')); // -1
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('nothing')) // false