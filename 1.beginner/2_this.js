function test(){
    console.log(this); // 'this' is the global window object
}

let person = {}

// bind the function with the person object 

let personTest = test.bind(person);

// another way:

let person2 = {
    test: function (){      //^ !! WARNING !! returns the person object!
        console.log(this)
    },
    // or use an arrow function
    test2:()=>{             //^ !! WARNING !! returns the window object!  
        console.log(this)   //^ arrow functions make 'this' anonymous which is ideal for functions expr.        
    },
}
person2.test()
person2.test2()