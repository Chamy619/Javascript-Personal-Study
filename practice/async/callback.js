'use strict';

console.log('1');
setTimeout(() => console.log(2), 1000);
console.log('3');

function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));


function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);


class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'chamy') && (password === 'develop') ||
                (id === 'bang') && (password === 'helper')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'chamy') {
                onSuccess({name: 'chamy', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const blog = new UserStorage();
blog.loginUser('chamy', 'develop', (id) => {
    blog.getRoles(id, (role) => {
        console.log(role);
    }, (e) => console.log(e));
}, (e) => console.log(e));