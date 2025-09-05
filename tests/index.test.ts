import { Pixi, PixiSound } from '../src/index';

describe('Test index.ts', () => {
  it('should export Pixi class', () => {
    expect(Pixi).toBeTruthy();
  });

  it('should export Pixi.Application class', () => {
    expect(Pixi.Application).toBeTruthy();
  });

  it('should export Pixi.Assets class', () => {
    expect(Pixi.Assets).toBeTruthy();
  });

  it('should export PixiSound class', () => {
    expect(PixiSound).toBeTruthy();
  });

  it('should export PixiSound.Sound class', () => {
    expect(PixiSound.Sound).toBeTruthy();
  });
});
