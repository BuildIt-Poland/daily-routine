import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: ${props => props.theme.primaryColor};
`;

export default Wrapper;
