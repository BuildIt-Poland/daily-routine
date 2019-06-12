import React from 'react';
import { create } from 'react-test-renderer';

import SpeechBubble from '../SpeechBubble';

describe('COMPONENT - Icons SpeechBubble', () => {
  it('renders correctly when no variant is passed', () => {
    const component = create(<SpeechBubble />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly when 'speech' variant is passed", () => {
    const component = create(<SpeechBubble variant="speech" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders correctly when 'thought' variant is passed", () => {
    const component = create(<SpeechBubble variant="thought" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
