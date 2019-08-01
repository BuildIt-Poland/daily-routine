import React from 'react';

import { socialMediaVariant } from '../../types';
import { Facebook, Twitter } from '../Icons';
import Hitbox from '../Hitbox';
import { FACEBOOK, TWITTER } from '../../constants/socialMedia';

const socialMediaData = {
  [FACEBOOK]: {
    shareUrl: `http://www.facebook.com/sharer.php?u=${window.location.href}`,
    icon: Facebook,
    testID: 'facebook-share-button'
  },
  [TWITTER]: {
    shareUrl: `http://www.twitter.com/share?url=${window.location.href}`,
    icon: Twitter,
    testID: 'twitter-share-button'
  }
};

function DesktopShare({ variant }) {
  const { icon: Icon, shareUrl, testID } = socialMediaData[variant];

  const share = () =>
    window.open(
      shareUrl,
      'shareWindow',
      'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=275'
    );

  return (
    <Hitbox onClick={share} data-testid={testID}>
      <Icon />
    </Hitbox>
  );
}

DesktopShare.propTypes = {
  variant: socialMediaVariant.isRequired
};

export default DesktopShare;
