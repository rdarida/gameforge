import { BaseTexture, Texture } from 'pixi.js';

import { Panel } from '../../src/scene/Panel';

describe('Test Panel class', () => {
  let panel: Panel;

  beforeEach(() => {
    panel = new Panel(new Texture(new BaseTexture()));
  });

  it('should be truthy', () => {
    expect(panel).toBeTruthy();
  });

  it('should disable the panel', () => {
    expect(panel.eventMode).toBe('passive');

    panel.disable();
    expect(panel.eventMode).toBe('none');
    expect(panel.visible).toBe(true);

    panel.disable(true);
    expect(panel.eventMode).toBe('none');
    expect(panel.visible).toBe(false);
  });

  it('should enable the panel', () => {
    panel.disable(true);

    panel.enable();
    expect(panel.eventMode).toBe('passive');
    expect(panel.visible).toBe(true);
  });
});
