import { DEFAULT, BRAG, CONFESS } from '../../constants/roleActions';
import { extractRole, extractQuoteID, extractAction, extractPose } from '../extractFromPath';

const EXAMPLE_QUOTE_ID = 'elatedWhale';
const EXAMPLE_ACTION = 'brag';

describe('extractFromPath', () => {
  describe('FUNC - extractRole', () => {
    it('should extract correct role from given ended by slash path', () => {
      const path = '/backend/';

      expect(extractRole(path)).toEqual('backend');
    });

    it('should extract correct role from given path', () => {
      const path = '/backend';

      expect(extractRole(path)).toEqual('backend');
    });

    it('should extract correct role from given path', () => {
      const path = '/backend/brag/123';

      expect(extractRole(path)).toEqual('backend');
    });

    it('should extract correct role when path is empty', () => {
      const path = '';

      expect(extractRole(path)).toBeUndefined();
    });
  });

  describe('FUNC - extractQuoteID', () => {
    it('should extract correct QUOTE_ID from given URL', () => {
      const path = `/backend/brag/${EXAMPLE_QUOTE_ID}`;

      expect(extractQuoteID(path)).toEqual(EXAMPLE_QUOTE_ID);
    });

    it("shouldn't extract any QUOTE_ID from given path", () => {
      const path = '/backend';

      expect(extractQuoteID(path)).toBeUndefined();
    });

    it("shouldn't extract any QUOTE_ID from given path", () => {
      const path = '/backend/brag';

      expect(extractQuoteID(path)).toBeUndefined();
    });
  });

  describe('FUNC - extractAction', () => {
    it("shouldn't extract any action from given path", () => {
      const path = '/backend';

      expect(extractAction(path)).toBeUndefined();
    });

    it('should extract action from given path', () => {
      const path = `/backend/${EXAMPLE_ACTION}`;

      expect(extractAction(path)).toEqual(EXAMPLE_ACTION);
    });

    it('should extract correct action from given URL', () => {
      const path = `/backend/${EXAMPLE_ACTION}/elatedWhale`;

      expect(extractAction(path)).toEqual(EXAMPLE_ACTION);
    });
  });

  describe('FUNC - extractPose', () => {
    it('should returns default pose', () => {
      const pose = extractPose('');

      expect(pose).toEqual(DEFAULT);
    });

    it('should returns brag pose', () => {
      const pose = extractPose('/backend/brag/fundamentalrobot');

      expect(pose).toEqual(BRAG);
    });

    it('should returns confess pose for invalid url', () => {
      const pose = extractPose('/backend/brag');

      expect(pose).toEqual(CONFESS);
    });
  });
});
