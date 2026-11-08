export interface StayItem {
  id: string;
  name: string;
  location: string; // e.g. "Dhikuli, Kosi Riverbank" or "Ramnagar Outskirts"
  type: "Luxury Lodge" | "Riverside Resort" | "Heritage Retreat" | "Eco Cottage";
  description: string;
  features: string[];
  distanceToGates: Record<string, string>;
  imageUrls: string[];
  startingPricePerNight?: number;
}

/**
 * HONESTY RULE:
 * Starts completely empty until real partner hotels and negotiated rates are contracted.
 * The /stays page and homepage stays strip auto-hide cleanly when this array is empty.
 */
export const partnerStays: StayItem[] = [];

