import * as React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import styled from 'styled-components';
import Button from '../../common/Button';

const HeaderRightBlock = styled.div`
  margin-left: auto;
  svg {
    margin-right: 0.25rem;
  }
`;

interface HeaderRightProps {
  onClickLogin: () => void;
}

const HeaderRight: React.FC<HeaderRightProps> = ({ onClickLogin }) => {
  return (
    <HeaderRightBlock>
      <Button color="red" inline onClick={onClickLogin}>
        로그인
      </Button>
      <Button color="white" inline>
        <FaRegUserCircle />
        회원가입
      </Button>
    </HeaderRightBlock>
  );
};

export default HeaderRight;
