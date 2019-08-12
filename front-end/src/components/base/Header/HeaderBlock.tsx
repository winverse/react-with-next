import * as React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  width: 100%;
  height: 45px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
`;

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <HeaderBlock>
      <HeaderInner>{children}</HeaderInner>
    </HeaderBlock>
  );
};

export default Header;
