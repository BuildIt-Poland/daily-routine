import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Label from './Label';

function RadioButton({ children, value, checked, onChange, ...props }) {
  return (
    <Label {...props} checked={checked}>
      <Input name="gender" type="radio" value={value} checked={checked} onChange={onChange} />
      {children}
    </Label>
  );
}

RadioButton.prototype = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioButton;
