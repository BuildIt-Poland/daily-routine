import styled from 'styled-components';
import { animated } from 'react-spring';

import media from '../../styles/media';
import {
  colorWhite,
  colorGreen,
  colorDarkGreen,
  fontLarge,
  fontWeightBold,
  borderRadius,
  spacingMedium,
  spacingSmall
} from '../../styles/designTokens';

const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: ${colorGreen};
  color: ${colorWhite};
  padding: 0 ${spacingMedium};
  margin: ${spacingMedium} 0;
  border: 0;
  border-bottom: 0.3rem solid ${colorDarkGreen};
  border-radius: ${borderRadius};
  font-size: ${fontLarge};
  font-weight: ${fontWeightBold};
  text-align: left;
  width: 100%;
  height: 7rem;

  ${media.phone`
    height: 5rem;
  `};
  ${media.smallPhone`
      padding: 0 ${spacingSmall};
  `};
  &:not(:disabled) {
    cursor: pointer;
  }
`;

export default animated(StyledButton);
