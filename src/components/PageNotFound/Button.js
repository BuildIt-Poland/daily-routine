import styled from 'styled-components';

import { colorGreen, colorDarkGreen } from '../../styles/designTokens';
import RedirectButton from '../RedirectButton';

const Button = styled(RedirectButton)`
  background-color: ${colorGreen};
  border-bottom-color: ${colorDarkGreen};
`;

export default Button;
