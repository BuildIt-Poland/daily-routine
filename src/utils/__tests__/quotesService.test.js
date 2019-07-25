import { FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE } from '../../constants/roles';
import { BRAG, CONFESS } from '../../constants/roleActions';

import { getQuote, getRandomQuoteID } from '../quotesService';

jest.mock('../../quotes/backEndQuotes.js', () => ({
  BACKEND_BRAG: {
    '1': 'Backend-Brag test quote no. 1',
    '2': 'Backend-Brag test quote no. 2'
  },
  BACKEND_CONFESS: {
    '1': 'Backend-Confess test quote no. 1',
    '2': 'Backend-Confess test quote no. 2'
  }
}));

jest.mock('../../quotes/frontEndQuotes.js', () => ({
  FRONTEND_BRAG: {
    '1': 'FrontEnd-Brag test quote no. 1',
    '2': 'FrontEnd-Brag test quote no. 2'
  },
  FRONTEND_CONFESS: {
    '1': 'FrontEnd-Confess test quote no. 1',
    '2': 'FrontEnd-Confess test quote no. 2'
  }
}));

jest.mock('../../quotes/devOpsQuotes.js', () => ({
  DEVOPS_BRAG: {
    '1': 'DevOps-Brag test quote no. 1',
    '2': 'DevOps-Brag test quote no. 2'
  },
  DEVOPS_CONFESS: {
    '1': 'DevOps-Confess test quote no. 1',
    '2': 'DevOps-Confess test quote no. 2'
  }
}));

describe('quotesService - getQuote', () => {
  it('should return the quote for BackEnd Brag with quoteID = 1', () => {
    const quote = getQuote(BACK_END_ROLE, BRAG, '1');

    expect(quote).toEqual('Backend-Brag test quote no. 1');
  });

  it('should return the quote for BackEnd Brag with quoteID = 2', () => {
    const quote = getQuote(BACK_END_ROLE, BRAG, '2');

    expect(quote).toEqual('Backend-Brag test quote no. 2');
  });

  it('should return the quote for FrontEnd Confess with quoteID = 1', () => {
    const quote = getQuote(FRONT_END_ROLE, CONFESS, '1');

    expect(quote).toEqual('FrontEnd-Confess test quote no. 1');
  });

  it('should return the quote for DevOps Confess with quoteID = 1', () => {
    const quote = getQuote(DEV_OPS_ROLE, CONFESS, '1');

    expect(quote).toEqual('DevOps-Confess test quote no. 1');
  });

  it('should return the default quote for not defined role, action or quoteID', () => {
    const quote = getQuote(null, null, null);

    expect(quote).toEqual("Daily in 5 minutes and I'm still not sure what to say...");
  });

  it('should return undefined for not defined action', () => {
    const quote = getQuote(DEV_OPS_ROLE, null, '1');

    expect(quote).toEqual(null);
  });
});

describe('quotesService - getRandomQuoteID', () => {
  it('should return random possible quoteID for given action and role', () => {
    const randomQuoteID = getRandomQuoteID(BACK_END_ROLE, BRAG);

    expect(['1', '2']).toContain(randomQuoteID);
  });
});
