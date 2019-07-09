import React from 'react';
import styled, { keyframes } from 'styled-components';

import SugarCubeLeftLegArtwork from './SugarCubeLeftLegArtwork';
import SugarCubeRightLegArtwork from './SugarCubeRightLegArtwork';

const leftLegWaveAnimation = keyframes`
  0% { transform: translateX(0) rotate(-5deg); }
  50% { transform: translateX(-8px) rotate(35deg); }
  100% { transform: translateX(0) rotate(-5deg); }
`;

const rightLegWaveAnimation = keyframes`
  0% { transform: translateX(0) rotate(-5deg); }
  50% { transform: translateX(-9px) rotate(25deg); }
  100% { transform: translateX(0) rotate(-5deg); }
`;

const SugarCubeLeftLeg = styled(SugarCubeLeftLegArtwork)`
  position: absolute;
  bottom: 2.1rem;
  left: 23rem;
  animation: ${rightLegWaveAnimation} 2.5s ease-in-out -0.3s infinite;
`;

const SugarCubeRightLeg = styled(SugarCubeRightLegArtwork)`
  position: absolute;
  bottom: 2rem;
  left: 23.8rem;
  animation: ${leftLegWaveAnimation} 2.5s ease-in-out infinite;
`;

function SugarCubeLegs() {
  return (
    <>
      <SugarCubeLeftLeg />
      <SugarCubeRightLeg />
    </>
  );
}

export default SugarCubeLegs;
