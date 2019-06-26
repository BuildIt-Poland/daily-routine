import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Wrapper from './Wrapper';

function RadioButton({ children, value, checked, onChange }) {
  return (
    <Wrapper checked={checked}>
      <Input name="radio-button" type="radio" value={value} checked={checked} onChange={onChange} />
      {children}
    </Wrapper>
  );
}

RadioButton.prototype = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioButton;
