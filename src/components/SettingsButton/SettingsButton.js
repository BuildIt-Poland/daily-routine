import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MALE_GENDER, FEMALE_GENDER } from '../../constants/gender';
import { fontWeightBold, spacingSmall } from '../../styles/designTokens';
import MaleButton from './MaleButton';
import FemaleButton from './FemaleButton';

const Label = styled.label`
  font-weight: ${fontWeightBold};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: ${spacingSmall} 0;
`;

function SettingsButton({ gender, onChange }) {
  return (
    <div>
      <Label>Gender</Label>
      <ButtonGroup>
        <MaleButton checked={gender === MALE_GENDER} onChange={onChange} />
        <FemaleButton checked={gender === FEMALE_GENDER} onChange={onChange} />
      </ButtonGroup>
    </div>
  );
}

SettingsButton.prototype = {
  gender: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SettingsButton;
