import * as React from 'react';
import App, { Container } from 'next/app';

interface RootAppProps {
  Component: React.ElementType;
  store: Object;
  pageProps: Object;
}

class RootApp extends App<RootAppProps> {
  render() {
    const { Component, store, pageProps } = this.props;
    console.log(Component, pageProps)
    return (
      <Container>
        <Component {...pageProps}/>
      </Container>
    )
  }
}


export default RootApp
