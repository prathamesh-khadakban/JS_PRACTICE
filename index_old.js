// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//1.Create class and its object.

class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  Greet() {
    console.log(`Car name is ${this.name} and model is ${this.model}`);
  }
}

const Merc = new Car('merc', 'sls');
Merc.Greet();

// 2. closure
function outer() {
  var a = 10;
  return function inner() {
    console.log(a);
  };
}
let result = outer()();

// iife
(function example(greet) {
  console.log(greet);
})('hello');

//null  vs undefined
console.log(null === undefined); // return false cause its type are different. null is object
console.log(null == undefined);
console.log(typeof null);
console.log(typeof undefined);
//both are falsy

// simple interest example
function simpleInterest() {
  const pa = 1000;
  const rate = 14;
  const time = null;
  const result = (pa * rate * time) / 100;
  return result;
}
const data = simpleInterest();
console.log(data);

// promise

//hoisting

console.log(x); // undefined
var x = 100;
console.log(x); // 100

var z = 1; //
//let z; // z is already declared
console.log(z);

function Example() {
  console.log('Value of a in local scope: ', a);
}
console.log('Value of a in global scope: ', a);
var a = 1;
Example();

// undefined
// 1
