import React from 'react';
import { create } from 'react-test-renderer';

import WhaleArtwork from '../WhaleArtwork';

describe('COMPONENT - Characters Whale', () => {
  it('renders confused robot when mood is not set', () => {
    const component = create(<WhaleArtwork />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders sad robot when 'sad' mood is provided", () => {
    const component = create(<WhaleArtwork mood="sad" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confused robot when 'confused' mood is provided", () => {
    const component = create(<WhaleArtwork mood="confused" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confident robot when 'confident' mood is provided", () => {
    const component = create(<WhaleArtwork mood="confident" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
