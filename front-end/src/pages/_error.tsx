import * as React from 'react';
import { ErrorProps } from 'next/error';
import { NextPageContext } from 'next';

interface ErrorPageState {
  statusCode: null | number;
}

class Error extends React.Component<ErrorProps, ErrorPageState> {
  static getInitialProps = async ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : (err ? err.statusCode : null);
    return { statusCode };
  };

  render() {
    const { statusCode } = this.props;
    return (
      <div>
        <h1>{statusCode} 에러발생</h1>
      </div>
    );
  }
}

export default Error;
