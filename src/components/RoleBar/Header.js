import styled from 'styled-components';

import media from '../../styles/media';
import { spacingMedium } from '../../styles/designTokens';

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  /* compensate for medium spacing and gear icon width with left padding */
  padding: 0 1.4rem 0 5.4rem;
  height: 5rem;
  background-color: rgba(255, 255, 255, 0.5);

  ${media.phone`
    padding-left: ${spacingMedium};
  `};

  ${media.smallPhone`
      height: 4rem;
  `};
`;

export default Header;
