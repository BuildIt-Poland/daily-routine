import styled from 'styled-components';

import media from '../../styles/media';
import { spacingSmall, spacingMedium } from '../../styles/designTokens';
import ContentBase from '../Content';

const Content = styled(ContentBase)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${spacingSmall};
  padding-bottom: ${spacingMedium};

  ${media.phone`
    flex-direction: column;
    align-items: center;
  `};
`;

export default Content;
