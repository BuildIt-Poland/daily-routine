import styled from 'styled-components';

import { spacingSmall, fontXLarge } from '../../styles/designTokens';
import ContentBase from '../Content';

const Content = styled(ContentBase)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${spacingSmall};
  line-height: ${fontXLarge};
`;

export default Content;
