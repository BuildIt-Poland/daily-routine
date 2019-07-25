import React from 'react';
import { create } from 'react-test-renderer';

import BubbleButtons from '../BubbleButtons';

jest.mock('../CopyButton', () => 'CopyButton');
jest.mock('../DesktopShare', () => 'DesktopShare');
jest.mock('../MobileShare', () => 'MobileShare');

describe('COMPONENT - QuoteBubble BubbleButtons', () => {
  it('renders correctly if navigator share API is availible', () => {
    // Navigator API is defined by default

    const component = create(<BubbleButtons quote={'Test Quote'} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly if navigator share API is NOT availible', () => {
    global.navigator.share = undefined;

    const component = create(<BubbleButtons quote={'Test Quote'} />);

    expect(component.toJSON()).toMatchSnapshot();

    // Resets variable to default value
    global.navigator.share = jest.fn();
  });
});
