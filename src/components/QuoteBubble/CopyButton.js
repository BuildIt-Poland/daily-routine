import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { CopyCards } from '../Icons';
import Hitbox from '../Hitbox';

function CopyButton({ valueToCopy }) {
  return (
    <CopyToClipboard text={valueToCopy}>
      <Hitbox>
        <CopyCards />
      </Hitbox>
    </CopyToClipboard>
  );
}

CopyButton.propTypes = {
  valueToCopy: PropTypes.string.isRequired
};

export default CopyButton;
