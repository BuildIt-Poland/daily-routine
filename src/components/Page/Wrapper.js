import styled from 'styled-components';

import media from '../../styles/media';

const Wrapper = styled.article`
  display: grid;
  grid-template-rows: auto minmax(46rem, max-content) 1fr;
  align-content: stretch;
  height: 100%;

  ${media.phone`
    grid-template-rows: auto 1fr auto;
  `};
`;

export default Wrapper;
