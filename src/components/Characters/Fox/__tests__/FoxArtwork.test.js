import React from 'react';
import { create } from 'react-test-renderer';

import FoxArtwork from '../FoxArtwork';

describe('COMPONENT - Characters Fox', () => {
  it('renders confused Fox when pose is not set', () => {
    const component = create(<FoxArtwork />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders sad Fox when 'confess' pose is provided", () => {
    const component = create(<FoxArtwork pose="confess" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confused Fox when 'default' pose is provided", () => {
    const component = create(<FoxArtwork pose="default" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confident Fox when 'brag' pose is provided", () => {
    const component = create(<FoxArtwork pose="brag" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
