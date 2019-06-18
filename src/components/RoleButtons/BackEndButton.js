import styled from 'styled-components';

import { colorPurple, colorDeepPurple } from '../../styles/designTokens';
import ButtonBase from './ButtonBase';

const BackEndButton = styled(ButtonBase)`
  background-color: ${colorPurple};
  border-bottom-color: ${colorDeepPurple};
`;

export default BackEndButton;
