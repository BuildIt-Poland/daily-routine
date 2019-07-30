import styled from 'styled-components';

const Quote = styled.p`
  margin: 0;
  padding: 1.6rem 2.4rem;
  padding-bottom: ${props => (props.error ? 2.4 : 0)}rem;
`;

export default Quote;
