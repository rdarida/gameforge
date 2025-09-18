import { Container, DisplayObjectEvents } from 'pixi.js';
import { ArgumentMap } from 'eventemitter3';

import { SceneEvent } from '../events';

/**
 * A simple scene implementation based on `Pixi.Container`.
 */
export class Scene extends Container {
  /**
   * Creates a new Scene instance with the given name.
   *
   * @param name The name of the scene.
   */
  constructor(name: string) {
    super();

    this.name = name;
  }

  /**
   * @override
   * Add a listener for a given event.
   * Supports the custom SceneEvent.CHANGE.
   */
  public override on(
    event: keyof DisplayObjectEvents | SceneEvent.EVENT,
    fn: (...args: any) => void,
    context?: any
  ): this {
    return super.on(event, fn, context);
  }

  /**
   * @override
   * Calls each of the listeners registered for a given event.
   * Supports the custom SceneEvent.CHANGE.
   */
  public override emit<T extends keyof DisplayObjectEvents>(
    event: T | SceneEvent.EVENT,
    ...args: ArgumentMap<DisplayObjectEvents>[Extract<
      T,
      keyof DisplayObjectEvents
    >]
  ): boolean {
    return super.emit(event, ...args);
  }

  /**
   * Lifecycle method called when the scene is entered.
   */
  public onEnter(): void {
    this.visible = true;
  }

  /**
   * Lifecycle method called when the scene is exited.
   */
  public onExit(): void {
    this.visible = false;
  }
}
