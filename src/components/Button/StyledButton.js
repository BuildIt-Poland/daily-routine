import styled from 'styled-components';

import {
  colorWhite,
  fontLarge,
  fontWeightBold,
  borderRadius,
  spacingSmall,
  spacingMedium,
  darkGreen,
  colorGreen
} from '../../styles/designTokens';

const StyledButton = styled.button`
  position: relative;
  background: ${colorGreen};
  color: ${colorWhite};
  display: block;
  font-size: ${fontLarge};
  font-weight: ${fontWeightBold};
  padding: ${spacingSmall};
  border-radius: ${borderRadius};
  text-align: left;
  width: 100%;
  height: 4rem;
  margin: ${spacingMedium} 0;
  border: 0;
  border-bottom: 0.3rem solid ${darkGreen};
  &:not(:disabled) {
    cursor: pointer;
  }
`;

export default StyledButton;
