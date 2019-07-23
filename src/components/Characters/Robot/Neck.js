import React from 'react';
import styled from 'styled-components';

import { zIndexDefault } from '../../../styles/designTokens';

function NeckArtwork(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="16" viewBox="0 0 52 16" {...props}>
      <path fill="currentColor" d="M2.326 0h47.795v16H2.326z" />
      <path d="M.412 16L.956 0H4.24v16H.412zm51.176 0V0h-2.933v16h2.933z" fill="#222" />
    </svg>
  );
}

const Neck = styled(NeckArtwork)`
  position: absolute;
  top: 5.6rem;
  left: 4.4rem;
  z-index: ${zIndexDefault};
`;

export default Neck;
