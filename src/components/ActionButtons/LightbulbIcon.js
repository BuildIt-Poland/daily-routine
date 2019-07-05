import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import media from '../../styles/media';
import { Lightbulb } from '../Icons';

const Wrapper = styled.span`
  width: 8.8rem;
  position: absolute;
  top: -1rem;
  right: -0.8rem;

  ${media.phone`
    width: 6.6rem;
    top: -1rem;
    right: 0;
  `};
`;

function LightbulbIcon(props) {
  return (
    <Wrapper {...props}>
      <Lightbulb />
    </Wrapper>
  );
}

export default animated(LightbulbIcon);
