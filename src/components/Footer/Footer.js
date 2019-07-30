import React from 'react';
import styled from 'styled-components';

import { Heart, BuilditLogo } from '../Icons';
import Content from './Content';
import Wrapper from './Wrapper';
import Link from './Link';

const DimmedText = styled.span`
  opacity: 0.3;
`;

function Footer() {
  return (
    <Wrapper>
      <Content narrow>
        <span>
          <DimmedText>Break the routine and</DimmedText>
          <Link href="https://buildit.wiprodigital.com/careers/" data-testid="buildit-career-link" highlight>
            join us!
          </Link>
        </span>
        <span>
          <DimmedText>Feed the routine and</DimmedText>
          <Link href="https://github.com/BuildIt-Poland/daily-routine" data-testid="github-link" highlight>
            contribute!
          </Link>
        </span>
        <Link href="https://buildit.wiprodigital.com/" data-testid="buildit-home-page-link">
          Crafted with
          <Heart />
          by
          <BuilditLogo />
        </Link>
      </Content>
    </Wrapper>
  );
}

export default Footer;
