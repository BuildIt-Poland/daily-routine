import React, { useContext } from 'react';
import { Link as LinkBase } from 'react-router-dom';
import styled from 'styled-components';

import { colorBlack, spacingSmall, borderWidthThin } from '../../styles/designTokens';
import { Logo as LogoIcon } from '../Icons';
import { LandingPageAnimationContext } from '../../context/LandingPageAnimationContext';
import { ROOT_PATH } from '../../constants/routes';
import { location } from './../../types';
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
  line-height: 1.2;
  text-transform: uppercase;
`;

function Logo({ location }) {
  const { animateAndRedirect } = useContext(LandingPageAnimationContext);

  function handleClick(e) {
    e.preventDefault();
    if (location.pathname !== ROOT_PATH) {
      animateAndRedirect(ROOT_PATH);
    }
  }

  return (
    <Link onClick={handleClick} to={ROOT_PATH} data-testid="logo">
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

Logo.propTypes = {
  location
};

export default Logo;
