import React from 'react';
import { create } from 'react-test-renderer';

import WhaleArtwork from '../WhaleArtwork';

describe('COMPONENT - Characters Whale', () => {
  it('renders confused robot when pose is not set', () => {
    const component = create(<WhaleArtwork />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders sad robot when 'confess' pose is provided", () => {
    const component = create(<WhaleArtwork pose="sad" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confused robot when 'default' pose is provided", () => {
    const component = create(<WhaleArtwork pose="default" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confident robot when 'brag' pose is provided", () => {
    const component = create(<WhaleArtwork pose="brag" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
