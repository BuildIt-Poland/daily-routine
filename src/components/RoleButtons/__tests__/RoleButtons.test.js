import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import RoleButtons from '../RoleButtons';
import { RouteTransitionAnimationContext } from '../../../context/RouteTransitionAnimationContext';
import {
  BACK_END_ROLE,
  BACK_END_ROLE_LABEL,
  DEV_OPS_ROLE,
  DEV_OPS_ROLE_LABEL,
  FRONT_END_ROLE,
  FRONT_END_ROLE_LABEL
} from '../../../constants/roles';
import { ROOT_PATH } from '../../../constants/routes';

describe('COMPONENT - RoleButtons', () => {
  const animateAndRedirect = jest.fn();
  afterEach(cleanup);

  it('renders correct all roles button', () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <RouteTransitionAnimationContext.Provider value={{ animateAndRedirect }}>
          <RoleButtons />
        </RouteTransitionAnimationContext.Provider>
      </MemoryRouter>
    );

    expect(getByTestId(`${FRONT_END_ROLE}-button`)).toHaveTextContent(FRONT_END_ROLE_LABEL);
    expect(getByTestId(`${BACK_END_ROLE}-button`)).toHaveTextContent(BACK_END_ROLE_LABEL);
    expect(getByTestId(`${DEV_OPS_ROLE}-button`)).toHaveTextContent(DEV_OPS_ROLE_LABEL);
  });

  describe(`when role button is clicked`, () => {
    it(`should call context method "animateAndRedirect" passing url as an argument`, () => {
      const { getByTestId } = render(
        <MemoryRouter initialEntries={[ROOT_PATH]} initialIndex={1}>
          <RouteTransitionAnimationContext.Provider value={{ animateAndRedirect }}>
            <RoleButtons />
          </RouteTransitionAnimationContext.Provider>
        </MemoryRouter>
      );

      fireEvent.click(getByTestId(`${FRONT_END_ROLE}-button`));
      expect(animateAndRedirect).toHaveBeenCalledWith(FRONT_END_ROLE);

      fireEvent.click(getByTestId(`${BACK_END_ROLE}-button`));
      expect(animateAndRedirect).toHaveBeenCalledWith(BACK_END_ROLE);

      fireEvent.click(getByTestId(`${DEV_OPS_ROLE}-button`));
      expect(animateAndRedirect).toHaveBeenCalledWith(DEV_OPS_ROLE);
    });
  });
});
