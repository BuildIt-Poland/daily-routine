import styled from 'styled-components';

import { borderWidthThick, colorWhite, borderRadius } from '../../styles/designTokens';

const Wrapper = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 4rem;
  width: 100%;
  background-color: ${({ theme, checked }) => (checked ? theme.secondaryColor : colorWhite)};
  color: ${({ theme, checked }) => (checked ? colorWhite : theme.secondaryColor)};
  border: ${borderWidthThick} solid ${({ theme }) => theme.secondaryColor};
  :first-child {
    border-radius: ${borderRadius} 0 0 ${borderRadius};
  }

  :last-child {
    border-radius: 0 ${borderRadius} ${borderRadius} 0;
  }
`;

export default Wrapper;
