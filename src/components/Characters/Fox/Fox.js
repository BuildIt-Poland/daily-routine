import React from 'react';

import FoxArtWork from './FoxArtWork';
import { CONFUSED } from '../../../constants/characterMoods';
import ConfusionMarks from './ConfusionMarks';
import { FEMALE, MALE } from '../../../constants/genders';
import GenderFlower from './GenderFlower';
import { gender, mood } from '../../../types';
import Wrapper from '../Wrapper';

function Fox({ gender = MALE, mood = CONFUSED }) {
  return (
    <Wrapper>
      <FoxArtWork mood={mood} />
      {mood === CONFUSED && <ConfusionMarks />}
      {gender === FEMALE && <GenderFlower />}
    </Wrapper>
  );
}

Fox.propTypes = {
  gender,
  mood
};

export default Fox;
