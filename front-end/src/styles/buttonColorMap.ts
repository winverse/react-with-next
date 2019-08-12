import oc from 'open-color';

type ButtonColorMapType = {
  [color: string]: {
    background: string;
    color: string;
    hoverBackground: string;
    border?: string;
  };
};

const buttonColorMap: ButtonColorMapType = {
  red: {
    background: 'white',
    color: `${oc.red[7]}`,
    hoverBackground: `${oc.gray[0]}`,
    border: `${oc.red[7]}`,
  },
  white: {
    background: `${oc.red[7]}`,
    color: 'white',
    hoverBackground: `${oc.red[6]}`,
  },
};

export default buttonColorMap;
