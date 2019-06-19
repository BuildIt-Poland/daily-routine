import React from 'react';
import styled from 'styled-components';

import { LongArrow } from '../Icons';

const Wrapper = styled.span`
  position: absolute;
  right: 1.4rem;
  bottom: 1.4rem;
`;

function Icon() {
  return (
    <Wrapper>
      <LongArrow />
    </Wrapper>
  );
}

export default Icon;
