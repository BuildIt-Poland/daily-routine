import React from 'react';
import styled from 'styled-components';

import { Lightbulb } from '../Icons';

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -0.8rem;
`;

function Icon() {
  return (
    <Wrapper>
      <Lightbulb />
    </Wrapper>
  );
}

export default Icon;
