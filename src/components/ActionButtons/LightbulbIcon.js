import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import { Lightbulb } from '../Icons';

const Wrapper = styled.span`
  position: absolute;
  right: 0;
  bottom: -1rem;
`;

function LightbulbIcon(props) {
  return (
    <Wrapper {...props}>
      <Lightbulb />
    </Wrapper>
  );
}

export default animated(LightbulbIcon);
