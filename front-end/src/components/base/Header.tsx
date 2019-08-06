import * as React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  width: 100%;
  height: 45px;
  background: white;
  border-bottom: 1px solid #e0e0e0;
`;

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return <HeaderBlock>Header</HeaderBlock>;
};

export default Header;
