// Button wrapper with all styles removed
// Useful for accessible action icons / target areas

import styled from 'styled-components';

const Hitbox = styled.button`
  position: relative;
  border: 0;
  margin: 0;
  padding: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4rem;
  min-height: 4rem;
  cursor: pointer;
  outline: 0;
`;

export default Hitbox;
