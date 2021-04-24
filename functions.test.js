// const suma = require('./functions');

import * as functions from "./functions";

test('sumar 1 + 2 es igual a 3', () => {
  expect(functions.suma(1, 2)).toBe(3);
});

// test('restar 1 - 2 es igual a -1', () => {
//     expect(functions.resta(1, 2)).toBe(3);
//   });