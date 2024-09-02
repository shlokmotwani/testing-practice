import { caesarCipher } from "./caesarCipher";

test('Caeser Cipher Test', ()=>{
    expect(caesarCipher("abcd", 3)).toBe("defg");
    expect(caesarCipher("Shlok", 2)).toBe("Ujnqm");
    expect(caesarCipher("HiroSHima", 6)).toBe("NoxuYNosg");
    expect(caesarCipher("thEOdinProjEcT", 4)).toBe("xlIShmrTvsnIgX");
    expect(caesarCipher("zyszbwWSKndkjawefn", 14)).toBe("nmgnpkKGYbryxokstb");
    expect(caesarCipher("kjdnkKSENFKWEFNIIXA", 35)).toBe("tsmwtTBNWOTFNOWRRGJ");
    expect(caesarCipher("xyz", 3)).toBe("abc");
});