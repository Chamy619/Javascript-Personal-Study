class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    ((id === 'chamy') && (password === 'develop')) ||
                    ((id === 'bang') && (password === 'helper'))
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'chamy') {
                    resolve({name: 'chamy', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 2000);
        });
    }
}

const blog = new UserStorage();
blog.loginUser('chamy', 'develop')
    .then(blog.getRoles)
    .then(console.log)
    .catch(console.log);

blog.loginUser('chamy', 'develop123')
    .then(blog.getRoles)
    .then(console.log)
    .catch(console.log);

blog.loginUser('bang', 'helper')
    .then(blog.getRoles)
    .then(console.log)
    .catch(console.log);

