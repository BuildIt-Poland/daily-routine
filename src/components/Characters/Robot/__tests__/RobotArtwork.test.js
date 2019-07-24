import React from 'react';
import { create } from 'react-test-renderer';

import RobotArtwork from '../RobotArtwork';

jest.mock('../Head', () => 'Head');
jest.mock('../Neck', () => 'Neck');
jest.mock('../Chest', () => 'Chest');
jest.mock('../Shadow', () => 'Shadow');
jest.mock('../RightArm', () => 'RightArm');
jest.mock('../LeftArm', () => 'LeftArm');
jest.mock('../RightLeg', () => 'RightLeg');
jest.mock('../LeftLeg', () => 'LeftLeg');

describe('COMPONENT - Characters Robot', () => {
  it('renders correctly', () => {
    const component = create(<RobotArtwork />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
