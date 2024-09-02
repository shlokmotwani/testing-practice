import { capitalize } from "./capitalize";

test('Capitalize string', ()=>{
    expect(capitalize('shlok')).toBe('Shlok');
    expect(capitalize('s')).toBe('S');
    expect(capitalize('shLok')).toBe('ShLok');
    expect(capitalize('SHLOK')).toBe('SHLOK');
});