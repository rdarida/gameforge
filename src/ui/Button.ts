import { Sprite, Texture } from 'pixi.js';

/**
 * A simple button implementation based on `Pixi.Sprite`.
 */
export class Button extends Sprite {
  /**
   * Creates a new Button instance with the given texture.
   *
   * @param texture The texture to be used for the button sprite.
   */
  constructor(texture: Texture) {
    super(texture);

    this.eventMode = 'static';
    this.cursor = 'pointer';
  }

  /**
   * Disable the button, preventing it from receiving pointer events.
   *
   * @param hide If set to `true`, the button will also be hidden.
   *             Defaults to `false`, meaning the button stays visible.
   */
  public disable(hide = false): void {
    this.eventMode = 'none';
    this.visible = !hide;
  }

  /**
   * Enables the button, allowing it to receive pointer events
   * and making it visible.
   */
  public enable(): void {
    this.eventMode = 'static';
    this.visible = true;
  }
}
