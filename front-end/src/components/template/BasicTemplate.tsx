import * as React from 'react';
import styled from 'styled-components';

import { HeaderContainer } from '../../containers/base';

const BasicTemplateBlock = styled.div``;

interface BasicTemplateProps {}

const BasicTemplate: React.FC<BasicTemplateProps> = () => {
  return (
    <BasicTemplateBlock>
      <HeaderContainer />
    </BasicTemplateBlock>
  );
};

export default BasicTemplate;
