import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FACEBOOK, TWITTER } from '../../constants/socialMedia';
import CopyButton from './CopyButton';
import MobileShare from './MobileShare';
import DesktopShare from './DesktopShare';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 1rem;
  padding-right: 1rem;
`;

function ButtonsGroup({ quote }) {
  const canUseShareAPI = !!navigator.share;

  return (
    <FlexWrapper>
      {canUseShareAPI && <MobileShare />}
      {!canUseShareAPI && (
        <>
          <DesktopShare variant={FACEBOOK} />
          <DesktopShare variant={TWITTER} />
        </>
      )}
      <CopyButton valueToCopy={quote} />
    </FlexWrapper>
  );
}

ButtonsGroup.propTypes = {
  quote: PropTypes.string.isRequired
};

export default ButtonsGroup;
