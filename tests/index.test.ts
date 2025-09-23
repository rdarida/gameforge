import {
  Button,
  MathUtil,
  Panel,
  Pixi,
  PixiSound,
  PointUtil,
  Scene,
  SceneEvent,
  SceneManager,
  Transitions,
  Tween,
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
  it('should export animation/Transitions const', () => {
    expect(Transitions).toBeTruthy();
  });

  it('should export animation/Tween class', () => {
    expect(Tween).toBeTruthy();
  });

  it('should export events/SceneEvent enum', () => {
    expect(SceneEvent).toBeTruthy();
  });

  it('should export scene/Button class', () => {
    expect(Button).toBeTruthy();
  });

  it('should export scene/Panel class', () => {
    expect(Panel).toBeTruthy();
  });

  it('should export scene/Scene class', () => {
    expect(Scene).toBeTruthy();
  });

  it('should export scene/SceneManager class', () => {
    expect(SceneManager).toBeTruthy();
  });

  it('should export utils/MathUtil', () => {
    expect(MathUtil).toBeTruthy();
  });

  it('should export utils/PointUtil', () => {
    expect(PointUtil).toBeTruthy();
  });
});
