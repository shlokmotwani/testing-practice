import { calculator } from "./calculator";

test('add two numbers', ()=>{
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(100, 12)).toBe(112);
    expect(calculator.add(-15, 200)).toBe(185);
    expect(calculator.add(152, -269)).toBe(-117);
    expect(calculator.add(0, 25)).toBe(25);
    expect(calculator.add(-41, 0)).toBe(-41);
});

test('subtract two numbers', ()=>{
    expect(calculator.subtract(100, 25)).toBe(75);
    expect(calculator.subtract(-100, 12)).toBe(-112);
    expect(calculator.subtract(15, 200)).toBe(-185);
    expect(calculator.subtract(152, -269)).toBe(421);
    expect(calculator.subtract(0, 25)).toBe(-25);
    expect(calculator.subtract(-41, 0)).toBe(-41);
});

test('multiply two numbers', ()=>{
    expect(calculator.divide(100, 25)).toBe(4);
    expect(calculator.divide(-100, 12.5)).toBe(-8);
    expect(calculator.divide(15, -200)).toBe(-0.075);
    expect(calculator.divide(10, 0)).toBe(Infinity);
    expect(calculator.divide(0, 25)).toBe(0);
    expect(calculator.divide(-41, 0)).toBe(-Infinity);
});

test('multiply two numbers', ()=>{
    expect(calculator.multiply(100, 25)).toBe(2500);
    expect(calculator.multiply(-100, 12)).toBe(-1200);
    expect(calculator.multiply(15, -200)).toBe(-3000);
    expect(calculator.multiply(152, -269)).toBe(-40888);
    expect(calculator.multiply(0, 25)).toBe(0);
    expect(calculator.multiply(-41, 0)).toBe(-0);
});