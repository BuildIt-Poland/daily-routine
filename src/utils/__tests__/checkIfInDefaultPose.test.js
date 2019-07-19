import checkIfInDefaultPose from '../checkIfInDefaultPose';

describe('FUNC - checkIfInDefaultPose', () => {
  it('returns false if role action path is provided', () => {
    const path = '/backend/brag/angryrobot';
    const path2 = '/backend/brag';

    expect(checkIfInDefaultPose(path)).toEqual(false);
    expect(checkIfInDefaultPose(path2)).toEqual(false);
  });

  it('returns true if role root path is provided', () => {
    const path = '/backend';

    expect(checkIfInDefaultPose(path)).toEqual(true);
  });
});
