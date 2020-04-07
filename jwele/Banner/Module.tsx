import * as React from "react";
// import image from "/banner.png";
import { BannerContainer } from "./style";
import { GlobalStyle } from "@style/theme/global_css";
import cx from "classnames";

interface I_Props {
  // 設定一開始是否為開或合
  openAtStart: boolean; // [boolean] true | false  OK
  // 設定啟動後是否要自動開或合，若設為false，就不要自勳開合；若為true是馬上自動開合；若為數字是幾毫秒之後開合
  autoToggle?: boolean | number; // [boolean|number] true | false | 3000
  // 設定收合展開按鈕
  button?: {
    closeText: string; // [string]
    openText: string; // [string]
    class: string; // [string]
  };
  // 設定模組在各狀態時的class
  class?: {
    closed: string; // [string]
    closing: string; // [string]
    opened: string; // [string]
    opening: string; // [string]
  };
  // 是否要有transition效果
  transition?: boolean;
  whenTransition?: () => void;
}

const Banner = (props: I_Props) => {
  const {
    closeText: btnCloseText,
    openText: btnOpenText,
    class: btnClass
  } = props.button;

  const { openAtStart, autoToggle, transition, whenTransition } = props;

  const initBannerState = openAtStart ? "opened" : "closed";
  const [btnText, setBtnText] = React.useState<string>(btnOpenText);
  const [bannerState, setBannerState] = React.useState<string>(initBannerState);

  const [done, setDone] = React.useState<boolean>(false);

  const open = () => {
    setBtnText(btnOpenText);
    if (transition) {
      setBannerState("opening");
      const timer = setInterval(whenTransition, 3000 / 30);
      setTimeout(function() {
        setDone(false);
        setBannerState("opened");
        clearInterval(timer);
      }, 3000);
      return;
    } else {
      setDone(false);
    }
    setBannerState("opened");
  };

  const close = () => {
    setBtnText(btnCloseText);

    if (transition) {
      setBannerState("closing");
      const timer = setInterval(whenTransition, 3000 / 30);
      setTimeout(function() {
        setDone(true);
        setBannerState("closed");
        clearInterval(timer);
      }, 3000);
      return;
    } else {
      setDone(true);
    }
    setBannerState("closed");
  };

  const toggle = () => {
    if (bannerState === "opened") {
      close();
    } else if (bannerState === "closed") {
      open();
    }
  };

  // init BannerStatus
  React.useEffect(() => {
    if (autoToggle) {
      typeof autoToggle === "number"
        ? setTimeout(() => toggle(), autoToggle) // setTimeout要用箭頭函式，因為this指向問題
        : toggle();
    }
  }, []);

  return (
    <BannerContainer>
      <GlobalStyle />
      <div className="sectionWrap">
        <div className={cx("imgWrap", bannerState, { transition: transition })}>
          <img
            className={cx(
              "bannerImg",
              bannerState,
              { transition: transition },
              { transformImg: bannerState === "closed" },
              { done: done }
            )}
            src={`./banner.png`}
          />
          <button
            className={cx(
              "btn",
              bannerState,
              { btnClass: !!btnClass },
              { transition: transition }
            )}
            onClick={() => {
              toggle();
            }}
          >
            {btnText}
          </button>
        </div>
      </div>
    </BannerContainer>
  );
};

export default Banner;

// setState還沒完成就已經去執行下面程式碼了
