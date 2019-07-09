import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { zIndexArtworkSecondaryDecor } from '../../../styles/designTokens';

const Wrapper = styled(animated.span)`
  position: absolute;
  z-index: ${zIndexArtworkSecondaryDecor};
  transform-origin: top;
`;

function Tear(props) {
  const animationStyles = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1.3)' }
  });

  return (
    <Wrapper style={animationStyles} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
        <path d="M2.984.17c-1.799 3.452-4.811 10.66-.049 10.66 4.9 0 1.971-7.208.049-10.66z" fill="#fff" />
      </svg>
    </Wrapper>
  );
}

export default Tear;
