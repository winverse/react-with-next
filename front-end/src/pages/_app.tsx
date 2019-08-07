import * as React from 'react';
import App, { Container } from 'next/app';
// import 'reset-css';

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
        <Component {...pageProps} />
      </Container>
    );
  }
}


export default RootApp;
