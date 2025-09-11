import { Container, DisplayObjectEvents } from 'pixi.js';
import { ArgumentMap } from 'eventemitter3';

/**
 * A simple scene implementation based on `Pixi.Container`.
 */
export class Scene extends Container {
  /**
   * Creates a new scene instance with the given name.
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
   * Supports the custom `sceneevent`.
   */
  public override on(
    event: keyof DisplayObjectEvents | 'sceneevent',
    fn: (...args: any) => void,
    context?: any
  ): this {
    return super.on(event, fn, context);
  }

  /**
   * @override
   * Calls each of the listeners registered for a given event.
   * Supports the custom `sceneevent`.
   */
  public override emit<T extends keyof DisplayObjectEvents>(
    event: T | 'sceneevent',
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
