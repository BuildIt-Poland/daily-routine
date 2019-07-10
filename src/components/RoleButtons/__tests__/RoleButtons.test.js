import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import RoleButtons from '../RoleButtons';
import { LandingPageAnimationContext } from '../../../context/LandingPageAnimationContext';
import {
  BACK_END_ROLE,
  BACK_END_ROLE_LABEL,
  DEV_OPS_ROLE,
  DEV_OPS_ROLE_LABEL,
  FRONT_END_ROLE,
  FRONT_END_ROLE_LABEL
} from '../../../constants/roles';

afterEach(cleanup);

describe('COMPONENT - RoleButtons', () => {
  it('renders correct all roles button', () => {
    const animateAndRedirect = () => {};
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={1}>
        <LandingPageAnimationContext.Provider value={{ animateAndRedirect }}>
          <RoleButtons />
        </LandingPageAnimationContext.Provider>
      </MemoryRouter>
    );

    expect(getByTestId(`${FRONT_END_ROLE}-button`)).toHaveTextContent(FRONT_END_ROLE_LABEL);
    expect(getByTestId(`${BACK_END_ROLE}-button`)).toHaveTextContent(BACK_END_ROLE_LABEL);
    expect(getByTestId(`${DEV_OPS_ROLE}-button`)).toHaveTextContent(DEV_OPS_ROLE_LABEL);
  });
});
