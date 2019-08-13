import * as React from 'react';
import styled from 'styled-components';
import { GiFlameSpin } from 'react-icons/gi';
import oc from 'open-color';

const HeaderLogoBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  cursor: pointer;
  .logo-block {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
  .logo-word {
    font-family: 'Roboto', sans-serif;
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: -0.5px;
    line-height: 1.2;
  }
`;

const Logo = styled(GiFlameSpin)`
  display: inline-block;
  color: ${oc.red[7]};
  width: 30px;
  height: 30px;
`;

interface HeaderLogoProps {}

const HeaderLogo: React.FC<HeaderLogoProps> = () => {
  return (
    <HeaderLogoBlock>
      <span className="logo-block">
        <Logo />
      </span>
      <span className="logo-word">Openknowl</span>
    </HeaderLogoBlock>
  );
};

export default HeaderLogo;
