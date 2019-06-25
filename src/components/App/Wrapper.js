import React from 'react';
import styled, { withTheme } from 'styled-components';
import { animated, useTransition, config } from 'react-spring';
import { colorLightTeal } from '../../styles/designTokens';
import extractRoleFromPath from '../../utils/extractRoleFromPath';

const AnimatedDiv = styled(animated.div)`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: ${props => props.theme.primaryColor};
`;

function Wrapper({ children, location, theme }) {
  const currentRole = extractRoleFromPath(location.pathname);
  const bgTransitions = useTransition(location.pathname, currentRole, {
    from: { backgroundColor: colorLightTeal },
    enter: { backgroundColor: theme.primaryColor },
    leave: { backgroundColor: colorLightTeal },
    config: config.woobly
  });

  return bgTransitions.map(
    ({ item, props, key }) =>
      item && (
        <AnimatedDiv key={key} style={props}>
          {children}
        </AnimatedDiv>
      )
  );
}

export default withTheme(Wrapper);
