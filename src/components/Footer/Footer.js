import React from 'react';

import { Heart, BuilditLogo, GithubLogo } from '../Icons';
import Wrapper from './Wrapper';
import Link from './Link';
import DesktopOnly from './DesktopOnly';

function Footer() {
  return (
    <Wrapper>
      <Link href="https://buildit.wiprodigital.com/" data-testid="buildit-home-page-link">
        Crafted with <Heart /> by <BuilditLogo />
      </Link>
      <Link href="https://github.com/BuildIt-Poland/daily-routine" data-testid="github-link">
        <GithubLogo />
        <DesktopOnly>Contribute</DesktopOnly>
      </Link>
      <Link href="https://buildit.wiprodigital.com/careers/" data-testid="buildit-career-link">
        We are hiring!
      </Link>
    </Wrapper>
  );
}

export default Footer;
