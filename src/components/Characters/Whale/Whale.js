import React from 'react';

import { CONFUSED } from '../../../constants/characterMoods';
import { FEMALE, MALE } from '../../../constants/genders';
import { gender, mood } from '../../../types';
import Wrapper from './Wrapper';
import WhaleArtwork from './WhaleArtwork';
import ConfusionMarks from './ConfusionMarks';
import GenderFlower from './GenderFlower';

function Whale({ gender = MALE, mood = CONFUSED }) {
  return (
    <Wrapper>
      <WhaleArtwork mood={mood} />
      {mood === CONFUSED && <ConfusionMarks />}
      {gender === FEMALE && <GenderFlower />}
    </Wrapper>
  );
}

Whale.propTypes = {
  gender,
  mood
};

export default Whale;
