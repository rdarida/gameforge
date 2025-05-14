import { Flow, greet } from '../src/index';

describe('Test index.ts', () => {
  it('should export Flow class', () => {
    expect(Flow).toBeTruthy();
  });

  it('should export greet function', () => {
    expect(greet).toBeTruthy();
  });

  it('should greet', () => {
    expect(greet()).toBe('Hello, gameforge!');
  });
});
