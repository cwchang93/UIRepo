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

// 取得url的queryString
export const getQueryStrValue = (query: string) => {
  //改用obj
  const url = window.location.href;
  const querySplitArr = url.split(`${query}=`);
  const splittedValue = querySplitArr[1];
  // tab=contact_us&<other>&
  let queryValue;
  const splittedVIndex = splittedValue.indexOf("&");
  if (splittedVIndex > 0) {
    queryValue = splittedValue.substring(0, splittedVIndex);
  } else {
    queryValue = splittedValue;
  }
  console.log("queryValue", queryValue);
  return queryValue;
};

export const handleScroll = (event) => {
  console.log("id", event.target.id);
  const clickedId = event.target.id;
  const rec = document.getElementById(`p${clickedId}`).getBoundingClientRect();
  const rectY = rec.top + window.scrollY;
  const finalY = rectY - 90;
  const scrollParam = {
    top: finalY,
    behavior: "smooth",
  };
  window.scrollTo(scrollParam);
};

