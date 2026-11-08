export interface ReviewItem {
  id: string;
  author: string;
  city: string;
  rating: number; // 1 to 5
  date: string;
  comment: string;
  zoneVisited?: string;
  verifiedSource?: "Google" | "TripAdvisor" | "Direct";
}

/**
 * HONESTY RULE:
 * This list starts completely empty.
 * No invented testimonials, ratings, review counts, or awards.
 * The UI components (Reviews carousel, stats strip, rating badge) MUST
 * auto-hide cleanly when this array is empty.
 */
export const reviews: ReviewItem[] = [];

