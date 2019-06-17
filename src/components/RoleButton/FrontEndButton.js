import styled from 'styled-components';

import { colorYellow, colorDarkYellow } from '../../styles/designTokens';
import ButtonBase from './ButtonBase';

const DevOpsButton = styled(ButtonBase)`
  background-color: ${colorYellow};
  border-bottom-color: ${colorDarkYellow};
`;

export default DevOpsButton;
