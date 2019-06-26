import React from 'react';

import { DEFAULT } from '../../../constants/roleActions';
import { FEMALE, MALE } from '../../../constants/genders';
import { gender, pose } from '../../../types';
import Wrapper from './Wrapper';
import FoxArtwork from './FoxArtwork';
import ConfusionMarks from './ConfusionMarks';
import GenderFlower from './GenderFlower';

function Fox({ gender = MALE, pose = DEFAULT }) {
  return (
    <Wrapper>
      <FoxArtwork pose={pose} />
      {pose === DEFAULT && <ConfusionMarks />}
      {gender === FEMALE && <GenderFlower />}
    </Wrapper>
  );
}

Fox.propTypes = {
  gender,
  pose
};

export default Fox;
