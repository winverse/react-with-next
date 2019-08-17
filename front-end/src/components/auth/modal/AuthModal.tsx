import * as React from 'react';
import styled, { css } from 'styled-components';
import { MdClose } from 'react-icons/md';
import zIndexes from '../../../styles/zIndexes';
import transitions from '../../../styles/transitions';

const { useState, useEffect } = React;

const AuthModalBlock = styled.div<{
  visible: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${zIndexes.hazyLayer};
  .wrapper {
    background: red;
    width: 500px;
    height: 500px;
    ${props =>
      props.visible
        ? css`
            animation: ${transitions.popInFromBottom} 0.4s forwards ease-in-out;
          `
        : css`
            animation: ${transitions.popOutToBottom} 0.2s forwards ease-in-out;
          `}

    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
    display: flex;
  }
`;

interface AuthModalProps {
  visible: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ visible, onClose }) => {
  const [closed, setClosed] = useState<boolean>(true);
  useEffect(() => {
    let timeoutId: null | number = null;
    if (visible) {
      setClosed(false);
    } else {
      timeoutId = setTimeout(() => {
        setClosed(true);
      }, 400);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [visible]);

  if (!visible && closed) return null;

  return (
    <AuthModalBlock visible={visible}>
      <div className="wrapper">AuthfdModal</div>
      <MdClose onClick={onClose} />
    </AuthModalBlock>
  );
};

export default AuthModal;
