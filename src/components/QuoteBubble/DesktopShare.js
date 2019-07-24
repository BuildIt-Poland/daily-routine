import React from 'react';

import { socialMediaVariant } from '../../types';
import { Facebook, Twitter } from '../Icons';
import Hitbox from '../Hitbox';
import { FACEBOOK, TWITTER } from '../../constants/socialMedia';

const socialMediaData = {
  [FACEBOOK]: {
    shareUrl: `http://www.facebook.com/sharer.php?u=${window.location.href}`,
    Icon: Facebook
  },
  [TWITTER]: {
    shareUrl: `http://www.twitter.com/share?url=${window.location.href}`,
    Icon: Twitter
  }
};

function DesktopShare({ variant }) {
  const { Icon, shareUrl } = socialMediaData[variant];

  const share = () =>
    window.open(
      shareUrl,
      'shareWindow',
      'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=275'
    );

  return (
    <Hitbox onClick={share}>
      <Icon />
    </Hitbox>
  );
}

DesktopShare.propTypes = {
  variant: socialMediaVariant.isRequired
};

export default DesktopShare;