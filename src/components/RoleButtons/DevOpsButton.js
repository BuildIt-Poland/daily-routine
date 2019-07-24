import styled from 'styled-components';

import { colorBlue, colorDarkBlue } from '../../styles/designTokens';
import RoleButton from '../RoleButton';

const DevOpsButton = styled(RoleButton)`
  background-color: ${colorBlue};
  border-bottom-color: ${colorDarkBlue};
`;

export default DevOpsButton;
