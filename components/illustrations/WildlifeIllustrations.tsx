import React from "react";

interface IllustrationProps {
  className?: string;
  color?: string;
}

/**
 * JungleHorizonIllustration:
 * A rich, panoramic illustrated vista of Corbett Tiger Reserve.
 * Features the Shivalik Himalayan foothill ridges in the distance,
 * layered Sal tree canopy, tall elephant grass (chaur),
 * wild elephant family, spotted deer (chital), flying hornbill,
 * and a prowling Bengal tiger silhouette along the Ramganga riverbank.
 * Seamlessly grounds into solid sal-forest (#1F2A1F) at the bottom.
 */
export const JungleHorizonIllustration: React.FC<{
  className?: string;
  fillColor?: string;
  skyGradient?: boolean;
}> = ({ className = "", fillColor = "#1F2A1F", skyGradient = true }) => {
  return (
    <div className={`w-full overflow-hidden leading-none select-none pointer-events-none relative ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-auto min-h-[140px] max-h-[260px] block"
      >
        <defs>
          <linearGradient id="mistSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E9E4D8" stopOpacity="0" />
            <stop offset="40%" stopColor="#C8782A" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#1F2A1F" stopOpacity="0.25" />
          </linearGradient>

          <linearGradient id="distantRidgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#354635" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1F2A1F" stopOpacity="0.75" />
          </linearGradient>

          <linearGradient id="midForestGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#283728" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#1F2A1F" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Atmospheric sky glow behind mountains */}
        {skyGradient && (
          <rect x="0" y="0" width="1440" height="240" fill="url(#mistSkyGrad)" />
        )}

        {/* Layer 1: Distant Shivalik Foothills / Mountain Ridge */}
        <path
          d="M0,140 Q160,95 320,125 T640,105 T960,118 T1240,90 Q1360,115 1440,128 L1440,240 L0,240 Z"
          fill="url(#distantRidgeGrad)"
        />

        {/* Soaring Great Hornbills in distant sky */}
        <g fill="#2A382A" opacity="0.6">
          {/* Bird 1 */}
          <path d="M420,62 Q435,50 450,56 Q440,60 432,66 Q425,65 420,62 Z" />
          <path d="M432,60 Q445,45 458,54 Q446,58 436,65 Z" />
          {/* Bird 2 */}
          <path d="M465,74 Q476,64 488,69 Q480,72 474,77 Q469,76 465,74 Z" />
          {/* Bird 3 (higher up) */}
          <path d="M1020,48 Q1032,38 1044,43 Q1036,46 1030,51 Q1024,50 1020,48 Z" />
        </g>

        {/* Layer 2: Midground Sal Forest & River Canopy */}
        <path
          d="M0,165 
             C45,152 75,130 110,142 C145,155 175,138 215,148 C255,158 290,135 340,145
             C390,155 430,132 480,142 C530,152 570,128 620,140 C670,152 710,136 760,144
             C810,152 850,130 905,140 C960,150 1000,132 1050,142 C1100,152 1145,135 1195,145
             C1245,155 1290,130 1340,140 C1390,150 1420,135 1440,142 
             L1440,240 L0,240 Z"
          fill="url(#midForestGrad)"
        />

        {/* Layer 3: Foreground High-Fidelity Silhouette (Trees, Wildlife, Grassland, Riverbank) */}
        <g fill={fillColor}>
          {/* Majestic Old Sal Tree on Left (Dhangarhi/Dhikala gateway tree) */}
          {/* Trunk & main branches */}
          <path d="M65,240 L72,120 Q74,80 88,50 Q92,42 98,30 Q90,45 84,70 Q76,95 72,130 L65,240 Z" />
          {/* Left branches */}
          <path d="M78,95 Q55,75 32,70 Q45,78 68,96 Z" />
          <path d="M75,115 Q40,105 15,112 Q35,112 68,122 Z" />
          {/* Right branches */}
          <path d="M85,80 Q115,62 142,65 Q125,72 88,90 Z" />
          <path d="M82,100 Q120,95 155,108 Q125,106 82,112 Z" />
          {/* Sal Tree Foliage Clumps (characteristic tall crowned Shorea robusta) */}
          <ellipse cx="98" cy="28" rx="28" ry="18" />
          <ellipse cx="78" cy="38" rx="24" ry="16" />
          <ellipse cx="125" cy="55" rx="26" ry="16" />
          <ellipse cx="40" cy="68" rx="22" ry="14" />
          <ellipse cx="140" cy="98" rx="20" ry="12" />
          <ellipse cx="20" cy="108" rx="18" ry="11" />
          <ellipse cx="80" cy="65" rx="32" ry="20" />

          {/* Asian Elephant Matriarch & Calf walking through Dhikala grasslands */}
          {/* Big Elephant (Matriarch) around x=260 */}
          <g transform="translate(230, 148) scale(0.65)">
            {/* Body */}
            <ellipse cx="60" cy="45" rx="38" ry="26" />
            {/* Head & Ear */}
            <circle cx="25" cy="35" r="18" />
            <path d="M22,26 C32,24 38,34 32,48 C28,54 20,52 20,42 Z" />
            {/* Trunk */}
            <path d="M12,38 C8,45 6,56 10,66 C12,70 18,68 16,63 C12,56 14,48 18,44 Z" />
            {/* Legs */}
            <rect x="32" y="58" width="10" height="34" rx="3" />
            <rect x="48" y="58" width="10" height="33" rx="3" />
            <rect x="70" y="58" width="10" height="34" rx="3" />
            <rect x="85" y="58" width="9" height="33" rx="3" />
            {/* Tail */}
            <path d="M98,40 Q105,55 102,68" stroke={fillColor} strokeWidth="2" />
          </g>

          {/* Baby Elephant following mother */}
          <g transform="translate(305, 172) scale(0.38)">
            <ellipse cx="50" cy="40" rx="26" ry="18" />
            <circle cx="24" cy="32" r="13" />
            <path d="M14,35 Q8,48 14,58" stroke={fillColor} strokeWidth="4" strokeLinecap="round" />
            <rect x="30" y="48" width="7" height="24" rx="2" />
            <rect x="42" y="48" width="7" height="23" rx="2" />
            <rect x="58" y="48" width="7" height="24" rx="2" />
            <rect x="68" y="48" width="7" height="23" rx="2" />
          </g>

          {/* Tall Elephant Grass (Chaur) tufts along riverbed */}
          <path d="M180,240 Q185,190 170,165 Q182,185 190,240 Z" />
          <path d="M192,240 Q200,182 215,160 Q208,188 202,240 Z" />
          <path d="M210,240 Q225,185 245,170 Q230,195 220,240 Z" />
          <path d="M350,240 Q358,195 345,175 Q360,195 362,240 Z" />
          <path d="M368,240 Q380,185 400,168 Q388,198 378,240 Z" />
          <path d="M410,240 Q418,200 435,182 Q425,205 420,240 Z" />

          {/* Centre Feature: Prowling Bengal Tiger silhouette crossing Ramganga sandbank */}
          <g transform="translate(680, 166) scale(0.55)">
            {/* Body */}
            <path d="M30,32 Q55,20 90,26 Q120,30 135,42 Q115,58 75,56 Q40,54 30,32 Z" />
            {/* Head & alert ears */}
            <circle cx="22" cy="28" r="14" />
            <polygon points="12,18 16,10 22,17" />
            <polygon points="26,17 32,10 35,19" />
            {/* Snout */}
            <ellipse cx="14" cy="32" rx="7" ry="5" />
            {/* Front legs moving stalkingly */}
            <path d="M25,38 L22,68 L14,70 L18,38 Z" />
            <path d="M38,36 L44,65 L52,66 L46,36 Z" />
            {/* Powerful Hindquarters & Back legs */}
            <path d="M105,34 Q125,45 120,68 L112,69 Q110,50 96,44 Z" />
            <path d="M125,40 Q138,52 135,70 L128,71 Q125,55 118,44 Z" />
            {/* S-curved Tail */}
            <path
              d="M135,40 C155,38 168,52 165,65 C162,72 155,70 156,65 C158,56 148,48 135,46"
              fill={fillColor}
            />
          </g>

          {/* Herd of Spotted Deer (Chital) in the meadow (around x=940) */}
          {/* Alert Stag with Antlers */}
          <g transform="translate(930, 150) scale(0.5)">
            {/* Body */}
            <ellipse cx="45" cy="42" rx="22" ry="14" />
            {/* Slender neck & head */}
            <path d="M30,38 L22,22 L16,20 L18,28 L24,42 Z" />
            <circle cx="18" cy="20" r="5" />
            {/* Branching Antlers */}
            <path d="M18,16 L14,2 L10,6 M14,2 L18,0 M14,6 L12,8" stroke={fillColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M20,16 L24,2 L28,6 M24,2 L22,0 M24,6 L26,8" stroke={fillColor} strokeWidth="2" strokeLinecap="round" />
            {/* Graceful slender legs */}
            <line x1="26" y1="52" x2="24" y2="78" stroke={fillColor} strokeWidth="3" />
            <line x1="33" y1="52" x2="35" y2="78" stroke={fillColor} strokeWidth="3" />
            <line x1="55" y1="52" x2="54" y2="78" stroke={fillColor} strokeWidth="3" />
            <line x1="62" y1="52" x2="65" y2="78" stroke={fillColor} strokeWidth="3" />
          </g>
          {/* Doe grazing */}
          <g transform="translate(985, 168) scale(0.42)">
            <ellipse cx="45" cy="35" rx="20" ry="12" />
            {/* Neck reaching down to grass */}
            <path d="M30,32 L15,44 L10,42 L22,28 Z" />
            <circle cx="12" cy="44" r="5" />
            <line x1="28" y1="44" x2="26" y2="68" stroke={fillColor} strokeWidth="3" />
            <line x1="35" y1="44" x2="36" y2="68" stroke={fillColor} strokeWidth="3" />
            <line x1="55" y1="44" x2="54" y2="68" stroke={fillColor} strokeWidth="3" />
            <line x1="62" y1="44" x2="64" y2="68" stroke={fillColor} strokeWidth="3" />
          </g>

          {/* Right Canopy: Dense Sal Trees & Bamboo Clump (Bijrani/Garjiya side) */}
          {/* Trunk & branches at x=1360 */}
          <path d="M1365,240 L1358,115 Q1355,80 1342,52 Q1336,44 1330,32 Q1340,48 1348,72 Q1355,98 1360,132 L1365,240 Z" />
          <path d="M1352,90 Q1325,72 1298,68 Q1318,78 1344,94 Z" />
          <path d="M1356,110 Q1320,105 1285,115 Q1315,114 1350,120 Z" />
          <path d="M1358,82 Q1390,62 1420,66 Q1400,74 1362,90 Z" />
          {/* Foliage Clumps */}
          <ellipse cx="1330" cy="30" rx="30" ry="18" />
          <ellipse cx="1355" cy="42" rx="26" ry="16" />
          <ellipse cx="1295" cy="62" rx="28" ry="16" />
          <ellipse cx="1405" cy="62" rx="25" ry="15" />
          <ellipse cx="1275" cy="110" rx="20" ry="13" />
          <ellipse cx="1345" cy="72" rx="35" ry="22" />

          {/* Bamboo reeds spray on right edge */}
          <path d="M1210,240 Q1225,180 1205,152 Q1218,178 1220,240 Z" />
          <path d="M1225,240 Q1245,175 1265,150 Q1250,182 1238,240 Z" />
          <path d="M1245,240 Q1270,172 1300,158 Q1280,185 1260,240 Z" />
          <path d="M1160,240 Q1175,195 1195,178 Q1182,202 1172,240 Z" />
          <path d="M1120,240 Q1130,205 1148,188 Q1138,210 1130,240 Z" />

          {/* Riverbank Base Fill: solid base from y=210 down to 240 */}
          <path d="M0,210 Q360,198 720,205 Q1080,198 1440,210 L1440,240 L0,240 Z" />
        </g>
      </svg>
    </div>
  );
};

/**
 * TopographicContoursIllustration:
 * Authentic surveyor's topographic elevation contour lines for background sections.
 * Gives sections a rich naturalist expedition map texture.
 */
export const TopographicContoursIllustration: React.FC<IllustrationProps> = ({
  className = "opacity-15",
  color = "#C8782A",
}) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke={color} strokeWidth="1.6" fill="none">
          {/* Elevation Ridge 1 (North-West Shivalik crest) */}
          <path d="M-100,80 C120,60 240,180 450,140 C660,100 800,220 1020,160 C1180,110 1280,190 1350,180" opacity="0.75" />
          <path d="M-100,120 C140,95 260,215 470,175 C680,135 820,255 1040,195 C1200,145 1300,225 1370,215" opacity="0.65" />
          <path d="M-100,160 C160,130 280,250 490,210 C700,170 840,290 1060,230 C1220,180 1320,260 1390,250" opacity="0.55" />
          <path d="M-100,200 C180,165 300,285 510,245 C720,205 860,325 1080,265 C1240,215 1340,295 1410,285" opacity="0.45" />

          {/* Ramganga River Basin Meander (Middle) */}
          <path
            d="M-50,380 C180,340 320,440 520,400 C720,360 860,480 1080,430 C1220,400 1320,460 1400,450"
            strokeWidth="2.8"
            strokeDasharray="10 5"
            opacity="0.9"
          />
          <path d="M-50,420 C190,380 330,480 530,440 C730,400 870,520 1090,470 C1230,440 1330,500 1410,490" opacity="0.7" />
          <path d="M-50,460 C200,420 340,520 540,480 C740,440 880,560 1100,510 C1240,480 1340,540 1420,530" opacity="0.55" />

          {/* South Ridge Elevation Contours (Dhela / Jhirna buffer) */}
          <path d="M-80,600 C150,560 380,680 620,620 C860,560 1020,700 1260,640 C1350,620 1420,650 1480,640" opacity="0.75" />
          <path d="M-80,640 C160,600 390,720 630,660 C870,600 1030,740 1270,680 C1360,660 1430,690 1490,680" opacity="0.65" />
          <path d="M-80,680 C170,640 400,760 640,700 C880,640 1040,780 1280,720 C1370,700 1440,730 1500,720" opacity="0.55" />
          <path d="M-80,720 C180,680 410,800 650,740 C890,680 1050,820 1290,760 C1380,740 1450,770 1510,760" opacity="0.45" />

          {/* Surveyor Spot Heights & Elevation Labels */}
          <text x="210" y="105" fontSize="11" fontFamily="monospace" fontWeight="bold" fill={color} opacity="0.85">
            ▲ 1042m (Kanda Ridge)
          </text>
          <text x="560" y="375" fontSize="11" fontFamily="monospace" fontWeight="bold" fill={color} opacity="0.85">
            ≈ Ramganga River Basin (385m)
          </text>
          <text x="890" y="235" fontSize="11" fontFamily="monospace" fontWeight="bold" fill={color} opacity="0.85">
            ▲ 740m (Patli Dun Crest)
          </text>
          <text x="320" y="655" fontSize="11" fontFamily="monospace" fontWeight="bold" fill={color} opacity="0.85">
            ▲ 460m (Southern Buffer)
          </text>
        </g>
      </svg>
    </div>
  );
};

/**
 * TigerWatermarkIllustration:
 * An artistic Bengal Tiger walking silhouette.
 * Used as a striking, elegant watermark badge behind feature cards or pricing tables.
 */
export const TigerWatermarkIllustration: React.FC<IllustrationProps & { size?: number }> = ({
  className = "",
  color = "#C8782A",
  size = 280,
}) => {
  return (
    <div className={`pointer-events-none select-none inline-block ${className}`} aria-hidden="true">
      <svg
        width={size}
        height={(size * 0.55)}
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={color}>
          {/* Main Body */}
          <path d="M60,65 C90,48 145,52 195,60 C235,68 255,85 240,110 C210,125 150,122 105,115 C75,110 55,90 60,65 Z" />
          {/* Powerful Shoulders & Neck */}
          <path d="M50,72 C40,65 35,50 48,38 C58,30 75,34 85,48 C75,60 62,68 50,72 Z" />
          {/* Head & Alert Ears */}
          <circle cx="36" cy="42" r="20" />
          <polygon points="20,26 26,12 36,22" />
          <polygon points="40,22 48,12 54,26" />
          {/* Snout & Whiskers Zone */}
          <ellipse cx="22" cy="48" rx="10" ry="8" />
          {/* Front Left Stalking Leg */}
          <path d="M48,68 L42,125 L28,130 L32,70 Z" />
          {/* Front Right Stepping Leg */}
          <path d="M68,68 L76,120 L90,122 L82,68 Z" />
          {/* Hind Left Powerful Leg */}
          <path d="M190,62 C220,80 215,118 208,128 L194,129 C192,105 178,85 168,72 Z" />
          {/* Hind Right Leg */}
          <path d="M225,75 C242,95 238,126 230,132 L218,133 C216,110 206,92 198,80 Z" />
          {/* Tail with elegant upward hook */}
          <path
            d="M242,75 C275,70 295,95 290,118 C286,130 274,126 276,116 C280,102 265,88 242,86 Z"
          />
          {/* Bengal Tiger Stripes Accents */}
          <path d="M100,58 L108,82 L102,84 L96,60 Z" opacity="0.3" fill="#141414" />
          <path d="M125,60 L134,88 L128,90 L120,62 Z" opacity="0.3" fill="#141414" />
          <path d="M152,62 L162,90 L156,92 L148,64 Z" opacity="0.3" fill="#141414" />
          <path d="M180,66 L190,92 L184,94 L175,68 Z" opacity="0.3" fill="#141414" />
        </g>
      </svg>
    </div>
  );
};

/**
 * ElephantWatermarkIllustration:
 * An Asian Elephant matriarch and calf strolling through the Ramganga riverbanks.
 */
export const ElephantWatermarkIllustration: React.FC<IllustrationProps & { size?: number }> = ({
  className = "",
  color = "#C8782A",
  size = 320,
}) => {
  return (
    <div className={`pointer-events-none select-none inline-block ${className}`} aria-hidden="true">
      <svg
        width={size}
        height={size * 0.58}
        viewBox="0 0 340 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={color}>
          {/* Matriarch Elephant */}
          <ellipse cx="140" cy="95" rx="72" ry="52" />
          <circle cx="70" cy="72" r="34" />
          <path d="M68,54 C88,50 98,72 88,96 C80,108 64,104 64,84 Z" opacity="0.85" />
          <path d="M48,78 C36,92 32,114 40,134 C44,142 54,138 52,130 C46,116 48,98 58,88 Z" />
          <rect x="85" y="118" width="20" height="68" rx="6" />
          <rect x="115" y="118" width="19" height="66" rx="6" />
          <rect x="160" y="118" width="20" height="68" rx="6" />
          <rect x="190" y="118" width="18" height="66" rx="6" />
          <path d="M210,80 Q225,110 218,135" stroke={color} strokeWidth="3.5" strokeLinecap="round" />

          {/* Baby Elephant following mother */}
          <g transform="translate(225, 65) scale(0.55)">
            <ellipse cx="90" cy="75" rx="46" ry="34" />
            <circle cx="45" cy="58" r="22" />
            <path d="M42,46 C56,42 62,58 56,74 C50,82 40,80 40,66 Z" opacity="0.85" />
            <path d="M30,62 Q18,84 28,102 Q34,92 36,70 Z" />
            <rect x="55" y="90" width="13" height="44" rx="4" />
            <rect x="74" y="90" width="12" height="42" rx="4" />
            <rect x="105" y="90" width="13" height="44" rx="4" />
            <rect x="122" y="90" width="12" height="42" rx="4" />
          </g>

          {/* Grass tufts at feet */}
          <path d="M75,190 Q80,165 70,150 Q78,168 85,190 Z" opacity="0.7" />
          <path d="M145,190 Q152,160 162,145 Q158,168 152,190 Z" opacity="0.7" />
          <path d="M250,190 Q256,168 266,155 Q260,172 256,190 Z" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
};

/**
 * DeerWatermarkIllustration:
 * An alert Chital (Spotted Deer) stag with branching antlers.
 */
export const DeerWatermarkIllustration: React.FC<IllustrationProps & { size?: number }> = ({
  className = "",
  color = "#C8782A",
  size = 240,
}) => {
  return (
    <div className={`pointer-events-none select-none inline-block ${className}`} aria-hidden="true">
      <svg
        width={size}
        height={size * 0.9}
        viewBox="0 0 200 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill={color}>
          <ellipse cx="115" cy="105" rx="48" ry="30" />
          <path d="M82,98 L68,60 L54,55 L58,72 L72,106 Z" />
          <circle cx="58" cy="55" r="14" />
          <polygon points="62,44 68,30 76,42" />
          <polygon points="52,45 44,32 50,44" />
          <ellipse cx="46" cy="58" rx="8" ry="6" />

          {/* Branching Antlers */}
          <g stroke={color} strokeWidth="2.8" strokeLinecap="round">
            <path d="M58,44 L52,14 L42,22 M52,14 L58,8 M52,24 L48,28" />
            <path d="M64,44 L72,12 L82,20 M72,12 L68,6 M72,22 L78,26" />
          </g>

          <line x1="72" y1="125" x2="68" y2="175" stroke={color} strokeWidth="4" strokeLinecap="round" />
          <line x1="86" y1="125" x2="90" y2="175" stroke={color} strokeWidth="4" strokeLinecap="round" />
          <line x1="135" y1="125" x2="132" y2="175" stroke={color} strokeWidth="4" strokeLinecap="round" />
          <line x1="150" y1="125" x2="154" y2="175" stroke={color} strokeWidth="4" strokeLinecap="round" />
          <path d="M162,96 Q174,106 168,118 Z" />
        </g>
      </svg>
    </div>
  );
};

/**
 * JungleFoliageWatermark:
 * Lush Sal tree leaves and bamboo ferns framing section borders.
 */
export const JungleFoliageWatermark: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  side?: "left" | "right";
}> = ({ className = "", size = 260, color = "#C8782A", side = "left" }) => {
  return (
    <div
      className={`pointer-events-none select-none inline-block ${
        side === "right" ? "-scale-x-100" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size * 0.9}
        viewBox="0 0 240 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke={color} fill={color}>
          <path d="M0,220 C40,160 90,110 200,20" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M20,220 C60,180 120,150 220,100" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />

          <path d="M200,20 C215,35 200,55 180,45 C185,30 200,20 200,20 Z" opacity="0.75" />
          <path d="M170,40 C190,52 180,72 155,62 C160,48 170,40 170,40 Z" opacity="0.7" />
          <path d="M140,65 C162,75 152,98 128,88 C132,74 140,65 140,65 Z" opacity="0.7" />
          <path d="M110,95 C132,105 124,128 100,116 C104,102 110,95 110,95 Z" opacity="0.65" />
          <path d="M80,130 C100,140 92,162 70,150 C74,138 80,130 80,130 Z" opacity="0.6" />

          <path d="M220,100 C232,112 218,128 200,120 C205,108 220,100 220,100 Z" opacity="0.65" />
          <path d="M185,115 C200,128 188,144 170,135 C175,124 185,115 185,115 Z" opacity="0.6" />
          <path d="M150,135 C165,148 152,164 135,155 C140,144 150,135 150,135 Z" opacity="0.55" />
        </g>
      </svg>
    </div>
  );
};

/**
 * NaturalistExpeditionSeal:
 * Authentic vintage naturalist seal for Corbett Tiger Reserve.
 * Used on feature badges, trust blocks, and guarantee cards.
 */
export const NaturalistExpeditionSeal: React.FC<{
  className?: string;
  size?: number;
  variant?: "light" | "dark" | "ochre";
}> = ({ className = "", size = 88, variant = "ochre" }) => {
  const strokeColor =
    variant === "ochre"
      ? "#C8782A"
      : variant === "dark"
        ? "#1F2A1F"
        : "#F5F2EA";

  const textColor =
    variant === "ochre"
      ? "#C8782A"
      : variant === "dark"
        ? "#1F2A1F"
        : "#F5F2EA";

  return (
    <div className={`inline-block select-none pointer-events-none ${className}`} aria-hidden="true">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Ring */}
        <circle cx="50" cy="50" r="47" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="50" cy="50" r="43" stroke={strokeColor} strokeWidth="1" />
        {/* Inner Circle */}
        <circle cx="50" cy="50" r="28" stroke={strokeColor} strokeWidth="1" />

        {/* Circular text simulation */}
        <path id="sealTextPath" d="M50,15 A35,35 0 1,1 49.9,15" fill="none" />
        <text fontSize="6.5" fontFamily="monospace" fill={textColor} letterSpacing="1.8">
          <textPath href="#sealTextPath" startOffset="0%">
            ★ CORBETT FIELD EXPEDITION • EST. 1936 ★
          </textPath>
        </text>

        {/* Center Pugmark Motif */}
        <g fill={textColor} transform="translate(37, 36) scale(1.1)">
          <ellipse cx="12" cy="15" rx="4.5" ry="5" />
          <circle cx="6.5" cy="8.5" r="1.8" />
          <circle cx="10" cy="5.5" r="1.8" />
          <circle cx="14" cy="5.5" r="1.8" />
          <circle cx="17.5" cy="8.5" r="1.8" />
        </g>
      </svg>
    </div>
  );
};

/**
 * BotanicalLeafAccent:
 * Sal leaf (Shorea robusta) foliage flourish for card borders and section headings.
 */
export const BotanicalLeafAccent: React.FC<{
  className?: string;
  size?: number;
  color?: string;
  direction?: "left" | "right";
}> = ({ className = "", size = 36, color = "#C8782A", direction = "right" }) => {
  return (
    <div
      className={`inline-block select-none pointer-events-none ${direction === "left" ? "-scale-x-100" : ""
        } ${className}`}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Branch stem */}
        <path d="M4,36 Q18,28 36,6" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        {/* Leaf 1 (tip) */}
        <path d="M36,6 Q38,15 30,16 Q28,10 36,6 Z" fill={color} opacity="0.85" />
        {/* Leaf 2 */}
        <path d="M26,14 Q32,22 24,24 Q22,18 26,14 Z" fill={color} opacity="0.75" />
        {/* Leaf 3 */}
        <path d="M20,20 Q12,14 16,8 Q20,14 20,20 Z" fill={color} opacity="0.75" />
        {/* Leaf 4 */}
        <path d="M14,26 Q20,32 14,35 Q10,30 14,26 Z" fill={color} opacity="0.65" />
      </svg>
    </div>
  );
};

/**
 * PugmarkWanderTrail:
 * An authentic trail of tiger paw prints wandering across horizontal section dividers.
 */
export const PugmarkWanderTrail: React.FC<{
  className?: string;
  color?: string;
  label?: string;
}> = ({
  className = "",
  color = "#C8782A",
  label,
}) => {
    return (
      <div
        className={`w-full overflow-hidden flex flex-col items-center justify-center py-2.5 select-none pointer-events-none text-center ${className}`}
        aria-hidden="true"
      >
        <div className="w-full max-w-xl px-4 flex items-center justify-center gap-3.5 mx-auto" style={{ color }}>
          {/* Left Symmetrical Fading Divider Line */}
          <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-current/30 to-current/80" />

          {/* 3 Paw Prints Symmetrically Centered */}
          <div className="flex items-center justify-center gap-2.5 shrink-0 px-2">
            {/* Paw 1 (Left - tilted -10deg) */}
            <div className="rotate-[-10deg] opacity-85">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <ellipse cx="12" cy="15" rx="4.5" ry="5" />
                <circle cx="6.5" cy="8.5" r="2" />
                <circle cx="10" cy="5.5" r="2" />
                <circle cx="14" cy="5.5" r="2" />
                <circle cx="17.5" cy="8.5" r="2" />
              </svg>
            </div>

            {/* Paw 2 (Exact Center Axis - upright 0deg) */}
            <div className="opacity-95">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <ellipse cx="12" cy="15" rx="4.5" ry="5" />
                <circle cx="6.5" cy="8.5" r="2" />
                <circle cx="10" cy="5.5" r="2" />
                <circle cx="14" cy="5.5" r="2" />
                <circle cx="17.5" cy="8.5" r="2" />
              </svg>
            </div>

            {/* Paw 3 (Right - tilted +10deg symmetrical to Paw 1) */}
            <div className="rotate-[10deg] opacity-85">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <ellipse cx="12" cy="15" rx="4.5" ry="5" />
                <circle cx="6.5" cy="8.5" r="2" />
                <circle cx="10" cy="5.5" r="2" />
                <circle cx="14" cy="5.5" r="2" />
                <circle cx="17.5" cy="8.5" r="2" />
              </svg>
            </div>
          </div>

          {/* Right Symmetrical Fading Divider Line */}
          <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-current/30 to-current/80" />
        </div>

        {label && (
          <span
            className="text-[10px] font-mono uppercase tracking-[0.25em] font-semibold mt-1 opacity-75 text-center block"
            style={{ color }}
          >
            {label}
          </span>
        )}
      </div>
    );
  };

