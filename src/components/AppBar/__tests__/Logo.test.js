import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Logo from '../Logo';
import { RouteTransitionAnimationContext } from '../../../context/RouteTransitionAnimationContext';
import { ROOT_PATH } from '../../../constants/routes';

afterEach(cleanup);
const animateAndRedirect = jest.fn();

describe('COMPONENT - AppBar Logo', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <RouteTransitionAnimationContext.Provider value={{ animateAndRedirect }}>
        <MemoryRouter initialEntries={['/']}>
          <Logo />
        </MemoryRouter>
      </RouteTransitionAnimationContext.Provider>
    );

    const elem = getByTestId('logo');
    expect(elem.getAttribute('href')).toEqual(ROOT_PATH);
  });

  describe('when clicked', () => {
    describe('and on on root path', () => {
      it('should not call context method "animateAndRedirect"', () => {
        const { getByTestId } = render(
          <RouteTransitionAnimationContext.Provider value={{ animateAndRedirect }}>
            <MemoryRouter initialEntries={[ROOT_PATH]}>
              <Logo />
            </MemoryRouter>
          </RouteTransitionAnimationContext.Provider>
        );

        fireEvent.click(getByTestId('logo'));
        expect(animateAndRedirect).not.toHaveBeenCalled();
      });
    });

    describe('and on on other path (non root path)', () => {
      it(`should call context method "animateAndRedirect" passing ${ROOT_PATH} as an argument`, () => {
        const { getByTestId } = render(
          <RouteTransitionAnimationContext.Provider value={{ animateAndRedirect }}>
            <MemoryRouter initialEntries={[`${ROOT_PATH}/foo`]}>
              <Logo />
            </MemoryRouter>
          </RouteTransitionAnimationContext.Provider>
        );

        fireEvent.click(getByTestId('logo'));
        expect(animateAndRedirect).toHaveBeenCalledWith(ROOT_PATH);
      });
    });
  });
});
