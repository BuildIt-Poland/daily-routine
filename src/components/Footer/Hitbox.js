import styled from 'styled-components';

import { fontMedium, colorOpaqueBlack, colorPink, fontWeightNormal, borderRadius } from '../../styles/designTokens';

const Hitbox = styled.a`
  display: flex;
  height: 3.6rem;
  white-space: nowrap;
  align-items: center;
  text-decoration: none;
  font-size: ${fontMedium};
  font-weight: ${fontWeightNormal};
  color: ${colorOpaqueBlack};
  border-radius: ${borderRadius};
  outline: 0;
  transition: all 150ms linear;

  &.focus-visible {
    box-shadow: -0.4rem 0 0 0 ${colorPink}, 0.4rem 0 0 0 ${colorPink};
    background-color: ${colorPink};
  }
`;

export default Hitbox;
