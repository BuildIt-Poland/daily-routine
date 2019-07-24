import React from 'react';
import { create } from 'react-test-renderer';
import { cleanup } from '@testing-library/react';

import BubbleButtons from '../BubbleButtons';

afterEach(cleanup);

jest.mock();

describe('COMPONENT - QuoteBubble BubbleButtons', () => {
  it('renders correctly for Facebook variant', () => {
    const component = create(<BubbleButtons quote={'Test Quote'} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
