import React, { useEffect, useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { animated, useTransition, config } from 'react-spring';
import { colorLightTeal } from '../../styles/designTokens';
import extractRoleFromPath from '../../utils/extractRoleFromPath';
import generateColors from '../../utils/generateColors';

const Wrapper = styled(animated.div)`
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

function Animator({ children, location, theme }) {
  const { pathname } = location;
  const { primaryColor } = theme;
  const currentRole = extractRoleFromPath(pathname);

  const [previousRole, setPreviousRole] = useState(currentRole);
  useEffect(() => setPreviousRole(currentRole), [previousRole, currentRole]);

  const didRouteChanged = previousRole !== currentRole;
  const { primaryColor: previousPrimaryColor } = generateColors(previousRole);

  const bgTransitions = useTransition(pathname, currentRole, {
    from: { backgroundColor: didRouteChanged ? previousPrimaryColor : primaryColor },
    enter: { backgroundColor: primaryColor },
    leave: { backgroundColor: primaryColor },
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
