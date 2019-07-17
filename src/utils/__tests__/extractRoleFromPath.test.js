import extractRoleFromPath from '../extractRoleFromPath';

describe('FUNC - extractRoleFromPath', () => {
  it('should extract correct role from given ended by slash path', () => {
    const path = '/backend/';

    expect(extractRoleFromPath(path)).toEqual('backend');
  });

  it('should extract correct role from given path', () => {
    const path = '/backend';

    expect(extractRoleFromPath(path)).toEqual('backend');
  });

  it('should extract correct role from given path', () => {
    const path = '/backend/brag/123';

    expect(extractRoleFromPath(path)).toEqual('backend');
  });

  it('should extract correct role when path is empty', () => {
    const path = '';

    expect(extractRoleFromPath(path)).toBeUndefined();
  });
});
