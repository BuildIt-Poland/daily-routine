import React from 'react';
import { create } from 'react-test-renderer';

import { DEFAULT, BRAG, CONFESS } from '../../../../constants/roleActions';
import { GenderContext } from '../../../../context/GenderContext';
import { MALE, FEMALE } from '../../../../constants/genders';
import Head from '../Head';

jest.mock('../GenderFlower', () => 'GenderFlower');

describe('COMPONENT - Characters Head', () => {
  it('renders confused head when pose is not set', () => {
    const component = create(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Head />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders sad head when 'confess' pose is provided", () => {
    const component = create(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Head pose={CONFESS} />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confused head when 'default' pose is provided", () => {
    const component = create(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Head pose={DEFAULT} />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders confident head when 'brag' pose is provided", () => {
    const component = create(
      <GenderContext.Provider value={{ gender: MALE }}>
        <Head pose={BRAG} />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders flower if female gender is passed', () => {
    const component = create(
      <GenderContext.Provider value={{ gender: FEMALE }}>
        <Head />
      </GenderContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
