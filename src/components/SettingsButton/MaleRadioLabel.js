import styled from 'styled-components';

import { borderRadius } from '../../styles/designTokens';
import RadioLabel from './RadioLabel';

const MaleRadioLabel = styled(RadioLabel)`
  border-radius: ${borderRadius} 0 0 ${borderRadius};
`;

export default MaleRadioLabel;
