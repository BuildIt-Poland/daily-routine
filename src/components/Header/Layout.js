import styled from 'styled-components';

import { colorWhite, spacingMedium } from '../../styles/designTokens';

const Layout = styled.header`
  width: 100%;
  background: ${colorWhite};
  height: 6rem;
  display: flex;
  align-items: center;
  padding: 0 ${spacingMedium};
`;

export default Layout;
