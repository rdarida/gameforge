import { Sprite, Texture } from 'pixi.js';

/**
 * A simple panel implementation based on `Pixi.Sprite`.
 */
export class Panel extends Sprite {
  /**
   * Creates a new Panel instance.
   *
   * @param texture The texture to be used for the panel's background.
   */
  constructor(texture?: Texture) {
    super(texture);

    this.eventMode = 'passive';
  }

  /**
   * Disables the panel, preventing it from receiving pointer events.
   *
   * @param hide If set to `true`, the panel will also be hidden.
   *             Defaults to `false`, meaning the panel stays visible.
   */
  public disable(hide = false): void {
    this.eventMode = 'none';
    this.visible = !hide;
  }

  /**
   * Enables the panel, allowing it to receive pointer events
   * and making it visible.
   */
  public enable(): void {
    this.eventMode = 'passive';
    this.visible = true;
  }
}
