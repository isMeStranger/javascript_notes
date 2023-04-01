// reference types 
// * objects

// below link good for making a course
// https://www.youtube.com/watch?v=W6NZfCO5SIk&t=932s

// Make an object
let person = {
    name:"Salar",
    age: 26, 
    say_hello(){
        console.log(`hello ${this.name}`)
    }
}

console.log(person);

// Dot Notation 
person.name = "dot";

console.log(person);


// Bracket Notation
let prop = 'name';
person[prop] = "bracket";

console.log(person);