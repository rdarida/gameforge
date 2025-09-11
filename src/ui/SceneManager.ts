import { Container } from 'pixi.js';

import type { Scene } from './Scene';

/**
 * Managers scenes within a Pixi stage.
 */
export class SceneManager {
  private readonly stage: Container;
  private readonly scenes: { [key: string]: Scene };
  private current?: Scene;

  /**
   * Creates a new SceneManager instance.
   *
   * @param stage The root display container of the application.
   */
  constructor(stage: Container) {
    this.stage = stage;
    this.scenes = {};
  }

  /**
   * Adds a scene to the manager and the stage.
   *
   * @param scene The scene instance to add.
   */
  public addScene(scene: Scene): void {
    this.stage.addChild(scene);
    this.scenes[scene.name!] = scene;

    scene.on('sceneevent', sceneName => this.setScene(sceneName));

    if (!this.current) {
      this.setScene(scene.name!);
      return;
    }

    scene.visible = false;
  }

  /**
   * Switches the current active scene to the one with the given name.
   *
   * @param name The name of the scene to activate.
   */
  public setScene(name: string): void {
    this.current?.onExit();

    // TODO: undefined check
    this.current = this.scenes[name];
    this.current.onEnter();
  }
}
