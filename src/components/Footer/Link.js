import styled from 'styled-components';

import media from '../../styles/media';
import { fontMedium, colorWhite, colorBlack, fontWeightNormal, fontWeightBold } from '../../styles/designTokens';

const Link = styled.a.attrs({
  target: '_blank'
})`
  height: 3.6rem;
  min-width: 6rem;
  margin: 4px;
  cursor: pointer;
  white-space: nowrap;
  justify-content: center;
  text-decoration: none;
  font-size: ${fontMedium};
  font-weight: ${fontWeightNormal};

  color: ${({ highlight, theme }) => (highlight ? theme.secondaryColor : colorBlack)};
  opacity: ${({ highlight }) => (highlight ? 0.9 : 0.3)};
  background-image: ${({ highlight, theme }) =>
    highlight && `linear-gradient(180deg, ${theme.secondaryColor} 50%, transparent 0)`};
  background-repeat: repeat-x;
  background-size: 2px 0.2rem;
  background-position: 0 1.5rem;

  ${media.phone`
    color: ${({ highlight }) => (highlight ? colorWhite : colorBlack)};
    opacity: ${({ highlight }) => (highlight ? 0.7 : 0.3)};
    background-image: none;
    font-weight: ${fontWeightBold};
  `};

  svg {
    display: inline-block;
    margin: 0 0.4rem;
  }
`;

export default Link;
