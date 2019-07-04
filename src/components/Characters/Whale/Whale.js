import React, { useContext } from 'react';

import { DEFAULT } from '../../../constants/roleActions';
import { FEMALE } from '../../../constants/genders';
import { pose } from '../../../types';
import { GenderContext } from '../../../context/GenderContext';
import FloatingAnimationWrapper from './FloatingAnimationWrapper';
import WhaleArtwork from './WhaleArtwork';
import AnimatedWhaleShadow from './AnimatedWhaleShadow';
import ConfusionMarks from './ConfusionMarks';
import GenderFlower from './GenderFlower';

function Whale({ pose = DEFAULT }) {
  const { gender } = useContext(GenderContext);

  return (
    <>
      <AnimatedWhaleShadow />
      <FloatingAnimationWrapper>
        <WhaleArtwork pose={pose} />
        {pose === DEFAULT && <ConfusionMarks />}
        {<GenderFlower isVisible={gender === FEMALE} />}
      </FloatingAnimationWrapper>
    </>
  );
}

Whale.propTypes = {
  pose
};

export default Whale;
