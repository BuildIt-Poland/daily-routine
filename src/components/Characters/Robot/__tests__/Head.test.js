import React from 'react';
import { create } from 'react-test-renderer';

import { DEFAULT, BRAG, CONFESS } from '../../../../constants/roleActions';
import Head from '../Head';

describe('COMPONENT - Characters Head', () => {
  it('renders confused head when pose is not set', () => {
    const component = create(<Head />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders sad head when 'confess' pose is provided", () => {
    const component = create(<Head pose={CONFESS} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confused head when 'default' pose is provided", () => {
    const component = create(<Head pose={DEFAULT} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confident head when 'brag' pose is provided", () => {
    const component = create(<Head pose={BRAG} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
