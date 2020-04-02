import * as React from "react";
import Banner from "@jwele/Banner";

const IndexPage = () => {
  const bannerProps = {
    openAtStart: true,
    autoToggle: true,
    button: {
      closeText: "展開",
      openText: "收合",
      class: "btnClass"
    }
  };

  return (
    <>
      <Banner {...bannerProps} />
    </>
  );
};

export default IndexPage;
