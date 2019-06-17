import React from 'react';
import styled from 'styled-components';

import { SaltGrinder } from '../Icons';

const Wrapper = styled.span`
  position: absolute;
  right: 0.4rem;
  bottom: -0.9rem;
`;

function SaltGrinderIcon() {
  return (
    <Wrapper>
      <SaltGrinder />
    </Wrapper>
  );
}

export default SaltGrinderIcon;
