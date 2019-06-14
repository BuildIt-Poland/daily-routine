import styled from 'styled-components';

import { colorWhite, fontLarge, fontWeightBold, borderRadius, spacingMedium } from '../../styles/designTokens';
import Button from '../Button';

const Wrapper = styled(Button)`
  position: relative;
  background-color: ${({ colours }) => colours.secondaryColor};
  color: ${colorWhite};
  display: flex;
  align-items: center;
  padding: 0 ${spacingMedium};
  margin: ${spacingMedium} 0;
  border: 0;
  border-bottom: 0.3rem solid ${({ colours }) => colours.tertiaryColor};
  border-radius: ${borderRadius};
  font-size: ${fontLarge};
  font-weight: ${fontWeightBold};
  text-align: left;
  width: 100%;
  height: 4.7rem;

  &:not(:disabled) {
    cursor: pointer;
  }
`;

export default Wrapper;
