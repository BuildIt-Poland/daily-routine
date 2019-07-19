import React, { useContext } from 'react';
import { Link as LinkBase } from 'react-router-dom';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import { location } from '../../types';
import { RouteTransitionAnimationContext } from '../../context/RouteTransitionAnimationContext';
import { colorBlack, spacingSmall, borderWidthThin } from '../../styles/designTokens';
import { ROOT_PATH } from '../../constants/routes';
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
  line-height: 1.2;
  text-transform: uppercase;
`;

function Logo({ location }) {
  const { animateAndRedirect } = useContext(RouteTransitionAnimationContext);

  function isRootPath(location) {
    return location.pathname !== ROOT_PATH;
  }

  function handleClick(e) {
    e.preventDefault();
    if (isRootPath(location)) {
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

export default withRouter(Logo);
