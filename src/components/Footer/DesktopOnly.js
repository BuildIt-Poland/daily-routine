import styled from 'styled-components';

import media from '../../styles/media';

const DesktopOnly = styled.span`
  ${media.phone`
    display: none;
  `}
`;

export default DesktopOnly;
