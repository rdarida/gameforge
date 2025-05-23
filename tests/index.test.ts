import {
  Button,
  Flow,
  Game,
  Graphics,
  Sprite,
  Text,
  Texture
} from '../src/index';

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

  it('should export Graphics class', () => {
    expect(Graphics).toBeTruthy();
  });

  it('should export Sprite class', () => {
    expect(Sprite).toBeTruthy();
  });

  it('should export Text class', () => {
    expect(Text).toBeTruthy();
  });

  it('should export Texture class', () => {
    expect(Texture).toBeTruthy();
  });
});
