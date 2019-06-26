import React from 'react';

import { DEFAULT } from '../../../constants/roleActions';
import { MALE, FEMALE } from '../../../constants/genders';
import { gender, pose } from '../../../types';
import Wrapper from './Wrapper';
import RobotArtwork from './RobotArtwork';
import ConfusionMarks from './ConfusionMarks';
import GenderFlower from './GenderFlower';

function Robot({ gender = MALE, pose = DEFAULT }) {
  return (
    <Wrapper>
      <RobotArtwork pose={pose} />
      {pose === DEFAULT && <ConfusionMarks />}
      {gender === FEMALE && <GenderFlower />}
    </Wrapper>
  );
}

Robot.propTypes = {
  gender,
  pose
};

export default Robot;
