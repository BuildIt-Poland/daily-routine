import styled from 'styled-components';

import { spacingMedium } from '../../styles/designTokens';

const Header = styled.header`
  height: 6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${spacingMedium};
  background-color: ${({ theme }) => theme.primaryColor};
`;

export default Header;
