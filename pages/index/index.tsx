import * as React from "react";
import Banner from "@jwele/Banner";
// import { Button } from "@lion-design/core";
// import { Button } from "@xin-design/xind";

const IndexPage = () => {
  const bannerProps = {
    openAtStart: true,
    autoToggle: 3000,
    button: {
      closeText: "展開",
      openText: "收合",
      class: "",
    },
    transition: true,
    whenTransition: () => console.log("transition"),
  };

  return (
    <>
      <Banner {...bannerProps} />
      {/* <Badge /> */}
      {/* <Button>default</Button> */}
      {/* <Button onClick={() => console.log("hi this is Default button")}>
        {" "}
        Default{" "}
      </Button> */}
    </>
  );
};

export default IndexPage;
