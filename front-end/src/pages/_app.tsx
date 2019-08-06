import * as React from 'react';
import App, { Container } from 'next/app';
import { GlobalStyles } from '../styles';

interface RootAppProps {
  Component: React.ElementType;
  store: Record<string, any>;
  pageProps: Record<string, any>;
}

class RootApp extends App<RootAppProps> {
  public render() {
    const { Component, store, pageProps } = this.props;
    console.log(store);
    return (
      <Container>
        <GlobalStyles />
        <Component {...pageProps} />
      </Container>
    );
  }
}


export default RootApp;
