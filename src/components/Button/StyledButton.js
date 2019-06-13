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
  display: flex;
  align-items: center;
  padding: ${spacingSmall} 0 ${spacingSmall} ${spacingSmall};
  margin: ${spacingMedium} 0;
  border: 0;
  border-bottom: 0.3rem solid ${darkGreen};
  border-radius: ${borderRadius};
  font-size: ${fontLarge};
  font-weight: ${fontWeightBold};
  text-align: left;
  text-decoration: none;
  width: 100%;
  height: 4rem;

  &:not(:disabled) {
    cursor: pointer;
  }
`;

export default StyledButton;
