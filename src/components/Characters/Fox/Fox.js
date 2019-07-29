import React, { useContext } from 'react';

import { DEFAULT, CONFESS } from '../../../constants/roleActions';
import { FEMALE } from '../../../constants/genders';
import { pose } from '../../../types';
import { GenderContext } from '../../../context/GenderContext';
import Wrapper from './Wrapper';
import Frame from './Frame';
import FoxArtwork from './FoxArtwork';
import ConfusionMarks from './ConfusionMarks';
import GenderFlower from './GenderFlower';
import Tear from './Tear';
import Tail from './Tail';

function Fox({ pose = DEFAULT }) {
  const { gender } = useContext(GenderContext);

  return (
    <Wrapper>
      <Frame>
        <FoxArtwork pose={pose} />
        <Tail />
      </Frame>
      {pose === CONFESS && <Tear />}
      {pose === DEFAULT && <ConfusionMarks />}
      <GenderFlower isVisible={gender === FEMALE} />
    </Wrapper>
  );
}

Fox.propTypes = {
  pose
};

export default Fox;
