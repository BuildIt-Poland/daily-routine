import React from 'react';
import styled from 'styled-components';
import SugarCatSVG from './SugarCatArtwork';

const Wrapper = styled.div`
  margin: 4rem 0;
  display: flex;
  justify-content: center;
`;

function SugarCat() {
  return (
    <Wrapper>
      <SugarCatSVG />
    </Wrapper>
  );
}

export default SugarCat;
