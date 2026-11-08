export interface JournalArticle {
  slug: string;
  title: string;
  publishDate: string;
  readTime: string;
  category: "Safari Planning" | "Field Guides" | "Rules & Logistics" | "Travel Routes";
  excerpt: string;
  body: string[];
  sources: { title: string; url: string }[];
}

export const journalArticles: JournalArticle[] = [
  {
    slug: "corbett-zones-compared",
    title: "Corbett Safari Zones Compared: Which Zone Should You Choose?",
    publishDate: "November 2026",
    readTime: "7 min read",
    category: "Safari Planning",
    excerpt:
      "A naturalist's breakdown of Corbett's 8 tourism zones — comparing terrain, wildlife density, gate locations, vehicle quotas, and seasonal opening dates.",
    body: [
      "Corbett Tiger Reserve spans 1,288.31 square kilometers of rugged Shivalik hills, riverine valleys, and lush sal forests. For a first-time visitor, choosing the right safari zone is often the most confusing part of planning. The reserve is divided into 8 distinct ecotourism zones, each with its own entry gate, vehicle quota, terrain character, and operational calendar.",
      "1. Dhikala: The Crown Jewel of Grasslands. If your imagination of Corbett involves wide-open vistas, elephant herds walking through mist, and tigers stalking along riverbanks, Dhikala is that dream. However, crucial rule: Day jeeps are prohibited. You must either book an official 16-seater Canter safari or secure an overnight room at the historic Dhikala Forest Rest House (built 1890).",
      "2. Bijrani: The Classic Day Jeep Heartland. Situated just 1 km from Ramnagar town at the Amdanda gate, Bijrani is widely regarded as the most productive day safari zone. Its mix of dense sal woods, seasonal riverbeds (sots), and grasslands creates ideal predator tracking conditions.",
      "3. Jhirna & Dhela: Southern Sanctuaries & Monsoon Havens. Located at the southern tip of the reserve, Jhirna and Dhela remain open throughout the monsoon (weather permitting). Jhirna is celebrated for sloth bear sightings and wild elephants, while Dhela boasts watchtowers overlooking wetlands with a strict cap of just 15 jeeps per shift.",
      "4. Garjiya & Durga Devi: Mountain River Landscapes. Garjiya (operating Oct 15 – Jun 30) follows dramatic riverine hills along the Kosi. Durga Devi, located higher up on the Ranikhet road, is a mountainous haven for birdwatchers and Golden Mahseer in the Mandal river.",
      "5. Sonanadi & Pakhro: The Western Wilderness. Accessed from Kotdwar, these zones offer tranquility far from the bustling Ramnagar corridor, acting as vital wildlife corridors between Corbett and Rajaji National Park.",
    ],
    sources: [
      { title: "Corbett Tiger Reserve Official Portal", url: "https://corbettgov.org" },
      { title: "Uttarakhand Tourism Development Board (UTDB) - Corbett Profile", url: "https://uttarakhandtourism.gov.in" },
      { title: "All India Tiger Estimation 2022 (National Tiger Conservation Authority)", url: "https://ntca.gov.in" },
    ],
  },
  {
    slug: "dhikala-night-stay-guide",
    title: "The Complete Guide to Dhikala Forest Rest House Night Stays",
    publishDate: "November 2026",
    readTime: "8 min read",
    category: "Safari Planning",
    excerpt:
      "Everything you need to know about booking an overnight stay inside the core of Corbett Tiger Reserve — the 45-day rolling window, rest house amenities, and forest rules.",
    body: [
      "Staying overnight inside the deep core of a tiger reserve is an experience unmatched anywhere in Asia. At Corbett, the historic Dhikala Forest Rest House (FRH) complex allows visitors to sleep right in the heart of the Patli Dun valley, surrounded by the calls of sambar and the roar of the Ramganga river.",
      "How to Book: The 45-Day Advance Window. All FRH permits are issued directly by CTR through the official government portal (corbettgov.org). For Indian citizens, bookings open on a rolling basis exactly 45 days in advance at 10:00 AM IST. For foreign nationals, permits open 90 days in advance. With less than 30 guest rooms across the compound, permits sell out within seconds.",
      "What Life is Like Inside: Dhikala is a protected forest station, not a commercial luxury resort. Electricity is powered by solar generators and is available for limited evening hours. Dining is hosted in the official forest canteen offering simple, delicious vegetarian meals.",
      "Strict Forest Regulations: Non-vegetarian food, alcohol, firecrackers, and smoking are strictly forbidden. There is no vehicle movement permitted after sunset. Under Supreme Court directives enforced since February 2026, mobile phones are completely barred inside the core tourism zones.",
    ],
    sources: [
      { title: "Corbett Tiger Reserve FRH Rules & Tariff", url: "https://corbettgov.org/pricing.html" },
      { title: "Project Tiger Golden Jubilee Archives (1973–2023)", url: "https://ntca.gov.in" },
    ],
  },
  {
    slug: "best-time-to-visit-month-by-month",
    title: "Best Time to Visit Jim Corbett: A Month-by-Month Wildlife Calendar",
    publishDate: "November 2026",
    readTime: "6 min read",
    category: "Field Guides",
    excerpt:
      "When to visit Corbett based on what you want to see: winter bird migrations, pleasant spring greenery, or peak summer tiger sightings around waterholes.",
    body: [
      "Jim Corbett changes dramatically with every season. Understanding the weather patterns, vegetation density, and zone opening dates ensures you plan your trip for the exact experience you desire.",
      "November to February (Winter & Migratory Avifauna): Temperatures range from crisp 5°C mornings to pleasant 22°C afternoons. Dhikala and Durga Devi open on November 15. Over 600 bird species are active, and Asian elephants gather in winter herds. Early morning mist creates ethereal photography conditions, though warm thermal clothing is essential.",
      "March to April (Spring Awakening): Forest canopies thin, weather is ideal (15°C to 30°C), and tiger sightings pick up substantially as animals begin visiting waterbodies more predictably.",
      "May to June (Peak Tiger Tracking): Hot and dry (temperatures up to 40°C), but widely considered the premier window for serious tiger photographers. Natural water sources dry up, concentrating prey species and big cats around remaining river pools and waterholes.",
      "July to September (Monsoon Wilderness): While Dhikala, Bijrani, and Garjiya close to allow the forest to regenerate, Jhirna and Dhela remain open year-round (weather permitting). The landscape turns vivid emerald green, waterfalls cascade, and the forest is at its quietest.",
    ],
    sources: [
      { title: "India Meteorological Department (Dehradun Regional Met Centre)", url: "https://mausam.imd.gov.in" },
      { title: "Corbett Tiger Reserve Seasonal Operating Schedules", url: "https://corbettgov.org" },
    ],
  },
  {
    slug: "corbett-safari-cost-explained-2026",
    title: "Corbett Safari Costs Explained: Official CTR Fees vs Private Operator Packages",
    publishDate: "November 2026",
    readTime: "6 min read",
    category: "Rules & Logistics",
    excerpt:
      "A completely transparent breakdown of what you pay the government versus what private travel planners charge for vehicle hiring, guides, and coordination.",
    body: [
      "Most commercial safari websites hide their pricing math, leaving travellers confused about why a ₹3,380 permit ends up costing more on a comprehensive trip. Here is the exact, honest breakdown verified against the official CTR fee schedule.",
      "1. Government Permit Fee: Paid directly to Corbett Tiger Reserve. For a day jeep safari, this is ₹3,380 for Indian nationals (covers up to 6 persons) and ₹6,680 for foreign nationals. Senior citizens receive a ₹250 discount, and students (ages 12–18) receive a ₹375 discount with valid ID.",
      "2. Registered Gypsy Vehicle Hiring: The Forest Department does not provide vehicles; travellers must hire an authorized CTR-registered 4x4 Gypsy. Standard zone vehicle fees are ₹2,700 to ₹3,000 per safari shift (Bijrani is ₹2,700, Sonanadi ₹2,800–₹4,500).",
      "3. Mandatory Registered Nature Guide: Every jeep entering CTR must be accompanied by an official Forest Department certified guide. The mandatory guide charge is ₹1,000 per shift.",
      "4. The Private Concierge Component: When booking with My Corbett Trip, our concierge fee covers tracking permit release clocks, preparing and submitting verified ID scans, arranging certified local naturalists, and managing doorstep resort gypsy transfers. We never hide this fee.",
    ],
    sources: [
      { title: "CTR Official Fee Schedule (Pricing Page)", url: "https://corbettgov.org/pricing.html" },
    ],
  },
  {
    slug: "new-corbett-rules-2026-phones-and-ids",
    title: "New Corbett Rules 2026: Mobile Phone Ban & Dual-Sided ID Checks",
    publishDate: "November 2026",
    readTime: "5 min read",
    category: "Rules & Logistics",
    excerpt:
      "Critical regulatory changes for 2026: the Supreme Court ban on mobile phones inside core zones and the strict September 2026 photo identity verification protocol.",
    body: [
      "If you last visited Corbett a few years ago, significant legal updates have transformed safari operations in 2026. Failing to adhere to these rules can result in denied gate entry.",
      "The Supreme Court Mobile Phone Ban (Enforced Feb 2026): In accordance with Supreme Court directives, mobile phones are strictly barred during safaris in core and tourism zones. This ban eliminates disturbance to wildlife, stops vehicle overcrowding triggered by mobile sighting calls, and preserves forest tranquility. Phones must be left at your resort or locked at gate lockers.",
      "Cameras are Welcome: Traditional digital cameras (DSLR, mirrorless, bridge, compact) and binoculars are 100% permitted. This is an invitation to experience the wild with your own eyes and dedicated lenses.",
      "Dual-Sided ID Verification (Enforced Sep 2026): The primary booking leader must upload clear front and back scans of government photo ID. Every traveller's original physical card is verified at the entry barrier. Ensure your names match exactly.",
    ],
    sources: [
      { title: "Supreme Court of India Environmental Directives (W.P. Civil)", url: "https://sci.gov.in" },
      { title: "Corbett Tiger Reserve Gate Security Advisory", url: "https://corbettgov.org" },
    ],
  },
  {
    slug: "delhi-to-corbett-road-and-rail",
    title: "How to Travel from Delhi to Jim Corbett: Road, Rail & Route Tips",
    publishDate: "November 2026",
    readTime: "5 min read",
    category: "Travel Routes",
    excerpt:
      "The fastest road routes from Delhi-NCR, train timings for the Ranikhet Express, and flight connectivity via Pantnagar Airport.",
    body: [
      "Located in the Nainital district of Uttarakhand, Ramnagar is the primary base town for Corbett Tiger Reserve, situated approximately 245 to 260 km east of New Delhi.",
      "By Road: The fastest route follows NH9: Delhi → Ghazipur border → Hapur bypass → Moradabad bypass → exit towards Kashipur → Ramnagar. The newly widened highway bypasses old bottlenecks, bringing total driving time down to 5.5 to 6 hours.",
      "By Train: The premier train option is the Ranikhet Express (Train #15013), departing Old Delhi Railway Station (DLI) nightly around 10:00 PM and arriving at Ramnagar Station (RMR) at 4:50 AM. Another convenient option is the Corbett Park Link Express.",
      "By Air: The nearest domestic airport is Pantnagar (PGH), approximately 80 to 85 km from Ramnagar (approx. 2-hour taxi drive). Dehradun Jolly Grant Airport (DED) is convenient if entering western zones via Kotdwar or Pakhro.",
    ],
    sources: [
      { title: "National Highways Authority of India (NH9 Corridors)", url: "https://nhai.gov.in" },
      { title: "Indian Railways Catering and Tourism Corporation (IRCTC)", url: "https://irctc.co.in" },
    ],
  },
  {
    slug: "corbett-with-kids",
    title: "Visiting Jim Corbett with Kids: A Family Safari Safety & Planning Guide",
    publishDate: "November 2026",
    readTime: "6 min read",
    category: "Safari Planning",
    excerpt:
      "How to plan an engaging, stress-free wildlife trip for children: choosing comfortable safari zones, packing essentials, and heritage excursions.",
    body: [
      "A jungle safari is an unforgettable educational milestone for children. Corbett offers unmatched opportunities to see wild elephants, spotted deer, and colourful hornbills in their natural habitat. However, a successful family safari requires mindful planning.",
      "Zone Selection for Families: For younger children, zones with shorter buffer drives and smooth tracks like Dhela and Jhirna are ideal. The watchtower at Dhela provides a safe, exciting vantage point over waterholes.",
      "Keeping Youngsters Engaged: Pack a pocket bird book and notebook so children can record animal tracks and sightings. Turn the safari into a treasure hunt for deer alarm calls, termites, and pugmarks rather than fixating solely on tigers.",
      "Beyond Safaris: Visit the Jim Corbett Museum at Kaladhungi (30 km away) to walk through the conservationist's home, and explore the Corbett Waterfalls for a refreshing forest picnic.",
    ],
    sources: [
      { title: "Uttarakhand Forest Department Ecotourism Guidelines", url: "https://forest.uk.gov.in" },
      { title: "Corbett Heritage Museum Archives", url: "https://uttarakhandtourism.gov.in" },
    ],
  },
  {
    slug: "birding-in-corbett",
    title: "Birdwatching in Corbett: 600+ Avian Species Across Rivers & Sal Canopies",
    publishDate: "November 2026",
    readTime: "7 min read",
    category: "Field Guides",
    excerpt:
      "A dedicated birder's itinerary: tracking the Ibisbill, Great Hornbill, Tawny Fish Owl, and Himalayan raptors along the Ramganga and Kosi rivers.",
    body: [
      "While Corbett is world-renowned for its tiger population, it is equally a paradise for birders, with over 600 documented avian species spanning Shivalik foothill ecosystems, deep sal canopies, and alpine river confluences.",
      "Key Birding Habitats: The Mandal and Ramganga river confluences at Durga Devi are prime territory for Crested Kingfishers, Little Forktails, and Pallas's Fish Eagles. The Kosi riverbed near Dhikuli regularly hosts the elusive Ibisbill during winter months.",
      "Top Species to Look For: Great Hornbill, Tawny Fish Owl, Brown Fish Owl, Collared Falconet, Spot-bellied Eagle Owl, Blue-bearded Bee-eater, and Plum-headed Parakeet.",
      "Ethical Birding Practice: Use audio playback responsibly, maintain distance from nesting sites, and carry high-magnification binoculars or spotting scopes.",
    ],
    sources: [
      { title: "BirdLife International Corbett Important Bird Area (IBA) Factsheet", url: "https://birdlife.org" },
      { title: "eBird Corbett Tiger Reserve Hotspot Checklists", url: "https://ebird.org" },
    ],
  },
];

