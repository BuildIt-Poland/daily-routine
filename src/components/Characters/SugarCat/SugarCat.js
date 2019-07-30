import React from 'react';

import Wrapper from './Wrapper';
import Frame from './Frame';
import SugarCatArtwork from './SugarCatArtwork';
import SugarCubeLegs from './SugarCubeLegs';

function SugarCat() {
  return (
    <Wrapper>
      <Frame>
        <SugarCatArtwork />
        <SugarCubeLegs />
      </Frame>
    </Wrapper>
  );
}

export default SugarCat;
