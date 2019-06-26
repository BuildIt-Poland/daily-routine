import React from 'react';

import { DEFAULT } from '../../../constants/roleActions';
import { FEMALE, MALE } from '../../../constants/genders';
import { gender, pose } from '../../../types';
import Wrapper from './Wrapper';
import WhaleArtwork from './WhaleArtwork';
import ConfusionMarks from './ConfusionMarks';
import GenderFlower from './GenderFlower';

function Whale({ gender = MALE, pose = DEFAULT }) {
  return (
    <Wrapper>
      <WhaleArtwork pose={pose} />
      {pose === DEFAULT && <ConfusionMarks />}
      {gender === FEMALE && <GenderFlower />}
    </Wrapper>
  );
}

Whale.propTypes = {
  gender,
  pose
};

export default Whale;
