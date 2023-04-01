// reference types 
// * arrays


let selectedColors = ['red', 'blue'];

// add an element | dynamic index/size
selectedColors[2] = 'green';

// add an element | dynamic object/item types
selectedColors[3] = 3;

// add an element | dynamic object/item types
selectedColors[5] = 3; // [4] will be empty slot, aka undefined
// Array(6) 
// [ "red", "blue", "green", 3, <1 empty slot>, 3 ]


console.log(selectedColors[4]);

console.log(selectedColors.length);


