import React from 'react';
import styled from 'styled-components';

import { LongArrow } from '../Icons';

const Wrapper = styled.span`
  position: absolute;
  right: 1.3rem;
  bottom: 1.3rem;
`;

function LongArrowIcon() {
  return (
    <Wrapper>
      <LongArrow />
    </Wrapper>
  );
}

export default LongArrowIcon;
