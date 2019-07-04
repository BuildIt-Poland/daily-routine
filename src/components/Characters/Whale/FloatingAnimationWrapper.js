import styled, { keyframes } from 'styled-components';

import { spacingLarge } from '../../../styles/designTokens';

const floatingAnimation = keyframes`
	0% { transform: translatey(0px); }
	50% { transform: translatey(-30px); }
	100% { transform: translatey(0px); }
`;

const FloatingAnimationWrapper = styled.div`
  margin: 6rem 0 ${spacingLarge} 0;
  position: relative;
  animation: ${floatingAnimation} 5s ease-in-out infinite;
`;

export default FloatingAnimationWrapper;
