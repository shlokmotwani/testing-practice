import { caesarCipher } from "./caesarCipher";

test('Caeser Cipher Test', ()=>{
    expect(caesarCipher("abcd", 3)).toBe("DEFG");
    expect(caesarCipher("Shlok", 2)).toBe("UJNQM");
    expect(caesarCipher("HiroSHima", 6)).toBe("NOXUYNOSG");
    expect(caesarCipher("thEOdinProjEcT", 4)).toBe("XLISHMRTVSNIGX");
    expect(caesarCipher("zyszbwWSKndkjawefn", 14)).toBe("NMGNPKKGYBRYXOKSTB");
    expect(caesarCipher("kjdnkKSENFKWEFNIIXA", 35)).toBe("TSMWTTBNWOTFNOWRRGJ");
});