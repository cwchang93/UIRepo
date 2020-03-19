import { AppProps } from "next/app";
import * as React from "react";
import { withApollo } from "@utils/withApollo";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withApollo(MyApp);
