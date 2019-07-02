import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { GenderProvider, GenderContext } from '../GenderContext';
import { MALE, FEMALE } from '../../constants/genders';

function genderContextConsumer(gender, handleGenderChange) {
  return (
    <>
      <span>{gender}</span>
      <button onClick={handleGenderChange} />
    </>
  );
}

describe('COMPONENT - GenderContext', () => {
  it('renders GenderProvider corrently with gender `male`', () => {
    const { getByText } = render(
      <GenderProvider>
        <GenderContext.Consumer>
          {({ gender, handleGenderChange }) => genderContextConsumer(gender, handleGenderChange(MALE))}
        </GenderContext.Consumer>
      </GenderProvider>
    );

    expect(getByText(MALE)).toHaveTextContent(MALE);
  });

  it('renders GenderProvider corrently with gender `female`', () => {
    const { getByText, container } = render(
      <GenderProvider>
        <GenderContext.Consumer>
          {({ gender, handleGenderChange }) => genderContextConsumer(gender, handleGenderChange(FEMALE))}
        </GenderContext.Consumer>
      </GenderProvider>
    );

    fireEvent.click(container.querySelector('button'));

    expect(getByText(FEMALE)).toHaveTextContent(FEMALE);
  });
});
