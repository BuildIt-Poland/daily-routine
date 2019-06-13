import React from 'react';
import styled from 'styled-components';
import SugarCatArtwork from './SugarCatArtwork';

const Wrapper = styled.div`
  margin: 4rem 0 6rem 0;
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
