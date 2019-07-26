import styled from 'styled-components';

import { colorYellow, colorDarkYellow } from '../../styles/designTokens';
import RedirectButton from '../RedirectButton';

const FrontEndButton = styled(RedirectButton)`
  background-color: ${colorYellow};
  border-bottom-color: ${colorDarkYellow};
`;

export default FrontEndButton;
