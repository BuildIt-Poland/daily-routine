import React from 'react';
import { create } from 'react-test-renderer';
import { render, fireEvent, cleanup } from '@testing-library/react';

import DesktopShare from '../DesktopShare';
import { FACEBOOK, TWITTER } from '../../../constants/socialMedia';

afterEach(cleanup);

describe('COMPONENT - QuoteBubble DesktopShare', () => {
  it('renders correctly for Facebook variant', () => {
    const component = create(<DesktopShare variant={FACEBOOK} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly for Twitter variant', () => {
    const component = create(<DesktopShare variant={TWITTER} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('calls Navigator.share API with proper title and url', () => {
    const { container } = render(<DesktopShare variant={FACEBOOK} />);

    fireEvent.click(container.querySelector('button'));

    const expectedShareUrl = `http://www.facebook.com/sharer.php?u=${window.location.href}`;
    const expectedWindowName = 'shareWindow';
    const expectedWindowFeatures =
      'toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=275';

    expect(window.open).toBeCalledWith(expectedShareUrl, expectedWindowName, expectedWindowFeatures);
  });
});
