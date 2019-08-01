import styled from 'styled-components';

import media from '../../styles/media';
import { colorOpaqueBlack, fontWeightBold } from '../../styles/designTokens';
import Hitbox from './Hitbox';

const Link = styled(Hitbox).attrs({
  target: '_blank'
})`
  margin: 0 0.4rem;
  cursor: pointer;
  height: 3rem;
  font-weight: ${fontWeightBold};

  color: ${({ theme }) => theme.secondaryColor};
  background-image: ${({ theme }) => `linear-gradient(180deg, ${theme.secondaryColor} 50%, transparent 0)`};
  background-repeat: repeat-x;
  background-size: 2px 0.2rem;
  background-position: 0 2.2rem;

  ${media.phone`
    color: ${colorOpaqueBlack};
    background-image: linear-gradient(180deg, ${colorOpaqueBlack} 50%, transparent 0);
  `};
`;

export default Link;
