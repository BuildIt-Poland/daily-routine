import React from 'react';
import styled from 'styled-components';

import { spacingMedium } from '../../styles/designTokens';
import Subheadline from '../Subheadline';
import SlidingPanel from '../SlidingPanel';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${spacingMedium};
  height: 5rem;
  background-color: rgba(255, 255, 255, 0.5);
`;

function RoleBar() {
  return (
    <Header>
      <Subheadline>
        I am <strong>The FrontEnd Developer</strong>
      </Subheadline>
      <SlidingPanel />
    </Header>
  );
}

export default RoleBar;
