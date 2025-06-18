//NAMED EXPORTS
console.log("exporting...");
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const mutiply = function (a, b) {
  return a * b;
};

export { add, subtract, mutiply };
