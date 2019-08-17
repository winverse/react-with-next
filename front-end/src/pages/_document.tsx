import * as React from 'react';
import Helmet, { HelmetData } from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';
import Document, { Main, Head, NextScript } from 'next/document';

type HelmetProps = {
  helmet: HelmetData;
};

class RootDocument extends Document<HelmetProps> {
  static getInitialProps = context => {
    const sheet = new ServerStyleSheet();
    const page = context.renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styles = sheet.getStyleElement();
    const helmet = Helmet.renderStatic();
    return {
      ...page,
      helmet,
      styles,
    };
  };

  render() {
    const { helmet } = this.props;
    const { htmlAttributes, bodyAttributes, ...helmets } = helmet;
    const htmlAttrs = htmlAttributes.toComponent();
    const bodyAttrs = bodyAttributes.toComponent();
    return (
      <html {...htmlAttrs}>
        <Head>
          {/* {this.props.styles} */}
          {Object.values(helmets).map(el => el.toComponent())}
        </Head>
        <body {...bodyAttrs}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default RootDocument;
