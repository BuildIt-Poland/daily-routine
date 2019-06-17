import React from 'react';

import { MALE, FEMALE } from '../../../constants/genders';
import { CONFUSED } from '../../../constants/characterMoods';
import { gender, mood } from '../../../types';
import Wrapper from '../Wrapper';
import RobotArtwork from './RobotArtwork';
import ConfusionMarks from './ConfusionMarks';
import GenderFlower from './GenderFlower';

function Robot({ gender = MALE, mood = CONFUSED }) {
  return (
    <Wrapper>
      <RobotArtwork mood={mood} />
      {mood === CONFUSED && <ConfusionMarks />}
      {gender === FEMALE && <GenderFlower />}
    </Wrapper>
  );
}

Robot.propTypes = {
  gender,
  mood
};

export default Robot;
