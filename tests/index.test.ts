import { Button, Flow, Game } from '../src/index';

describe('Test index.ts', () => {
  it('should export Button class', () => {
    expect(Button).toBeTruthy();
  });

  it('should export Flow class', () => {
    expect(Flow).toBeTruthy();
  });

  it('should export Game class', () => {
    expect(Game).toBeTruthy();
  });
});
