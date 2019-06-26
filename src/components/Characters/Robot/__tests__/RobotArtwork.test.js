import React from 'react';
import { create } from 'react-test-renderer';

import RobotArtwork from '../RobotArtwork';

describe('COMPONENT - Characters Robot', () => {
  it('renders confused robot when pose is not set', () => {
    const component = create(<RobotArtwork />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders sad robot when 'confess' pose is provided", () => {
    const component = create(<RobotArtwork pose="confess" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confused robot when 'default' pose is provided", () => {
    const component = create(<RobotArtwork pose="default" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confident robot when 'brag' pose is provided", () => {
    const component = create(<RobotArtwork pose="brag" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
