// ^ 1. event loop
/* https://www.youtube.com/watch?v=vn3tm0quoqE

a single threaded event loop

both    the browser 
and     node.js
are running a single threaded event loop
            * | *             
         *         *        
        *           %      
        *           *     
         *         *       
            *   *    
*/

// ^ 2. callbacks:
/*      - you say heres a function that i need to 
        run but first i need to get some data from 
        the network.
        - event loop says OK ill keep doing my thing
        while you're doing your thing in a separate 
        thread pull.

        at some point the function that requests the 
        data will be ready from the network 
        and lets the event know that its ready 
        to run the call back.

        if its a macro-task (like setTimeout | setInterval)
            it will be executed on the next event loop
        if its a micro-task (like a fulfilled promise)
            it will be executed before the start of the next
            event loop.
*/

// log 1
console.log('Sync 1');

// log 2 
setTimeout(_ => console.log('Timeout 2'), 0);

// log 3
Promise.resolve().then(_ => console.log('Promise 3'))

// log 4
console.log('Sync 4');

// output:
/*
    Sync 1
    Sync 4
    Promise 3
    Timeout 4
*/ //* very interesting!

