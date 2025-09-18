import { AnimatedSprite, Texture } from 'pixi.js';

/**
 * A simple button implementation based on `Pixi.AnimatedSprite`.
 */
export class Button extends AnimatedSprite {
  /**
   * Creates a new Button instance with the given textures.
   *
   * @param textures The textures to be used for the button.
   */
  constructor(...textures: Texture[]) {
    super(textures);

    this.eventMode = 'static';
    this.cursor = 'pointer';
  }

  /**
   * Disables the button, preventing it from receiving pointer events.
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
