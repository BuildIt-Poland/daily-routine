import React, { useContext } from 'react';

import { DEFAULT } from '../../../constants/roleActions';
import { FEMALE } from '../../../constants/genders';
import { pose } from '../../../types';
import { GenderContext } from '../../../context/GenderContext';
import Wrapper from './Wrapper';
import WhaleArtwork from './WhaleArtwork';
import ConfusionMarks from './ConfusionMarks';
import GenderFlower from './GenderFlower';

function Whale({ pose = DEFAULT }) {
  const { gender } = useContext(GenderContext);

  return (
    <Wrapper>
      <WhaleArtwork pose={pose} />
      {pose === DEFAULT && <ConfusionMarks />}
      {<GenderFlower isVisible={gender === FEMALE} />}
    </Wrapper>
  );
}

Whale.propTypes = {
  pose
};

export default Whale;
