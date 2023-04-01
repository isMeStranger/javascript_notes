// default value of variables is
// undefined

// types & declarations
let name = 'SALAR';
let age = 26;
let isOnline = true;
let location = undefined;
let location2; // also undefined by default
let favColor = null;

const pi = 3.14;

// check types of variables
let print_variable_info = (obj) => {
    // no way, other than passing the var as an obj
    let name =  Object.keys(obj)[0];
    let value =  Object.values(obj)[0];

    let msg = `${name}: ${value}`;
    console.log(msg);
}

print_variable_info({name})
print_variable_info({age})
print_variable_info({isOnline})
print_variable_info({location})
print_variable_info({location2})
print_variable_info({favColor})
print_variable_info({pi})