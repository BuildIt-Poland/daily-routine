import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacingMedium } from '../../styles/designTokens';
import GearButton from '../GearButton';
import Subheadline from '../Subheadline';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${spacingMedium};
  height: 5rem;
  background-color: rgba(255, 255, 255, 0.5);
`;

function RoleBar({ label }) {
  return (
    <Header>
      <Subheadline>
        I am <strong>{label}</strong>
      </Subheadline>
      <GearButton />
    </Header>
  );
}

RoleBar.propTypes = {
  label: PropTypes.string.isRequired
};

export default RoleBar;
