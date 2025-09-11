import { BaseTexture, Texture } from 'pixi.js';

import { Button } from '../../src/scene/Button';

describe('Test Button class', () => {
  let button: Button;

  beforeEach(() => {
    button = new Button(new Texture(new BaseTexture()));
  });

  it('should be truthy', () => {
    expect(button).toBeTruthy();
  });

  it('should disable the button', () => {
    expect(button.eventMode).toBe('static');

    button.disable();
    expect(button.eventMode).toBe('none');
    expect(button.visible).toBe(true);

    button.disable(true);
    expect(button.eventMode).toBe('none');
    expect(button.visible).toBe(false);
  });

  it('should enable the button', () => {
    button.disable(true);

    button.enable();
    expect(button.eventMode).toBe('static');
    expect(button.visible).toBe(true);
  });
});
