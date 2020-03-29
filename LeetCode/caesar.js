const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const dechiper = (secretNum, cipherStr) => {
  const alphLen = ALPHABET.length;
  const cipher = `${ALPHABET.substring(
    alphLen - secretNum,
    alphLen
  )}${ALPHABET.substring(0, alphLen - secretNum)}`;
  const idxArr = [];
  for (let i = 0; i < cipherStr.length; i++) {
    for (let j = 0; j < cipher.length; j++) {
      if (cipherStr[i] === cipher[j]) {
        idxArr.push(j);
      }
    }
  }
  let result = "";
  idxArr.map(ele => {
    result += ALPHABET[ele];
  });
  console.log(result);
};

dechiper(4, "WLLHA");
