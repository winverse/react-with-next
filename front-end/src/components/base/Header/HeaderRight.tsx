import * as React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';

const HeaderRightBlock = styled.div`
  margin-left: auto;
  .button {
  }
`;

interface HeaderRightProps {}

const HeaderRight: React.FC<HeaderRightProps> = () => {
  return (
    <HeaderRightBlock>
      <Button color="red" inline>
        로그인
      </Button>
      <Button color="white" inline>
        회원가입
      </Button>
    </HeaderRightBlock>
  );
};

export default HeaderRight;
