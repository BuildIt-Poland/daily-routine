import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CopyCards } from '../Icons';
import HitboxBase from '../Hitbox';

const Hitbox = styled(HitboxBase)`
  position: absolute;
  top: 5rem;
  right: 0;
`;

function CopyButton({ onCopy }) {
  return (
    <Hitbox onClick={onCopy}>
      <CopyCards />
    </Hitbox>
  );
}

CopyButton.propTypes = {
  onCopy: PropTypes.func.isRequired
};

export default CopyButton;
