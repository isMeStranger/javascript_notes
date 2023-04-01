let person = {
    name:"Salar",
    age: 26, 
    say_hello(){                        // ^ the key will be the functions name
        console.log(`Hello, I am ${this.name}`)
    },
    say_age:()=>{
        console.log(`I am ${this.age}`) // ^ won't work because arrow functions are anonymous
                                        // ^ 'this' keyword here does not point to person obj, 
                                        // ^ but to the window object
    },
    try_age_again:function(){
        console.log(`I am ${this.age}`) // ^ works fine                    
    },
};


person.say_hello();
person.say_age();
person.try_age_again();

// output:
/*
Hello, I am Salar debugger
I am undefined 
I am 26

*/