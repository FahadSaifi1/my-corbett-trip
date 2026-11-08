export interface PackageDayItinerary {
  day: number;
  title: string;
  description: string;
}

export interface PackageData {
  slug: string;
  title: string;
  duration: string;
  targetAudience: string;
  badge?: string;
  shortSummary: string;
  highlights: string[];
  itinerary: PackageDayItinerary[];
  inclusions: string[];
  exclusions: string[];
  bestMonths: string;
  zonesUsed: string[];
  faq: { question: string; answer: string }[];
  // Owner TODO price placeholder
  startingPrice: string; // e.g. "Pricing on Request (Customised to dates & party size)"
  indicativePricePerPerson?: number;
  ctaText: string;
}

export const packagesData: PackageData[] = [
  {
    slug: "corbett-weekend-escape",
    title: "Corbett Weekend Escape",
    duration: "2 Nights / 3 Days",
    targetAudience: "Delhi-NCR families, couples, and working professionals looking for a rejuvenating weekend wilderness break.",
    badge: "Most Popular",
    shortSummary:
      "A seamless weekend getaway from Delhi: 2 nights at a handpicked resort near Dhikuli, 2 exclusive open jeep safaris in premier CTR zones, and complete transit support.",
    highlights: [
      "2 guided day jeep safaris across premier zones (Bijrani, Garjiya, or Jhirna).",
      "Stay in a handpicked riverside or forest-edge resort with all meals included (MAP plan).",
      "Official CTR safari permit booking in traveller's name via corbettgov.org.",
      "Dedicated gypsy pickup and drop directly from your resort lobby.",
      "Evening bonfire session and naturalist interaction.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Corbett & Afternoon Jungle Drive",
        description:
          "Depart early from Delhi-NCR via NH9 (approx. 5.5 to 6 hrs). Arrive at Ramnagar and check in to your resort in the Dhikuli/Kosi belt. Settle in and enjoy a hot lunch. At 1:30 PM, your registered safari gypsy arrives for your afternoon safari shift (Bijrani or Garjiya). Scan riverbeds and sal ridges until sunset. Return to the lodge for tea, evening bonfire, and dinner.",
      },
      {
        day: 2,
        title: "Dawn Safari & Local Forest Sightseeing",
        description:
          "Wake up at 5:30 AM to hot tea. Head out for your morning safari shift in a different zone (or deep tracking circuit). Watch the forest come alive with chital alarm calls and fresh pugmarks. Return by 10:30 AM for a hearty breakfast. Afternoon at leisure by the pool, followed by an optional visit to the historic Garjiya Devi Temple perched on a huge rock in the Kosi river. Dinner and overnight stay.",
      },
      {
        day: 3,
        title: "Morning River Walk & Departure for Delhi",
        description:
          "Enjoy a relaxed naturalist-guided bird walk along the Kosi riverbank (spotting kingfishers and wagtails). Breakfast at the resort, check-out by 11:00 AM, and drive back to Delhi arriving comfortably by evening.",
      },
    ],
    inclusions: [
      "2 nights accommodation on double occupancy at a curated resort.",
      "Breakfast and dinner at the resort dining room.",
      "2 Day Jeep Safaris with official CTR permit, vehicle hiring, and guide fees.",
      "Pickup and drop for safaris from your resort lobby.",
      "All current applicable resort taxes.",
    ],
    exclusions: [
      "Personal transit / cab from Delhi to Ramnagar (available on request).",
      "Camera fees (if applicable for commercial video gear).",
      "Expenses of personal nature, tips to drivers and naturalist guides.",
      "Any items not specified in inclusions.",
    ],
    bestMonths: "October through June",
    zonesUsed: ["Bijrani", "Garjiya", "Jhirna"],
    faq: [
      {
        question: "How early should we book for a weekend trip?",
        answer:
          "Because weekend CTR jeep permits are strictly capped at 30 jeeps per shift, we advise booking at least 30 to 45 days in advance so we can apply as soon as the rolling window opens.",
      },
      {
        question: "Can we reach by train from Delhi?",
        answer:
          "Yes. The overnight Ranikhet Express departs Old Delhi (DLI) around 10:00 PM and reaches Ramnagar (RMR) by 4:50 AM, perfectly timed for your morning check-in and safari.",
      },
    ],
    startingPrice: "TODO: Owner to insert package price (e.g. ₹14,500 per person)",
    ctaText: "Check Weekend Availability",
  },
  {
    slug: "dhikala-forest-lodge-experience",
    title: "Dhikala Forest Lodge Experience",
    duration: "2 Nights / 3 Days (Inside Core Reserve)",
    targetAudience: "Discerning wildlife lovers, photographers, and adventurers who want the authentic experience of sleeping inside the deep core of Corbett Tiger Reserve.",
    badge: "Signature Expedition",
    shortSummary:
      "The ultimate Corbett immersion: stay inside the British-era Dhikala Forest Rest House (built 1890). Wake up directly on the Dhikala Chaur grasslands with exclusive morning & afternoon gypsy drives in the core.",
    highlights: [
      "2 nights accommodation inside Corbett Tiger Reserve at Dhikala or Sarpduli FRH.",
      "Full CTR Forest Rest House entry permit issued in your name via corbettgov.org.",
      "Dedicated gypsy and registered forest driver at your disposal inside the reserve.",
      "Exclusive dawn and dusk access to the Dhikala Chaur before day canters arrive.",
      "Vegetarian dining at the official forest canteen amidst historic sal wilderness.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Dhangarhi Gate Entry & Drive to Dhikala Core",
        description:
          "Meet your dedicated gypsy and driver at Ramnagar. Complete gate verification at Dhangarhi Gate (show original IDs). Drive 32 km deep into the reserve through the Sultan and Sarpduli forest blocks. Arrive at Dhikala Forest Rest House complex perched above the Ramganga river. Lunch at the forest canteen. In the afternoon, head out on your first exclusive core safari across the chaur until sunset.",
      },
      {
        day: 2,
        title: "Full Day Core Immersion in the Patli Dun Valley",
        description:
          "Dawn safari at 6:00 AM across the Ramganga reservoir fringes. Look for elephant herds bathing, hog deer grazing in the mist, and tiger movement along the sambar road. Return for breakfast. Midday rest at the compound overlooking the crocodile pool. Afternoon safari tracking alarm calls around Kamarpatta and the Sambhar Road. Evening film screening at the interpretation center.",
      },
      {
        day: 3,
        title: "Final Morning Safari & Exit via Dhangarhi",
        description:
          "Final dawn safari on the grassland. Return to the lodge, pack up, and complete check-out by 10:00 AM. Embark on the 32 km game drive back towards Dhangarhi gate, exiting the tiger reserve with extraordinary memories.",
      },
    ],
    inclusions: [
      "2 nights Forest Rest House room permit (Indian/Foreigner quota as booked).",
      "Dedicated 4x4 Gypsy + Driver for the entire 3 days inside the reserve.",
      "Mandatory registered nature guide fees for all shifts.",
      "All park entry fees, toll taxes, and gate charges.",
    ],
    exclusions: [
      "Food and meals (meals are ordered directly at the Dhikala canteen at government-subsidized rates, typically ₹350–₹500 per meal).",
      "Private transit to Ramnagar reception.",
      "Tips and personal expenses.",
    ],
    bestMonths: "15 November to 15 June (Zone closed during monsoon)",
    zonesUsed: ["Dhikala"],
    faq: [
      {
        question: "How does the 45-day booking window work for Dhikala FRH?",
        answer:
          "CTR releases night stay permits exactly 45 days in advance at 10:00 AM IST for Indian citizens (90 days for foreign nationals). Because there are fewer than 30 rooms in the entire complex, permits sell out in seconds. We coordinate your documents in advance to maximize your chance.",
      },
      {
        question: "Are mobile phones allowed at Dhikala Forest Rest House?",
        answer:
          "No. Under Supreme Court directives enforced since Feb 2026, mobile phones are strictly prohibited in the core tourism zones. Guests disconnect and carry proper cameras and binoculars.",
      },
    ],
    startingPrice: "TODO: Owner to insert package price (Subject to CTR FRH availability)",
    ctaText: "Enquire for Dhikala Dates",
  },
  {
    slug: "riverside-luxury-retreat",
    title: "Riverside Luxury Retreat",
    duration: "3 Nights / 4 Days",
    targetAudience: "Luxury travellers, couples, and executives seeking five-star lodge hospitality, private naturalists, and serene Kosi river frontage.",
    badge: "Boutique Luxury",
    shortSummary:
      "Combines luxury lodge comfort along the clear waters of the Kosi river with 3 private, bespoke jeep safaris guided by an experienced naturalist.",
    highlights: [
      "3 nights in an ultra-curated luxury cottage with private deck overlooking the river or forest canopy.",
      "3 private jeep safaris across premium CTR zones with top-tier naturalist guides.",
      "Gourmet culinary experiences: candlelit bush dinner, high tea on the riverbank, and chef-curated organic meals.",
      "Complimentary guided birding walk and village heritage trail.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at the Lodge & High Tea by the Kosi",
        description:
          "Arrive at your boutique riverside retreat. Welcome refreshments and personalized orientation with your private naturalist. High tea served on the pebble riverbed. Evening bonfire under starry Himalayan skies.",
      },
      {
        day: 2,
        title: "Morning Safari in Bijrani & Afternoon Spa / Leisure",
        description:
          "Early morning departure in a private gypsy for Bijrani. Track big cats with your naturalist. Return to the lodge for a farm-to-table breakfast. Afternoon at leisure with an optional Ayurvedic wellness massage. At dusk, enjoy a private riverside barbecue.",
      },
      {
        day: 3,
        title: "Afternoon Safari in Garjiya & Bush Dinner",
        description:
          "Relaxed morning with a guided avifauna stroll along the river. Post-lunch, embark on your afternoon game drive in Garjiya, capturing dramatic golden-hour light against the sal ridges. Conclude the day with a handcrafted multi-course bush dinner.",
      },
      {
        day: 4,
        title: "Leisurely Breakfast & Private Transfer",
        description:
          "Final morning coffee on your private deck listening to the river. Check out with customized packed travel snacks for your onward journey.",
      },
    ],
    inclusions: [
      "3 nights luxury cottage stay with all meals (Breakfast, Lunch, High Tea, Dinner).",
      "3 Private Jeep Safaris with official CTR permits and top-ranked naturalist.",
      "Private transfers for safaris in customized gypsies.",
      "One signature bush dinner experience.",
    ],
    exclusions: [
      "Spa treatments and premium alcoholic beverages.",
      "Intercity transfers (available in luxury SUVs on request).",
    ],
    bestMonths: "October to May",
    zonesUsed: ["Bijrani", "Garjiya", "Dhela"],
    faq: [
      {
        question: "Can we customize the resort choice?",
        answer:
          "Yes. We partner with the finest boutique properties in the Ramnagar–Dhikuli corridor, including Taj Corbett, Paatlidun, and Aahana, matching your aesthetic preference.",
      },
    ],
    startingPrice: "TODO: Owner to insert package price",
    ctaText: "Plan Luxury Retreat",
  },
  {
    slug: "family-safari-holiday",
    title: "Family Safari Holiday",
    duration: "3 Nights / 4 Days",
    targetAudience: "Families with children and multi-generational groups looking for a balanced, kid-friendly blend of wildlife safaris and local cultural heritage.",
    shortSummary:
      "A thoughtfully paced family vacation: 2 safari drives, heritage visits to Corbett Museum in Kaladhungi, Garjiya Devi Temple, and Corbett Falls, with family suites.",
    highlights: [
      "2 child-friendly jeep safaris in zones with gentle terrain (Jhirna / Dhela / Bijrani).",
      "Excursion to the heritage home of Jim Corbett (Corbett Museum, Kaladhungi).",
      "Visit to the cascading Corbett Falls surrounded by teak forest.",
      "Blessings at the scenic Garjiya Devi Temple perched on the Kosi river.",
      "Resort with swimming pool, sprawling lawns, and family activities.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival, Resort Check-in & Evening Nature Walk",
        description:
          "Arrive at Ramnagar. Check in to your family suite. Kids can unwind in the gardens or swimming pool. Evening gentle nature walk around the lodge periphery learning to identify animal tracks and native trees.",
      },
      {
        day: 2,
        title: "Morning Jeep Safari & Garjiya Devi Temple",
        description:
          "Early morning family jeep safari in Dhela or Bijrani. Spot herds of spotted deer, wild elephants, monkeys, and colorful birds. Return for a full breakfast. In the late afternoon, visit the historic Garjiya Devi Temple and enjoy tea by the Kosi river.",
      },
      {
        day: 3,
        title: "Kaladhungi Heritage Tour: Corbett Museum & Corbett Falls",
        description:
          "After breakfast, take a scenic 30 km drive to Kaladhungi. Tour the stone heritage bungalow where legendary conservationist Jim Corbett lived; view his original letters, rifle memorabilia, and furniture. Continue to the scenic Corbett Waterfalls for a walk through teak woods. Return for an afternoon safari or resort games.",
      },
      {
        day: 4,
        title: "Breakfast & Return Journey",
        description:
          "Leisurely breakfast, family photos amidst the sal greenery, and return drive to Delhi.",
      },
    ],
    inclusions: [
      "3 nights stay in spacious family suite with daily breakfast and dinner.",
      "2 Jeep Safaris with official permits and child concessions applied.",
      "Sightseeing cab for Corbett Museum Kaladhungi, Corbett Falls, and Garjiya Temple.",
    ],
    exclusions: [
      "Entry tickets to Corbett Museum and Corbett Falls (approx. ₹50–₹100 per person paid at entry).",
      "Lunch and personal snacks.",
    ],
    bestMonths: "October to June",
    zonesUsed: ["Dhela", "Jhirna", "Bijrani"],
    faq: [
      {
        question: "Are children allowed on jeep safaris?",
        answer:
          "Yes. Children of all ages are welcome. Up to two children under 12 years are permitted per gypsy alongside up to 6 adults. Students aged 12–18 with valid ID receive a government permit discount of ₹375.",
      },
    ],
    startingPrice: "TODO: Owner to insert package price",
    ctaText: "Check Family Dates",
  },
  {
    slug: "photographers-corbett",
    title: "Photographer's Deep Corbett",
    duration: "4 Nights / 5 Days",
    targetAudience: "Serious wildlife photographers, filmmakers, and birding specialists who prioritize light, positioning, and maximum track time.",
    shortSummary:
      "6 intensive game drives scheduled across prime predator and birding zones, paired with top-rated tracking drivers and naturalist guides who understand angle and lighting.",
    highlights: [
      "6 private jeep safaris timed for optimal sunrise and golden-hour light.",
      "Driver and guide pairs specifically selected for their tracking skills and vehicle positioning.",
      "Pre-safari briefings on predator territories and seasonal animal movement.",
      "Beanbags and camera mounts supported in vehicles.",
      "Complimentary battery charging station and backup workspace at the lodge.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Orientation Drive in Garjiya",
        description:
          "Check in, equipment check, and strategy briefing with our chief naturalist. Afternoon drive in Garjiya focusing on habitat shots and evening tiger activity along the ridges.",
      },
      {
        day: 2,
        title: "Double Safari Shifts in Bijrani",
        description:
          "Morning and afternoon safaris in Bijrani. Track territorial tigers along the sots and watch Machan waterhole during the afternoon golden hour.",
      },
      {
        day: 3,
        title: "Deep Forest Exploration in Jhirna / Dhela",
        description:
          "Full focus on sloth bear foraging, elephant family dynamics, and raptors across southern Corbett's bamboo brakes.",
      },
      {
        day: 4,
        title: "Durga Devi Mountain Landscape & Birding Safari",
        description:
          "Ascend into the hilly Durga Devi zone to photograph mountain river confluences, crested serpent eagles, and riverine wildlife.",
      },
      {
        day: 5,
        title: "Final Dawn Safari & Portfolio Review",
        description:
          "Final morning safari shift. Review captures over breakfast and depart.",
      },
    ],
    inclusions: [
      "4 nights accommodation in a wildlife resort with all meals.",
      "6 private jeep safaris across multiple distinct CTR zones.",
      "Expert naturalist and photographer-oriented tracking driver.",
      "All park entry fees, vehicle permits, and camera clearances.",
    ],
    exclusions: [
      "Commercial cinema camera permits (if applicable by CTR norms).",
      "Transit from Delhi.",
    ],
    bestMonths: "November to May (March to May is premier for predator tracking around waterholes)",
    zonesUsed: ["Bijrani", "Garjiya", "Durga Devi", "Dhela"],
    faq: [
      {
        question: "Can I bring my full camera rig despite the mobile phone ban?",
        answer:
          "Yes! The Supreme Court ban applies strictly to mobile phones. Professional DSLRs, mirrorless bodies, telephoto lenses, and binoculars are 100% permitted and welcomed inside all zones.",
      },
    ],
    startingPrice: "TODO: Owner to insert package price",
    ctaText: "Plan Photography Expedition",
  },
  {
    slug: "birding-in-corbett",
    title: "Birding in Corbett & Foothills",
    duration: "3 Nights / 4 Days",
    targetAudience: "Avid birdwatchers, ornithologists, and nature enthusiasts seeking Corbett's 600+ resident and migratory avian species.",
    shortSummary:
      "A dedicated avian itinerary combining the river gorges of Durga Devi, the Kosi riverbed, and Kumeria forest tracts with expert birding guides.",
    highlights: [
      "3 specialized birding safaris focusing on rare raptors, owls, and waterbirds.",
      "Full day spent exploring Durga Devi and Mandal river valleys.",
      "Riverbed walking trails along the Kosi and Sitabani buffer zones.",
      "Target species: Great Hornbill, Ibisbill, Tawny Fish Owl, Pallas's Fish Eagle, Crested Kingfisher, Plum-headed Parakeet.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Kosi Riverbed Bird Walk",
        description:
          "Arrive by midday. Afternoon on-foot birding along the Kosi river with a spotting scope. Spot river lapwings, crested kingfishers, and wagtails.",
      },
      {
        day: 2,
        title: "Durga Devi Mountain River Confluence",
        description:
          "Full morning safari in Durga Devi. Scan the clear waters of the Ramganga and Mandal for fish eagles and hornbills. Afternoon birding along the Mohan and Kumeria forest patches.",
      },
      {
        day: 3,
        title: "Bijrani / Dhela Sal Canopy & Grassland Birding",
        description:
          "Early morning drive through sal forest looking for broadbills, woodpeckers, and jungle owlets. Evening visit to wetland watchtowers.",
      },
      {
        day: 4,
        title: "Dawn Walk & Departure",
        description:
          "Final dawn birding log review, compilation of species checklist, and departure.",
      },
    ],
    inclusions: [
      "3 nights stay with all meals.",
      "Specialized birding naturalist with high-magnification spotting scope.",
      "3 safari permits and guided forest walks where permitted.",
    ],
    exclusions: [
      "Personal binoculars and optical gear.",
      "Intercity transfers.",
    ],
    bestMonths: "November to March (Peak migratory season for Himalayan and Central Asian birds)",
    zonesUsed: ["Durga Devi", "Bijrani", "Beyond the Reserve"],
    faq: [
      {
        question: "How many bird species can we expect to see?",
        answer:
          "In a typical 4-day winter birding itinerary with an experienced bird guide, guests routinely log between 120 and 180 distinct species.",
      },
    ],
    startingPrice: "TODO: Owner to insert package price",
    ctaText: "Check Birding Dates",
  },
  {
    slug: "honeymoon-in-the-jungle",
    title: "Honeymoon in the Jungle",
    duration: "3 Nights / 4 Days",
    targetAudience: "Newlyweds and couples celebrating anniversaries looking for romantic privacy, candlelit dinners, and thrilling wildlife encounters.",
    shortSummary:
      "Romantic luxury in the Shivalik foothills: private pool villa, intimate candlelight bush dining, riverside picnics, and 2 private dawn safaris.",
    highlights: [
      "Stay in a secluded private pool villa or river-view luxury cottage.",
      "Candlelight dinners with custom culinary menus.",
      "2 private jeep safaris with cozy fleece blankets and morning hot tea flasks.",
      "Decorated room with floral arrangements and complimentary sparkling drink.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Private Check-in & Candlelight Welcome",
        description:
          "Arrive to a traditional Kumaoni welcome. Unwind in your private villa. Romantic 4-course candlelight dinner by the pool or lawn.",
      },
      {
        day: 2,
        title: "Dawn Safari & Afternoon Riverside Picnic",
        description:
          "Early morning private gypsy drive through mist-shrouded sal forest. Return for a leisurely brunch. Afternoon private picnic on a scenic pebble bank of the Kosi river.",
      },
      {
        day: 3,
        title: "Sunset Jungle Drive & Bonfire Under the Stars",
        description:
          "Relaxed morning with breakfast in bed. Afternoon safari drive in Garjiya or Bijrani. Evening private bonfire with acoustic melodies.",
      },
      {
        day: 4,
        title: "Farewell Breakfast & Check-out",
        description:
          "Enjoy a final relaxed breakfast before your comfortable transfer home.",
      },
    ],
    inclusions: [
      "3 nights luxury villa accommodation with all meals.",
      "2 Private Jeep Safaris with official CTR permits.",
      "Special honeymoon room styling and one private candlelight dinner.",
    ],
    exclusions: [
      "Personal spa services and intercity transit.",
    ],
    bestMonths: "October to April",
    zonesUsed: ["Bijrani", "Garjiya"],
    faq: [
      {
        question: "Can safaris be kept completely private for just the two of us?",
        answer:
          "Yes! All our jeep safaris are 100% private. The vehicle is reserved exclusively for the two of you, along with your dedicated driver and registered guide.",
      },
    ],
    startingPrice: "TODO: Owner to insert package price",
    ctaText: "Plan Honeymoon Trip",
  },
  {
    slug: "corbett-and-nainital",
    title: "Corbett Wilderness & Nainital Hills",
    duration: "4 Nights / 5 Days (2N Corbett + 2N Nainital)",
    targetAudience: "Travellers wanting to combine the wild thrill of tiger safaris with the cool, serene lake beauty of the Kumaon hills.",
    shortSummary:
      "The quintessential Kumaon circuit: 2 nights in Corbett with 2 tiger safaris, followed by a scenic drive up to Nainital for 2 nights of lake views and colonial charm.",
    highlights: [
      "2 nights in Corbett + 2 nights in a heritage Nainital lake-view hotel.",
      "2 official jeep safaris inside Corbett Tiger Reserve.",
      "Scenic mountain drive via Kaladhungi with stop at Corbett Museum.",
      "Boating on Naini Lake, visit to Naina Devi temple, and Tibetan market stroll.",
      "Private dedicated vehicle for the entire 5 days from Delhi.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Corbett & Check-in",
        description: "Drive from Delhi to Corbett. Settle into your jungle resort and enjoy an evening nature walk.",
      },
      {
        day: 2,
        title: "Corbett Morning Safari & Afternoon Safari",
        description: "Experience two thrilling safari shifts tracking wildlife across Bijrani and Dhela zones.",
      },
      {
        day: 3,
        title: "Corbett to Nainital via Kaladhungi",
        description: "After breakfast, drive up into the hills (approx. 2.5 hrs). Stop at Jim Corbett's historic museum in Kaladhungi and Corbett Falls. Arrive in Nainital and check in to your lake-view hotel. Evening stroll along Mall Road.",
      },
      {
        day: 4,
        title: "Nainital Lake Tour & Viewpoints",
        description: "Enjoy a traditional wooden boat ride on Naini Lake. Visit Snow View Point, Cave Garden, and the vibrant Tibetan Bazaar.",
      },
      {
        day: 5,
        title: "Breakfast & Return to Delhi",
        description: "Breakfast in Nainital before your comfortable drive down to Delhi, arriving by evening.",
      },
    ],
    inclusions: [
      "4 nights hotel stay (2N Corbett + 2N Nainital) with breakfast and dinner.",
      "2 Corbett Jeep Safaris with official CTR permits and guides.",
      "Dedicated AC vehicle for all transfers, sightseeing, and intercity travel.",
    ],
    exclusions: [
      "Boating fees and local monument tickets.",
      "Lunch and personal expenses.",
    ],
    bestMonths: "September to June",
    zonesUsed: ["Bijrani", "Jhirna"],
    faq: [
      {
        question: "How long is the drive from Corbett to Nainital?",
        answer:
          "The scenic drive from Ramnagar up to Nainital is approximately 65 km and takes around 2 to 2.5 hours through lush pine and oak forests.",
      },
    ],
    startingPrice: "TODO: Owner to insert package price",
    ctaText: "Check Combined Circuit",
  },
  {
    slug: "groups-and-corporate-offsites",
    title: "Groups & Corporate Offsites",
    duration: "2 Nights / 3 Days or 3 Nights / 4 Days (Custom)",
    targetAudience: "Corporate leadership teams, startup offsites, university alumni groups, and large family reunions looking for seamless group logistics.",
    shortSummary:
      "Flawless corporate offsites in the wild: conference facilities, team-building forest challenges, multiple synchronized safari gypsies, and grand evening barbecues.",
    highlights: [
      "Multi-jeep coordination ensuring entire teams explore the jungle safely.",
      "Conference hall setup with AV projection and high-speed Wi-Fi.",
      "Team-building naturalist challenges, river crossing walks, and wilderness survival workshops.",
      "Curated gala dinners, live music setups, and cocktail hours (outside reserve boundary).",
      "Dedicated on-site trip manager handling room keys, logistics, and gate protocols.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Group Arrival, Lunch & Strategy Session",
        description: "Smooth bus/coach arrival at resort. Welcome drinks and check-in. Afternoon strategy or team session in the conference room. Evening bonfire and musical gala.",
      },
      {
        day: 2,
        title: "Multi-Gypsy Jungle Safari & Outdoor Challenges",
        description: "Early morning multi-jeep safari convoy across selected zones. Return for breakfast. Afternoon team-building activities along the Kosi river. Evening celebratory lawn dinner.",
      },
      {
        day: 3,
        title: "Closing Session & Return Journey",
        description: "Morning team breakfast, awards/summary session, and group departure for Delhi.",
      },
    ],
    inclusions: [
      "Custom accommodation inventory matching group headcount.",
      "All meals (Buffet breakfast, lunch, and dinner).",
      "Safari logistics with synchronized multi-vehicle permits.",
      "Dedicated corporate liaison and trip manager.",
    ],
    exclusions: [
      "Special conference AV rentals (if custom setup required).",
      "GST as applicable for corporate billing.",
    ],
    bestMonths: "October to April",
    zonesUsed: ["Bijrani", "Jhirna", "Dhela", "Garjiya"],
    faq: [
      {
        question: "Can you manage safari permits for groups of 30 to 50 people?",
        answer:
          "Yes. Because CTR limits permits per zone, we strategically split large groups across adjacent zones (e.g., half in Bijrani, half in Garjiya) so everyone experiences a top-tier safari shift simultaneously.",
      },
    ],
    startingPrice: "Custom Quote Based on Headcount",
    ctaText: "Request Corporate Quote",
  },
  {
    slug: "safari-only",
    title: "Safari Only Coordination",
    duration: "Single Shift / Double Shift (Morning or Afternoon)",
    targetAudience: "Travellers who have already booked their own resort and only need official CTR safari permits, registered vehicles, and authorised guides.",
    shortSummary:
      "Pure safari logistics: official CTR permit in your name via corbettgov.org, registered 4x4 Gypsy with experienced driver, and authorised nature guide.",
    highlights: [
      "100% transparent fee breakdown: CTR government permit fee + vehicle + guide.",
      "Permits issued in your name on the official corbettgov.org portal.",
      "Doorstep pickup and drop from your hotel in Ramnagar or Dhikuli.",
      "Experienced local driver and Forest Department certified naturalist.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Safari Shift Execution",
        description:
          "Your registered gypsy and certified guide arrive at your hotel 30 minutes before your scheduled gate entry time. Proceed to the designated gate (e.g. Amdanda or Dhela) for mandatory ID verification. Enjoy 3.5 to 4 hours of game tracking in the core habitat. Return safely to your hotel after the shift.",
      },
    ],
    inclusions: [
      "Official CTR day safari entry permit.",
      "CTR-registered 4x4 Gypsy for up to 6 adults + 2 children under 12.",
      "Forest Department authorised guide fee.",
      "Resort pickup and drop within the Ramnagar/Dhikuli belt.",
    ],
    exclusions: [
      "Accommodation and hotel stays.",
      "Meals, snacks, and drinking water.",
      "Pickup from distant locations (Marchula, Mohan, Nainital incur extra taxi surcharge).",
    ],
    bestMonths: "Year-Round (Jhirna & Dhela open year-round; Bijrani & Garjiya Oct–Jun; Dhikala Canter Nov–Jun)",
    zonesUsed: ["Bijrani", "Garjiya", "Jhirna", "Dhela", "Durga Devi", "Pakhro", "Sonanadi"],
    faq: [
      {
        question: "What is the official CTR fee for a jeep safari?",
        answer:
          "As verified on corbettgov.org: the official CTR permit is ₹3,380 for Indian nationals (covers up to 6 persons), vehicle hiring is ₹2,700–₹3,000 depending on zone, and the mandatory guide fee is ₹1,000. We charge a clear, transparent concierge fee for securing your permit and managing local logistics.",
      },
    ],
    startingPrice: "From ₹3,380 Official Permit + Vehicle & Guide",
    ctaText: "Book Safari Only",
  },
];
