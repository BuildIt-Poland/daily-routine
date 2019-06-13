import styled from 'styled-components';

import { spacingMedium } from '../../styles/designTokens';

const Layout = styled.footer`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${spacingMedium};
`;

export default Layout;