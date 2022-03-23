// EP - 1. Execution context
//   - variable environment
//   - thread Execution

//   - Javascript is synchonus,single-threaded language.

function a() {
  let x = 10;
  return function b() {
    console.log(x);
  };
}
const z = a();
console.log(z());
