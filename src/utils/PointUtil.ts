import { Point } from 'pixi.js';

import * as MathUtil from './MathUtil';

/**
 * Linear interpolation between two `PIXI.Point` objects.
 *
 * @param start The start point.
 * @param end The end point.
 * @param t The interpolation factor.
 * @returns A new `Point` representing the interpolated position.
 */
export function lerp(
  start: Point,
  end: Point,
  t: number,
  point?: Point
): Point {
  if (!point) {
    point = new Point();
  }

  point.x = MathUtil.lerp(start.x, end.x, t);
  point.y = MathUtil.lerp(start.y, end.y, t);

  return point;
}
