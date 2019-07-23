import React from 'react';
import styled from 'styled-components';

import { FACEBOOK, TWITTER } from '../../constants/socialMedia';
import { bubble } from '../../types';
import CopyButton from './CopyButton';
import MobileShare from './MobileShare';
import DesktopShare from './DesktopShare';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  padding-bottom: 1rem;
  padding-right: 1rem;
`;

function ButtonsGroup({ bubble }) {
  const { quote, isInDefaultPose } = bubble;
  const canUseShareAPI = !!navigator.share;

  return (
    <FlexWrapper>
      {!isInDefaultPose && <CopyButton valueToCopy={quote} />}
      {canUseShareAPI && <MobileShare />}
      {!canUseShareAPI && (
        <>
          <DesktopShare socialMediaType={FACEBOOK} />
          <DesktopShare socialMediaType={TWITTER} />
        </>
      )}
    </FlexWrapper>
  );
}

ButtonsGroup.propTypes = {
  bubble: bubble.isRequired
};

export default ButtonsGroup;
