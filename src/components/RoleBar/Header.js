import styled from 'styled-components';

import { spacingMedium } from '../../styles/designTokens';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.4rem 0 ${spacingMedium};
  height: 5rem;
  background-color: rgba(255, 255, 255, 0.5);
`;

export default Header;
