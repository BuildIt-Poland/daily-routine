import styled from 'styled-components';

import { fontMedium, colorOpaqueBlack, fontWeightNormal } from '../../styles/designTokens';

const Hitbox = styled.a`
  display: flex;
  height: 3.6rem;
  white-space: nowrap;
  align-items: center;
  text-decoration: none;
  font-size: ${fontMedium};
  font-weight: ${fontWeightNormal};
  color: ${colorOpaqueBlack};
`;

export default Hitbox;
