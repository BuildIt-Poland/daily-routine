import React from 'react';
import { create } from 'react-test-renderer';

import GithubLogo from '../GithubLogo';

describe('COMPONENT - Icons GithubLogo', () => {
  it('renders correctly', () => {
    const component = create(<GithubLogo />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
