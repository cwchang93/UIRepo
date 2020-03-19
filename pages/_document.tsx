import Document, { Html, Head, Main, NextScript } from "next/document";
import * as React from "react";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.4/polyfill.min.js"></script>
        </Head>
        <body className="custom_style">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
