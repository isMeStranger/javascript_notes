// ^ ============================================================ PROMISES WITH REQUESTS

//~ check async await .js

// ^ ============================================================ SIMPLE CONCEPT
// simple concept
const requestSuccess = true
const p1 = new Promise((resolve, reject) => {
    if (requestSuccess) {
        resolve({ title: 'request', message: 'success' });
    } else {
        reject({ title: 'error', message: 'failed' });
    }
});

p1.then((resolve) => {
    console.log(resolve.message)    // success
}).catch((reject) => {
    console.log(reject.message)     // failed
});
// ^ ============================================================ ARRAY OF PROMISES
// several promises
const makePromise = (promiseName) => { // promise function returns a new promise every time
    const requestSuccess = true;
    const p1 = new Promise((resolve, reject) => {
        if (requestSuccess) {
            resolve({ title: promiseName, message: 'success' });
        } else {
            reject({ title: promiseName, message: 'failed' });
        }
    });
    return p1;
}

Promise.all([ // call all promises
    makePromise('p1'),
    makePromise('p2'),
    makePromise('p3'),
]).then((resolveArr) => { // array of resolves
    resolveArr.forEach(resolve => {
        console.log(resolve.title + ': ' + resolve.message)    // success
    })
}).catch((rejectArr) => { // array of rejects
    rejectArr.forEach(reject => {
        console.log(reject.title + ': ' + reject.message)    // success
    })
})