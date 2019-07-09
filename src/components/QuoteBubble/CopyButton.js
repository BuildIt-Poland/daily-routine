import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { CopyCards } from '../Icons';
import HitboxBase from '../Hitbox';

const Hitbox = styled(HitboxBase)`
  position: absolute;
  top: 5rem;
  right: 0;
`;

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
