import styled from 'styled-components';

import { colorWhite, fontLarge, fontWeightBold, borderRadius, spacingMedium } from '../../styles/designTokens';

const StyledButton = styled.button`
  position: relative;
  background: ${props => props.variant.backgroundColor};
  color: ${colorWhite};
  display: flex;
  align-items: center;
  padding: 0 ${spacingMedium};
  margin: ${spacingMedium} 0;
  border: 0;
  border-bottom: 0.3rem solid ${props => props.variant.borderBottomColor};
  border-radius: ${borderRadius};
  font-size: ${fontLarge};
  font-weight: ${fontWeightBold};
  text-align: left;
  text-decoration: none;
  width: 100%;
  height: 4.7rem;

  &:not(:disabled) {
    cursor: pointer;
  }
`;

export default StyledButton;
