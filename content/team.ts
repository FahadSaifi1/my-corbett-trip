export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  nativeOf: string;
  specialization: string;
}

/**
 * HONESTY RULE:
 * Starts completely empty until real founder/team names and photos are provided.
 * The team section auto-hides cleanly when this array is empty.
 */
export const teamMembers: TeamMember[] = [];

