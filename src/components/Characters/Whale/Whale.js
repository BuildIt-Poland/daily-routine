import React from 'react';

import { CONFUSED } from '../../../constants/characterMoods';
import { gender, mood } from '../../../types';
import Wrapper from '../Wrapper';
import ConfusionMarks from './ConfusionMarks';
import WhaleArtwork from './WhaleArtwork';

function Whale({ mood = CONFUSED }) {
  return (
    <Wrapper>
      <WhaleArtwork mood={mood} />
      {mood === CONFUSED && <ConfusionMarks />}
    </Wrapper>
  );
}

Whale.propTypes = {
  gender,
  mood
};

export default Whale;
