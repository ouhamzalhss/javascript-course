// VAR variable
var x = 100;
function printx(){
  var x = 200;
  return x;
}
console.log(printx())
console.log(x);


// LET variable
let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x);
  // expected output: 2
}
console.log(x);
// expected output: 2



// CONST variable

const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}

console.log(number);
// expected output: 42