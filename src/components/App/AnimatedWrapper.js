import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { animated, useTransition, config } from 'react-spring';

import { location, theme } from '../../types';
import extractRoleFromPath from '../../utils/extractRoleFromPath';
import generateColors from '../../utils/generateColors';

const Wrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

function usePreviousRole(currentRole) {
  const [previousRole, setPreviousRole] = useState(currentRole);
  useEffect(() => setPreviousRole(currentRole), [currentRole]);

  return previousRole;
}

function AnimatedWrapper({ children, location, theme }) {
  const { pathname } = location;
  const { primaryColor } = theme;

  const currentRole = extractRoleFromPath(pathname);
  const previousRole = usePreviousRole(currentRole);

  const didRouteChanged = previousRole !== currentRole;
  const previousTheme = generateColors(previousRole);
  const previousPrimaryColor = previousTheme.primaryColor;

  const bgTransitions = useTransition(pathname, currentRole, {
    from: { backgroundColor: didRouteChanged ? previousPrimaryColor : primaryColor },
    enter: { backgroundColor: primaryColor },
    leave: { backgroundColor: primaryColor },
    config: config.gentle
  });

  return bgTransitions.map(
    ({ item, props, key }) =>
      item && (
        <Wrapper key={key} style={props}>
          {children}
        </Wrapper>
      )
  );
}

AnimatedWrapper.propTypes = {
  children: node.isRequired,
  location: location.isRequired,
  theme: theme.isRequired
};

export default withTheme(AnimatedWrapper);
