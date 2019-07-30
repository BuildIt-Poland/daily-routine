import styled from 'styled-components';

import media from '../../styles/media';
import PageBase from '../Page';

const Page = styled(PageBase)`
  grid-template-rows: minmax(48rem, max-content) 1fr;

  ${media.phone`
    grid-template-rows: 1fr auto;
  `};
`;

export default Page;
