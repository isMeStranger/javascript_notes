// ^ Timeouts 
setTimeout(() => {
    console.log('5s has passed.')
}, 5000) // executes after 5 seconds

function exec_after_5s() {
    setTimeout(() => {
        console.log('5s has passed.')
    }, 5000) // executes after 5 seconds        
}

// ^ promises
function wait_for_this_request(){ //! this wont work, you cannot wait for setTimeout
    setTimeout(() => {
        console.log('request finished.')
    }, 5000) // executes after 5 seconds   
}


const delay = ms => new Promise(res => setTimeout(res, ms));
function wait_for_this_request_using_delay(secs){ //! won't work, because we have to use async wait
    delay(secs);
    return 'request done';
}

async function async_wait(secs){ //! won't work, because we have to use async await
    await delay(secs);
    return 'request done';
}

const p = new Promise(
    (resolve, reject) => {        
        if (async_wait(5000)) { // ! won't work, we are not using async await
            resolve('success');
        } else {
            reject('failed');
        }
    }
)
.then(success_result => {
    console.log(success_result + ' :)');
})
.catch(not_success_result => {
    console.log(not_success_result + ' :(')
})


const p2 = new Promise(
    async (resolve, reject) => { // * async func  
        if (await async_wait(5000)) { //* await keyword, this will work
            resolve('success');
        } else {
            reject('failed');
        }
    }
)
.then(success_result => {
    console.log(success_result + ' :)');
})
.catch(not_success_result => {
    console.log(not_success_result + ' :(')
})

const p3 = new Promise(
    async (resolve, reject) => { // * async func  
        if (await delay(5000)) { //* await keyword, this will work
            resolve('success');
        } else {
            reject('failed');
        }
    }
)
.then(success_result => {
    console.log(success_result + ' :)');
})
.catch(not_success_result => {
    console.log(not_success_result + ' :(')
})

const p4 = new Promise(
    async (resolve, reject) => { 
        if (await setTimeout(5000)) { //! this won't work because we need to wrap it up in a promise
            resolve('success');
        } else {
            reject('failed');
        }
    }
)
.then(success_result => {
    console.log(success_result + ' :)');
})
.catch(not_success_result => {
    console.log(not_success_result + ' :(')
})

