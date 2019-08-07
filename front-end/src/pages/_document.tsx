import * as React from 'react';
import { Main, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class RootDocument extends React.Component<DocumentInitialProps> {
  static getInitialProps({ renderPage }: DocumentContext) {
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
        </body>
      </html>
    );
  }
}

export default RootDocument;
