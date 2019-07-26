import trimQoute from '../trimQuote';

describe('FUNC - trimQoute', () => {
  it('should leave text below 220 chars intact', () => {
    const text = 'Taylor Swift!';
    expect(trimQoute(text)).toEqual(text);
  });

  it('should truncate text above 220 chars on the nearest whitespace', () => {
    const text =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    const expectedText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea...';

    expect(trimQoute(text)).toEqual(expectedText);
  });
});
