const promise = fetch('https://catfact.ninja/fact')

promise
    .then(res=>res.json()) 
    // res.json is also a promise so you map them together
    .then(jsonData=> console.log('new cat fact: \n'+jsonData.fact));

console.log('OK running.');
