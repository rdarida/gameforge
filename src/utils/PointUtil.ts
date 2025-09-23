import { Point } from 'pixi.js';

import * as MathUtil from './MathUtil';

/**
 * Linear interpolation between two `PIXI.Point` objects.
 *
 * @param start The start point.
 * @param end The end point.
 * @param t The interpolation factor.
 * @param result A `PIXI.Point` object to store the result.
 * @returns A new `PIXI.Point` representing the interpolated position.
 */
export function lerp(
  start: Point,
  end: Point,
  t: number,
  result?: Point
): Point {
  result ??= new Point();
  result.x = MathUtil.lerp(start.x, end.x, t);
  result.y = MathUtil.lerp(start.y, end.y, t);

  return result;
}

/**
 * Quadratic interpolation between two `PIXI.Point` objects.
 *
 * @param start The start point.
 * @param control The control point.
 * @param end The end point.
 * @param t The interpolation factor.
 * @param result A `PIXI.Point` object to store the result.
 * @returns A new `PIXI.Point` representing the interpolated position.
 */
export function qerp(
  start: Point,
  control: Point,
  end: Point,
  t: number,
  result?: Point
): Point {
  result ??= new Point();
  result.x = MathUtil.qerp(start.x, control.x, end.x, t);
  result.y = MathUtil.qerp(start.y, control.y, end.y, t);

  return result;
}

/**
 * Calculates the Euclidean distance between two `PIXI.Point` objects.
 *
 * @param a The first point.
 * @param b The second point.
 * @returns The distance between the two points.
 */
export function distance(a: Point, b: Point): number {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
}
