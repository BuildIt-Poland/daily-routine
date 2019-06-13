import styled from 'styled-components';

const Layout = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: ${props => props.theme.primaryColor};
`;

export default Layout;
