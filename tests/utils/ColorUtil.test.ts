import { Color } from 'pixi.js';

import * as ColorUtil from '../../src/utils/ColorUtil';

describe('Test ColorUtil functions', () => {
  it('should compute linear interpolation between two colors', () => {
    const start = new Color(0x000000);
    const end = new Color(0xffffff);
    end.setAlpha(0);

    let result = ColorUtil.interpolate(start, end, 0);
    expect(result.value).toStrictEqual([0, 0, 0, 1]);

    result = ColorUtil.interpolate(start, end, 0.5);
    expect(result.red).toBe(0.5);
    expect(result.green).toBe(0.5);
    expect(result.blue).toBe(0.5);
    expect(result.alpha).toBe(0.5);

    ColorUtil.interpolate(start, end, 1, result);
    expect(result.value).toStrictEqual([1, 1, 1, 0]);
  });
});
