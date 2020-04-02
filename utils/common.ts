// 若為IE => 導頁
export const checkIe = (destUrl: string) => {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf("MSIE "); // IE version under 11
  const trident = ua.indexOf("Trident/"); // IE 11
  // alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));  //IE version number
  if (msie > 0 || trident > 0) window.location.href = destUrl;
};

export const handleInput = (stateData, inputValue: string, type: string) => {
  const now = { ...stateData };
  now[type] = inputValue;
  // setstateData(now);
};
