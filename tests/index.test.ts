import { greet } from '../src/index';

describe('Test index.ts', () => {
  test('greet function should be exported', () => {
    expect(greet).toBeTruthy();
  });

  test('should greet', () => {
    expect(greet()).toBe('Hello, gameforge!');
  });
});
