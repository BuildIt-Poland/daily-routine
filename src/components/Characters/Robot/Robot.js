import React from 'react';

import { DEFAULT, CONFESS } from '../../../constants/roleActions';
import { pose } from '../../../types';
import Wrapper from './Wrapper';
import RobotArtwork from './RobotArtwork';
import ConfusionMarks from './ConfusionMarks';
import Tear from './Tear';

function Robot({ pose = DEFAULT }) {
  return (
    <Wrapper>
      <RobotArtwork pose={pose} />
      {pose === CONFESS && <Tear />}
      {pose === DEFAULT && <ConfusionMarks />}
    </Wrapper>
  );
}

Robot.propTypes = {
  pose
};

export default Robot;
