import extractQuoteIDFromPath from '../extractQuoteIDFromPath';

const EXAMPLE_QUOTE_ID = 'elatedWhale';

describe('FUNC - extractQuoteIDFromPath', () => {
  it('should extract correct QUOTE_ID from given URL', () => {
    const path = `/backend/brag/${EXAMPLE_QUOTE_ID}`;

    expect(extractQuoteIDFromPath(path)).toEqual(EXAMPLE_QUOTE_ID);
  });

  it("shouldn't extract any QUOTE_ID from given path", () => {
    const path = '/backend';

    expect(extractQuoteIDFromPath(path)).toBeUndefined();
  });

  it("shouldn't extract any QUOTE_ID from given path", () => {
    const path = '/backend/brag';

    expect(extractQuoteIDFromPath(path)).toBeUndefined();
  });
});
