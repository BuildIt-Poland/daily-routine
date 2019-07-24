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
      let uniqQuotes = new Set();
      uniqQuotes.add(getRandomQuoteID(role, BRAG));
      uniqQuotes.add(getRandomQuoteID(role, BRAG));
      uniqQuotes.add(getRandomQuoteID(role, BRAG));
      uniqQuotes.add(getRandomQuoteID(role, BRAG));
      expect(uniqQuotes.size).toBeGreaterThan(1);
    });
    it('should return random possible quoteID for backend role and BRAG', () => {
      const randomQuoteIDbrag = getRandomQuoteID(role, BRAG);
      const bragQuote0 = getQuote(role, BRAG, randomQuoteIDbrag);
      const bragQuote1 = getQuote(role, BRAG, randomQuoteIDbrag);
      // same pattern different branch
      const confessQuote = getQuote(role, CONFESS, randomQuoteIDbrag);
      expect(bragQuote0).toEqual(bragQuote1);
      expect(confessQuote).not.toEqual(bragQuote1);
    });
    it('malformed quote should return null', () => {
      const randomQuoteIdBrag = getRandomQuoteID(role, BRAG);
      let words = randomQuoteIdBrag.split('-');
      words[3] = 'somethingnotreal';
      let randomQuoteIdBragMalformed = words.join('-');
      const quoteNone = getQuote(role, BRAG, randomQuoteIdBragMalformed);
      expect(quoteNone).toBeUndefined();
    });
  });
});
