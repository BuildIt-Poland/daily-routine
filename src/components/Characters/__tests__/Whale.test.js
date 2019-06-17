import React from 'react';
import { create } from 'react-test-renderer';

import Whale from '../Whale';

describe('COMPONENT - Characters Whale', () => {
  it('renders confused robot when mood is not set', () => {
    const component = create(<Whale />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders sad robot when 'sad' mood is provided", () => {
    const component = create(<Whale mood="sad" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confused robot when 'confused' mood is provided", () => {
    const component = create(<Whale mood="confused" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confident robot when 'confident' mood is provided", () => {
    const component = create(<Whale mood="confident" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
