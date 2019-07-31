import React from 'react';
import styled, { keyframes } from 'styled-components';

import { zIndexDefault } from '../../../styles/designTokens';
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
  height: 8%;
  bottom: -0.1%;
  right: 13.5%;
  animation: ${rightLegWaveAnimation} 2.5s ease-in-out -0.3s infinite;
  z-index: ${zIndexDefault};
`;

const SugarCubeRightLeg = styled(SugarCubeRightLegArtwork)`
  position: absolute;
  height: 8%;
  bottom: -0.2%;
  right: 11.5%;
  animation: ${leftLegWaveAnimation} 2.5s ease-in-out infinite;
  z-index: ${zIndexDefault};
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
