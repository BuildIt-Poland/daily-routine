import styled, { withTheme } from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: ${props => props.theme.primaryColor};
`;

export default withTheme(Wrapper);
