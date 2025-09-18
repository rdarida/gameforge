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
 * Linearly interpolates between two numbers.
 * The interpolation `factor` is clamped to [0, 1].
 *
 * @param start The start value.
 * @param end The end value.
 * @param factor The interpolation factor (0 = start, 1 = end).
 * @returns The interpolated value.
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * clamp(factor);
}
