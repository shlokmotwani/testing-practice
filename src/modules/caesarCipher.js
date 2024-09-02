function caesarCipher(str, shiftFactor){
    let smallSet = 'abcdefghijklmnopqrstuvwxyz';
    let bigSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    shiftFactor %= 26;
    let encryptedCharSetSmall = smallSet.slice(shiftFactor) + smallSet.slice(0, shiftFactor);
    let encryptedCharSetBig = bigSet.slice(shiftFactor) + bigSet.slice(0, shiftFactor);
    let encryptedText = "";

    for(let i=0; i<str.length; i++){
        if(smallSet.includes(str[i])){
            encryptedText += encryptedCharSetSmall[smallSet.indexOf(str[i])];
        }
        else{
            encryptedText += encryptedCharSetBig[bigSet.indexOf(str[i])];
        }
    }
    return encryptedText;
}

export {caesarCipher}