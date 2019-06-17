import React from 'react';
import styled from 'styled-components';

import { MALE, FEMALE } from '../../../constants/genders';
import { CONFUSED } from '../../../constants/characterMoods';
import { gender, mood } from '../../../types';

import { spacingLarge } from '../../../styles/designTokens';
import RobotArtwork from './RobotArtwork';
import ConfusionMarks from './ConfusionMarks';
import GenderFlower from './GenderFlower';

const Wrapper = styled.div`
  margin: 7.6rem 0 ${spacingLarge} 0;
  position: relative;
`;

function Robot({ gender = MALE, mood = CONFUSED }) {
  return (
    <Wrapper>
      <RobotArtwork mood={mood} />
      {mood === CONFUSED && <ConfusionMarks />}
      {gender === FEMALE && <GenderFlower />}
    </Wrapper>
  );
}

Robot.propTypes = {
  gender,
  mood
};

export default Robot;
