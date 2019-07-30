import styled from 'styled-components';

import { spacingSmall, spacingMedium } from '../../styles/designTokens';
import ContentBase from '../Content';

const Content = styled(ContentBase)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${spacingSmall};
  padding-bottom: ${spacingMedium};
`;

export default Content;
