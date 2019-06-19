import styled from 'styled-components';

import { colorBlue, colorDarkBlue } from '../../styles/designTokens';
import ButtonBase from './ButtonBase';

const DevOpsButton = styled(ButtonBase)`
  background-color: ${colorBlue};
  border-bottom-color: ${colorDarkBlue};
`;

export default DevOpsButton;
