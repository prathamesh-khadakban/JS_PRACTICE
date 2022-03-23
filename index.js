// EP - 1. Execution context
//   - variable environment
//   - thread Execution

//   - Javascript is synchonus,single-threaded language.

// closures
function a() {
  let x = 10;
  return function b() {
    console.log(x);
  };
}
const z = a();
console.log(z());

//call - example
// function borrowing
// access the function adn properties of another object

let data = {
  name: 'abc',
  age: 21,
};

let greet = function (place) {
  console.log(`this is ${this.name} and he live in ${place}`);
};

greet.call(data, 'badlapur');
//data.call(greet);


