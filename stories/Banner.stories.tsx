import * as React from "react";
import { storiesOf } from "@storybook/react";
import Banner from "../jwele/Banner";

storiesOf("Banner", module).add("with text", () => {
  return <Banner />;
});
