import styled from 'styled-components';
import { animated } from 'react-spring';

import media from '../../styles/media';
import {
  colorWhite,
  colorGreen,
  colorDarkGreen,
  colorDarkPink,
  fontLarge,
  fontWeightBold,
  borderRadius,
  spacingMedium
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
  outline: 0;
  transition: all 150ms linear;

  ${media.phone`
    height: 5rem;
  `};

  &:not(:disabled) {
    cursor: pointer;
  }

  &.focus-visible {
    box-shadow: 0 0 0 0.6rem ${colorDarkPink};
  }

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export default animated(StyledButton);
