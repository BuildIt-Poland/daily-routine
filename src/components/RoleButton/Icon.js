import React from 'react';
import styled from 'styled-components';

import { LongArrow } from '../Icons';

const Wrapper = styled.div`
  position: absolute;
  right: 0.8rem;
  bottom: 0.9rem;
`;

function Icon() {
  return (
    <Wrapper>
      <LongArrow />
    </Wrapper>
  );
}

export default Icon;
