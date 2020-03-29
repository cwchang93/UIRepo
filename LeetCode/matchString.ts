const matchString = (inputStr: string, matchString: string) => {
  const mStrLen = matchString.length;
  const matchTimes = inputStr.length - matchString.length + 1;
  const inputStrGroup = [];
  for (let i = 0; i < matchTimes; i++) {
    const splitInputStr = inputStr.substring(i, i + mStrLen);
    inputStrGroup.push(splitInputStr);
  }
  let HStr = "";
  let tmpPercent = 0;
  for (let i = 0; i < inputStrGroup.length; i++) {
    let matchNum = 0;
    const inputStr = inputStrGroup[i];
    for (let j = 0; j < mStrLen; j++) {
      if (inputStr[j] === matchString[j]) matchNum += 1;
    }
    const matchPercent = (matchNum / mStrLen) * 100;
    if (matchPercent > tmpPercent) {
      tmpPercent = matchPercent;
      HStr = inputStr;
    }
  }
  console.log(`H%Str: ${HStr}, ${tmpPercent}%`);
};

matchString("atgcctgatal", "tcata");

export {};
