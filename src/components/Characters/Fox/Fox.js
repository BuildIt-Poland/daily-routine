import React from 'react';

import { CONFUSED } from '../../../constants/characterMoods';
import { FEMALE, MALE } from '../../../constants/genders';
import { gender, mood } from '../../../types';
import Wrapper from '../Wrapper';
import FoxArtWork from './FoxArtWork';
import ConfusionMarks from './ConfusionMarks';
import GenderFlower from './GenderFlower';

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
