// Generic responsive content wrapper

import styled from 'styled-components';

import { spacingMedium } from '../../styles/designTokens';

const Content = styled.div`
  max-width: 48rem;
  padding: 0 ${spacingMedium};
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
  align-items: end;
`;

export default Content;
