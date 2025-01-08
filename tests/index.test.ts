import { greet } from '../src/index';

describe('Test exports', () => {
  test('greet should be exported', () => {
    expect(greet).toBeTruthy();
  });
});
