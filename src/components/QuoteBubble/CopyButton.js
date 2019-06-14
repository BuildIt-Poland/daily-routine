import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CopyCards } from '../Icons';

const Wrapper = styled.button`
  position: absolute;
  top: 6rem;
  right: 0;
`;

function CopyButton({ onCopy = () => {} }) {
  return (
    <Wrapper onClick={onCopy}>
      <CopyCards />
    </Wrapper>
  );
}

CopyButton.propTypes = {
  onCopy: PropTypes.func
};

export default CopyButton;
