import { Button, Flow } from '../src/index';

describe('Test index.ts', () => {
  it('should export Button class', () => {
    expect(Button).toBeTruthy();
  });

  it('should export Flow class', () => {
    expect(Flow).toBeTruthy();
  });
});
