import styled from 'styled-components';

import { spacingSmall } from '../../styles/designTokens';
import ContentBase from '../Content';

const Content = styled(ContentBase)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${spacingSmall};
  line-height: 25px;
`;

export default Content;
