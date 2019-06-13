import React from 'react';
import { Link as LinkBase } from 'react-router-dom';
import styled from 'styled-components';

import { colorBlack, spacingSmall, borderWidthThin, fontSmall } from '../../styles/designTokens';
import { Logo as LogoIcon } from '../Icons';

const Link = styled(LinkBase)`
  display: flex;
  text-decoration: none;
  align-items: center;
  height: 100%;
  cursor: pointer;
`;

const LogoWrapper = styled.div`
  padding-top: 0.6rem;
  padding-right: ${spacingSmall};
  margin-right: ${spacingSmall};
  border-right: ${borderWidthThin} solid ${colorBlack};
`;

const Tagline = styled.p`
  margin: 0;
  padding: 0;
  color: ${colorBlack};
  font-size: 1.2rem;
  line-height: 1;
  text-transform: uppercase;
`;

function Logo() {
  return (
    <Link to="/">
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <Tagline>
        Daily scrum <br />
        absurd answers
      </Tagline>
    </Link>
  );
}

export default Logo;
