import * as React from "react";
import Banner from "@jwele/Banner";

const IndexPage = () => {
  const bannerProps = {
    openAtStart: true,
    autoToggle: 3000,
    button: {
      closeText: "展開",
      openText: "收合",
      class: ""
    },
    whenTransition: () => console.log("transition")
  };

  return (
    <>
      <Banner {...bannerProps} />
    </>
  );
};

export default IndexPage;
