export interface BusinessConfig {
  name: string;
  tagline: string;
  domain: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  utdbRegistrationNo: string;
  gstin: string;
  googleBusinessProfileUrl: string;
  instagramUrl: string;
  yearsInBusiness: string;
  callbackPromise: string; // e.g. "We reply within 15 minutes, 8am–10pm"
  includeOfficialFeesInPackagePrices: boolean;
  officialPermitDisclaimer: string;
}

export const businessConfig: BusinessConfig = {
  name: "My Corbett Trip",
  tagline: "Naturalist-led safaris & curated forest stays in Jim Corbett",
  domain: process.env.NEXT_PUBLIC_DOMAIN || "mycorbetttrip.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "919876543210",
  whatsappDisplay: "+91 98765 43210",
  email: process.env.LEAD_NOTIFY_EMAIL || "concierge@mycorbetttrip.com",
  address: "Ramnagar, Nainital District, Uttarakhand, 244715, India",
  utdbRegistrationNo: "", // Configurable; auto-hides trust badge if empty
  gstin: "", // Configurable; auto-hides if empty
  googleBusinessProfileUrl: "", // Configurable
  instagramUrl: "https://instagram.com/mycorbetttrip",
  yearsInBusiness: "", // Real years in business placeholder; auto-hides if blank
  callbackPromise: "We reply within 15 minutes, 8:00 AM – 10:00 PM IST",
  includeOfficialFeesInPackagePrices: false,
  officialPermitDisclaimer:
    "My Corbett Trip is a private travel company and is not affiliated with Corbett Tiger Reserve. Safari and night-stay permits are issued by CTR in the traveller's name via its official portal (corbettgov.org) and are subject to CTR rules and availability.",
};

