// // EP - 1. Execution context
// //   - variable environment
// //   - thread Execution

// //   - Javascript is synchonus,single-threaded language.

// // closures
// function a() {
//   let x = 10;
//   return function b() {
//     console.log(x);
//   };
// }
// const z = a();
// console.log(z());

// //call - example
// // function borrowing
// // access the function adn properties of another object

// let data = {
//   name: 'abc',
//   age: 21,
// };

// let greet = function (place) {
//   console.log(`this is ${this.name} and he live in ${place}`);
// };

// greet.call(data, 'badlapur');
// greet.apply(data, ['badlapur']);
// const kbind = greet.bind(data, 'pune');
// kbind();
// //data.call(greet);
// var y = 1;
// if (function f() {}) {
// y += typeof f;
// }
// console.log(y);

// const {a, b,...c} = {c:1,d:2,b:1};
// console.log(a,b,c);

// function multiply(first) {
//   return function (second) {
//     first * second;
//   };
// }

// console.log(multiply(5)(6));


const arr = [1, 5, 3, -1, 10];

//arr.reduce(agg.cur,i,arr) => (arr+cur);

//console.log(arr.splice(0,0));
// pop


////const str = 'i love coding';
//expected output = 'i evol gnidoc';


// react
//redux

// useState
// useEffect
//