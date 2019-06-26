import React from 'react';
import { create } from 'react-test-renderer';

import { FEMALE } from '../../../../constants/genders';
import { DEFAULT } from '../../../../constants/roleActions';
import Fox from '../Fox';

jest.mock('../GenderFlower', () => 'GenderFlower');
jest.mock('../ConfusionMarks', () => 'ConfusionMarks');
jest.mock('../FoxArtwork', () => 'FoxArtwork');

describe('COMPONENT - Characters Robot', () => {
  it('renders correctly with default props', () => {
    const component = create(<Fox />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders flower if female gender is passed', () => {
    const component = create(<Fox gender={FEMALE} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders confusion marks if fox is in default pose', () => {
    const component = create(<Fox pose={DEFAULT} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders confusion marks and flower if female fox is in default pose', () => {
    const component = create(<Fox pose={DEFAULT} gender={FEMALE} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
