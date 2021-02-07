'use strict'

class Person {
    // constructor(생성자)
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // method
    speak() {
        console.log(`Nice to meet you! My name is ${this.name}`);
    }
}

class User {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            throw Error('age can not be negative');
        }
        this._age = value;
    }
}

// const apple = new User('Steve', 'Jobs', -1);
// console.log(apple);


class Test {
    pubValue = 1;
    #priValue = 5;
}

const test = new Test;
console.log(test.pubValue)  // 1
console.log(test.priValue)  // undefined

class staticContainer {
    static sayHello() {
        console.log('Hello');
    }
}

const ting = new staticContainer();
// ting.sayHello();
staticContainer.sayHello();


class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {};
class Triangle extends Shape {
    getArea() {
        return this.width * this.height / 2;
    }
};

const rect = new Rectangle(5, 4, 'green');
const tria = new Triangle(5, 4, 'yellow');
rect.draw();
console.log(rect.getArea());
tria.draw();
console.log(tria.getArea());

console.log(rect instanceof Rectangle); // true
console.log(rect instanceof Triangle);  // false
console.log(rect instanceof Shape);     // true
console.log(rect instanceof Object);    // ture