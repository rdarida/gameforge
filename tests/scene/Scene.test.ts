import { SceneEvent } from '../../src/events/SceneEvent';
import { Scene } from '../../src/scene/Scene';

describe('Test Scene class', () => {
  let scene: Scene;

  beforeEach(() => {
    scene = new Scene('test');
  });

  it('should be truthy', () => {
    expect(scene).toBeTruthy();
    expect(scene.name).toBe('test');
  });

  it('should call the listener with the emitted action string', () => {
    const listener = (action: string) => {
      expect(action).toBe('testAction');
    };

    scene.on(SceneEvent.EVENT, listener);
    scene.emit(SceneEvent.EVENT, 'testAction');
  });

  it('should make the scene visible when onEnter is called', () => {
    scene.visible = false;
    scene.onEnter();
    expect(scene.visible).toBe(true);
  });

  it('should hide the scene when onExit is called', () => {
    scene.onExit();
    expect(scene.visible).toBe(false);
  });
});
