import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MALE_GENDER } from '../../constants/gender';
import { borderRadius } from '../../styles/designTokens';
import BaseLabel from './BaseLabel';
import BaseButton from './BaseButton';

const Label = styled(BaseLabel)`
  border-radius: ${borderRadius} 0 0 ${borderRadius};
`;

function MaleButton({ checked, onChange }) {
  return (
    <>
      <BaseButton id="male-button" type="radio" value={MALE_GENDER} checked={checked} onChange={onChange} />
      <Label htmlFor="male-button">Male</Label>
    </>
  );
}

MaleButton.prototype = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MaleButton;
