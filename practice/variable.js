'use strict'

const s1 = Symbol.for('id');
const s2 = Symbol.for('id');

console.log(s1 === s2);
console.log(s1);
console.log(s1.description);
