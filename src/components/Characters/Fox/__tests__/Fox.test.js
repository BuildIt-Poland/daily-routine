import React from 'react';
import { create } from 'react-test-renderer';

import { FEMALE } from '../../../../constants/genders';
import { CONFUSED } from '../../../../constants/characterMoods';
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

  it('renders confusion marks if fox is confused', () => {
    const component = create(<Fox mood={CONFUSED} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders confusion marks and flower if female fox is confused', () => {
    const component = create(<Fox mood={CONFUSED} gender={FEMALE} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
