import React from 'react';
import { create } from 'react-test-renderer';

import CharacterWrapper from '../CharacterWrapper';

describe('COMPONENT - Characters CharacterWrapper', () => {
  it('renders correctly', () => {
    const component = create(<CharacterWrapper />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
