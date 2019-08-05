import * as React from 'react';
import * as Next from 'next';

interface ErrorProps {
  statusCode: Number;
}

const Error:React.SFC<ErrorProps> & Next.NextComponentType = ({ statusCode }) => {
  return (
    <div>
      <h1>{statusCode} Error</h1>
    </div>
  );
};

Error.getInitialProps = async (context: Next.NextPageContext) => {
  const statusCode = context.res
    ? context.res.statusCode
    : context.err
    ? context.err.statusCode
    : null;
  return { statusCode }
}

export default Error;
