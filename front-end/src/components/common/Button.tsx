import * as React from 'react';
import styled, { css } from 'styled-components';
import buttonColorMap from '../../styles/buttonColorMap';

const ButtonBlock = styled.div<{
  color: ColorType;
  size: ButtonSize;
  inline: boolean;
}>`
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  background: ${props => buttonColorMap[props.color].background};
  color: ${props => buttonColorMap[props.color].color};
  border-radius: 0.5rem;
  cursor: pointer;
  user-select: none;
  ${props =>
    props.size === 'medium' &&
    css`
      font-size: 0.875rem;
      font-weight: 600;
      padding: 8.5px 10px;
    `}
  ${props =>
    props.inline &&
    css`
      & + & {
        margin-left: 1rem;
      }
    `}
    ${props =>
      buttonColorMap[props.color].border &&
      css`
        border: 2px solid ${buttonColorMap[props.color].border};
        padding: 6.5px 10px;
      `}
  &:hover,
    &:focus {
    background: ${props => buttonColorMap[props.color].hoverBackground};
  }
  &:active {
    transform: translateY(1px);
    transition: 0.125s all ease-in-out;
  }
`;

type ColorType = 'red' | 'white';
type ButtonSize = 'medium';

interface ButtonProps {
  color?: ColorType;
  size?: ButtonSize;
  inline?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'red',
  size = 'medium',
  inline = false,
  onClick,
}) => {
  return (
    <ButtonBlock color={color} size={size} inline={inline} onClick={onClick}>
      {children}
    </ButtonBlock>
  );
};

export default Button;
