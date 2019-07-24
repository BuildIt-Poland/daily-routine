import { DEFAULT, BRAG, CONFESS } from '../../constants/roleActions';
import getPose from '../getPose';

describe('FUNC - getPose', () => {
  it('should returns default pose', () => {
    const pose = getPose('');

    expect(pose).toEqual(DEFAULT);
  });

  it('should returns brag pose', () => {
    const pose = getPose('/backend/brag/fundamentalrobot');

    expect(pose).toEqual(BRAG);
  });

  it('should returns confess pose for invalid url', () => {
    const pose = getPose('/backend/brag');

    expect(pose).toEqual(CONFESS);
  });
});
