import { Container } from 'pixi.js';

import { SceneManager } from '../../src/scene/SceneManager';
import { Scene } from '../../src/scene/Scene';

describe('Test SceneManager class', () => {
  let stage: Container;
  let sm: SceneManager;

  beforeEach(() => {
    stage = new Container();
    sm = new SceneManager(stage);
  });

  it('should be truthy', () => {
    expect(sm).toBeTruthy();
  });

  it('should add scenes to the stage and manage their initial visibility', () => {
    const scene1 = new Scene('scene1');

    sm.addScene(scene1);
    expect(scene1.visible).toBe(true);
    expect(scene1.parent).toBe(stage);

    const scene2 = new Scene('scene2');
    sm.addScene(scene2);
    expect(scene2.visible).toBe(false);
    expect(scene2.parent).toBe(stage);
  });

  it('should switch between scenes', () => {
    const scene1 = new Scene('scene1');
    const scene2 = new Scene('scene2');

    sm.addScene(scene1);
    sm.addScene(scene2);

    expect(scene1.visible).toBe(true);
    expect(scene2.visible).toBe(false);

    sm.setScene('scene2');

    expect(scene1.visible).toBe(false);
    expect(scene2.visible).toBe(true);
  });
});
