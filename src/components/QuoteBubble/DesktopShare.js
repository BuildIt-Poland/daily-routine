import React from 'react';

import { socialMediaType } from '../../types';
import { Facebook, Twitter } from '../Icons';
import Hitbox from '../Hitbox';

const socialMedia = {
  facebook: {
    shareUrl: `http://www.facebook.com/sharer.php?u=${window.location.href}`,
    SocialMediaIcon: Facebook
  },
  twitter: {
    shareUrl: `http://www.twitter.com/share?url=${window.location.href}`,
    SocialMediaIcon: Twitter
  }
};

function DesktopShare({ socialMediaType }) {
  const { SocialMediaIcon, shareUrl } = socialMedia[socialMediaType];

  const share = () =>
    window.open(
      shareUrl,
      'targetWindow',
      'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=275'
    );

  return (
    <Hitbox onClick={share}>
      <SocialMediaIcon />
    </Hitbox>
  );
}

DesktopShare.propTypes = {
  socialMediaType: socialMediaType.isRequired
};

export default DesktopShare;
