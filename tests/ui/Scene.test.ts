import { Scene } from '../../src/ui/Scene';

describe('Test Button class', () => {
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

    scene.on('sceneevent', listener);
    scene.emit('sceneevent', 'testAction');
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
