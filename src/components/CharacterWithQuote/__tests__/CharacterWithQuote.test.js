import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import CharacterWitQuote from '../CharacterWithQuote';
import { GenderContext } from '../../../context/GenderContext';
import { MALE } from '../../../constants/genders';
import { pose } from '../../../types';
import { getQuote } from '../../../utils/quotesService';
import extractQuoteIDFromPath from '../../../utils/extractQuoteIDFromPath';
import extractActionFromPath from '../../../utils/extractActionFromPath';
import extractRoleFromPath from '../../../utils/extractRoleFromPath';

jest.mock('../../../utils/quotesService');
jest.mock('../../../utils/extractRoleFromPath');
jest.mock('../../../utils/extractActionFromPath');
jest.mock('../../../utils/extractQuoteIDFromPath');

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

  it('should render QuoteBubble', () => {
    const { getByTestId } = setupComponent();
    expect(getByTestId('quote')).toBeDefined();
  });

  it('should render character component with brag pose', () => {
    getQuote.mockImplementation(() => 'foo');
    extractActionFromPath.mockImplementation(() => 'brag');

    const { getByTestId } = setupComponent();

    act(() => {
      mockHistory.push('/frontend/brag/1');
    });

    expect(getByTestId('mock-character')).toBeDefined();
    expect(getByTestId('mock-character')).toHaveTextContent('brag');
    expect(getQuote).toBeCalled();
    expect(extractRoleFromPath).toBeCalled();
    expect(extractQuoteIDFromPath).toBeCalled();
    expect(extractActionFromPath).toBeCalled();
  });
});
