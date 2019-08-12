import * as React from 'react';
import Helmet from 'react-helmet';
import App, { Container } from 'next/app';
import { ResetCss } from '../styles';

interface RootAppProps {
  Component: React.ElementType;
  store: Record<string, any>;
  pageProps: Record<string, any>;
}

class RootApp extends App<RootAppProps> {
  static getInitialProps = async ({ ctx, Component }) => {
    console.log('app init');
    let pageProps = {};
    // const state = ctx.store.getState();
    // const cookie = ctx.isServer ? ctx.req.headers.cookie : '';
    if (Component.getInitialProps) {
      pageProps = (await Component.getInitialProps(ctx)) || {};
    }
    return { pageProps };
  };

  public render() {
    console.log('app render');
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Helmet
          title="Winverse blog"
          htmlAttributes={{ lang: 'ko' }}
          meta={[
            {
              charSet: 'UTF-8',
            },
            {
              name: 'viewport',
              content:
                'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
            },
            {
              name: 'description',
              content: 'Winverse blog',
            },
            {
              name: 'og:title',
              content: 'Winverse blog',
            },
            {
              name: 'og:description',
              content: 'Winverse blog',
            },
            {
              property: 'og:type',
              content: 'website',
            },
          ]}
          link={[
            {
              rel: 'shortcut icon',
              href: '/favicon.ico',
            },
            {
              rel: 'stylesheet',
              href:
                'https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700&display=swap&subset=korean',
            },
            {
              rel: 'stylesheet',
              href:
                'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
            },
          ]}
        />
        <ResetCss />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default RootApp;
