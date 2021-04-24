import * as functions from "./functions";

//1
test('texto', () => {
    expect(functions.texto("text")).toBe("text");
});

//2
test('suma', () => {
    expect(functions.suma(4, 7)).toBe(11);
});

//3
test('resta', () => {
    expect(functions.suma(4, 7)).toBe(11);
});


