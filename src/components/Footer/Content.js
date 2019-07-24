import styled from 'styled-components';

import media from '../../styles/media';
import { spacingSmall, spacingLarge } from '../../styles/designTokens';
import ContentBase from '../Content';

const Content = styled(ContentBase)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: ${spacingSmall};
  padding-bottom: ${spacingLarge};

  ${media.phone`
    justify-content: center;
    padding-top: ${spacingSmall};
    padding-bottom: ${spacingSmall};
  `};
`;

export default Content;
