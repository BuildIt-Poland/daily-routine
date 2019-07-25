import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import CharacterWitQuote from '../Character';
import { GenderContext } from '../../../context/GenderContext';
import { MALE } from '../../../constants/genders';
import { pose } from '../../../types';
import { extractPose } from '../../../utils/extractSomethingFromPath';

jest.mock('../../../utils/extractSomethingFromPath');

function MockCharacter({ pose }) {
  return <div data-testid="mock-character">{pose}</div>;
}

MockCharacter.propTypes = {
  pose
};

const mockHistory = createMemoryHistory({ initialEntries: ['/frontend/confess/1'] });

function renderWithRouter(ui, { history = mockHistory } = {}) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history
  };
}

function setupComponent() {
  return renderWithRouter(
    <GenderContext.Provider value={{ gender: MALE }}>
      <CharacterWitQuote>
        <MockCharacter />
      </CharacterWitQuote>
    </GenderContext.Provider>
  );
}

describe('COMPONENT - CharacterWitQuote', () => {
  afterEach(cleanup);

  it('should render character component with brag pose', () => {
    extractPose.mockImplementation(() => 'brag');

    const { getByTestId } = setupComponent();

    act(() => {
      mockHistory.push('/frontend/brag/1');
    });

    expect(getByTestId('mock-character')).toBeDefined();
    expect(getByTestId('mock-character')).toHaveTextContent('brag');
    expect(extractPose).toBeCalled();
  });
});
