import * as React from 'react';
import styled from 'styled-components';

const BasicTemplateBlock = styled.div``;

interface BasicTemplateProps {}

const BasicTemplate: React.SFC<BasicTemplateProps> = () => {
  return (
    <BasicTemplateBlock>
      BasicTemplate
    </BasicTemplateBlock>
  );
};

export default BasicTemplate;