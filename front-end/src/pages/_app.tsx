import * as React from 'react';
import App, { Container } from 'next/app';
import { ResetCss } from '../styles';

interface RootAppProps {
  Component: React.ElementType;
  store: Record<string, any>;
  pageProps: Record<string, any>;
}

class RootApp extends App<RootAppProps> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ResetCss />
        <Component {...pageProps} />
      </Container>
    );
  }
}


export default RootApp;
