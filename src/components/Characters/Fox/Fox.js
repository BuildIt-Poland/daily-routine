import React, { useContext } from 'react';

import { DEFAULT } from '../../../constants/roleActions';
import { FEMALE } from '../../../constants/genders';
import { gender } from '../../../types';
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
      {gender === FEMALE && <GenderFlower />}
    </Wrapper>
  );
}

Fox.propTypes = {
  gender
};

export default Fox;
