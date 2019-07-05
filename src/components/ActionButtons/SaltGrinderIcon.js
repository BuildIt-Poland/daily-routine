import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

import media from '../../styles/media';
import { SaltGrinder } from '../Icons';

const Wrapper = styled.span`
  width: 8.8rem;
  position: absolute;
  top: -0.9rem;
  right: -0.6rem;

  ${media.phone`
    width: 6.6rem;
    top: -0.9rem;
    right: 0.4rem;
  `};
`;

function SaltGrinderIcon(props) {
  return (
    <Wrapper {...props}>
      <SaltGrinder />
    </Wrapper>
  );
}

export default animated(SaltGrinderIcon);
