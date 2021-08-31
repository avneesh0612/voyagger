import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/favicon.svg"></link>
          <meta name="theme-color" content="#fff" />

          <link
            href="https://chatbotish.vercel.app/index.css"
            rel="stylesheet"
          />
          <Script
            src="https://chatbotish.vercel.app/index.js"
            data-chatbotish
            data-id="HD78EFfUJSI7sFbTdfnO"
            strategy="lazyOnload"
          ></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
