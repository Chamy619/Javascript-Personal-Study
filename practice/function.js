'use strict'

function showMessage(message, from = 'Unknwon') {
    console.log(`${message} : ${from}`);
}

showMessage('hello');

function rest(...param) {
    for (let i = 0; i < param.length; i++) {
        console.log(param[i]);
    }
}
rest('a', 'b', 'c');

function quiz(answer, printYes, printNo) {
    if (answer === 'hello') {
        printYes();
    }
    else {
        printNo();
    }
}

const printYes = function() {
    console.log('Yes!!');
}

const printNo = function() {
    console.log('No...');
}

quiz('hello', printYes, printNo);   // Yes!!
quiz('hi', printYes, printNo);      // No...

const add = (a, b) => a + b;
console.log(add(1, 3));


(function printHi() {
    console.log('hi');
})();