import dayjs from "dayjs";

/**
 * Estimates reading time in minutes based on character count.
 * Assumes average reading speed of 200 words per minute,
 * and average word length of 5 characters (including spaces).
 * Always rounds up to the nearest minute.
 *
 * @param characterCount - The number of characters in the post.
 * @returns Estimated reading time in minutes.
 */
export function estimateReadingTime(characterCount: number): number {
  const averageWordLength = 5;
  const wordsPerMinute = 200;
  const words = characterCount / averageWordLength;
  const minutes = words / wordsPerMinute;
  return Math.max(1, Math.ceil(minutes));
}

export function formatDate(
  date: string | Date,
  pattern: string = "DD MMMM YYYY"
) {
  if (!date) return "";
  return dayjs(new Date(date)).format(pattern);
}
