import styled, { keyframes } from 'styled-components';

import { spacingLarge } from '../../../styles/designTokens';

const floatingAnimation = keyframes`
	0% { transform: translateY(0); }
	50% { transform: translateY(-20px); }
	100% { transform: translateY(0); }
`;

const FloatingAnimationWrapper = styled.div`
  padding: 7.8rem 0 ${spacingLarge} 0;
  position: relative;
  animation: ${floatingAnimation} 5s ease-in-out infinite;
`;

export default FloatingAnimationWrapper;
