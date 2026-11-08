export interface SafariTimingShift {
  morning: string;
  afternoon: string;
}

export interface ZoneData {
  slug: string;
  name: string;
  gate: string;
  season: string;
  isOpenYearRound: boolean;
  openMonths: number[]; // 1 to 12
  baseTown: string;
  distanceFromRamnagar: string;
  entryLimitPerShift: string;
  safariTypes: ("Jeep" | "Canter" | "Night Stay")[];
  terrain: string;
  keyWildlife: string[];
  bestFor: string;
  description: string;
  detailedGuide: string[];
  forestRestHouses: string[];
  tips: string[];
  faq: { question: string; answer: string }[];
  isInsideCTR: boolean;
}

export const safariZones: ZoneData[] = [
  {
    slug: "dhikala",
    name: "Dhikala Zone",
    gate: "Dhangarhi Gate",
    season: "15 November – 15 June",
    isOpenYearRound: false,
    openMonths: [11, 12, 1, 2, 3, 4, 5, 6],
    baseTown: "Ramnagar",
    distanceFromRamnagar: "32 km to Dhangarhi Gate (entry point)",
    entryLimitPerShift: "Canter only (approx. 4 canters of 16 seats each per shift) + FRH resident gypsies",
    safariTypes: ["Canter", "Night Stay"],
    terrain: "Sprawling grasslands (Dhikala Chaur), Patli Dun river valley, broad Ramganga riverbed, and dense moist deciduous sal forest.",
    keyWildlife: [
      "Bengal Tiger",
      "Asian Elephant Herds",
      "Hog Deer (best habitat in Corbett)",
      "Spotted Deer (Chital)",
      "Gharial & Mugger Crocodile",
      "Pallas's Fish Eagle",
    ],
    bestFor: "Big wilderness scale, elephant herds, hog deer, and serious photographers staying overnight inside the core.",
    description:
      "The undisputed crown jewel and largest tourism zone of Corbett Tiger Reserve. Dhikala offers sweeping horizons over the Ramganga reservoir and the legendary Dhikala Chaur. Important: Day jeep safaris are completely forbidden here; you can only visit via a 16-seater Canter safari or an overnight stay in the historic British-era rest house.",
    detailedGuide: [
      "Dhikala represents the quintessential Indian wilderness. When Jim Corbett wrote of the Patli Dun and the mighty Ramganga, this was the landscape he described. Located 32 km inside the Dhangarhi gate, the drive itself is a magnificent safari through thick sal canopies, crossing the Gharial pool and high ridges.",
      "The Dhikala Chaur is one of Asia's most spectacular natural grasslands, framed by the Shivalik foothills. During the winter and summer months, large breeding herds of Asian elephants traverse the plain, calves in tow, while hundreds of chital graze under the watchful gaze of resident tigers.",
      "Unlike other zones, day jeeps are strictly disallowed to prevent overcrowding in this sensitive core habitat. Day visitors must book the official 16-seater open Canter safari, which boards at Ramnagar reception and Dhangarhi gate.",
      "For the ultimate experience, secure an overnight permit for the Dhikala Forest Rest House complex (built in 1890). Overnight guests enjoy exclusive morning and evening gypsy drives in the deep core before day canters arrive.",
    ],
    forestRestHouses: ["Dhikala FRH (Main Campus)", "Sarpduli FRH", "Gairal FRH", "Sultan FRH"],
    tips: [
      "Remember that day jeeps are barred; never pay an operator who promises a 'day jeep inside Dhikala' — it does not exist legally.",
      "The Canter safari leaves strictly on schedule; be at the Dhangarhi gate at least 20 minutes before departure.",
      "Bring warm thermal layers between December and February; morning open canters in the valley are freezing cold.",
      "Dhikala FRH night stay permits open 45 days ahead at 10 AM IST for Indians and 90 days for foreigners; they vanish in seconds.",
    ],
    faq: [
      {
        question: "Can I take a private jeep on a day trip to Dhikala?",
        answer:
          "No. Corbett Tiger Reserve regulations strictly prohibit day jeep safaris inside Dhikala. Day visitors can only enter via the 16-seater government-operated Canter safari.",
      },
      {
        question: "How do I book a night stay at Dhikala Forest Rest House?",
        answer:
          "Night stay permits are issued via the official CTR portal (corbettgov.org). The booking window opens 45 days in advance for Indian citizens and 90 days for international visitors. We assist travellers with permit logistics subject to official availability.",
      },
      {
        question: "Is non-vegetarian food or alcohol allowed at Dhikala FRH?",
        answer:
          "No. Alcohol, tobacco, non-vegetarian food, and loud music are strictly prohibited throughout all Forest Rest Houses in Corbett Tiger Reserve.",
      },
    ],
    isInsideCTR: true,
  },
  {
    slug: "bijrani",
    name: "Bijrani Zone",
    gate: "Amdanda Gate",
    season: "15 October – 30 June",
    isOpenYearRound: false,
    openMonths: [10, 11, 12, 1, 2, 3, 4, 5, 6],
    baseTown: "Ramnagar",
    distanceFromRamnagar: "1 km to Amdanda Gate",
    entryLimitPerShift: "30 jeeps per shift (morning & afternoon)",
    safariTypes: ["Jeep", "Night Stay"],
    terrain: "Rich mix of pure sal forest, riverine belts along the Phulai and Malani sots, and open savannah-style grasslands (Bijrani Chaur).",
    keyWildlife: [
      "Bengal Tiger",
      "Leopard",
      "Sloth Bear",
      "Barking Deer",
      "Sambar",
      "Indian Peafowl",
      "Great Hornbill",
    ],
    bestFor: "Day jeep safaris, high tiger sighting probability, and diverse forest terrain close to Ramnagar resorts.",
    description:
      "Widely regarded as the top day jeep safari zone in Corbett. Located just 1 km from Ramnagar town at the Amdanda gate, Bijrani combines dramatic sal canopies, waterholes, and open chaurs, historically yielding outstanding predator sightings.",
    detailedGuide: [
      "Bijrani is the classic choice for day jeep safaris. From the moment you clear Amdanda gate and drive the 5 km buffer approach to the forest rest house, the canopy closes in with towering Shorea robusta (sal) trees and winding dry riverbeds known locally as 'sots'.",
      "The zone features a large central grassland where cheetal congregate in numbers, flanked by Machaan waterhole and the Manak sot. Tigers frequently use these nullahs for movement and shade during warm daylight hours.",
      "Bijrani is also a renowned haven for birdwatchers, with regular sightings of hornbills, serpent eagles, owls, and woodshrikes.",
    ],
    forestRestHouses: ["Bijrani FRH", "Malani FRH (remote wilderness FRH 12 km further inside)"],
    tips: [
      "Book your morning permit early; early morning safaris catch tigers returning from their night patrols.",
      "Carry binoculars; the thick understorey requires sharp scanning along fallen logs and nullahs.",
      "Bijrani gate is very close to Dhikuli resorts, making it a comfortable 15-minute transfer from most popular hotels.",
    ],
    faq: [
      {
        question: "How many people can sit in one Bijrani safari jeep?",
        answer:
          "Each gypsy is permitted to carry up to 6 adults and up to 2 children below 12 years of age, accompanied by one mandatory registered nature guide and driver.",
      },
      {
        question: "What is the difference between Bijrani and Dhikala?",
        answer:
          "Bijrani permits day jeep safaris with up to 30 jeeps per shift, allowing close, agile tracking. Dhikala only permits day visitors via 16-seater canters or guests staying overnight in forest rest houses.",
      },
    ],
    isInsideCTR: true,
  },
  {
    slug: "jhirna",
    name: "Jhirna Zone",
    gate: "Dhela Gate",
    season: "Year-Round (Weather permitting)",
    isOpenYearRound: true,
    openMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    baseTown: "Ramnagar",
    distanceFromRamnagar: "Approx. 20 km to Dhela Gate",
    entryLimitPerShift: "30 jeeps per shift",
    safariTypes: ["Jeep", "Night Stay"],
    terrain: "Dry deciduous scrub, bamboo thickets, open grassland patches, and rugged riverbeds.",
    keyWildlife: [
      "Asian Elephant",
      "Sloth Bear",
      "Bengal Tiger",
      "Wild Boar",
      "Spotted Deer",
      "Yellow-throated Marten",
    ],
    bestFor: "Monsoon safaris, year-round access, sloth bear sightings, and elephant encounters.",
    description:
      "Added to Corbett Tiger Reserve in 1994 after relocating human settlements. Jhirna remains open through the monsoon months (subject to safe track conditions) and is celebrated for its dense sloth bear population and frequent elephant herds.",
    detailedGuide: [
      "Jhirna was formerly agricultural village land, which was relocated outside the reserve in the early 1990s. Over the past three decades, nature has reclaimed the landscape with vigorous bamboo stands, open meadows, and diverse secondary forest.",
      "Because of its southern topography and well-drained gravel tracks, Jhirna stays operational 365 days a year, making it the primary sanctuary for summer monsoon travellers.",
      "The zone has a notable population of sloth bears who feed on termite mounds and seasonal forest berries, alongside resident tiger prides and wandering elephant herds.",
    ],
    forestRestHouses: ["Jhirna FRH"],
    tips: [
      "If travelling between July and September, Jhirna is your premier option inside Corbett Tiger Reserve.",
      "Watch for bears on early morning drives along the bamboo trails.",
    ],
    faq: [
      {
        question: "Is Jhirna zone open in July and August?",
        answer:
          "Yes. Jhirna is designated as a year-round ecotourism zone. However, if extreme flash floods temporarily wash out stream crossings, the park management may briefly pause safaris for passenger safety.",
      },
    ],
    isInsideCTR: true,
  },
  {
    slug: "dhela",
    name: "Dhela Zone",
    gate: "Dhela Gate",
    season: "Year-Round (Weather permitting)",
    isOpenYearRound: true,
    openMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    baseTown: "Ramnagar",
    distanceFromRamnagar: "Approx. 20 km to Dhela Gate",
    entryLimitPerShift: "15 jeeps per shift",
    safariTypes: ["Jeep"],
    terrain: "Mixed deciduous forest, wetlands, watchtower waterhole, and regenerated meadows.",
    keyWildlife: [
      "Bengal Tiger",
      "Asian Elephant",
      "Leopard",
      "Nilgai",
      "Spotted Deer",
      "Wide variety of raptors",
    ],
    bestFor: "Peaceful safaris, lower vehicle quota (15 jeeps), birdwatching, and monsoon trips.",
    description:
      "Opened in December 2014 adjacent to Jhirna, Dhela offers a quiet, unhurried safari experience with only 15 jeeps allowed per shift. Its watchtowers and waterbodies make it a peaceful destination for both mammals and raptors.",
    detailedGuide: [
      "Dhela shares the entry barrier with Jhirna but diverges into distinct western habitats characterized by broad riverbeds, water storage bodies, and viewing machaans.",
      "With a cap of only 15 vehicles per shift, Dhela avoids the congestion of larger zones, providing a more intimate wilderness connection.",
      "The zone has developed a strong track record for leopard and tiger sightings, particularly around waterholes during afternoon drives.",
    ],
    forestRestHouses: ["Dhela FRH"],
    tips: [
      "Great choice for travellers who value tranquility over high-volume convoy safaris.",
      "Visit the watchtower for a panoramic view of the wetland basin.",
    ],
    faq: [
      {
        question: "Can I do a safari in Dhela if Dhikala or Bijrani are sold out?",
        answer:
          "Yes. Dhela is an excellent, authentic CTR zone with lower vehicle pressure and strong wildlife activity.",
      },
    ],
    isInsideCTR: true,
  },
  {
    slug: "garjiya",
    name: "Garjiya Zone",
    gate: "Garjiya Gate (Ringora)",
    season: "15 October – 30 June",
    isOpenYearRound: false,
    openMonths: [10, 11, 12, 1, 2, 3, 4, 5, 6],
    baseTown: "Ramnagar",
    distanceFromRamnagar: "Approx. 9–10 km along the Kosi river highway",
    entryLimitPerShift: "30 jeeps per shift",
    safariTypes: ["Jeep"],
    terrain: "Dramatic riverine hills, mixed sal woodlands, and Kosi river riverbed corridors.",
    keyWildlife: [
      "Bengal Tiger",
      "Leopard",
      "Barking Deer",
      "Otters along river sections",
      "Kingfishers & Fish Eagles",
    ],
    bestFor: "Spectacular hilly landscapes, proximity to Dhikuli resorts, and predator movement corridors.",
    description:
      "Named after the nearby holy Garjiya Devi temple, this zone features rugged riverine ridges and rich sal valleys. It operates from October 15 to June 30 and has become one of Corbett's most sought-after day safari tracks.",
    detailedGuide: [
      "Garjiya (entered via Ringora gate) was established to relieve tourist pressure on Bijrani while opening up a magnificent stretch of the Kosi buffer and core boundary.",
      "The zone is contoured by dramatic hilly terrain, rocky gorges, and river channels, providing natural ambush points for leopards and tigers.",
      "Because of its elevation variations, morning mists drape the forest floor, offering atmospheric lighting conditions for photographers.",
    ],
    forestRestHouses: [],
    tips: [
      "Wear sturdy layers; hill shadow keeps parts of the zone cool until mid-morning.",
      "Pair with a visit to the historic Garjiya Devi temple located just 3 km away on the Kosi river rock.",
    ],
    faq: [
      {
        question: "Is Garjiya open during the monsoon?",
        answer:
          "No. As verified in official CTR pricing schedules, Garjiya is closed for the monsoon from July 1 to October 14 for habitat rejuvenation.",
      },
    ],
    isInsideCTR: true,
  },
  {
    slug: "durga-devi",
    name: "Durga Devi Zone",
    gate: "Durgadevi Gate",
    season: "15 November – 15 June",
    isOpenYearRound: false,
    openMonths: [11, 12, 1, 2, 3, 4, 5, 6],
    baseTown: "Ramnagar",
    distanceFromRamnagar: "Approx. 28–30 km on the Ranikhet road",
    entryLimitPerShift: "15 jeeps per shift",
    safariTypes: ["Jeep", "Night Stay"],
    terrain: "Steep mountainous forest, deep gorges, and crystal-clear river junctions of the Ramganga and Mandal rivers.",
    keyWildlife: [
      "Golden Mahseer (in rivers)",
      "Leopard",
      "Asian Elephant",
      "Crested Serpent Eagle",
      "Great Hornbill",
      "Forktails & Ibisbills",
    ],
    bestFor: "Avid birdwatchers, river-valley mountain scenery, and peaceful isolation away from crowds.",
    description:
      "The northeast gateway to Corbett Tiger Reserve. Durga Devi offers rugged hill terrain where the Shivaliks rise steeply above the confluence of the Ramganga and Mandal rivers. A world-class haven for birders and landscape enthusiasts.",
    detailedGuide: [
      "For naturalists and birders, Durga Devi is unparalleled. Unlike the flat grasslands of southern Corbett, Durga Devi is mountainous, featuring steep climbs, river ravines, and high-canopy forests.",
      "The crystal-clear Mandal river is home to the endangered Golden Mahseer, and the riverbanks host specialized birds like the Crested Kingfisher, Little Forktail, and Plumbeous Water Redstart.",
      "Elephants frequently scale these forested hills between Corbett and the high Almora ranges.",
    ],
    forestRestHouses: ["Lohachaur FRH"],
    tips: [
      "Bring telephoto lenses and high-magnification binoculars.",
      "Drive from Ramnagar takes about 45–55 minutes; start early to reach the gate for first light.",
    ],
    faq: [
      {
        question: "Is Durga Devi suitable for travellers seeking quick tiger sightings?",
        answer:
          "Durga Devi has tigers, but the steep mountain terrain makes spotting them more challenging than in the grasslands of Bijrani or Dhikala. Durga Devi is prized primarily for pristine wilderness, birdlife, and breathtaking landscapes.",
      },
    ],
    isInsideCTR: true,
  },
  {
    slug: "sonanadi",
    name: "Sonanadi Zone",
    gate: "Vatanvasa Gate",
    season: "15 November – 15 June",
    isOpenYearRound: false,
    openMonths: [11, 12, 1, 2, 3, 4, 5, 6],
    baseTown: "Kotdwar",
    distanceFromRamnagar: "Accessible from Kotdwar / Kalagarh (approx. 70 km from Ramnagar)",
    entryLimitPerShift: "Controlled forest permits",
    safariTypes: ["Jeep", "Night Stay"],
    terrain: "Dense bamboo and sal wilderness along the Sonanadi River, undisturbed evergreen valleys.",
    keyWildlife: [
      "Asian Elephant Herds",
      "Bengal Tiger",
      "Leopard",
      "Cheetal",
      "Over 150 bird species",
    ],
    bestFor: "Off-the-beaten-track wilderness, elephant herds, and travellers arriving from Dehradun/Kotdwar.",
    description:
      "Part of the Sonanadi Wildlife Sanctuary, which forms an essential 301 sq km northern buffer for Corbett Tiger Reserve. Named after the River of Gold (Sonanadi), this quiet sanctuary offers raw, untouched Himalayan foothills.",
    detailedGuide: [
      "Sonanadi remains one of North India's least commercialized forest tracts. Operating out of Kotdwar and Kalagarh on the western side of CTR, Sonanadi offers immense tranquility.",
      "Large herds of elephants use the river basin as a primary migration route between Rajaji and Corbett.",
    ],
    forestRestHouses: ["Halduparao FRH", "Rathuwadhab FRH"],
    tips: [
      "Base yourself in Kotdwar or Kalagarh rather than Ramnagar for convenient morning gate access.",
    ],
    faq: [
      {
        question: "How do I reach Sonanadi from Delhi?",
        answer:
          "Take the train or road to Kotdwar (approx. 5 hours from Delhi), then head towards Vatanvasa Gate.",
      },
    ],
    isInsideCTR: true,
  },
  {
    slug: "pakhro",
    name: "Pakhro Zone",
    gate: "Pakhro Gate",
    season: "15 November – 15 June",
    isOpenYearRound: false,
    openMonths: [11, 12, 1, 2, 3, 4, 5, 6],
    baseTown: "Kotdwar",
    distanceFromRamnagar: "Approx. 25 km from Kotdwar; ~2 hours from Jolly Grant Airport (Dehradun)",
    entryLimitPerShift: "15 jeeps per shift",
    safariTypes: ["Jeep", "Night Stay"],
    terrain: "Gentle sal ridges, pristine mixed woodland, and dry river streams connecting CTR with Rajaji.",
    keyWildlife: [
      "Bengal Tiger",
      "Asian Elephant",
      "Leopard",
      "Sambar",
      "Wild Dogs (Dhole)",
    ],
    bestFor: "Travellers flying into Dehradun or travelling via Haridwar/Rishikesh who want Corbett core access without driving to Ramnagar.",
    description:
      "The newest official entry point into CTR on its western border. Situated just 25 km from Kotdwar, Pakhro provides a pristine safari route through undisturbed sal forests.",
    detailedGuide: [
      "Pakhro offers a strategic advantage for visitors coming from Dehradun, Rishikesh, or Chandigarh. By entering through Kotdwar, you eliminate the 3-hour eastward drive to Ramnagar.",
      "The zone connects seamlessly into the Sonanadi sanctuary and Dhikala interior, acting as a crucial elephant corridor.",
    ],
    forestRestHouses: ["Pakhro FRH"],
    tips: [
      "Ideal gate for guests combining a yoga retreat in Rishikesh with a Corbett tiger safari.",
    ],
    faq: [
      {
        question: "Is Pakhro inside Corbett Tiger Reserve?",
        answer:
          "Yes. Pakhro is an official CTR entry gate with permits issued directly under the Corbett Tiger Reserve administration.",
      },
    ],
    isInsideCTR: true,
  },
  {
    slug: "beyond-the-reserve",
    name: "Beyond the Reserve (Sitabani, Kota & Phato)",
    gate: "Multiple forest gates (Ramnagar & Terai West divisions)",
    season: "Year-round (varies by sector)",
    isOpenYearRound: true,
    openMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    baseTown: "Ramnagar",
    distanceFromRamnagar: "5 km to 25 km depending on division",
    entryLimitPerShift: "Separate division quotas",
    safariTypes: ["Jeep"],
    terrain: "Sacred groves, deep sal woodlands, river valleys, and community forest buffers.",
    keyWildlife: [
      "Bengal Tiger",
      "Leopard",
      "Spotted Deer",
      "Vulture colonies",
      "Over 300 bird species",
    ],
    bestFor: "Walking trails (Sitabani), nature walks, treehouse stays (Phato), and last-minute safari permits when CTR zones are sold out.",
    description:
      "Important Notice: These picturesque forest divisions are located OUTSIDE Corbett Tiger Reserve proper, managed by separate territorial divisions (Ramnagar Forest Division & Terai West Forest Division). We label them clearly and transparently.",
    detailedGuide: [
      "While Corbett Tiger Reserve has strict vehicle quotas, the surrounding territorial forest divisions offer rich biodiversity and unique activities that are prohibited inside the core reserve.",
      "Sitabani (Ramnagar Forest Division) is famous for its association with the epic Ramayana and the sage Valmiki. Uniquely, Sitabani permits walking safaris with forest guards, making it popular for botany and birding.",
      "Phato Zone (Terai West Forest Division) has recently emerged as a favorite for quiet tree-house stays and open-air safaris through pristine sal belts.",
    ],
    forestRestHouses: ["Sitabani Forest Rest House"],
    tips: [
      "Always know whether you are booking a CTR core zone or a surrounding forest division. We clearly differentiate permits on every booking voucher.",
    ],
    faq: [
      {
        question: "Are Sitabani and Phato part of Corbett Tiger Reserve?",
        answer:
          "No. They are governed by separate territorial forest divisions (Ramnagar FD and Terai West FD). While they share the same continuous wildlife landscape and host tigers and elephants, they are not CTR core zones.",
      },
    ],
    isInsideCTR: false,
  },
];

