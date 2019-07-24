import styled from 'styled-components';

import { colorPurple, colorDeepPurple } from '../../styles/designTokens';
import RoleButton from '../RoleButton';

const BackEndButton = styled(RoleButton)`
  background-color: ${colorPurple};
  border-bottom-color: ${colorDeepPurple};
`;

export default BackEndButton;
