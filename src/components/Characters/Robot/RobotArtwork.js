import React from 'react';
import styled from 'styled-components';

import { pose } from '../../../types';
import { DEFAULT } from '../../../constants/roleActions';
import Head from './Head';
import Neck from './Neck';
import Chest from './Chest';
import Shadow from './Shadow';
import RighArm from './RightArm';
import LeftArm from './LeftArm';
import RightLeg from './RightLeg';
import LeftLeg from './LeftLeg';

const Frame = styled.div`
  position: relative;
  height: 24.4rem;
  width: 14.8rem;
  color: ${props => props.theme.primaryColor};
`;

function RobotArtwork({ pose = DEFAULT }) {
  return (
    <Frame>
      <Head pose={pose} />
      <Neck />
      <Chest />
      <RighArm />
      <LeftArm />
      <RightLeg />
      <LeftLeg />
      <Shadow />
    </Frame>
  );
}

RobotArtwork.propTypes = {
  pose
};

export default RobotArtwork;
