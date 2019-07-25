import styled from 'styled-components';

import {
  colorRed,
  colorBlack,
  fontMedium,
  fontWeightBold,
  spacingSmall,
  borderWidthThick,
  colorLightRed
} from '../../styles/designTokens';

const Wrapper = styled.div`
  width: 100%;
  border: ${borderWidthThick} solid ${colorRed};
  color: ${colorBlack};
  background-color: ${colorLightRed};
  font-size: ${fontMedium};
  font-weight: ${fontWeightBold};
  padding: ${spacingSmall};
  display: flex;
  justify-content: center;
`;

export default Wrapper;
