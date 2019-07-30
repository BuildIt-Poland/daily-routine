import React from 'react';

import { GithubLogo } from '../Icons';
import Content from './Content';
import Wrapper from './Wrapper';
import Link from './Link';
import DesktopOnly from './DesktopOnly';
import CraftedWitLove from './CraftedWithLove';

function Footer() {
  return (
    <Wrapper>
      <Content narrow>
        <CraftedWitLove />
        <Link href="https://github.com/BuildIt-Poland/daily-routine" data-testid="github-link">
          <GithubLogo />
          <DesktopOnly>Contribute</DesktopOnly>
        </Link>
        <Link href="https://buildit.wiprodigital.com/careers/" data-testid="buildit-career-link">
          We are hiring!
        </Link>
      </Content>
    </Wrapper>
  );
}

export default Footer;
