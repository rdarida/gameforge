import { Color } from 'pixi.js';

import * as MathUtil from './MathUtil';

/**
 * Linear interpolation between two `Pixi.Color` objects.
 *
 * @param start The start color.
 * @param end The end color.
 * @param t The interpolation factor between [0, 1].
 * @param result A `PIXI.Color` object to store the result.
 * @returns The interpolated color.
 */
export function interpolate(
  start: Color,
  end: Color,
  t: number,
  result?: Color
): Color {
  t = MathUtil.clamp(t);
  result ??= new Color();

  result.value = [
    MathUtil.lerp(start.red, end.red, t),
    MathUtil.lerp(start.green, end.green, t),
    MathUtil.lerp(start.blue, end.blue, t),
    MathUtil.lerp(start.alpha, end.alpha, t)
  ];

  return result;
}
