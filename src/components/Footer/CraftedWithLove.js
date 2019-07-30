import React, { useState } from 'react';
import { useSpring } from 'react-spring';

import { colorRed, colorBlack } from '../../styles/designTokens';
import { Heart, BuilditLogo } from '../Icons';
import Link from './Link';

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
    color: x.interpolate({ range: [0, 0.25, 1], output: [colorBlack, colorRed, colorRed] }),
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
