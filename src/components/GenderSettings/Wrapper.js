import styled from 'styled-components';

import { colorDarkPink, borderRadius } from '../../styles/designTokens';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${borderRadius};

  &:focus-within {
    background-color: ${colorDarkPink};
    box-shadow: 0 0 0 0.6rem ${colorDarkPink};
  }
`;

export default Wrapper;
