import * as React from 'react';
import styled, { css } from 'styled-components';
import zIndexes from '../../styles/zIndexes';
import transitions from '../../styles/transitions';

const HazyLayerBlock = styled.div<{
  visible: boolean;
  animate: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(249, 249, 249, 0.85);
  z-index: ${zIndexes.hazyLayer};

  ${props =>
    props.visible
      ? css`
          animation: ${transitions.fadeIn} 0.25s forwards;
        `
      : css`
          animation: ${transitions.fadeOut} 0.25s forwards;
        `}
`;

interface HazyLayerProps {
  visible: boolean;
}

const { useState, useEffect, useRef } = React;

const HazyLayer: React.FC<HazyLayerProps> = ({ visible }) => {
  const [animate, setAnimate] = useState(false);
  const [closed, setClosed] = useState(true);
  const timeoutId = useRef<null | number>(null);
  const mounted = useRef(false);

  useEffect(() => {
    document.body.style.overflowY = visible ? 'hidden' : 'initial';
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setAnimate(true);
      timeoutId.current = setTimeout(() => {
        setAnimate(false);
        if (!visible) {
          setClosed(true);
        }
      }, 250);
    }
    if (visible) {
      setClosed(false);
    }
    return () => {
      if (!timeoutId.current) return;
      clearTimeout(timeoutId.current);
    };
  }, [visible]);

  useEffect(() => {
    return () => {
      document.body.style.overflowY = 'initial';
    };
  }, []);

  if (!animate && !visible && closed) return null;
  return (
    <HazyLayerBlock visible={visible} animate={animate}>
      HazyLayer
    </HazyLayerBlock>
  );
};

export default HazyLayer;
