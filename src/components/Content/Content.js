// Generic responsive content wrapper

import styled from 'styled-components';

import { spacingMedium } from '../../styles/designTokens';

const Content = styled.div`
  max-width: ${props => (props.narrow ? 48 : 96)}rem;
  padding: 0 ${spacingMedium};
  margin: 0 auto;
  position: relative;
`;

export default Content;
