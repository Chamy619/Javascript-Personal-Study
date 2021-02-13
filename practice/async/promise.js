'use strict'

// const promise = new Promise((resolve, reject) => {
//     // 네트워크 또는 파일을 읽어오는 부분을 주로 처리
//     console.log('doing something...');
//     setTimeout(() => {
//         resolve('chamy');
//         //reject(new Error('no network'));
//     }, 2000);
// });

// promise.then(value => {
//     console.log(value);
// }).catch(error => {
//     console.log(error);
// }).finally(() => {
//     console.log('finally');
// });

// const fetchNumber = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
// });

// fetchNumber
// .then(num => num * 2)
// .then(num => num * 3)
// .then(num => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(num -1), 1000);
//     });
// })
// .then(num => console.log(num));




const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('hen'), 1000);
    });

const getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error: ${hen} => egg`)), 1000);
    });

const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => chicken`), 1000);
    });


getHen()
    .then(getEgg)
    .catch(error => {
        return 'bread';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);