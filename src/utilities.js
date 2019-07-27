// jshint esversion: 8
// Named export
const add = (a, b) => a + b;

const name = 'Adiros Gadolos';

// Deafult export
const square = x => x * x;


export { add, name, square as default };
