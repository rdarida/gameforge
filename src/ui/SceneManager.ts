import { Container } from 'pixi.js';

import type { Scene } from './Scene';

export class SceneManager {
  private readonly stage: Container;
  private readonly scenes: { [key: string]: Scene };
  private current?: Scene;

  constructor(stage: Container) {
    this.stage = stage;
    this.scenes = {};
  }

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

  public setScene(sceneName: string): void {
    this.current?.onExit();

    this.current = this.scenes[sceneName];
    this.current.onEnter();
  }
}
