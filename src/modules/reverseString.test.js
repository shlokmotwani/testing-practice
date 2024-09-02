import { reverseString } from "./reverseString";

test('Reverse string', ()=>{
    expect(reverseString('Shlok')).toBe('kolhS');
    expect(reverseString('ABCDEF')).toBe('FEDCBA');
    expect(reverseString('A')).toBe('A');
})