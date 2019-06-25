import styled from 'styled-components';

import { borderRadius } from '../../styles/designTokens';
import RadioLabel from './RadioLabel';

const FemaleRadioLabel = styled(RadioLabel)`
  border-radius: 0 ${borderRadius} ${borderRadius} 0;
`;

export default FemaleRadioLabel;
