// each object has a prototype to another object and so on until we reach the main 
// or original prototype, 
//* kinda like inheritance but different.

//^ how different?
/*
The most important difference between class- and prototype-based inheritance 
is that 

a class defines a type which can be instantiated at runtime,

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes


~ whereas a prototype is itself an object instance, already initiated


~ class is just syntaxes sugar for prototype inheritance
*/

class Human{
    constructor(name){
        this.name = name; //! will call the set method if the property name
                          //! is the same as the set method name (both called 'name')
                          //! but now set method is NAME, not name
    }
    get NAME(){
        return this.name;
    }
    set NAME(value){
        this.name = value;
    }
    static say_what_you_are(){
        console.log('I AM A PERSON!');
    }
    walk(){
        console.log(`${this.name} is walking.`);
    }
}

const person = {
    name:"Salar",
    age: 26, 
    say_hello(){
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

// getting prototypes
const proto_of_person1 = person.__proto__; //! don't use this way
const proto_of_person2 = Object.getPrototypeOf(person) //* use this way

const p3 = Object.create(person) // use person as p3.__proto__, 
                                 // this object is empty {}     
                                 // but its proto inherits all the person functions

const p4 = new Human('Salar');
console.log(person)
console.log(proto_of_person1)
console.log(proto_of_person2)
console.log(p3)
console.log(p4)


// assigning 
const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    },
  };
  
function Person(name) { // will be converted to a class, and the function will be a constructor
this.name = name;
}

// assign the functions in personProtoType to Person class
Object.assign(Person.prototype, personPrototype); // ^ we modify the prototype of Person
                                                  // ^ by adding the functions from the 
                                                  // ^ personPrototype object

console.log(new Person('Ali').greet());     // runs the greet function
console.log(new Person('Ahmed').prototype); // returns undefined
console.log(new Person('Ahmed').__proto__); // returns prototype, unrecommended
console.log(Person.prototype);              // returns prototype
console.log(Person);                        // function