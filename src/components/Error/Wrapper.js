import styled from 'styled-components';

import {
  colorRed,
  colorBlack,
  fontMedium,
  fontWeightBold,
  spacingSmall,
  borderWidthThick,
  colorWhite
} from '../../styles/designTokens';

const Wrapper = styled.div`
  width: 100%;
  border: ${borderWidthThick} solid ${colorRed};
  color: ${colorBlack};
  background-color: ${colorWhite};
  font-size: ${fontMedium};
  font-weight: ${fontWeightBold};
  padding: ${spacingSmall};
  display: flex;
  justify-content: center;
  border-radius: 8px;
`;

export default Wrapper;
