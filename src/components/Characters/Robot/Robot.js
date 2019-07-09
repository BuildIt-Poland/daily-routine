import React, { useContext } from 'react';

import { DEFAULT, CONFESS } from '../../../constants/roleActions';
import { FEMALE } from '../../../constants/genders';
import { pose } from '../../../types';
import { GenderContext } from '../../../context/GenderContext';
import Wrapper from './Wrapper';
import RobotArtwork from './RobotArtwork';
import ConfusionMarks from './ConfusionMarks';
import GenderFlower from './GenderFlower';
import Tear from './Tear';

function Robot({ pose = DEFAULT }) {
  const { gender } = useContext(GenderContext);

  return (
    <Wrapper>
      <RobotArtwork pose={pose} />
      {pose === CONFESS && <Tear />}
      {pose === DEFAULT && <ConfusionMarks />}
      <GenderFlower isVisible={gender === FEMALE} />
    </Wrapper>
  );
}

Robot.propTypes = {
  pose
};

export default Robot;
