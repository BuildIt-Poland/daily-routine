import React from 'react';
import styled from 'styled-components';

import { Lightbulb } from '../Icons';

const Wrapper = styled.span`
  position: absolute;
  right: 0;
  bottom: -1rem;
`;

function LightbulbIcon() {
  return (
    <Wrapper>
      <Lightbulb />
    </Wrapper>
  );
}

export default LightbulbIcon;
