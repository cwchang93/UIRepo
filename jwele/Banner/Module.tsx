import * as React from "react";
// import image from "/banner.png";
import { BannerContainer } from "./style";
import Img from "./banner.png";
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
  const [btnText, setBtnText] = React.useState<string>("開關");
  const [bannerState, setBannerState] = React.useState<string>("closed");

  const {
    closeText: btnCloseText,
    openText: btnOpenText,
    class: btnClass
  } = props.button;

  const { openAtStart, autoToggle } = props;

  // React.useEffect(() => {
  //   console.log("2");
  //   if (bannerState === "opened" || bannerState === "opening") {
  //     console.log("opened");
  //     setBtnText(btnOpenText);
  //   } else if (bannerState === "closed" || bannerState === "closing") {
  //     console.log("closed");
  //     setBtnText(btnCloseText);
  //   }
  // }, [bannerState]);

  // 初始化

  //
  const initState = () => {
    if (openAtStart) {
      // 開啟狀態
      console.log("openStart");
      setBtnText(btnOpenText); // 1. 設定btn出現的文字
      setBannerState("opened"); // 設定初始狀態
    } else {
      // 關閉狀態
      setBtnText(btnCloseText);
      setBannerState("closed");
    }
  };

  const toggleBanner = () => {
    console.log("tgbn");
    console.log("BNNState", bannerState);
    if (bannerState === "opened") {
      console.log("tgopened");
      setBannerState("closed");
      setBtnText(btnCloseText);
    } else if (bannerState === "closed") {
      console.log("tgclosed");
      setBannerState("opened");
      setBtnText(btnOpenText);
    }
  };

  React.useEffect(() => {
    initState();
    console.log("中間");
  }, []);

  React.useEffect(() => {
    console.log("autoEffect");
    if (autoToggle) {
      console.log("auto");
      toggleBanner();
    }
  }, []);

  return (
    <BannerContainer>
      <GlobalStyle />
      <div className="sectionWrap">
        <div className={cx("imgWrap", bannerState)}>
          <img className={cx("bannerImg", bannerState)} src={`./banner.png`} />
          <button
            className={cx("btn", bannerState)}
            onClick={() => {
              if (bannerState === "opened") {
                console.log("If open");
                setBannerState("closed");
                setBtnText(btnCloseText);
              } else if (bannerState === "closed") {
                console.log("elseIf close");
                setBannerState("opened");
                setBtnText(btnOpenText);
              }
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
