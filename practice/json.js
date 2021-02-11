'use strict'

let json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => console.log(`this.${name} can jump!`)
}

json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json);
console.log(obj);