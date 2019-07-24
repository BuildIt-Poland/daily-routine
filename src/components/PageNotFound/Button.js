import styled from 'styled-components';

import { colorGreen, colorDarkGreen } from '../../styles/designTokens';
import RoleButton from '../RoleButton';

const Button = styled(RoleButton)`
  background-color: ${colorGreen};
  border-bottom-color: ${colorDarkGreen};
`;

export default Button;
