import { Container } from 'pixi.js';

import type { Scene } from './Scene';

/**
 * Managers scenes within a Pixi stage.
 */
export class SceneManager {
  private readonly _stage: Container;
  private readonly _scenes: Map<string, Scene>;
  private _current?: Scene;

  /**
   * Creates a new SceneManager instance.
   *
   * @param stage The root display container of the application.
   */
  constructor(stage: Container) {
    this._stage = stage;
    this._scenes = new Map<string, Scene>();
  }

  /**
   * Adds a scene to the manager and the stage.
   *
   * @param scene The scene instance to add.
   */
  public addScene(scene: Scene): void {
    this._stage.addChild(scene);
    this._scenes.set(scene.name!, scene);

    scene.on('sceneevent', sceneName => this.setScene(sceneName));

    if (!this._current) {
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
    this._current?.onExit();

    this._current = this._scenes.get(name);

    if (!this._current) {
      throw new Error(`Scene with name "${name}" does not exist.`);
    }

    this._current.onEnter();
  }
}
