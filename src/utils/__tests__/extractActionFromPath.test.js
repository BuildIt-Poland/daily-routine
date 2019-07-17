import extractActionFromPath from '../extractActionFromPath';

const EXAMPLE_ACTION = 'brag';

describe('FUNC - extractActionFromPath', () => {
  it("shouldn't extract any action from given path", () => {
    const path = '/backend';

    expect(extractActionFromPath(path)).toBeUndefined();
  });

  it('should extract action from given path', () => {
    const path = `/backend/${EXAMPLE_ACTION}`;

    expect(extractActionFromPath(path)).toEqual(EXAMPLE_ACTION);
  });

  it('should extract correct action from given URL', () => {
    const path = `/backend/${EXAMPLE_ACTION}/elatedWhale`;

    expect(extractActionFromPath(path)).toEqual(EXAMPLE_ACTION);
  });
});
