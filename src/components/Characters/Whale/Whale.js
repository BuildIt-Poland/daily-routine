import React, { useContext } from 'react';

import { DEFAULT, CONFESS } from '../../../constants/roleActions';
import { FEMALE } from '../../../constants/genders';
import { pose } from '../../../types';
import { GenderContext } from '../../../context/GenderContext';
import FloatingAnimationWrapper from './FloatingAnimationWrapper';
import WhaleArtwork from './WhaleArtwork';
import AnimatedWhaleShadow from './AnimatedWhaleShadow';
import ConfusionMarks from './ConfusionMarks';
import GenderFlower from './GenderFlower';
import Tear from './Tear';

function Whale({ pose = DEFAULT }) {
  const { gender } = useContext(GenderContext);

  return (
    <>
      <FloatingAnimationWrapper>
        <AnimatedWhaleShadow />
        <WhaleArtwork pose={pose} />
        {pose === CONFESS && <Tear />}
        {pose === DEFAULT && <ConfusionMarks />}
        <GenderFlower isVisible={gender === FEMALE} />
      </FloatingAnimationWrapper>
    </>
  );
}

Whale.propTypes = {
  pose
};

export default Whale;
