import { FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE } from '../../constants/roles';
import { BRAG, CONFESS } from '../../constants/roleActions';

import { getQuote, getRandomQuoteID } from '../quotesService';

let count_chars = (str, char) => str.split('').reduce((acc, ch) => (ch === char ? acc + 1 : acc), 0);

describe('quotesService - getRandomQuoteID should return something long enough with spacers', () => {
  [BACK_END_ROLE, FRONT_END_ROLE, DEV_OPS_ROLE].map(role => {
    it('should return random possible quoteID for backend role and BRAG', () => {
      const randomQuoteID = getRandomQuoteID(role, BRAG);
      expect(count_chars(randomQuoteID, '-')).toEqual(3);
      expect(randomQuoteID.length).toBeGreaterThan(3 * 4);
    });
    it('should return random possible quoteID for backend role and BRAG', () => {
      const randomQuoteID = getRandomQuoteID(role, CONFESS);
      expect(count_chars(randomQuoteID, '-')).toEqual(3);
      expect(randomQuoteID.length).toBeGreaterThan(3 * 4);
    });
  });
});

describe('quotesService - getRandomQuoteID and then verify if text is the same', () => {
  [BACK_END_ROLE, FRONT_END_ROLE, DEV_OPS_ROLE].map(role => {
    it('given 4 trials it should have chances of 576 ** 4 to be all the same', () => {
      // this is probability but given several iterations the list should be different
      let x = new Set();
      x.add(getRandomQuoteID(role, BRAG));
      x.add(getRandomQuoteID(role, BRAG));
      x.add(getRandomQuoteID(role, BRAG));
      x.add(getRandomQuoteID(role, BRAG));
      expect(x.size).toBeGreaterThan(1);
    });
    it('should return random possible quoteID for backend role and BRAG', () => {
      const randomQuoteIDbrag = getRandomQuoteID(role, BRAG);
      const quote0 = getQuote(role, BRAG, randomQuoteIDbrag);
      const quote1 = getQuote(role, BRAG, randomQuoteIDbrag);
      // same pattern different branch
      const quote2 = getQuote(role, CONFESS, randomQuoteIDbrag);
      expect(quote0).toEqual(quote1);
      expect(quote2).not.toEqual(quote1);
    });
    it('malformed quote should return null', () => {
      const randomQuoteIDbrag = getRandomQuoteID(role, BRAG);
      let x = randomQuoteIDbrag.split('-');
      x[3] = 'somethingnotreal';
      let randomQuoteIDbragMalformed = x.join('-');
      const quoteNull = getQuote(role, BRAG, randomQuoteIDbragMalformed);
      expect(quoteNull).toEqual(null);
    });
  });
});
