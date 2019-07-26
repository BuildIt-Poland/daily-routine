import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { spacingMedium } from '../../styles/designTokens';
import { QuoteProvider } from '../../context/QuoteContext';

const Wrapper = styled.div`
  max-width: 48rem;
  padding: 0 ${spacingMedium};
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
  align-items: end;
`;

function RoleContent({ children }) {
  return (
    <QuoteProvider>
      <Wrapper>{children}</Wrapper>
    </QuoteProvider>
  );
}

RoleContent.propTypes = {
  children: PropTypes.node
};

export default RoleContent;
