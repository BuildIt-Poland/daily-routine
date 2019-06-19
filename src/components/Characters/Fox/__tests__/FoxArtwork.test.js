import React from 'react';
import { create } from 'react-test-renderer';

import FoxArtwork from '../FoxArtWork';

describe('COMPONENT - Characters Fox', () => {
  it('renders confused Fox when mood is not set', () => {
    const component = create(<FoxArtwork />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders sad Fox when 'sad' mood is provided", () => {
    const component = create(<FoxArtwork mood="sad" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confused Fox when 'confused' mood is provided", () => {
    const component = create(<FoxArtwork mood="confused" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confident Fox when 'confident' mood is provided", () => {
    const component = create(<FoxArtwork mood="confident" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
