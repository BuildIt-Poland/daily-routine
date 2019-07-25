import React from 'react';
import { Share } from '../Icons';

import Hitbox from '../Hitbox';

function MobileShare() {
  const share = () => {
    navigator.share({
      title: document.title,
      url: window.location.href
    });
  };

  return (
    <Hitbox onClick={share}>
      <Share />
    </Hitbox>
  );
}

export default MobileShare;
