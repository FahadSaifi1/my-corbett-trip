export interface FeeConcessions {
  seniorCitizenDiscountPerPerson: number; // ₹250
  studentDiscountPerPerson: number; // ₹375 (12-18 years with valid ID)
}

export interface DayJeepSafariFees {
  permitIndian: number; // ₹3380 (covers up to 6 persons incl max 2 children <12)
  permitForeigner: number; // ₹6680
  guideFee: number; // ₹1000
  vehicleChargesByZone: Record<string, { min: number; max: number; typical: number }>;
  maxPersonsPerJeep: number; // 6
  maxChildrenUnder12: number; // 2
}

export interface CanterSafariFees {
  indianSeatPrice: number; // ₹1500
  foreignerSeatPrice: number; // ₹3000
  gstPercentage: number; // 18%
  maxSeatsPerBooking: number; // 4
  zone: string; // "Dhikala"
}

export interface ForestRestHouseFees {
  roomRateIndianMin: number; // ₹3500
  roomRateIndianMax: number; // ₹5050
  roomRateForeigner: number; // ₹10450
  vehicleDriverChargeMin: number; // ₹5750
  vehicleDriverChargeMax: number; // ₹7750
  typicalVehicleByFrh: Record<string, number>;
  guideFeePerShift: number; // ₹1000
}

export interface OfficialFeesData {
  lastVerifiedDate: string;
  sourceUrl: string;
  disclaimer: string;
  concessions: FeeConcessions;
  dayJeep: DayJeepSafariFees;
  canter: CanterSafariFees;
  frhNightStay: ForestRestHouseFees;
}

export const officialFees: OfficialFeesData = {
  lastVerifiedDate: "06 November 2026",
  sourceUrl: "https://corbettgov.org/pricing.html",
  disclaimer: "Official fees last verified: 06 November 2026. CTR may revise fees.",
  concessions: {
    seniorCitizenDiscountPerPerson: 250,
    studentDiscountPerPerson: 375,
  },
  dayJeep: {
    permitIndian: 3380,
    permitForeigner: 6680,
    guideFee: 1000,
    maxPersonsPerJeep: 6,
    maxChildrenUnder12: 2,
    vehicleChargesByZone: {
      bijrani: { min: 2700, max: 2700, typical: 2700 },
      jhirna: { min: 3000, max: 3000, typical: 3000 },
      dhela: { min: 3000, max: 3000, typical: 3000 },
      garjiya: { min: 3000, max: 3000, typical: 3000 },
      "durga-devi": { min: 3000, max: 3000, typical: 3000 },
      pakhro: { min: 2800, max: 2800, typical: 2800 },
      sonanadi: { min: 2800, max: 4500, typical: 3500 },
      sitabani: { min: 2500, max: 3000, typical: 2800 },
      phato: { min: 2500, max: 3000, typical: 2800 },
    },
  },
  canter: {
    indianSeatPrice: 1500,
    foreignerSeatPrice: 3000,
    gstPercentage: 18,
    maxSeatsPerBooking: 4,
    zone: "Dhikala",
  },
  frhNightStay: {
    roomRateIndianMin: 3500,
    roomRateIndianMax: 5050,
    roomRateForeigner: 10450,
    vehicleDriverChargeMin: 5750,
    vehicleDriverChargeMax: 7750,
    typicalVehicleByFrh: {
      dhikala: 7250,
      sarpduli: 7750,
      gairal: 6500,
      bijrani: 5750,
      jhirna: 5750,
      dhela: 5750,
      sonanadi: 6500,
      pakhro: 5750,
    },
    guideFeePerShift: 1000,
  },
};

