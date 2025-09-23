/**
 * Rounds a number to a specified number of deciamal places.
 *
 * @param value The number to round.
 * @param decimals How many decimal places to keep.
 * @returns The rounded number.
 */
export function round(value: number, decimals = 0): number {
  decimals = Math.pow(10, decimals);
  return Math.round(value * decimals) / decimals;
}

/**
 * Clamps a number within the specified range.
 *
 * @param value The number to clamp.
 * @param min The lower bound of the range.
 * @param max The upper bound of the range.
 * @returns The clamped value.
 */
export function clamp(value: number, min = 0, max = 1): number {
  return Math.max(min, Math.min(value, max));
}

/**
 * Linear interpolation between two numbers.
 *
 * @param start The start value.
 * @param end The end value.
 * @param t The interpolation factor.
 * @returns The interpolated value.
 */
export function lerp(start: number, end: number, t: number): number {
  return (1 - t) * start + t * end;
}

/**
 * Quadratic interpolation between two numbers.
 *
 * Formula: [Quadratic Bézier curves](https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Quadratic_B%C3%A9zier_curves)
 *
 * @param start The start value.
 * @param control The control value.
 * @param end The end value.
 * @param t The interpolation factor.
 * @returns The interpolated value.
 */
export function qerp(
  start: number,
  control: number,
  end: number,
  t: number
): number {
  return (1 - t) * (1 - t) * start + 2 * (1 - t) * t * control + t * t * end;
}

/**
 * Randomly shuffles the elements of an array in place using the
 * [Fisher–Yates algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).
 *
 * @param array The array to shuffle.
 * @returns The same array, shuffled in place.
 */
export function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
