import styled from 'styled-components';

import media from '../../styles/media';

const Text = styled.span`
  max-width: 14rem;

  ${media.phone`
    max-width: inherit;
  `};
`;

export default Text;
