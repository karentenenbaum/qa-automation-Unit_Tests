import * as functions from "./functions";

//1
test('text', () => {
    expect(functions.texto("text")).toBe("text");
});

//2
test('sum', () => {
    expect(functions.suma(4, 7)).toBe(11);
});

//3
test('substraction', () => {
    expect(functions.resta(88, 66)).toBe(22);
});

//4
test('multiplication', () => {
    expect(functions.multiplicacion(7, 4)).toBe(28);
});

//5
describe('divisions', () => {
    test('division by zero', () => {
        expect(functions.division(4, 0)).toBe("No se puede dividir por 0");
    });

    test('division by a number other than zero', () => {
        expect(functions.division(4, 2)).toBe(2);
    });
});

//6
describe('multiplication table', () => {

    test('multiplication by undefined', () => {
        expect(functions.tablaMultiplicar(5)).toBe(5,10,15,20,25,30,35,40,45,50)
    });
    
    test('multiplier defined', () => {
        expect(functions.tablaMultiplicar(6,7)).toBe(6,12,18,24,30,36,42)
    });
});
