import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../jwele/Button";
import { checkIe } from '../utils/common'

storiesOf("Button", module).add("with text", () => {

    checkIe('https://www.google.com')

    return <Button text="Click Me" />;
});
