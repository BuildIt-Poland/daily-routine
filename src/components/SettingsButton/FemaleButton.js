import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FEMALE_GENDER } from '../../constants/gender';
import { borderRadius } from '../../styles/designTokens';
import BaseLabel from './BaseLabel';
import BaseButton from './BaseButton';

const Label = styled(BaseLabel)`
  border-radius: 0 ${borderRadius} ${borderRadius} 0;
`;

function FemaleButton({ checked, onChange }) {
  return (
    <>
      <BaseButton id="female-button" type="radio" value={FEMALE_GENDER} checked={checked} onChange={onChange} />
      <Label htmlFor="female-button">Female</Label>
    </>
  );
}

FemaleButton.prototype = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FemaleButton;
