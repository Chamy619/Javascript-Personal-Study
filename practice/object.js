'use strict'

const chamy = {
    name: 'Chamy',  // key: name, value: Chamy
    age: 27         // key: age, value: 27
}

console.log(chamy.name);
console.log(chamy.age);

console.log(chamy.name);        // Chamy
console.log(chamy['name']);     // Chamy

const person1 = {name: 'bob', age: 20};
const person2 = {name: 'amy', age: 19};
const person3 = {name: 'tedy', age: 21};
const person4 = makePerson('marco', 23);

console.log(person4);

function makePerson(name, age) {
    return {
        name,
        age
    };
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const polo = new Person('polo', 27);
console.log(polo.name);     // polo

console.log('name' in polo);      // true
console.log('address' in Person);   // false

for (let key in person1) {
    console.log(key);
}



const array = [1, 2, 3, 4, 5];
for (let val of array) {
    console.log(val);
}


const user1 = new Person('john', 31);
const user2 = user1;

user1.age = 32;
console.log(user2.age); // 32

// const copy = {};
// for (key in user1) {
//     copy[key] = user1[key];
// }

// console.log(copy);

const copy2 = {};
Object.assign(copy2, user1);
console.log(copy2)  // user1의 값이 copy2에 복사됨