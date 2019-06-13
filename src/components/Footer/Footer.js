import React from 'react';

import { Heart, BuilditLogo, GithubLogo } from '../Icons';
import Layout from './Layout';
import Link from './Link';
import DesktopOnly from './DesktopOnly';

function Footer() {
  return (
    <Layout>
      <Link href="https://buildit.wiprodigital.com/">
        Crafted with <Heart /> by <BuilditLogo />
      </Link>
      <Link href="https://github.com/BuildIt-Poland/daily-routine">
        <GithubLogo />
        <DesktopOnly>Contribute</DesktopOnly>
      </Link>
      <Link href="https://buildit.wiprodigital.com/careers/">We are hiring!</Link>
    </Layout>
  );
}

export default Footer;
