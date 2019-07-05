import React from 'react';
import styled, { keyframes } from 'styled-components';

import SugarCubeLeftLegArtwork from './SugarCubeLeftLegArtwork';
import SugarCubeRightLegArtwork from './SugarCubeRightLegArtwork';

const rightLegWaveAnimation = keyframes`
  0% { transform: translate(-53px, 272px) rotate(-5deg); }
  50% { transform: translate(-61px, 272px) rotate(35deg); }
  100% { transform: translate(-53px, 272px) rotate(-5deg); }
`;

const leftLegWaveAnimation = keyframes`
  0% { transform: translate(-55px, 272px) rotate(-5deg); }
  50% { transform: translate(-64px, 273px) rotate(25deg); }
  100% { transform: translate(-55px, 272px) rotate(-5deg); }
`;

const SugarCubeLeftLeg = styled(SugarCubeLeftLegArtwork)`
  animation: ${rightLegWaveAnimation} 2.5s ease-in-out -0.3s infinite;
`;

const SugarCubeRightLeg = styled(SugarCubeRightLegArtwork)`
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
