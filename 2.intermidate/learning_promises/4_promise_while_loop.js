// ^ handling a while loop in a micro task
const startTime = new Date();
const timeDiff = (note)=>{
    const timeDiff = (new Date() - startTime);
    console.log(note+": "+timeDiff+'ms');
    return timeDiff;
};

const whileCode = () => {
    return new Promise((res, rej) => {
        const one_billon_iter = 1000000000;
        let i = 0;
        while (i < one_billon_iter) { i++; }
        res('billion loops done.');
    });
};


timeDiff('started');
// the while loop will stop the execution until its done!
// we don't want this, look below for the solution:
whileCode().then(res=>console.log(res));
timeDiff('passed while code');

console.log('ok!');
timeDiff('logged ok');


// ^ to solve this, we can do the following:
console.log("===============");
timeDiff('started');

Promise.resolve()
    .then(res=>whileCode()) 
    .then(resWhile=>console.log(resWhile))
timeDiff('passed while code');

console.log('ok!')
timeDiff('logged ok');