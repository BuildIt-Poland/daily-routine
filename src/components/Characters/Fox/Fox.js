import React, { useContext } from 'react';

import { DEFAULT } from '../../../constants/roleActions';
import { FEMALE } from '../../../constants/genders';
import { pose } from '../../../types';
import { GenderContext } from '../../../context/GenderContext';
import Wrapper from './Wrapper';
import FoxArtwork from './FoxArtwork';
import ConfusionMarks from './ConfusionMarks';
import GenderFlower from './GenderFlower';

function Fox({ pose = DEFAULT }) {
  const { gender } = useContext(GenderContext);

  return (
    <Wrapper>
      <FoxArtwork pose={pose} />
      {pose === DEFAULT && <ConfusionMarks />}
      <GenderFlower isVisible={gender === FEMALE} />
    </Wrapper>
  );
}

Fox.propTypes = {
  pose
};

export default Fox;
