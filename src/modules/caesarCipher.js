function caesarCipher(str, shiftFactor){
    let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encryptedCharSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    shiftFactor %= 26;
    encryptedCharSet = encryptedCharSet.slice(shiftFactor) + encryptedCharSet.slice(0, shiftFactor);
    let encryptedText = "";
    str = str.toUpperCase();

    for(let i=0; i<str.length; i++){
        encryptedText += encryptedCharSet[charSet.indexOf(str[i])];
    }
    return encryptedText;
}

export {caesarCipher}