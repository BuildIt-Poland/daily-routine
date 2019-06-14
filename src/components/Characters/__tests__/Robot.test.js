import React from 'react';
import { create } from 'react-test-renderer';

import Robot from '../Robot';

describe('COMPONENT - Characters Robot', () => {
  it('renders confident robot when mood is not set', () => {
    const component = create(<Robot />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders sad robot when 'sad' mood is provided", () => {
    const component = create(<Robot mood="sad" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confused robot when 'confused' mood is provided", () => {
    const component = create(<Robot mood="confused" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confident robot when 'confident' mood is provided", () => {
    const component = create(<Robot mood="confident" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
