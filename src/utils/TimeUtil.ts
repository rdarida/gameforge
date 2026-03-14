/**
 * Formats a duration given in seconds into a string in the format "HH:MM:SS"
 * or "MM:SS" if hours are zero.
 *
 * @param totalSeconds The total duration in seconds to format.
 * @returns A string representing the formatted time.
 */
export function formatTime(totalSeconds: number): string {
  const total = Math.max(0, Math.floor(totalSeconds));

  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);

  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(total % 60).padStart(2, '0');

  if (hours > 0) {
    const paddedHours = String(hours).padStart(2, '0');

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }

  return `${paddedMinutes}:${paddedSeconds}`;
}
