import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700&display=swap&subset=korean');

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default Typography;