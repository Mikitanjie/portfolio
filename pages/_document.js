import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <body>
          <Main />
          <NextScript disableAutomaticPrerendering={true} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
