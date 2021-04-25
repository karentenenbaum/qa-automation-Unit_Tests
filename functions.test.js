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
    test('tablaMultiplicar by multiplier undefined', () => {
        expect(functions.tablaMultiplicar(5)).toEqual([0,5,10,15,20,25,30,35,40,45,50]);
    });
    test('tablaMultiplicar by multiplier defined', () => {
        expect(functions.tablaMultiplicar(6,7)).toEqual[(0,6,12,18,24,30,36,42)];
    });
});

//7
test('potencia', () => {
    expect(functions.potencia(8,2)).toBe(64);
});

//8
test('anidada', () => {
    expect(functions.anidada(4,5)).toBe(41);
});

//9
test('cerosIzq', () => {
    expect(functions.cerosIzq(3,7)).toBe('0000003');
});