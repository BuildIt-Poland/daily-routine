import React from 'react';
import styled from 'styled-components';

import SugarCatArtwork from './SugarCatArtwork';

const Wrapper = styled.div`
  margin: 0;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
`;

function SugarCat() {
  return (
    <Wrapper>
      <SugarCatArtwork />
    </Wrapper>
  );
}

export default SugarCat;
