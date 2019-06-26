import React, { useEffect, useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { animated, useTransition, config } from 'react-spring';
import { colorLightTeal } from '../../styles/designTokens';
import extractRoleFromPath from '../../utils/extractRoleFromPath';

const Wrapper = styled(animated.div)`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: ${props => props.theme.primaryColor};
`;

function Animator({ children, location, theme }) {
  const { pathname } = location;

  const [savedRoute, setRoute] = useState(pathname);
  useEffect(() => setRoute(pathname), [savedRoute, pathname]);

  const currentRole = extractRoleFromPath(pathname);
  const hasRouteChanged = () => savedRoute !== pathname;

  const bgTransitions = useTransition(pathname, currentRole, {
    from: { backgroundColor: hasRouteChanged() ? colorLightTeal : theme.primaryColor },
    enter: { backgroundColor: theme.primaryColor },
    leave: { backgroundColor: colorLightTeal },
    config: config.wobbly
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

export default withTheme(Animator);
