import styled from 'styled-components';

import { borderWidthThick, colorWhite, borderRadius } from '../../styles/designTokens';

const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 3.6rem;
  width: 100%;
  background-color: ${({ theme, checked }) => (checked ? theme.secondaryColor : colorWhite)};
  color: ${({ theme, checked }) => (checked ? colorWhite : theme.secondaryColor)};
  border: ${borderWidthThick} solid ${({ theme }) => theme.secondaryColor};
  border-left: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :first-child {
    border-radius: ${borderRadius} 0 0 ${borderRadius};
    border-left: ${borderWidthThick} solid ${({ theme }) => theme.secondaryColor};
  }

  :last-child {
    border-radius: 0 ${borderRadius} ${borderRadius} 0;
  }

  transition: 150ms linear;
`;

export default Label;
