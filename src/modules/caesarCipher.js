function caesarCipher(str, shiftFactor) {
  let smallSet = "abcdefghijklmnopqrstuvwxyz";
  let bigSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  shiftFactor %= 26;
  let encryptedCharSetSmall = generateEncryptionCharSet(smallSet, shiftFactor);
  let encryptedCharSetBig = generateEncryptionCharSet(bigSet, shiftFactor);
  let encryptedText = "";

  for (let i = 0; i < str.length; i++) {
    if (smallSet.includes(str[i])) {
      encryptedText += encryptedCharSetSmall[smallSet.indexOf(str[i])];
    } else if (bigSet.includes(str[i])) {
      encryptedText += encryptedCharSetBig[bigSet.indexOf(str[i])];
    } else {
      encryptedText += str[i];
    }
  }
  return encryptedText;
}

function generateEncryptionCharSet(baseSet, shiftFactor){
    return baseSet.slice(shiftFactor) + baseSet.slice(0, shiftFactor);
}

function encryptChar(char, set){

}

export { caesarCipher };
