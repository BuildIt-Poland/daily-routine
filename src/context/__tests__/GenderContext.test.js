import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import { MALE, FEMALE } from '../../constants/genders';
import { GenderProvider, GenderContext } from '../GenderContext';

function renderGenderContextConsumer(gender, handleGenderChange) {
  return (
    <>
      <span>{gender}</span>
      <button onClick={handleGenderChange} />
    </>
  );
}

afterEach(cleanup);

describe('COMPONENT - GenderContext', () => {
  it('renders GenderProvider corrently with gender `male`', () => {
    const { container } = render(
      <GenderProvider>
        <GenderContext.Consumer>
          {({ gender, handleGenderChange }) => renderGenderContextConsumer(gender, handleGenderChange(MALE))}
        </GenderContext.Consumer>
      </GenderProvider>
    );

    expect(container.querySelector('span')).toHaveTextContent(MALE);
  });

  it('renders GenderProvider corrently with gender `female`', () => {
    const { container } = render(
      <GenderProvider>
        <GenderContext.Consumer>
          {({ gender, handleGenderChange }) => renderGenderContextConsumer(gender, handleGenderChange(FEMALE))}
        </GenderContext.Consumer>
      </GenderProvider>
    );

    fireEvent.click(container.querySelector('button'));

    expect(container.querySelector('span')).toHaveTextContent(FEMALE);
  });
});
