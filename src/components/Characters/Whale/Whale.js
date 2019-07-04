import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import { DEFAULT } from '../../../constants/roleActions';
import { FEMALE } from '../../../constants/genders';
import { pose } from '../../../types';
import { GenderContext } from '../../../context/GenderContext';
import Wrapper from './Wrapper';
import WhaleArtwork from './WhaleArtwork';
import ConfusionMarks from './ConfusionMarks';
import GenderFlower from './GenderFlower';

const floatingAnimation = keyframes`
	0% { transform: translatey(0px); }
	50% { transform: translatey(-40px); }
	100% { transform: translatey(0px); }
`;

const AnimatedWrapper = styled(Wrapper)`
  animation: ${floatingAnimation} 6s ease-in-out infinite;
`;

function Whale({ pose = DEFAULT }) {
  const { gender } = useContext(GenderContext);

  return (
    <AnimatedWrapper>
      <WhaleArtwork pose={pose} />
      {pose === DEFAULT && <ConfusionMarks />}
      {gender === FEMALE && <GenderFlower />}
    </AnimatedWrapper>
  );
}

Whale.propTypes = {
  pose
};

export default Whale;
