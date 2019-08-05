import * as React from 'react';
import { Container } from 'next/app';

interface AppProps {
  Component: React.ElementType;
  store: any;
  pageProps: Object;
};

const App: React.SFC<AppProps> = ({ Component, store, pageProps }) => {
  return (
    <Container>
      <Component {...pageProps}/>
    </Container>
  )
}

export default App;