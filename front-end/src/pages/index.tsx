import * as React from 'react';

import { NextPage, NextPageContext } from 'next';
import { BasicTemplate } from '../components/template';

interface MainPageProps {}

const MainPage: NextPage = () => {
  console.log('page render');
  return <BasicTemplate />;
};

MainPage.getInitialProps = async (context: NextPageContext) => {
  const hello = 'hello';
  return { hello };
};

export default MainPage;
