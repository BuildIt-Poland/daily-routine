import React from 'react';
import { create } from 'react-test-renderer';
import { render, fireEvent, cleanup } from '@testing-library/react';

import MobileShare from '../MobileShare';

afterEach(cleanup);

jest.mock();

describe('COMPONENT - QuoteBubble MobileShare', () => {
  it('renders correctly', () => {
    const component = create(<MobileShare />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('calls Navigator.share API with proper title and url', () => {
    const { container } = render(<MobileShare />);

    fireEvent.click(container.querySelector('button'));

    expect(navigator.share).toBeCalledWith({
      title: document.title,
      url: window.location.href
    });
  });
});
