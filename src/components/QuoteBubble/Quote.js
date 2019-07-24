import styled from 'styled-components';
import media from '../../styles/media';

const Quote = styled.p`
  margin: 0;
  padding: 1.6rem 2.4rem;
  padding-bottom: 3rem;

  ${media.smallPhone`
    
    padding-top: 1.5rem 1.8rem;
    padding-bottom: ${props => (props.default ? 1.5 : 0)}rem
    font-size: 1.3rem
    max-height: 105px;
  `};
`;

export default Quote;
