import 'jest-styled-components';
import 'jest-dom/extend-expect';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};

global.document.title = 'Dialy Routine - tests';
global.localStorage = localStorageMock;
global.navigator.share = jest.fn();
global.window.open = jest.fn();
