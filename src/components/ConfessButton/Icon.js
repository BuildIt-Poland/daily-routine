import React from 'react';
import styled from 'styled-components';

import { SaltGrinder } from '../Icons';

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -1rem;
`;

function Icon() {
  return (
    <Wrapper>
      <SaltGrinder />
    </Wrapper>
  );
}

export default Icon;
