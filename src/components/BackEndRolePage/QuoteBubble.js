import styled from 'styled-components';

import { spacingMedium } from '../../styles/designTokens';
import QuoteBubbleBase from '../QuoteBubble';

const QuoteBubble = styled(QuoteBubbleBase)`
  margin-bottom: -${spacingMedium};
`;

export default QuoteBubble;
