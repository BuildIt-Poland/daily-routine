import styled from 'styled-components';

import { colorPurple, colorDeepPurple } from '../../styles/designTokens';
import RedirectButton from '../RedirectButton';

const BackEndButton = styled(RedirectButton)`
  background-color: ${colorPurple};
  border-bottom-color: ${colorDeepPurple};
`;

export default BackEndButton;
