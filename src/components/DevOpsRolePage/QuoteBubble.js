import styled from 'styled-components';

import { spacingSmall } from '../../styles/designTokens';
import QuoteBubbleBase from '../QuoteBubble';

const QuoteBubble = styled(QuoteBubbleBase)`
  margin-bottom: -${spacingSmall};
`;

export default QuoteBubble;
