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
