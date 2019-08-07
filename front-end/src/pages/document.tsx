import * as React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { Main, NextScript } from 'next/document';

class RootDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styles = sheet.getStyleElement();
    return {
      ...page,
      styles,
    };
  }

  return() {
    const { styles } = this.props;
    return (
      <html lang="ko">
        <head>
          {styles}
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default RootDocument;
