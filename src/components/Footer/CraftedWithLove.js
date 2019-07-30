import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring } from 'react-spring';

import { colorRed, colorOpaqueBlack } from '../../styles/designTokens';
import { Heart, BuilditLogo } from '../Icons';
import Hitbox from './Hitbox';

const Link = styled(Hitbox).attrs({
  target: '_blank'
})`
  svg {
    display: inline-block;
    margin: 0 0.4rem;
  }
`;

function CraftedWithLove() {
  const [isAnimated, setIsAnimated] = useState(false);

  const { x } = useSpring({
    x: isAnimated ? 1 : 0,
    onRest: () => setIsAnimated(false),
    config: {
      tension: 320,
      friction: 36
    }
  });

  const iconAnimation = {
    color: x.interpolate({ range: [0, 0.25, 1], output: [colorOpaqueBlack, colorRed, colorRed] }),
    transform: x.interpolate({ range: [0, 0.5, 1], output: [1, 2.2, 1] }).interpolate(x => `scale(${x})`)
  };

  return (
    <Link
      onMouseEnter={() => setIsAnimated(true)}
      href="https://buildit.wiprodigital.com/"
      data-testid="buildit-home-page-link"
    >
      Crafted with <Heart style={iconAnimation} /> by <BuilditLogo />
    </Link>
  );
}

export default CraftedWithLove;
