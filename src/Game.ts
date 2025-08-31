import { Application, IApplicationOptions } from 'pixi.js';

export class Game extends Application {
  constructor(options?: Partial<IApplicationOptions>) {
    super({
      width: 1031,
      height: 580,
      ...options
    });
  }
}
