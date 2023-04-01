// reference types 
// * functions

function greet(name) {
    console.log(`hello ${name}!`);
}

function square(num){
    return num*num;
}

let number = square(2);
console.log(number);
greet();


let a = 'gloabl';
function test26(){
	let b = 'local';
	function x(){
		let b2='localfunction'
		console.log(a)
		console.log(b)
	}
	console.log(a)
    console.log(b2)
	x()
}

test26()
// result:
// global
// b2 undefined reference
// global
// local

