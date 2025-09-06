import {
  Button,
  Pixi,
  PixiSound,
  Scene,
  SceneManager,
  WebFontLoader
} from '../src/index';

describe('Test index.ts', () => {
  /**
   * pixi.js tests
   */
  it('should export Pixi class', () => {
    expect(Pixi).toBeTruthy();
  });

  it('should export Pixi.Application class', () => {
    expect(Pixi.Application).toBeTruthy();
  });

  it('should export Pixi.Assets class', () => {
    expect(Pixi.Assets).toBeTruthy();
  });

  /**
   * @pixi/sound tests
   */
  it('should export PixiSound class', () => {
    expect(PixiSound).toBeTruthy();
  });

  it('should export PixiSound.Sound class', () => {
    expect(PixiSound.Sound).toBeTruthy();
  });

  /**
   * webfontloader tests
   */
  it('should export WebFontLoader class', () => {
    expect(WebFontLoader).toBeTruthy();
  });

  it('should export WebFontLoader.load class', () => {
    expect(WebFontLoader.load).toBeTruthy();
  });

  /**
   * gameforge classes
   */
  it('should export ui/Button class', () => {
    expect(Button).toBeTruthy();
  });

  it('should export ui/Scene class', () => {
    expect(Scene).toBeTruthy();
  });

  it('should export ui/SceneManager class', () => {
    expect(SceneManager).toBeTruthy();
  });
});
