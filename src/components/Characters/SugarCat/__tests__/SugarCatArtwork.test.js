import React from 'react';
import { create } from 'react-test-renderer';

import SugarCatArtwork from '../SugarCatArtwork';

describe('COMPONENT - Characters SugarCat SugarCatArtwork', () => {
  it('renders correctly', () => {
    const component = create(<SugarCatArtwork />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
