import React from 'react';
import { create } from 'react-test-renderer';

import { FEMALE } from '../../../../constants/genders';
import { CONFUSED } from '../../../../constants/characterMoods';
import Whale from '../Whale';

jest.mock('../GenderFlower', () => 'GenderFlower');
jest.mock('../ConfusionMarks', () => 'ConfusionMarks');
jest.mock('../WhaleArtwork', () => 'WhaleArtwork');

describe('COMPONENT - Characters Robot', () => {
  it('renders correctly with default props', () => {
    const component = create(<Whale />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders flower if female gender is passed', () => {
    const component = create(<Whale gender={FEMALE} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders confusion marks if whale is confused', () => {
    const component = create(<Whale mood={CONFUSED} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders confusion marks and flower if female whale is confused', () => {
    const component = create(<Whale mood={CONFUSED} gender={FEMALE} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
