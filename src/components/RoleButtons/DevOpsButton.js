import styled from 'styled-components';

import { colorBlue, colorDarkBlue } from '../../styles/designTokens';
import RedirectButton from '../RedirectButton';

const DevOpsButton = styled(RedirectButton)`
  background-color: ${colorBlue};
  border-bottom-color: ${colorDarkBlue};
`;

export default DevOpsButton;
