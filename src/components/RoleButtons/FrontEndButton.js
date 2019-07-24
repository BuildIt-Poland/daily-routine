import styled from 'styled-components';

import { colorYellow, colorDarkYellow } from '../../styles/designTokens';
import RoleButton from '../RoleButton';

const FrontEndButton = styled(RoleButton)`
  background-color: ${colorYellow};
  border-bottom-color: ${colorDarkYellow};
`;

export default FrontEndButton;
