import React, { useContext } from 'react';

import { DEFAULT } from '../../../constants/roleActions';
import { FEMALE } from '../../../constants/genders';
import { pose } from '../../../types';
import { GenderContext } from '../../../context/GenderContext';
import Wrapper from './Wrapper';
import RobotArtwork from './RobotArtwork';
import ConfusionMarks from './ConfusionMarks';
import GenderFlower from './GenderFlower';

function Robot({ pose = DEFAULT }) {
  const { gender } = useContext(GenderContext);

  return (
    <Wrapper>
      <RobotArtwork pose={pose} />
      {pose === DEFAULT && <ConfusionMarks />}
      <GenderFlower isVisible={gender === FEMALE} />
    </Wrapper>
  );
}

Robot.propTypes = {
  pose
};

export default Robot;
