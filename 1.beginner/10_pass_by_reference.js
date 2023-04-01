// primitives will be passed by value
// objects, funcs, arrays will be passed by value

let num = 3;
let obj = {name:'oldName'};
let obj2 = new Object({name:'oldName'});
let obj3 = new Object();
obj3.name = 'oldName';
let arr = ['red', 'green']

console.log(num);
console.log(obj);
console.log(obj2);
console.log(obj3);
console.log(arr);

function do_it(num, obj, obj2, obj3,arr){
    num = 5;
    obj.name = 'newName';
    obj2.name = 'newName';
    obj3.name = 'newName';
    arr[2] = 'yellow';
}

do_it(num, obj, obj2, obj3, arr);

console.log(num);
console.log(obj);
console.log(obj2);
console.log(obj3);
console.log(arr);

// output:
/*
3 
Object { name: "oldName" }
Object { name: "oldName" }
Object { name: "oldName" }
Array [ "red", "green" ]

3 
Object { name: "newName" }
Object { name: "newName" }
Object { name: "newName" }
Array [ "red", "green", "yellow" ]
*/