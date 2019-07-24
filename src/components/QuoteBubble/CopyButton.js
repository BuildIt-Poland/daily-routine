import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { CopyCards } from '../Icons';
import Hitbox from '../Hitbox';
import CopyNotification from './CopyNotification';

function CopyButton({ valueToCopy }) {
  const [isNotificationVisible, setIsVisible] = useState(false);

  return (
    <CopyToClipboard text={valueToCopy} onCopy={() => setIsVisible(true)}>
      <Hitbox>
        <CopyNotification isVisible={isNotificationVisible} onFinished={() => setIsVisible(false)} />
        <CopyCards />
      </Hitbox>
    </CopyToClipboard>
  );
}

CopyButton.propTypes = {
  valueToCopy: PropTypes.string.isRequired
};

export default CopyButton;
