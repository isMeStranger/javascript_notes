// ^ ============================================================ SUMMARY + MAKE IT SWEET CODE
const fruits = ['apple', 'orange', 'peach'];

// & --- DON'T USE
// we convert them to an array of promises
const juice = fruits.map( async v => {
    // !important do not use
    // ^ will not wait for each call
    // maybe you expect the await to work.
    // but because we are using MAP
    // it won't wait for the getFruit
    const fruit = await getFruit(v);
    console.log(fruit);
    return fruit;
});

// & --- USE
// !important: for each, fire and wait
// wait for each call:
const fruitLoop = async()=>{
    for (const name of fruits){
        // ^ will wait for each call
        const fruit = await getFruit(name);
        return fruit;
    }
}

// & --- USE
// !important: fire all at once, wait all
// concurrent: fire getFruit functions together and wait for them to finish
const juice2 = fruits.map(name => getFruit(name));
const fruitLoop2 = async()=>{
    for await(const fruit of juice2){
        console.log(fruit);
    }
}

// & --- USE 
// !important: wait for a result inside an if condition
// !important: don't forget your try catch blocks
const await_in_if = async(name)=>{
    if (await getFruit(name) === '🍎'){
        console.log('we got an apple.');
    }
}

const await_in_var_and_with_if = async(name)=>{
    const fruit = await getFruit(name)
    if(fruit === '🍎'){
        console.log('we got an apple.');
    }
    if(fruit === '🍑'){
        console.log('we got a peach.');        
    }
    if(fruit === '🍊'){
        console.log('we got an orange.');    
    }
}


// ^ ============================================================ CHAIN HELL
// ^ chaining promises is HELL:
function promiseHELL() {
    let userId;
    let postId;
    let db;
    db.then(u => {
        return db.user()
            .then((v) => v.json());
    })
        .then(u => {
            userId = u.id;
            return db.post(userId)
                .then((v) => v.json());
        })
        .then(p => {
            postId = p.id;
            return db.comments(postId)
                .then((v) => v.json());
        })
} // ! don't use this method

// ^ ============================================================ ASYNC
const getFunc_1 = () => {
    // ^ returns nothing
}
const getFunc_2 = async () => {
    // ^ returns a promise of nothing
    // because we put async 
}

// ^ ============================================================ using ASYNC
const getFruit = async (name) => {
    const fruitBasket = {
        apple: '🍎',
        peach: '🍑',
        orange: '🍊'
    }
    return fruitBasket[name];
    //  * automatically becomes a Promise like below:
    //    return Promise.resolve(fruits[name]);
    //  * because we used async
};
// getFruit('apple').then(res=>console.log(res));

// ^ ============================================================ using ASYNC with AWAIT
// ! for each, fire and wait until finished
// use AWAIT to pause the execution of the async function
const makeJuice = async () => {
    // wait for orange first
    const firstFruit = await getFruit('orange');
    // then wait for peach second
    const secondFruit = await getFruit('peach');

    // then return both
    return [firstFruit, secondFruit];
}

// the code below with regular promises:
const makeJuice2 = () => {
    let firstFruit;
    return getFruit('orange')
        .then(v => {
            a = v;
            return getFruit('peach');
        })
        .then(v => [v, a])
}

// ^ whats the difference?
// the first is more readable.

// ^ ============================================================ run ASYNC concurrently
// ! fire all, wait all
const makeJuiceConcurrently = async () => {
    // won't wait for the first
    const firstFruit = getFruit('orange');
    // won't wait for the second
    const secondFruit = getFruit('peach');

    // here we wait for both, while they run concurrently
    const drink = Promise.all([firstFruit, secondFruit]);
    return drink;
}

// ^ ============================================================ error handling
// ! fire all, wait all
const juiceMightCauseErrors = async () => {
    try {
        // won't wait for the first
        const firstFruit = getFruit('orange');
        // won't wait for the second
        const secondFruit = getFruit('peach');

        // here we wait for both, while they run concurrently
        const drink = Promise.all([firstFruit, secondFruit]);
        return drink;

    } catch (err) { // any promise err
        console.log(err)
        // return OR throw another Err
    }
}

