import styled from 'styled-components';

import Button from '../Button';
import {
  colorWhite,
  fontLarge,
  fontWeightBold,
  borderRadius,
  spacingMedium,
  darkGreen,
  colorGreen
} from '../../styles/designTokens';

const StyledButton = styled(Button)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colorGreen};
  color: ${colorWhite};
  width: 100%;
  height: 4.7rem;
  margin: ${spacingMedium} 0;
  padding: 0 ${spacingMedium};
  border: 0;
  border-bottom: 0.3rem solid ${darkGreen};
  border-radius: ${borderRadius};
  font-size: ${fontLarge};
  font-weight: ${fontWeightBold};
  text-align: left;

  &:not(:disabled) {
    cursor: pointer;
  }
`;

export default StyledButton;
