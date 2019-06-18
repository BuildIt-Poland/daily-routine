import React from 'react';
import { create } from 'react-test-renderer';

import Fox from '../Fox';

describe('COMPONENT - Characters Robot', () => {
  it('renders confused robot when mood is not set', () => {
    const component = create(<Fox />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders sad robot when 'sad' mood is provided", () => {
    const component = create(<Fox mood="sad" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confused robot when 'confused' mood is provided", () => {
    const component = create(<Fox mood="confused" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confident robot when 'confident' mood is provided", () => {
    const component = create(<Fox mood="confident" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
