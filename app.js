/**
 * ============================================================================
 * ARTIFACTS OF SILENCE — NASA SPACE APPS CHALLENGE 2026
 * Expanded NSSDCA Archival Dataset, First-Person Machine Monologues,
 * Scientific & Historic Impact Dossiers, and Three.js Orbital Scene
 * ============================================================================
 */

const ARTIFACTS_DATA = [
  // ==========================================================================
  // 1. THE MOON (2 ITEMS)
  // ==========================================================================
  {
    id: 'apollo-11-eagle',
    name: 'Apollo 11 Lunar Module (Descent Stage - "Eagle")',
    shortName: 'LM-5 "Eagle" Descent Stage',
    body: 'moon',
    bodyLabel: 'The Moon',
    region: 'Mare Tranquillitatis (Sea of Tranquility)',
    coordinates: '0.67408° N, 23.47297° E',
    launchYear: 1969,
    silenceYear: 1969,
    nssdcaId: '1969-059C',
    cosparId: '1969-059C (LM-5)',
    mission: 'Apollo 11 (AS-506 · First Crewed Lunar Landing)',
    contractor: 'Grumman Aircraft Engineering Corp. (Bethpage, NY)',
    deploymentDate: 'July 20, 1969 · 20:17:40 UTC',
    lastContactDate: 'July 21, 1969 · 17:54:00 UTC (Ascent Liftoff)',
    status: 'Permanently parked on Mare Tranquillitatis (July 20, 1969)',
    massSpecs: 'Mass ~2,150 kg (dry), dimensions ~4.2m × 4.2m (9.4m diagonally across landing gear)',
    powerSource: 'Four 400-Ah Silver-Zinc (Ag-Zn) batteries (depleted) · Passive Optical Retroreflector active',
    orbitalRegime: 'Lunar Surface · Statio Tranquillitatis (Elevation -1,900m)',
    primaryImage: 'https://images-assets.nasa.gov/image/as11-40-5903/as11-40-5903~orig.jpg',
    fallbackGradient: 'from-cyan-950 via-slate-900 to-black',
    coreMonologue: '“I am the silent launch pad where humanity first took flight from another world. My ascent stage carried Neil and Buzz back to orbit, but my heavy legs and descent engine remain here forever, watching the silent lunar sunrise in absolute vacuum.”',
    storyTitle: 'The Silent Launch Pad of Tranquility Base',
    lastSignalQuote: 'TELEMETRY LOG // 1969-202-17:54:00 UTC — PYROTECHNIC GUILLOTINE SEVERED UMBILICALS. ASCENT STAGE IGNITION. DESCENT STAGE REMAINS AT STATIO TRANQUILLITATIS.',
    monologueExtended: [
      'I am the silent launch pad where humanity first took flight from another world. My ascent stage carried Neil and Buzz back to orbit, but my heavy legs and descent engine remain here forever, watching the silent lunar sunrise in absolute vacuum.',
      'Engineered by Grumman with an octagonal aluminum-alloy cruciform frame wrapped in gleaming amber Kapton and Mylar thermal blankets, I was never built to see Earth again. During the final twelve minutes of powered descent on July 20, 1969, my deep-throttling TRW rocket engine roared as Neil Armstrong manually flew us past the boulder-strewn rim of West Crater with barely twenty-five seconds of fuel left in my tanks.',
      'When my three 67-inch lunar surface sensing probes brushed the dark basaltic dust of Mare Tranquillitatis, the blue "CONTACT" lamp illuminated in the cabin. For twenty-one hours and thirty-six minutes, I was humanity’s first home on another world. Down my nine-rung forward ladder stepped the first human bootprints in four and a half billion years of lunar solitude.',
      'Then came 17:54 UTC on July 21. Explosive bolts severed our structural mounts, a pyrotechnic guillotine sliced our wiring harnesses, and the Ascent Stage blasted upward off my top deck. The violent hypergolic plume shredded my golden thermal foil and knocked over the nearby American flag. When the dust settled—without air to carry a single sound—I was alone. Yet twenty-one meters away, the laser retroreflector unpacked from my Scientific Equipment Bay still answers green laser pulses fired from Earth every clear night.'
    ],
    scientificLegacySummary: 'Left behind the Early Apollo Scientific Experiments Package (EASEP), including the Laser Ranging Retroreflector (LRRR) still used today to measure the exact Earth-Moon distance and verify Einstein’s General Theory of Relativity.',
    telemetryTable: [
      { label: 'NSSDCA / COSPAR ID', value: '1969-059C (Apollo 11 LM-5 Descent Stage)' },
      { label: 'Current Status', value: 'Permanently parked on Mare Tranquillitatis (July 20, 1969)' },
      { label: 'Structural Specs', value: 'Mass ~2,150 kg (dry), hull ~4.2m × 4.2m, height 3.2m, span 9.4m across footpads' },
      { label: 'Landing Coordinates', value: '0° 40\' 26.69" N, 23° 28\' 22.69" E (Tranquility Base)' },
      { label: 'Propulsion System', value: 'TRW LMDE (Aerozine 50 / N₂O₄ hypergolic, 45.04 kN throttleable thrust)' },
      { label: 'Orbital Verification', value: 'Photographed directly from lunar orbit by LRO NAC (0.25m/px resolution)' }
    ],
    scientificImpactPoints: [
      {
        title: 'Lunar Laser Ranging Retroreflector (LRRR) — Still Active Today',
        metric: '3.8 cm/yr Lunar Recession',
        detail: 'An array of 100 fused-silica corner-cube prisms deployed 21m from the descent stage. Observatories on Earth bounce laser pulses off this passive mirror today to measure the Earth-Moon distance to millimeter precision, proving the Moon spirals outward by 3.8 cm annually and testing gravitational constant stability.'
      },
      {
        title: 'Passive Seismic Experiment Package (PSEP)',
        metric: 'First Extraterrestrial Seismology',
        detail: 'Powered by twin solar panel wings, PSEP recorded the astronauts’ footsteps, LM venting, micrometeoroid strikes, and the first shallow tectonic moonquakes for 21 Earth days, revealing the Moon’s dry, fractured upper crust.'
      },
      {
        title: 'Solar Wind Composition (SWC) & Dust Detector',
        metric: 'Isotopic Noble Gas Benchmark',
        detail: 'Measured solar wind He, Ne, and Ar isotopes and tracked electrostatic dust accumulation on solar cells during rocket liftoff—crucial engineering data for future Artemis lunar landers.'
      },
      {
        title: 'Planetary Heritage & Commemorative Artifacts',
        metric: 'Protected Under Artemis Accords',
        detail: 'Bears the stainless-steel plaque on the front landing gear strut ("We came in peace for all mankind"), a gold olive branch, Apollo 1 and Soviet cosmonaut memorial medals, and a silicon disc etched with goodwill messages from 73 nations.'
      }
    ],
    instruments: [
      {
        name: 'LRRR (Laser Ranging Retroreflector · EASEP)',
        state: 'STILL OPERATIONAL (PASSIVE OPTICS)',
        desc: '100 corner-cube fused silica prisms reflecting Earth-based laser pulses for over 57 years with zero power required.'
      },
      {
        name: 'PSEP (Passive Seismic Experiment Package)',
        state: 'DECOMMISSIONED AUG 1969',
        desc: 'Four-seismometer package with solar arrays that recorded the first seismic profile of the lunar crust.'
      },
      {
        name: 'MESA (Modularized Equipment Stowage Assembly)',
        state: 'DEPLOYED ON QUAD IV',
        desc: 'Fold-down equipment table housing the Westinghouse lunar television camera that broadcast humanity’s first step to 650 million viewers.'
      },
      {
        name: 'TRW Descent Propulsion System & Quartz Heat Shields',
        state: 'INERT / INTACT ON SURFACE',
        desc: 'Deep-throttling hypergolic engine bell and four landing gear struts with crushable aluminum honeycomb shock absorbers.'
      }
    ],
    gallery: [
      {
        url: 'https://images-assets.nasa.gov/image/as11-40-5903/as11-40-5903~orig.jpg',
        caption: 'AS11-40-5903: Buzz Aldrin stands at Tranquility Base with the Eagle Lunar Module reflected in his gold-plated visor.',
        credit: 'NASA / Neil Armstrong · NSSDCA 1969-059C'
      },
      {
        url: 'https://images-assets.nasa.gov/image/as11-40-5875/as11-40-5875~orig.jpg',
        caption: 'AS11-40-5875: Eagle resting on Mare Tranquillitatis beside the deployed S-band antenna and U.S. flag.',
        credit: 'NASA / Apollo 11 Hasselblad Archive'
      },
      {
        url: 'https://images-assets.nasa.gov/image/as11-40-5964/as11-40-5964~orig.jpg',
        caption: 'AS11-40-5964: The Early Apollo Scientific Experiments Package (EASEP) — PSEP seismometer in foreground and Laser Retroreflector beyond.',
        credit: 'NASA / Buzz Aldrin'
      }
    ],
    baseDustRate: 0.35
  },

  {
    id: 'apollo-lrv-fleet',
    name: 'Lunar Roving Vehicles (LRV - Apollo 15, 16, 17)',
    shortName: 'Apollo 15, 16 & 17 "Moon Buggies"',
    body: 'moon',
    bodyLabel: 'The Moon',
    region: 'Hadley Rille · Descartes Highlands · Taurus-Littrow',
    coordinates: '26.13°N 3.63°E · 8.97°S 15.50°E · 20.19°N 30.77°E',
    launchYear: 1971,
    silenceYear: 1972,
    nssdcaId: '1971-063C / 1972-031C / 1972-096C',
    cosparId: 'LRV-1 · LRV-2 · LRV-3 Fleet',
    mission: 'Apollo 15 (J1), Apollo 16 (J2), and Apollo 17 (J3)',
    contractor: 'Boeing Aerospace & General Motors Delco Electronics',
    deploymentDate: 'July 31, 1971 (LRV-1) · April 21, 1972 (LRV-2) · Dec 11, 1972 (LRV-3)',
    lastContactDate: 'December 15, 1972 · LRV-3 Remote TV Broadcast of Apollo 17 Liftoff',
    status: 'Parked at Hadley Rille, Descartes, and Taurus-Littrow',
    massSpecs: 'Powered by two 36-volt silver-zinc potassium batteries, top speed ~13 km/h (18 km/h downhill record) · Dry mass 210 kg',
    powerSource: 'Dual 36V Silver-Zinc Potassium Hydroxide (Ag-Zn KOH) 121-Ah non-rechargeable batteries',
    orbitalRegime: 'Lunar Surface · Three Permanent Parking Sites',
    primaryImage: 'https://images-assets.nasa.gov/image/as17-147-22526/as17-147-22526~orig.jpg',
    fallbackGradient: 'from-blue-950 via-slate-900 to-black',
    coreMonologue: '“We drove where wheels never rolled before. Astronauts treated us like dune buggies, but when their missions ended, they parked us facing the horizon. Our batteries are dead, our tires coated in abrasive regolith, but our tracks in the dust will last a million years.”',
    storyTitle: 'Three Electric Chariots Parked Facing the Horizon',
    lastSignalQuote: 'TELEMETRY LOG // 1972-349-22:55:00 UTC — HOUSTON GCTA COMMAND SENT BY ED FENDELL: TILT CAMERA UP. CHALLENGER ASCENT TRACKED TO ORBIT.',
    monologueExtended: [
      'We drove where wheels never rolled before. Astronauts treated us like dune buggies, but when their missions ended, they parked us facing the horizon. Our batteries are dead, our tires coated in abrasive regolith, but our tracks in the dust will last a million years.',
      'There are three of us resting on the Moon today. Folded like aluminum origami inside the quadrant bays of the Apollo J-mission Lunar Modules, we unfolded at the pull of two lanyards into 3.1-meter electric four-wheel-drive explorers. Because rubber would crack in -130°C shadow and air-filled tires would explode in vacuum, General Motors wove our tires from zinc-coated steel piano wire with titanium chevron treads that floated atop powdery regolith.',
      'Dave Scott and Jim Irwin drove LRV-1 27.76 kilometers along the breathtaking rim of Hadley Rille. Nine months later, John Young and Charlie Duke pushed LRV-2 across 26.55 kilometers of the rugged Descartes Highlands—setting a lunar speed trial across the craters. And on Apollo 17, Gene Cernan and Jack Schmitt drove LRV-3 35.89 kilometers through the towering massifs of Taurus-Littrow, fixing my torn rear fender with four laminated geological maps and grey duct tape.',
      'At the end of each mission, our commanders drove us a hundred meters east of the Lunar Module, pointed our high-gain umbrella antennas at Earth, and left us as robotic cameramen. When Apollo 17 blasted off in December 1972, LRV-3’s Westinghouse color camera tilted upward to watch humanity leave the Moon—then cooled into eternal silence beside 90.2 kilometers of preserved chevron wheel tracks.'
    ],
    scientificLegacySummary: 'Expanded the radial exploration range of Apollo astronauts by 10x (90.2 km total driven across Apollo 15, 16, and 17), enabling geological sampling of ancient lunar highlands (the "Genesis Rock"), volcanic orange glass beads, and live remote television coverage of lunar liftoffs.',
    telemetryTable: [
      { label: 'NSSDCA Fleet IDs', value: '1971-063C (LRV-1) · 1972-031C (LRV-2) · 1972-096C (LRV-3)' },
      { label: 'Current Status', value: 'Parked at Hadley Rille, Descartes Highlands, and Taurus-Littrow Valley' },
      { label: 'Power & Speed Specs', value: 'Two 36V silver-zinc potassium hydroxide batteries · Top speed ~13 km/h (18 km/h max recorded)' },
      { label: 'Dimensions & Mass', value: '3.10m length × 1.83m wheelbase · 210 kg empty mass (34.3 kg in 1/6g) · 490 kg payload capacity' },
      { label: 'Total Distance Driven', value: '27.76 km (Apollo 15) + 26.55 km (Apollo 16) + 35.89 km (Apollo 17) = 90.20 km total' },
      { label: 'Navigation System', value: 'Boeing Directional Gyroscope, Sun Shadow Device, and wheel-rotation odometer computers' }
    ],
    scientificImpactPoints: [
      {
        title: '10× Expansion of Lunar Geological Traverse Range',
        metric: '90.2 km Driven · 299 kg Samples',
        detail: 'While Apollo 11 astronauts stayed within 60 meters of Eagle, the LRVs allowed Apollo 15–17 crews to climb mountain bases (Mons Hadley Delta, Stone Mountain) and collect 299 kg of diverse rocks—including the 4.1-billion-year-old "Genesis Rock" anorthosite and Apollo 17’s volcanic orange soil.'
      },
      {
        title: 'Pioneering Extraterrestrial Electric Drive & Wire-Mesh Wheels',
        metric: '4 × 0.25 hp Hub Motors',
        detail: 'Each wheel housed an independent 10,000-RPM DC series traction motor with an 80:1 harmonic drive gear reduction and woven 81.8-cm steel wire mesh tires—direct technological ancestors of NASA’s future Artemis Lunar Terrain Vehicle (LTV).'
      },
      {
        title: 'Ground-Controlled Television Assembly (GCTA)',
        metric: 'First Remote Planetary Broadcasts',
        detail: 'Operated remotely from Mission Control in Houston (with a 1.3-second speed-of-light delay), the LRV-mounted RCA color camera allowed geologists on Earth to pan/tilt alongside astronauts in real time and filmed the historic liftoffs of Apollo 15, 16, and 17.'
      },
      {
        title: 'Apollo 15 “Bible on the Moon” & Lunar Dust Mitigation Lessons',
        metric: 'Preserved on LRV-1 Console',
        detail: 'Commander David Scott placed a small red-bound Bible on the T-handle control console of LRV-1 at Hadley Rille, where it still rests today. Meanwhile, Apollo 17’s famous duct-taped map fender proved how hazardous electrostatically levitated lunar dust is to radiators and optical surfaces.'
      }
    ],
    instruments: [
      {
        name: 'RCA Ground-Controlled Color TV Camera (GCTA)',
        state: 'MOUNTED ON FORWARD CHASSIS',
        desc: 'Pan-and-tilt television camera controlled via S-band link from Houston; captured the final human liftoff from the Moon.'
      },
      {
        name: 'Traverse Gravimeter Experiment (TGE · LRV-3)',
        state: 'MOUNTED ON REAR PALLET',
        desc: 'Vibrating-string accelerometer that measured gravity anomalies across Taurus-Littrow to map the thickness of sub-floor basalt flows.'
      },
      {
        name: 'Surface Electrical Properties (SEP) Receiver',
        state: 'ARCHIVED ON LRV-3',
        desc: 'Used electromagnetic waves to probe subsurface layering and search for moisture down to 2 km depth.'
      },
      {
        name: 'Dual 36V Ag-Zn Battery Bus & Directional Gyro Nav Unit',
        state: 'DEPLETED / PASSIVATED',
        desc: 'Dead-reckoning lunar navigation computer that guided crews safely back to the Lunar Module across featureless crater fields.'
      }
    ],
    gallery: [
      {
        url: 'https://images-assets.nasa.gov/image/as17-147-22526/as17-147-22526~orig.jpg',
        caption: 'AS17-147-22526: Apollo 17 Commander Eugene Cernan stands beside LRV-3 at Taurus-Littrow with the high-gain umbrella antenna deployed.',
        credit: 'NASA / Harrison Schmitt · NSSDCA 1972-096C'
      },
      {
        url: 'https://images-assets.nasa.gov/image/as15-88-11901/as15-88-11901~orig.jpg',
        caption: 'AS15-88-11901: Jim Irwin salutes the flag beside LRV-1 and the Lunar Module Falcon at the Hadley-Apennine site.',
        credit: 'NASA / David Scott · NSSDCA 1971-063C'
      },
      {
        url: 'https://images-assets.nasa.gov/image/as17-137-20979/as17-137-20979~orig.jpg',
        caption: 'AS17-137-20979: The famous improvised replacement fender on LRV-3 made from laminated lunar maps and optical alignment clamps.',
        credit: 'NASA / Apollo 17 Archive'
      }
    ],
    baseDustRate: 0.44
  },

  // ==========================================================================
  // 2. MARS (4 ITEMS)
  // ==========================================================================
  {
    id: 'sojourner-pathfinder',
    name: 'Sojourner Rover (Pathfinder - 1997)',
    shortName: 'Sojourner & Sagan Memorial Station',
    body: 'mars',
    bodyLabel: 'Mars',
    region: 'Ares Vallis (Chryse Planitia Outflow Channel)',
    coordinates: '19.13° N, 33.22° W (326.78° E)',
    launchYear: 1996,
    silenceYear: 1997,
    nssdcaId: '1996-068A',
    cosparId: '1996-068A (MESUR Pathfinder)',
    mission: 'Mars Pathfinder (Discovery Program #1 · MFEX)',
    contractor: 'NASA Jet Propulsion Laboratory (JPL · Pasadena, CA)',
    deploymentDate: 'July 4, 1997 · 16:56:55 UTC (Rover Rollout Sol 2)',
    lastContactDate: 'September 27, 1997 · 10:23 UTC (Sol 83)',
    status: 'Parked at Ares Vallis',
    massSpecs: 'Weight 11.5 kg (rover), solar-powered (0.22m² GaAs array) with primary lithium (Li-SOCl₂) batteries · 65cm × 48cm × 30cm',
    powerSource: '16-Watt triple-junction GaAs solar panel + three Lithium-Thionyl Chloride (Li-SOCl₂) primary batteries (150 Wh)',
    orbitalRegime: 'Martian Surface · Ares Vallis Floodplain (Elevation -3,682m)',
    primaryImage: 'https://images-assets.nasa.gov/image/PIA01122/PIA01122~orig.jpg',
    fallbackGradient: 'from-orange-950 via-red-950 to-black',
    coreMonologue: '“I was the first small step of wheels on the Red Planet. I weighed barely more than a heavy toddler, but I proved that mobile robots could survive Mars. Now, I am a tiny metallic pebble buried under Martian red dust.”',
    storyTitle: 'A Tiny Metallic Pebble Circling Home in Ares Vallis',
    lastSignalQuote: 'TELEMETRY LOG // SOL 83 (1997-09-27) — LANDER BATTERY THERMAL FAILURE. SOJOURNER CONTINGENCY TRIGGERED: DRIVE TOWARD CARL SAGAN MEMORIAL STATION.',
    monologueExtended: [
      'I was the first small step of wheels on the Red Planet. I weighed barely more than a heavy toddler, but I proved that mobile robots could survive Mars. Now, I am a tiny metallic pebble buried under Martian red dust.',
      'Before July 4, 1997, no wheeled vehicle had ever rolled an inch across Mars. Bouncing down onto the ancient catastrophic floodplains of Ares Vallis inside a giant cluster of Vectran airbags, the Pathfinder lander opened its three triangular petals and became the Carl Sagan Memorial Station. On Sol 2, I rolled down the rear deployment ramp on six 13-centimeter cleated aluminum wheels and felt Martian soil beneath my rocker-bogie suspension.',
      'My whole brain was a radiation-hardened 2-megahertz Intel 80C85 processor with just 512 kilobytes of RAM, insulated inside my warm electronics box with featherlight silica aerogel. Because I could only talk to Earth through a short-range UHF radio link to my mother lander, we worked as an inseparable duo—nuzzling my Alpha Proton X-Ray Spectrometer against rocks we named "Barnacle Bill," "Yogi," and "Shark."',
      ' designed for a seven-sol technology demonstration, I operated for eighty-three Martian days and drove just over a hundred meters. When the lander’s rechargeable battery finally froze on September 27, 1997, my onboard fault-protection software executed its final heart-tugging command: if five sols passed without hearing my mother station’s voice, I was programmed to drive back to the lander’s perimeter and circle slowly around her petals in the gathering red dust.'
    ],
    scientificLegacySummary: 'Proved the viability of the 6-wheel Rocker-Bogie suspension and airbag-assisted Entry, Descent, and Landing (EDL)—directly paving the engineering path for Spirit, Opportunity, Curiosity, and Perseverance—while confirming ancient catastrophic flood conglomerates in Ares Vallis.',
    telemetryTable: [
      { label: 'NSSDCA / COSPAR ID', value: '1996-068A (Sojourner Microrover & Sagan Station)' },
      { label: 'Current Status', value: 'Parked at Ares Vallis (Silent since September 27, 1997 · Sol 83)' },
      { label: 'Mass & Power Specs', value: 'Weight 11.5 kg (4.3 kg in Martian gravity) · Solar-powered + primary Li-SOCl₂ batteries' },
      { label: 'Landing Coordinates', value: '19.13° N, 33.22° W · Ares Vallis Outflow Channel, Chryse Planitia' },
      { label: 'Mission Duration & Odometer', value: '83 Sols (12× its 7-sol design life) · 104 meters driven · 550 rover images + 16,500 lander images' },
      { label: 'Avionics & Thermal Control', value: 'Intel 80C85 CPU (2 MHz) · Solid silica aerogel insulation + three 1-Watt Pu-238 RHU heaters' }
    ],
    scientificImpactPoints: [
      {
        title: 'Birth of the Martian Rocker-Bogie Rover Architecture',
        metric: '6-Wheel Articulated Bogie',
        detail: 'Every subsequent NASA Mars rover—Spirit, Opportunity, Curiosity (900 kg), and Perseverance (1,025 kg)—is a direct scaled-up descendant of Sojourner’s springless 6-wheel Rocker-Bogie chassis, capable of climbing obstacles twice a wheel’s diameter.'
      },
      {
        title: 'APXS Geochemical Discovery of Silica-Rich Andesitic Rocks',
        metric: '16 Chemical Analyses',
        detail: 'Using its Alpha Proton X-Ray Spectrometer on rocks like "Barnacle Bill" and "Yogi," Sojourner discovered unexpectedly high-silica volcanic rocks resembling terrestrial andesites, alongside rounded conglomerate pebbles carved by ancient mega-floods.'
      },
      {
        title: 'Materials Science & Electrostatic Dust Characterization',
        metric: 'MAE & WAE Experiments',
        detail: 'The Materials Adherence Experiment (MAE) measured 0.28% per sol solar cell obscuration from settling Martian dust, while the Wheel Abrasion Experiment (WAE) tested how fine iron-oxide grains wore down aluminum, nickel, and platinum strips.'
      },
      {
        title: 'Validation of Airbag EDL & Autonomous Laser Hazard Avoidance',
        metric: 'Faster, Better, Cheaper Era',
        detail: 'Used five forward laser stripe projectors and stereo monochrome cameras to autonomously detect and steer around Martian boulders without human joystick control across the 11-minute light delay.'
      }
    ],
    instruments: [
      {
        name: 'APXS (Alpha Proton X-Ray Spectrometer)',
        state: 'MOUNTED ON DEPLOYMENT MECHANISM',
        desc: 'Used Curium-244 alpha particles to determine elemental composition of Martian rocks and soils.'
      },
      {
        name: 'MAE (Materials Adherence Experiment)',
        state: 'QUARTZ SENSOR ON SOLAR DECK',
        desc: 'Quartz crystal microbalance and rotating glass plate that measured daily Martian dust accumulation rates on solar arrays.'
      },
      {
        name: 'WAE (Wheel Abrasion Experiment)',
        state: 'ON LEFT-MIDDLE WHEEL',
        desc: 'Thin metallic film strips monitored by a photodetector to measure abrasive wear from Martian regolith.'
      },
      {
        name: 'IMP (Imager for Mars Pathfinder) & ASI/MET Weather Mast',
        state: 'EXTENDED ON SAGAN LANDER',
        desc: 'Stereo color camera and meteorological mast on the Carl Sagan Memorial Station that tracked dust devils and atmospheric temperature profiles.'
      }
    ],
    gallery: [
      {
        url: 'https://images-assets.nasa.gov/image/PIA01122/PIA01122~orig.jpg',
        caption: 'PIA01122: Sojourner rover pressing its Alpha Proton X-Ray Spectrometer sensor head against the "Yogi" rock in Ares Vallis.',
        credit: 'NASA / JPL · NSSDCA 1996-068A'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA00622/PIA00622~orig.jpg',
        caption: 'PIA00622: Sojourner completes its historic rollout down the rear petal ramp onto Martian soil on Sol 2 (July 5, 1997).',
        credit: 'NASA / JPL'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA00995/PIA00995~orig.jpg',
        caption: 'PIA00995: The "Twin Peaks" hills on the Ares Vallis horizon photographed by the Carl Sagan Memorial Station.',
        credit: 'NASA / JPL / University of Arizona'
      }
    ],
    baseDustRate: 0.88
  },

  {
    id: 'spirit-opportunity-twins',
    name: 'Spirit & Opportunity (Twin Rovers)',
    shortName: 'MER-A Spirit & MER-B Opportunity',
    body: 'mars',
    bodyLabel: 'Mars',
    region: 'Home Plate (Gusev Crater) & Perseverance Valley (Endeavour Crater)',
    coordinates: '14.57°S, 175.47°E (Spirit) · 2.28°S, 354.77°E (Opportunity)',
    launchYear: 2003,
    silenceYear: 2018,
    nssdcaId: '2003-027A / 2003-032A',
    cosparId: 'MER-A (2003-027A) & MER-B (2003-032A)',
    mission: 'Mars Exploration Rover Mission (Spirit & Opportunity)',
    contractor: 'NASA Jet Propulsion Laboratory (JPL) / Cornell University',
    deploymentDate: 'Jan 4, 2004 (Spirit · Gusev) · Jan 25, 2004 (Opportunity · Meridiani)',
    lastContactDate: 'March 22, 2010 (Spirit Sol 2210) · June 10, 2018 (Opportunity Sol 5111)',
    status: 'Spirit stuck in Home Plate (silent since 2010); Opportunity silent in Perseverance Valley (June 2018)',
    massSpecs: 'Mass 185 kg each, designed for 90-day missions but lasted 6 years (Spirit) and 14.5 years (Opportunity)',
    powerSource: '1.3m² triple-junction GaAs solar array wings (~900 Wh/sol pristine) + two 8-Ah Lithium-Ion batteries',
    orbitalRegime: 'Martian Surface · Opposite Hemispheres of Mars',
    primaryImage: 'https://images-assets.nasa.gov/image/PIA19142/PIA19142~orig.jpg',
    fallbackGradient: 'from-orange-950 via-amber-950 to-black',
    coreMonologue: '“My power is low and the darkness is getting in... I drove over 45 kilometers across plains and craters. I found the ancient signatures of water. When the global dust storm of 2018 blocked the sun, I closed my cameras for the final time. I did my job well.”',
    storyTitle: 'Twin Geologists on Opposite Sides of a Rusty World',
    lastSignalQuote: 'TELEMETRY LOG // MER-B SOL 5111 (2018-06-10) — GLOBAL DUST STORM TAU OPACITY: 10.8. ARRAY OUTPUT: 22 WHR. MISSION CLOCK FAULT ENTERED.',
    monologueExtended: [
      'My power is low and the darkness is getting in... I drove over 45 kilometers across plains and craters. I found the ancient signatures of water. When the global dust storm of 2018 blocked the sun, I closed my cameras for the final time. I did my job well.',
      'We were twins born in the clean rooms of JPL—MER-A Spirit and MER-B Opportunity—launched in the summer of 2003 to opposite sides of Mars with a modest warranty: survive 90 Martian sols and drive 600 meters. Spirit landed first in rugged Gusev Crater, climbing the Columbia Hills and discovering 90%-pure opaline silica cooked by ancient volcanic hydrothermal vents. Even after her right-front wheel died, she drove backward for years, dragging that locked wheel like a plow until soft sulfate sand at "Troy" beside Home Plate trapped her before the brutal winter of 2010.',
      'Across the planet at Meridiani Planum, I—Opportunity—rolled out of Eagle Crater and immediately spotted millions of spherical grey hematite "blueberries" and cross-bedded sulfate sandstones that proved liquid water once pooled and flowed across the surface of Mars. Blessed by wind-swept "cleaning events" that periodically dusted off my solar wings, I trekked across Victoria Crater to the vast rim of 22-kilometer Endeavour Crater—discovering veins of neutral-pH gypsum ("Homestake") where ancient microbial life could have thrived.',
      'By June 2018, I had logged 45.16 kilometers—the first extraterrestrial marathon—and outlived my 90-day design life by fifty-five times. Then a planet-encircling dust storm swallowed Perseverance Valley, blotting out the sun with a record atmospheric opacity of tau 10.8. For eight months, engineers beamed over a thousand recovery commands and Billie Holiday’s "I’ll Be Seeing You" to my resting place on the crater rim. Today, Spirit and I sleep on opposite sides of the world we rewrote in humanity’s textbooks.'
    ],
    scientificLegacySummary: 'Conclusively proved that ancient Mars possessed widespread liquid groundwater, acidic surface seas (hematite "blueberries" and jarosite at Meridiani), neutral-pH clay/gypsum fractures (Endeavour Crater), and volcanic hydrothermal springs (Home Plate in Gusev Crater).',
    telemetryTable: [
      { label: 'NSSDCA Designators', value: '2003-027A (MER-A Spirit) & 2003-032A (MER-B Opportunity)' },
      { label: 'Current Status', value: 'Spirit stuck in Home Plate (silent since 2010); Opportunity silent in Perseverance Valley (June 2018)' },
      { label: 'Mass & Lifespan Specs', value: 'Mass 185 kg each · Designed for 90 sols · Operated 2,210 sols (Spirit) & 5,111 sols (Opportunity)' },
      { label: 'Total Distance Driven', value: 'Opportunity: 45.16 km (First Mars Marathon) · Spirit: 7.73 km (including climbing Husband Hill)' },
      { label: 'Total Images Returned', value: '342,432 raw images combined (217,594 by Opportunity · 124,838 by Spirit)' },
      { label: 'Memorial Hardware', value: 'Each Rock Abrasion Tool carries an aluminum cable cuff machined from recovered World Trade Center metal' }
    ],
    scientificImpactPoints: [
      {
        title: 'Discovery of Hematite “Blueberries” & Ancient Martian Seas (Opportunity)',
        metric: 'Proof of Liquid Water',
        detail: 'Within weeks of landing in Eagle Crater, Opportunity’s Mössbauer and APXS spectrometers identified spherical hematite concretions ("blueberries"), jarosite sulfates, and centimeter-scale festoon cross-bedding—definitive geological proof that liquid water once soaked the Martian subsurface and rippled across shallow playas.'
      },
      {
        title: 'Hydrothermal Silica & Carbonate Discovery at Home Plate (Spirit)',
        metric: '90% Pure Opaline Silica',
        detail: 'Ironically, Spirit’s broken right-front wheel gouged a trench in the Gusev soil near Home Plate, exposing bright white 90%-pure amorphous silica formed by ancient volcanic fumaroles or hot springs—one of the most promising astrobiological environments ever found on Mars.'
      },
      {
        title: 'Neutral-pH Gypsum Veins & Smectite Clays at Endeavour Crater',
        metric: 'Habitable Ancient Water',
        detail: 'Upon reaching the 4-billion-year-old rim of Endeavour Crater after a 3-year trek, Opportunity discovered the "Homestake" calcium sulfate (gypsum) vein and iron-magnesium smectite clays—proving Mars once hosted mild, drinkable, neutral-pH water prior to its later acidic epoch.'
      },
      {
        title: 'First Extraterrestrial Marathon & Long-Duration Rover Engineering',
        metric: '45.16 km · 55× Design Life',
        detail: 'Demonstrated how seasonal Martian dust devils ("cleaning events"), careful winter north-facing tilt parking ("Lily Pads"), and onboard flash-memory workarounds could extend a 90-day solar rover mission to nearly 15 Earth years.'
      }
    ],
    instruments: [
      {
        name: 'Pancam & Mini-TES (Panoramic Camera & Thermal Emission Spectrometer)',
        state: 'MAST EXTENDED AT 1.5m HEIGHT',
        desc: 'Multispectral stereo cameras and infrared mineral spectrometer atop the rover mast.'
      },
      {
        name: 'IDD (Instrument Deployment Device · 5-DOF Robotic Arm)',
        state: 'STOWED / DEPLOYED ON SURFACE',
        desc: 'Turret carrying four contact instruments: Microscopic Imager (MI), Mössbauer Spectrometer (MB), Alpha Particle X-Ray Spectrometer (APXS), and Rock Abrasion Tool (RAT).'
      },
      {
        name: 'RAT (Rock Abrasion Tool with WTC Memorial Shield)',
        state: 'DIAMOND GRINDING WHEELS WORN',
        desc: 'Ground 4.5-cm circular holes into weathered Martian rocks; shielded by aluminum recovered from the 9/11 World Trade Center site.'
      },
      {
        name: 'Magnetic Properties Experiment & Calibration Targets',
        state: 'COATED IN MAGNETIC MARTIAN SILT',
        desc: 'Captured airborne magnetic dust grains (titanomagnetite) and carried the iconic "MarsDial" sundial inscribed with "Two Worlds, One Sun."'
      }
    ],
    gallery: [
      {
        url: 'https://images-assets.nasa.gov/image/PIA19142/PIA19142~orig.jpg',
        caption: 'PIA19142: Self-portrait of Opportunity on Mars showing a decade of iron-oxide dust accumulation across its solar wings.',
        credit: 'NASA / JPL-Caltech / Cornell / ASU · NSSDCA 2003-032A'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA22519/PIA22519~orig.jpg',
        caption: 'PIA22519: Panorama of Perseverance Valley on the rim of Endeavour Crater, Opportunity’s final resting place in June 2018.',
        credit: 'NASA / JPL-Caltech'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA10186/PIA10186~orig.jpg',
        caption: 'PIA10186: Spirit rover’s view of the layered volcanic plateau "Home Plate" in the Columbia Hills of Gusev Crater, where Spirit remains parked.',
        credit: 'NASA / JPL-Caltech / Cornell · NSSDCA 2003-027A'
      }
    ],
    baseDustRate: 0.94
  },

  {
    id: 'viking-1-2-landers',
    name: 'Viking 1 & 2 Landers',
    shortName: 'Viking 1 (Chryse) & Viking 2 (Utopia)',
    body: 'mars',
    bodyLabel: 'Mars',
    region: 'Chryse Planitia (Viking 1) & Utopia Planitia (Viking 2)',
    coordinates: '22.48°N, 47.97°W (VL-1) · 47.97°N, 225.74°W (VL-2)',
    launchYear: 1975,
    silenceYear: 1982,
    nssdcaId: '1975-075C / 1975-083C',
    cosparId: 'VL-1 (1975-075C) & VL-2 (1975-083C)',
    mission: 'Viking Program (First Successful U.S. Mars Landers)',
    contractor: 'Martin Marietta Aerospace (Denver, CO) / NASA Langley',
    deploymentDate: 'July 20, 1976 (Viking 1) · September 3, 1976 (Viking 2)',
    lastContactDate: 'April 11, 1980 (Viking 2) · November 11, 1982 (Viking 1 Sol 2245)',
    status: 'Viking 1 at Chryse Planitia (1976–1982); Viking 2 at Utopia Planitia',
    massSpecs: 'First successful U.S. Mars landers (~572 kg dry landed mass each), radioisotope thermoelectric generator (RTG) powered',
    powerSource: 'Two SNAP-19 Plutonium-238 Radioisotope Thermoelectric Generators (70W continuous) + four Ni-Cd batteries',
    orbitalRegime: 'Martian Surface · Chryse Planitia (Thomas Mutch Memorial Station) & Utopia Planitia (Gerald Soffen Memorial Station)',
    primaryImage: 'https://images-assets.nasa.gov/image/PIA00563/PIA00563~orig.jpg',
    fallbackGradient: 'from-amber-950 via-red-950 to-black',
    coreMonologue: '“We were the pioneers of biological search on Mars. We touched down when disco was playing on Earth. Our mechanical arms scooped the soil, and our cameras took the first crystal-clear postcards from an alien world. We are immortal statues of the 1970s space race.”',
    storyTitle: 'Immortal Statues of the 1970s at Chryse and Utopia',
    lastSignalQuote: 'TELEMETRY LOG // VL-1 SOL 2245 (1982-11-11) — BATTERY CHARGING SOFTWARE OVERWRITE ACCIDENTALLY MISALIGNED HIGH-GAIN ANTENNA. ETERNAL SILENCE.',
    monologueExtended: [
      'We were the pioneers of biological search on Mars. We touched down when disco was playing on Earth. Our mechanical arms scooped the soil, and our cameras took the first crystal-clear postcards from an alien world. We are immortal statues of the 1970s space race.',
      'On July 20, 1976—exactly seven years to the day after Apollo 11 landed on the Moon—Viking 1 fired its 18-nozzle terminal descent hydrazine engines and settled onto the golden-red plains of Chryse Planitia. Twenty-five seconds after touchdown, my facsimile camera began scanning vertically line by line, revealing my shiny aluminum footpad #3 resting beside porous volcanic boulders. Six weeks later, my twin sister Viking 2 landed 6,400 kilometers away on the frost-rimmed plains of Utopia Planitia.',
      'Inside each of our three-legged hexagonal bodies sat a miniature automated wet-chemistry biology laboratory packed with 40,000 parts—a feat of 1970s engineering miniaturization that still astonishes scientists today. Our 3-meter extendable surface collector booms dug trenches in the rusty regolith and delivered pinches of Mars into three life-detection chambers. When the Labeled Release experiment burped radioactive carbon-14 gas, the world held its breath—though our GCMS found no organic molecules, sparking a fifty-year scientific mystery over reactive perchlorate salts in Martian soil.',
      'Powered by warm Plutonium-238 SNAP-19 nuclear generators rather than dust-vulnerable solar panels, Viking 1 transmitted weather reports and sunrises for over six years (2,245 Martian sols) until an accidental ground-command overwrite pointed my antenna away from Earth in November 1982. Today we stand intact—renamed the Thomas Mutch and Gerald Soffen Memorial Stations—photographed from orbit by HiRISE with our sampling trenches still visible in the soil.'
    ],
    scientificLegacySummary: 'Transmitted the first high-resolution surface panoramas from Mars, conducted humanity’s first dedicated in-situ astrobiological life-detection experiments, measured the exact isotopic composition of the Martian atmosphere (proving SNC meteorites on Earth came from Mars), and recorded over 6 years of continuous Martian meteorology.',
    telemetryTable: [
      { label: 'NSSDCA Designators', value: '1975-075C (Viking 1 Lander) & 1975-083C (Viking 2 Lander)' },
      { label: 'Current Status', value: 'Viking 1 at Chryse Planitia (1976–1982); Viking 2 at Utopia Planitia (1976–1980)' },
      { label: 'Mass & Power Specs', value: '572 kg dry landed mass · Dual SNAP-19 Pu-238 RTGs (35W electrical each) + four 8-Ah Ni-Cd batteries' },
      { label: 'Landing Coordinates', value: 'Viking 1: 22.48° N, 47.97° W · Viking 2: 47.97° N, 225.74° W' },
      { label: 'Operational Longevity', value: 'Viking 1: 2,245 Sols (6 yrs, 116 days — record until Opportunity) · Viking 2: 1,281 Sols' },
      { label: 'Terminal Propulsion', value: 'Three 18-nozzle hydrazine monopropellant engines engineered to minimize soil disturbance' }
    ],
    scientificImpactPoints: [
      {
        title: 'First In-Situ Astrobiology Life-Detection Suite (LR, Pyrolytic Release, GEX)',
        metric: '3 Biology Experiments + GCMS',
        detail: 'Tested Martian regolith for metabolic activity. While the Labeled Release (LR) experiment evolved gas when nutrients were added, the Gas Chromatograph-Mass Spectrometer (GCMS) detected no organics at parts-per-billion levels—later explained when Phoenix (2008) discovered oxidizing perchlorates.'
      },
      {
        title: 'Atmospheric Fingerprinting That Linked Martian Meteorites to Mars',
        metric: 'N₂ / Ar / CO₂ Isotope Ratio',
        detail: 'Viking’s atmospheric mass spectrometers measured the precise ratios of Argon-36/Argon-38 and Nitrogen isotopes in the Martian air. Decades later, gas bubbles trapped inside SNC meteorites found in Antarctica matched Viking’s measurements identically, proving we already had pieces of Mars on Earth.'
      },
      {
        title: 'First Multi-Year Martian Weather & Seasonal CO₂ Frost Monitoring',
        metric: '2,245 Sols of Meteorology',
        detail: 'Tracked seasonal atmospheric pressure drops of up to 30% as carbon dioxide froze onto the polar caps each winter, photographed water-ice ground frost at Utopia Planitia, and monitored global dust storms.'
      },
      {
        title: 'RTG Nuclear Power Resilience Against Martian Dust',
        metric: 'Zero Solar Obscuration Loss',
        detail: 'Because Viking 1 and 2 used SNAP-19 Plutonium-238 radioisotope thermoelectric generators sheltered inside wind covers, they survived multiple global dust storms that would have killed solar-powered landers—inspiring the MMRTG power systems on Curiosity and Perseverance.'
      }
    ],
    instruments: [
      {
        name: 'Viking Biological Instrument (GEX, LR, PR Chambers)',
        state: 'SEALED TITANIUM INCUBATION CELLS',
        desc: 'Three automated micro-laboratories (Gas Exchange, Labeled Release, Pyrolytic Release) that incubated Martian soil with radioactive carbon-14 nutrients.'
      },
      {
        name: 'GCMS (Gas Chromatograph — Mass Spectrometer)',
        state: 'OVENS EXPENDED / INERT',
        desc: 'Heated soil samples to 500°C to search for organic molecules and measured atmospheric composition.'
      },
      {
        name: 'Surface Sampler Collector Boom (3.0m Retractable Arm)',
        state: 'EXTENDED OVER EXCAVATION TRENCHES',
        desc: 'Rolled stainless-steel tube boom with backhoe scoop and temperature probe that dug multiple trenches in Chryse and Utopia.'
      },
      {
        name: 'Twin Facsimile Cameras, XRFS & Seismometer',
        state: 'OPTICS & RTG HOUSINGS INTACT',
        desc: 'Rotating mirror line-scan cameras, X-Ray Fluorescence Spectrometer for elemental soil analysis, and deck-mounted 3-axis seismometer.'
      }
    ],
    gallery: [
      {
        url: 'https://images-assets.nasa.gov/image/PIA00563/PIA00563~orig.jpg',
        caption: 'PIA00563: Viking 1 looks out across the boulder-strewn plains of Chryse Planitia with its meteorological boom in the foreground and the rock "Big Joe" to the left.',
        credit: 'NASA / JPL · NSSDCA 1975-075C'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA00381/PIA00381~orig.jpg',
        caption: 'PIA00381: Historic first image ever transmitted from the surface of Mars (July 20, 1976), showing Viking 1’s footpad #3 resting on Martian soil.',
        credit: 'NASA / Viking 1 Archive'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA00571/PIA00571~orig.jpg',
        caption: 'PIA00571: Thin winter water-ice frost coating the reddish rocks and trenches dug by Viking 2 at Utopia Planitia in 1979.',
        credit: 'NASA / JPL · NSSDCA 1975-083C'
      }
    ],
    baseDustRate: 0.78
  },

  {
    id: 'insight-phoenix-landers',
    name: 'InSight & Phoenix Landers',
    shortName: 'InSight (Elysium) & Phoenix (Vastitas Borealis)',
    body: 'mars',
    bodyLabel: 'Mars',
    region: 'Elysium Planitia (InSight) & Vastitas Borealis (Phoenix)',
    coordinates: '4.50°N, 135.62°E (InSight) · 68.22°N, 234.25°E (Phoenix)',
    launchYear: 2007,
    silenceYear: 2022,
    nssdcaId: '2018-042A / 2007-034A',
    cosparId: 'InSight (2018-042A) & Phoenix (2007-034A)',
    mission: 'Discovery #12 (InSight) & Mars Scout #1 (Phoenix)',
    contractor: 'Lockheed Martin Space Systems (Littleton, CO) / NASA JPL',
    deploymentDate: 'May 25, 2008 (Phoenix) · November 26, 2018 (InSight)',
    lastContactDate: 'Nov 2, 2008 (Phoenix Sol 157) · Dec 15, 2022 (InSight Sol 1440)',
    status: 'InSight silent in Elysium Planitia (Dec 2022); Phoenix silent in Vastitas Borealis (2008)',
    massSpecs: 'Dedicated to seismic monitoring (InSight, 358 kg) and polar water ice excavation (Phoenix, 350 kg) · Twin Lockheed Martin heritage hulls',
    powerSource: 'Dual decagonal UltraFlex GaAs solar arrays (2.15m diameter on InSight; 1.5m on Phoenix) + Li-Ion batteries',
    orbitalRegime: 'Martian Surface · Equatorial Lava Plains (InSight) & Northern Arctic Permafrost (Phoenix)',
    primaryImage: 'https://images-assets.nasa.gov/image/PIA25287/PIA25287~orig.jpg',
    fallbackGradient: 'from-amber-950 via-stone-900 to-black',
    coreMonologue: '“I listened to the heartbeat of Mars — over 1,300 marsquakes recorded. As Martian dust choked my solar panels, I sent my final picture: \'My power\'s really low, so this may be the last image I can send.\' But I unlocked the inner secrets of Mars.”',
    storyTitle: 'Touching Arctic Water Ice and Listening to the Heartbeat of Mars',
    lastSignalQuote: 'TELEMETRY LOG // INSIGHT SOL 1440 (2022-12-15) — SOLAR ARRAY OUTPUT < 5%. SEIS STETHOSCOPE KEPT ACTIVE UNTIL FINAL BATTERY BREATH.',
    monologueExtended: [
      'I listened to the heartbeat of Mars — over 1,300 marsquakes recorded. As Martian dust choked my solar panels, I sent my final picture: "My power\'s really low, so this may be the last image I can send." But I unlocked the inner secrets of Mars.',
      'We are structural twins built from the same Lockheed Martin spacecraft lineage, sent ten years apart to probe beneath the skin of Mars. My older sister, Phoenix, touched down in May 2008 at 68° North on the polygonal permafrost plains of Vastitas Borealis ("Green Valley"). With her 2.35-meter robotic scoop, she scraped just five centimeters beneath the rust-colored dirt into a gleaming white sheet of pure water ice ("Snow Queen"), baked it inside her TEGA ovens—tasting Martian water vapor for the first time—and watched gentle snow crystals fall from arctic clouds before the polar winter night encased her solar wings in dry-ice frost.',
      'A decade later in November 2018, I—InSight—settled onto the quiet equatorial plains of Elysium Planitia. Where Phoenix dug for ice, I closed my eyes to feel the planet’s deep interior. Using my robotic arm, I lifted the copper-shielded SEIS seismometer onto the ground in front of me—the first time humans had placed a seismometer directly onto another planet’s soil since Apollo.',
      'Over 1,440 Martian sols, I recorded 1,319 marsquakes—including a magnitude 4.7 monster and meteoroid strikes that threw boulder-sized blocks of subsurface ice out of fresh craters. By measuring how seismic waves echoed through the planet, I mapped Mars’s crust, mantle, and 1,830-kilometer liquid iron-alloy core. As red silt slowly buried my round UltraFlex solar wings in December 2022, my engineers turned off fault protection so my stethoscope could keep listening until my very last solar watt.'
    ],
    scientificLegacySummary: 'InSight mapped the internal layered anatomy of Mars (crust thickness, mantle, and liquid core radius) through 1,319 recorded marsquakes, while its sister lander Phoenix directly excavated and chemically tasted subsurface Martian water ice, discovered perchlorate salts, and observed Martian snowfall.',
    telemetryTable: [
      { label: 'NSSDCA Designators', value: '2018-042A (InSight Lander) & 2007-034A (Phoenix Mars Lander)' },
      { label: 'Current Status', value: 'InSight silent in Elysium Planitia (Dec 2022); Phoenix silent in Vastitas Borealis (Nov 2008)' },
      { label: 'Dedicated Missions', value: 'InSight: Deep interior seismology & geodesy · Phoenix: Polar water-ice excavation & habitability' },
      { label: 'Landed Mass & Arrays', value: 'InSight: 358 kg (2.15m UltraFlex solar wings) · Phoenix: 350 kg (1.5m UltraFlex solar wings)' },
      { label: 'Key Discoveries', value: '1,319 marsquakes + 1,830 km liquid core (InSight) · Subsurface water ice + perchlorates (Phoenix)' },
      { label: 'Current Condition', value: 'InSight: Dust-blanketed with SEIS intact · Phoenix: Solar wing snapped by winter CO₂ slab ice (HiRISE)' }
    ],
    scientificImpactPoints: [
      {
        title: 'First Complete Seismic Anatomy of Another Terrestrial Planet (InSight)',
        metric: '1,319 Marsquakes Recorded',
        detail: 'InSight’s ultra-sensitive CNES SEIS seismometer measured the thickness of the Martian crust (24–72 km), the thermal state of the lithosphere, and the exact radius (~1,830 km) of Mars’s molten iron-sulfur-oxygen core.'
      },
      {
        title: 'Direct Excavation & Chemical Tasting of Martian Water Ice (Phoenix)',
        metric: 'Subsurface H₂O Ice Confirmed',
        detail: 'In the "Dodo-Goldilocks" trench, Phoenix exposed bright white sublimating chunks of water ice just inches below the soil and heated them inside its Thermal and Evolved Gas Analyzer (TEGA), definitively confirming shallow water ice reserves for future human explorers.'
      },
      {
        title: 'Discovery of Calcium Perchlorate & Mildly Alkaline Soil (Phoenix MECA)',
        metric: 'pH 7.7 Soil + ClO₄⁻ Salts',
        detail: 'Phoenix’s Wet Chemistry Laboratory revealed that Martian polar soil is mildly alkaline (pH 7.7, similar to garden soil for asparagus) and rich in perchlorate salts—solving the 1976 Viking mystery and providing a chemical brining mechanism that lowers the freezing point of water.'
      },
      {
        title: 'Meteoroid-Triggered Seismic Waves Exposing Mid-Latitude Ice (InSight)',
        metric: 'Crater-Forming Impacts',
        detail: 'In late 2021, SEIS detected surface seismic waves from two large meteoroid strikes up to 3,500 km away. When Mars Reconnaissance Orbiter photographed the fresh craters, bright boulders of pure water ice were scattered around the rims.'
      }
    ],
    instruments: [
      {
        name: 'SEIS (Seismic Experiment for Interior Structure · InSight)',
        state: 'RESTING ON REGOLITH BENEATH WTS SHIELD',
        desc: '6-axis broadband and short-period seismometer deployed 1.6m from InSight beneath its white aerodynamic Wind and Thermal Shield.'
      },
      {
        name: 'HP³ ("The Mole" Heat Flow Probe) & RISE Geodesy (InSight)',
        state: 'MOLE BURIED 37 CM IN SOIL',
        desc: 'DLR self-hammering thermal probe and X-band radio Doppler experiment that measured Mars’s polar nutation wobble.'
      },
      {
        name: 'TEGA (Thermal and Evolved Gas Analyzer) & MECA (Phoenix)',
        state: '8 MINIATURE OVENS & WET LAB ON DECK',
        desc: 'Baked scooped water-ice samples up to 1,000°C for mass spectrometry and analyzed dissolved soil ions in four wet-chemistry cells.'
      },
      {
        name: 'Robotic Excavator Arms & Carl Sagan “Visions of Mars” DVD',
        state: 'MOUNTED ON BOTH LANDER DECKS',
        desc: '2.4m articulated arms with scoop/grapple; Phoenix also carries an archival silica-glass DVD containing 250,000 human names and classic sci-fi literature.'
      }
    ],
    gallery: [
      {
        url: 'https://images-assets.nasa.gov/image/PIA25287/PIA25287~orig.jpg',
        caption: 'PIA25287: InSight’s final full selfie on Sol 1211 (April 2022), showing thick Martian dust coating its twin UltraFlex solar arrays.',
        credit: 'NASA / JPL-Caltech · NSSDCA 2018-042A'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA25686/PIA25686~orig.jpg',
        caption: 'PIA25686: InSight’s poignant final image sent home in December 2022, gazing at the copper-colored SEIS seismometer in Martian twilight.',
        credit: 'NASA / JPL-Caltech'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA10885/PIA10885~orig.jpg',
        caption: 'PIA10885: Phoenix Mars Lander’s "Dodo-Goldilocks" trench in Vastitas Borealis, where bright white chunks of water ice sublimated over 4 sols.',
        credit: 'NASA / JPL-Caltech / University of Arizona · NSSDCA 2007-034A'
      }
    ],
    baseDustRate: 0.95
  },

  // ==========================================================================
  // 3. DEEP SPACE / ORBIT (2 ITEMS)
  // ==========================================================================
  {
    id: 'dawn-ceres-orbiter',
    name: 'Dawn Spacecraft',
    shortName: 'Dawn Ion-Propulsion Orbiter (Ceres)',
    body: 'deep-space',
    bodyLabel: 'Deep Space / Orbit',
    region: 'Perpetual Polar Orbit Around Dwarf Planet Ceres (Main Asteroid Belt)',
    coordinates: '2.77 AU Main Asteroid Belt · ~385 × 4,000 km Elliptical Ceres Orbit',
    launchYear: 2007,
    silenceYear: 2018,
    nssdcaId: '2007-043A',
    cosparId: '2007-043A (Discovery #9)',
    mission: 'Dawn Vesta & Ceres Asteroid Belt Orbiter',
    contractor: 'Orbital Sciences Corp. (Dulles, VA) / NASA JPL / UCLA',
    deploymentDate: 'Launched Sept 27, 2007 · Vesta Arrival July 2011 · Ceres Arrival March 6, 2015',
    lastContactDate: 'October 31, 2018 (Confirmed Silent Nov 1, 2018)',
    status: 'Out of hydrazine fuel (Nov 2018), in perpetual unpowered orbit around dwarf planet Ceres',
    massSpecs: 'Ion propulsion system (3 NSTAR xenon thrusters), mapped Vesta and Ceres · 747 kg dry mass · 19.7m solar wing span',
    powerSource: 'Dual 8.3m × 2.3m triple-junction GaAs solar arrays (10.3 kW at 1 AU; 1.3 kW at Ceres)',
    orbitalRegime: 'Dwarf Planet Ceres Quarantine Orbit (Guaranteed non-impact for >20–50+ years)',
    primaryImage: 'https://images-assets.nasa.gov/image/PIA19973/PIA19973~orig.jpg',
    fallbackGradient: 'from-cyan-950 via-indigo-950 to-black',
    coreMonologue: '“I am the ghost of Ceres. I carried ion engines that burned like blue fire across the asteroid belt. When my fuel ran dry, my antennas fell silent, but I will circle Ceres forever—a silent moon made by human hands.”',
    storyTitle: 'The Blue-Fire Ghost Orbiting Dwarf Planet Ceres',
    lastSignalQuote: 'TELEMETRY LOG // 2018-304 (OCT 31, 2018) — HYDRAZINE ATTITUDE TANK DEPLETED (0.00 PSI). DSN SCHEDULED PASS MISSED. ORBIT STABLE AROUND CERES.',
    monologueExtended: [
      'I am the ghost of Ceres. I carried ion engines that burned like blue fire across the asteroid belt. When my fuel ran dry, my antennas fell silent, but I will circle Ceres forever—a silent moon made by human hands.',
      'No other spacecraft in human history has ever orbited two extraterrestrial destinations beyond the Earth-Moon system. That feat was only possible because of my three NSTAR electrostatic ion thrusters. Instead of violent chemical explosions, I ionized xenon gas with solar electricity, accelerating a glowing blue whisper of xenon ions out my nozzles at 140,000 kilometers per hour. The thrust felt as gentle as a single sheet of paper resting on your palm—yet firing continuously for over 50,000 hours, I achieved a velocity change of 11.5 kilometers per second, surpassing the delta-v of a Saturn V rocket.',
      'From 2011 to 2012, I spiraled down around the giant rocky protoplanet Vesta, mapping its 22-kilometer-tall central peak at Rheasilvia—a mountain more than twice the height of Mount Everest. Then I ignited my blue ion beam again, broke free of Vesta’s gravity, and sailed across the Main Asteroid Belt to arrive in March 2015 at Ceres, the first dwarf planet ever visited by a spacecraft.',
      'Skimming just 35 kilometers above Occator Crater in my final months, I discovered that Ceres’s mysterious blinding-white "bright spots" (Cerealia and Vinalia Faculae) are sodium carbonate salt deposits erupted from a deep, briny subsurface ocean reservoir. To protect that potentially habitable subsurface brine from Earth microbes, NASA never crashed me. When my hydrazine attitude-control fuel ran dry on October 31, 2018, I lost the ability to point my antennas at Earth or my solar wings at the Sun—remaining in perpetual quarantine orbit as Ceres’s first artificial satellite.'
    ],
    scientificLegacySummary: 'First spacecraft in history to orbit two extraterrestrial bodies (protoplanet 4 Vesta and dwarf planet 1 Ceres), first to visit a dwarf planet, set the all-time spacecraft record for post-launch ion-propulsion velocity change (11.5 km/s Δv), and discovered active cryovolcanism and a deep briny ocean reservoir inside Ceres.',
    telemetryTable: [
      { label: 'NSSDCA / COSPAR ID', value: '2007-043A (Dawn Vesta & Ceres Orbiter)' },
      { label: 'Current Status', value: 'Out of hydrazine fuel (Nov 2018), in perpetual unpowered orbit around dwarf planet Ceres' },
      { label: 'Propulsion & Specs', value: '3 NSTAR Xenon Ion Thrusters (50,000+ hrs firing · 11.5 km/s Δv) · 747.1 kg dry mass · 19.7m wingspan' },
      { label: 'Targets Explored', value: 'Protoplanet 4 Vesta (2011–2012) & Dwarf Planet 1 Ceres (2015–present)' },
      { label: 'Planetary Protection', value: 'Placed in a stable quarantine orbit (~35 × 4,000 km) guaranteed not to impact Ceres for decades' },
      { label: 'Total Archive Returned', value: 'Over 100,000 framing camera images + global VIR infrared and GRaND elemental maps' }
    ],
    scientificImpactPoints: [
      {
        title: 'First Spacecraft to Orbit Two Extraterrestrial Worlds (Vesta & Ceres)',
        metric: '11.5 km/s Ion Propulsion Δv',
        detail: 'Using 425 kg of xenon propellant across three NSTAR ion engines, Dawn accomplished what no chemical spacecraft could: entering low altitude mapping orbit around Vesta, escaping a year later, and entering orbit around Ceres.'
      },
      {
        title: 'Discovery of Cryovolcanism & Subsurface Brine Ocean at Ceres',
        metric: 'Occator Crater Salt Domes',
        detail: 'Diving to just 35 km altitude above Occator Crater, Dawn proved that the brilliant Cerealia Facula bright spots are young (<2 million years old) hydrohalite and sodium carbonate evaporites fed by percolating warm brine from a muddy mantle reservoir.'
      },
      {
        title: 'Confirmation of Vesta as the Parent Body of HED Meteorites',
        metric: 'Rheasilvia Giant Impact Basin',
        detail: 'Mapped the 500-km Rheasilvia impact basin and its 22-km central peak on Vesta, matching Vesta’s spectral and elemental signature directly to Howardite-Eucrite-Diogenite (HED) meteorites found on Earth (6% of all meteorites).'
      },
      {
        title: 'Planetary Protection Quarantine Orbit Around an Ocean World',
        metric: 'Permanent Artificial Moon',
        detail: 'Because Ceres holds organic molecules (discovered near Ernutet Crater), clays, and subsurface brines, NASA prohibited an end-of-mission crash—leaving Dawn in a stable orbit where it circles Ceres forever.'
      }
    ],
    instruments: [
      {
        name: '3 × NSTAR Electrostatic Xenon Ion Thrusters',
        state: '403 KG XENON EXPENDED / INERT',
        desc: '30-cm diameter xenon ion thrusters (19–91 mN thrust, Isp 3,100s) that logged 50,000+ hours of operation in deep space.'
      },
      {
        name: 'Framing Cameras (FC1 & FC2 · Max Planck Institute)',
        state: 'OPTICS INTACT IN CERES ORBIT',
        desc: 'Redundant 1024×1024 CCD cameras with 7-color filter wheels that mapped 100% of Vesta and Ceres.'
      },
      {
        name: 'VIR (Visible and Infrared Mapping Spectrometer · ASI)',
        state: 'PASSIVE IN ORBIT',
        desc: 'Italian Space Agency spectrometer that identified ammoniated phyllosilicates, carbonates, and aliphatic organics on Ceres.'
      },
      {
        name: 'GRaND (Gamma Ray and Neutron Detector · LANL)',
        state: 'PASSIVE IN ORBIT',
        desc: '21-sensor nuclear spectrometer that mapped subsurface hydrogen/water-ice abundance and iron-to-silicon ratios.'
      }
    ],
    gallery: [
      {
        url: 'https://images-assets.nasa.gov/image/PIA19973/PIA19973~orig.jpg',
        caption: 'PIA19973: Artist concept of the Dawn spacecraft firing its blue-glowing xenon ion thruster above the cratered surface of dwarf planet Ceres.',
        credit: 'NASA / JPL-Caltech · NSSDCA 2007-043A'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA22660/PIA22660~orig.jpg',
        caption: 'PIA22660: High-resolution view of the bright sodium-carbonate salt dome (Cerealia Facula) inside Occator Crater on Ceres, captured from 35 km altitude.',
        credit: 'NASA / JPL-Caltech / UCLA / MPS / DLR / IDA'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA15678/PIA15678~orig.jpg',
        caption: 'PIA15678: Global mosaic of giant asteroid 4 Vesta captured by Dawn prior to its departure for Ceres.',
        credit: 'NASA / JPL-Caltech / UCLA / MPS / DLR / IDA'
      }
    ],
    baseDustRate: 0.09
  },

  {
    id: 'kepler-space-telescope',
    name: 'Kepler Space Telescope',
    shortName: 'Kepler & K2 Exoplanet Observatory',
    body: 'deep-space',
    bodyLabel: 'Deep Space / Orbit',
    region: 'Earth-Trailing Heliocentric Orbit (372.5-Day Period)',
    coordinates: '1.013 AU Solar Orbit · ~151 Million km Trailing Earth',
    launchYear: 2009,
    silenceYear: 2018,
    nssdcaId: '2009-011A',
    cosparId: '2009-011A (Discovery #10)',
    mission: 'Kepler Prime & K2 Extended Exoplanet Mission',
    contractor: 'Ball Aerospace & Technologies Corp. (Boulder, CO) / NASA Ames / JPL',
    deploymentDate: 'March 7, 2009 · 03:49:57 UTC (Delta II 7925-10L)',
    lastContactDate: 'November 15, 2018 ·Final "Goodnight" Command Sent',
    status: 'Retired in Earth-trailing heliocentric orbit (Oct 2018) after running out of fuel',
    massSpecs: 'Discovered over 2,600 confirmed exoplanets · 1,052.4 kg launch mass · 0.95m Schmidt aperture / 1.4m primary mirror',
    powerSource: '2.86m² non-articulated GaAs solar array (1.1 kW) · Transmitter permanently disabled',
    orbitalRegime: 'Heliocentric Earth-Trailing Orbit (0.97 × 1.05 AU · Inclination 0.4°)',
    primaryImage: 'https://images-assets.nasa.gov/image/PIA18904/PIA18904~orig.jpg',
    fallbackGradient: 'from-purple-950 via-indigo-950 to-black',
    coreMonologue: '“I stared at a tiny patch of the Milky Way for years, watching stars blink as alien worlds crossed their faces. I opened the universe to humanity, showing that planets are everywhere. Now I drift alone in the dark, watching the stars I loved so much.”',
    storyTitle: 'Drifting Among the Billions of Worlds I Introduced to Humanity',
    lastSignalQuote: 'TELEMETRY LOG // 2018-319-00:26:00 UTC — LASP BOULDER SENT FINAL GOODNIGHT COMMANDS: FAULT PROTECTION OFF. TRANSMITTER DISABLED.',
    monologueExtended: [
      'I stared at a tiny patch of the Milky Way for years, watching stars blink as alien worlds crossed their faces. I opened the universe to humanity, showing that planets are everywhere. Now I drift alone in the dark, watching the stars I loved so much.',
      'When I launched into an Earth-trailing solar orbit in March 2009, astronomers still wondered whether rocky, Earth-sized planets were rare cosmic accidents. For four straight years, I aimed my 95-megapixel sapphire-lensed camera at a single starry field in Cygnus and Lyra—monitoring the brightness of 150,000 stars simultaneously to catch the minuscule one-part-in-ten-thousand dip caused when an orbiting planet transited across its host star.',
      'In May 2013, my second of four gyroscopic reaction wheels failed. Without three wheels to hold my aim steady, my mission seemed finished. Then engineers at Ball Aerospace and NASA Ames invented an extraordinary second life: K2. By turning my hexagonal barrel sideways to face along my orbital path, they used the gentle physical pressure of solar photons streaming from the Sun as a "virtual third reaction wheel," balancing me on a beam of sunlight like a kayaker leaning into the current.',
      'For five more years across nineteen K2 campaigns, I swept across the ecliptic plane until my 12-kilogram tank of hydrazine fuel ran completely dry in October 2018. Having observed 530,506 stars and discovered over 2,600 confirmed exoplanets—and thousands more candidates still being verified today—I received my final "goodnight" command on November 15, 2018, the 388th anniversary of Johannes Kepler’s passing.'
    ],
    scientificLegacySummary: 'Revolutionized humanity’s place in the cosmos by discovering over 2,600 confirmed exoplanets (more than half of all known exoplanets at retirement) across 530,506 observed stars—statistically proving that the Milky Way galaxy contains more planets than stars, and that 20% to 50% of sunlike stars harbor rocky Earth-to-super-Earth worlds in their habitable zones.',
    telemetryTable: [
      { label: 'NSSDCA / COSPAR ID', value: '2009-011A (Kepler Space Telescope)' },
      { label: 'Current Status', value: 'Retired in Earth-trailing heliocentric orbit (Oct 2018) after running out of hydrazine fuel' },
      { label: 'Exoplanet Legacy', value: 'Over 2,600+ confirmed exoplanets (2,778+ confirmed to date) & 3,000+ additional candidates' },
      { label: 'Optical & Camera Specs', value: '0.95m Schmidt corrector / 1.4m primary mirror · 95-Megapixel CCD array (42 CCDs cooled to -85°C)' },
      { label: 'Total Stars Observed', value: '530,506 stars across the Cygnus-Lyra field (Prime) and 19 ecliptic K2 campaigns · 678 GB science data' },
      { label: 'Current Orbit', value: 'Safe 372.5-day heliocentric orbit (~151 million km from Earth · Transmitter passivated Nov 15, 2018)' }
    ],
    scientificImpactPoints: [
      {
        title: 'Proved There Are More Planets Than Stars in the Milky Way',
        metric: '2,600+ Confirmed Worlds',
        detail: 'Before Kepler, fewer than 350 mostly gas-giant exoplanets were known. Kepler revealed that small planets between the size of Earth and Neptune ("Super-Earths" and "Mini-Neptunes") are the most common planetary architecture in our galaxy.'
      },
      {
        title: 'Discovery of Habitable-Zone Rocky Worlds & Circumbinary Planets',
        metric: 'Kepler-186f · Kepler-452b · Kepler-16b',
        detail: 'Discovered Kepler-186f (first Earth-sized planet in the habitable zone of another star), Kepler-452b (Earth’s closest cousin orbiting a G2 sunlike star), Kepler-16b (first planet orbiting twin suns like Tatooine), and the 8-planet Kepler-90 system.'
      },
      {
        title: 'The K2 Solar-Photon-Pressure Engineering Miracle',
        metric: '19 K2 Ecliptic Campaigns',
        detail: 'After losing two reaction wheels, engineers balanced the spacecraft against solar radiation pressure to hold pointing stability within arcseconds—extending Kepler’s life by 5 years and discovering over 500 additional exoplanets plus watching supernovae shockwaves in real time.'
      },
      {
        title: 'Foundation for TESS, James Webb (JWST), and Habitable Worlds Observatory',
        metric: '530,506 Stellar Light Curves',
        detail: 'Created an open-source stellar photometry archive at MAST that also revolutionized asteroseismology (measuring starquakes to weigh and age thousands of red giant and main-sequence stars).'
      }
    ],
    instruments: [
      {
        name: '95-Megapixel Kepler Focal Plane Photometer (42 CCDs)',
        state: 'SHUTTERLESS / PASSIVELY COOLED IN DARKNESS',
        desc: 'Twenty-one modules of two 2200×1024 back-illuminated CCDs curved under individual sapphire field-flattening lenses.'
      },
      {
        name: '1.4-Meter Corning Ultra-Low Expansion Fused Silica Primary Mirror',
        state: 'OPTICAL COATING PRISTINE IN VACUUM',
        desc: 'Honeycomb-lightweighted primary mirror with 0.95-meter Schmidt corrector lens inside the carbon-composite photometer barrel.'
      },
      {
        name: 'Reaction Wheel Assembly (4 Momentum Wheels)',
        state: 'WHEELS #2 & #4 FAILED / ALL SPUN DOWN',
        desc: 'Gyroscopic pointing wheels whose failure inspired the solar-photon-balanced K2 extended mission.'
      },
      {
        name: 'Blowdown Hydrazine Attitude Thruster System (8 Thrusters)',
        state: '0.00 KG HYDRAZINE REMAINING',
        desc: 'Stretched 12 kg of monopropellant hydrazine across 9.6 years of deep-space operations.'
      }
    ],
    gallery: [
      {
        url: 'https://images-assets.nasa.gov/image/PIA18904/PIA18904~orig.jpg',
        caption: 'PIA18904: Artist concept illustrating how Kepler balanced the pressure of solar photons across its hexagonal barrel during the K2 mission.',
        credit: 'NASA / Ames / Wendy Stenzel · NSSDCA 2009-011A'
      },
      {
        url: 'https://images-assets.nasa.gov/image/KSC-2009-1188/KSC-2009-1188~orig.jpg',
        caption: 'KSC-2009-1188: Engineers inspect the Kepler Space Telescope in the clean room prior to launch atop a Delta II rocket in March 2009.',
        credit: 'NASA / Kim Shiflett'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA22835/PIA22835~orig.jpg',
        caption: 'PIA22835: Kepler’s final "Last Light" full-field image captured on September 25, 2018 toward the Aquarius constellation (including TRAPPIST-1).',
        credit: 'NASA / Ames Research Center'
      }
    ],
    baseDustRate: 0.07
  }
];

const TIMELINE_EVENTS = [
  { year: 1969, label: '1969 · Tranquility Base', desc: 'Apollo 11 Eagle Descent Stage (1969-059C) becomes humanity’s first permanent launchpad and laser ranging monument on the Moon.' },
  { year: 1972, label: '1972 · Apollo LRV Fleet', desc: 'All three Lunar Roving Vehicles (Apollo 15, 16, 17) sit permanently parked facing the horizon after 90.2 km of lunar exploration.' },
  { year: 1976, label: '1976 · Viking 1 & 2 Touchdown', desc: 'RTG-powered Viking 1 and 2 Landers touch down at Chryse and Utopia Planitia, transmitting the first surface panoramas and biology tests from Mars.' },
  { year: 1997, label: '1997 · Sojourner in Ares Vallis', desc: '11.5-kg Sojourner rover proves 6-wheel Rocker-Bogie mobility on Mars across 83 sols before entering autonomous circling mode.' },
  { year: 2004, label: '2004 · Spirit & Opportunity Land', desc: 'Twin 185-kg rovers land in Gusev Crater and Meridiani Planum, uncovering hematite "blueberries" and hydrothermal silica.' },
  { year: 2008, label: '2008 · Phoenix Excavates Arctic Ice', desc: 'Phoenix Mars Lander scoops and chemically tastes subsurface water ice at 68°N in Vastitas Borealis.' },
  { year: 2018, label: '2018 · Year of Great Silence', desc: 'A global dust storm silences Opportunity (45.16 km driven), Dawn runs out of hydrazine in Ceres orbit, and Kepler retires after 2,600+ exoplanet discoveries.' },
  { year: 2022, label: '2022 · InSight’s Final Marsquake', desc: 'InSight transmits its final dust-choked image from Elysium Planitia after recording 1,319 marsquakes and mapping Mars’s liquid core.' },
  { year: 2026, label: '2026 · Space Apps Archive', desc: 'Present Epoch: All 8 NSSDCA relic entries cataloged with telemetry, first-person monologues, and scientific legacy dossiers.' }
];

/**
 * Alpine.js Application State & Controller
 */
function artifactsApp() {
  return {
    selectedBody: 'all',
    searchQuery: '',
    currentYear: 2026,
    isPlayingTimeline: false,
    timelineTimer: null,
    artifacts: ARTIFACTS_DATA,
    timelineEvents: TIMELINE_EVENTS,

    // Welcome & Tribute Modal state (shows once per session)
    showWelcomeModal: false,

    // Modal state
    activeArtifact: null,
    activeTab: 'story', // 'story' | 'nssdca' | 'impact' | 'gallery'
    selectedGalleryIndex: 0,

    // Voice Synthesizer (Web Speech API)
    isSpeaking: false,
    speechSupported: typeof window !== 'undefined' && 'speechSynthesis' in window,

    init() {
      // Check sessionStorage so Welcome Modal appears automatically once per session
      try {
        if (!sessionStorage.getItem('welcomeClosed')) {
          this.showWelcomeModal = true;
          document.body.style.overflow = 'hidden';
        }
      } catch (e) {
        this.showWelcomeModal = true;
      }

      this.$nextTick(() => {
        if (window.lucide) window.lucide.createIcons();
        initThreeSpaceScene(this);
      });

      this.$watch('showWelcomeModal', (val) => {
        if (val) {
          document.body.style.overflow = 'hidden';
          this.$nextTick(() => {
            if (window.lucide) window.lucide.createIcons();
          });
        } else if (!this.activeArtifact) {
          document.body.style.overflow = '';
        }
      });

      this.$watch('selectedBody', () => {
        this.$nextTick(() => {
          if (window.lucide) window.lucide.createIcons();
          if (window.updateThreeBodyTheme) window.updateThreeBodyTheme(this.selectedBody);
        });
      });

      this.$watch('activeArtifact', (val) => {
        if (!val) {
          this.stopNarration();
          if (!this.showWelcomeModal) {
            document.body.style.overflow = '';
          }
        } else {
          document.body.style.overflow = 'hidden';
          this.$nextTick(() => {
            if (window.lucide) window.lucide.createIcons();
          });
        }
      });

      this.$watch('activeTab', () => {
        this.$nextTick(() => {
          if (window.lucide) window.lucide.createIcons();
        });
      });
    },

    closeWelcomeModal() {
      this.showWelcomeModal = false;
      try {
        sessionStorage.setItem('welcomeClosed', 'true');
      } catch (e) {}
    },

    replayWelcomeModal() {
      this.activeArtifact = null;
      this.showWelcomeModal = true;
      try {
        sessionStorage.removeItem('welcomeClosed');
      } catch (e) {}
    },

    get filteredArtifacts() {
      return this.artifacts.filter(item => {
        const matchesBody = this.selectedBody === 'all' || item.body === this.selectedBody;
        const q = this.searchQuery.trim().toLowerCase();
        const matchesSearch = !q ||
          item.name.toLowerCase().includes(q) ||
          item.region.toLowerCase().includes(q) ||
          item.nssdcaId.toLowerCase().includes(q) ||
          item.status.toLowerCase().includes(q) ||
          item.scientificLegacySummary.toLowerCase().includes(q) ||
          item.mission.toLowerCase().includes(q);
        return matchesBody && matchesSearch;
      });
    },

    get currentEpochEvent() {
      let closest = this.timelineEvents[0];
      for (const ev of this.timelineEvents) {
        if (this.currentYear >= ev.year) {
          closest = ev;
        }
      }
      return closest;
    },

    get activeRelicsInYearCount() {
      return this.artifacts.filter(a => this.currentYear >= a.launchYear).length;
    },

    get silentRelicsInYearCount() {
      return this.artifacts.filter(a => this.currentYear > a.silenceYear).length;
    },

    /**
     * Computes dynamic telemetry status for an artifact at `this.currentYear`
     */
    getTemporalState(artifact) {
      const yr = Number(this.currentYear);
      if (yr < artifact.launchYear) {
        return {
          code: 'PRE-LAUNCH',
          badgeText: `Awaiting Launch (${artifact.launchYear})`,
          badgeClass: 'bg-slate-800/90 text-slate-400 border-slate-600/50',
          dotClass: 'bg-slate-500',
          yearsSilent: 0,
          dustPercent: 0,
          solarEfficiency: 100,
          summary: `Undergoing cleanroom assembly on Earth (${artifact.launchYear - yr} yrs until launch).`
        };
      }

      if (yr <= artifact.silenceYear) {
        const activeYrs = yr - artifact.launchYear;
        const dust = Math.min(45, Math.round(activeYrs * 6 * artifact.baseDustRate));
        return {
          code: 'ACTIVE TELEMETRY',
          badgeText: 'Mission Active',
          badgeClass: 'bg-emerald-950/90 text-emerald-300 border-emerald-500/50',
          dotClass: 'bg-emerald-400 pulse-beacon',
          yearsSilent: 0,
          dustPercent: dust,
          solarEfficiency: Math.max(40, 100 - dust),
          summary: `Actively transmitting science telemetry via Deep Space Network (Year ${activeYrs + 1} of operations).`
        };
      }

      // Post-silence: Relic / Monument state
      const yearsSilent = yr - artifact.silenceYear;
      const totalYearsDeployed = yr - artifact.launchYear;
      let dustPercent = 0;

      if (artifact.body === 'mars') {
        dustPercent = Math.min(98, Math.round(35 + Math.pow(totalYearsDeployed, 0.72) * 14 * artifact.baseDustRate));
      } else if (artifact.body === 'moon') {
        dustPercent = Math.min(68, Math.round(8 + totalYearsDeployed * 0.95));
      } else {
        dustPercent = Math.min(32, Math.round(4 + totalYearsDeployed * 1.1));
      }

      const solarEff = Math.max(0, 100 - dustPercent);

      return {
        code: 'SILENT MONUMENT',
        badgeText: `Silent ${yearsSilent} ${yearsSilent === 1 ? 'Yr' : 'Yrs'}`,
        badgeClass: artifact.body === 'mars'
          ? 'bg-orange-950/90 text-orange-300 border-orange-500/40'
          : (artifact.body === 'moon'
            ? 'bg-cyan-950/90 text-cyan-300 border-cyan-500/40'
            : 'bg-purple-950/90 text-purple-300 border-purple-500/40'),
        dotClass: artifact.body === 'mars' ? 'bg-orange-400' : (artifact.body === 'moon' ? 'bg-cyan-400' : 'bg-purple-400'),
        yearsSilent,
        dustPercent,
        solarEfficiency: solarEff,
        summary: artifact.body === 'mars'
          ? `Iron-oxide regolith patina: ${dustPercent}% coverage after ${totalYearsDeployed} Earth years on Mars.`
          : (artifact.body === 'moon'
            ? `Micrometeoroid & UV thermal patina after ${totalYearsDeployed} years in lunar vacuum.`
            : `Drifting silently in unpowered orbit (${yearsSilent} years since fuel depletion).`)
      };
    },

    toggleTimelinePlay() {
      if (this.isPlayingTimeline) {
        this.stopTimelinePlay();
        return;
      }
      if (this.currentYear >= 2026) {
        this.currentYear = 1969;
      }
      this.isPlayingTimeline = true;
      this.timelineTimer = setInterval(() => {
        if (this.currentYear < 2026) {
          this.currentYear = Number(this.currentYear) + 1;
        } else {
          this.stopTimelinePlay();
        }
      }, 180);
    },

    stopTimelinePlay() {
      this.isPlayingTimeline = false;
      if (this.timelineTimer) {
        clearInterval(this.timelineTimer);
        this.timelineTimer = null;
      }
    },

    setEpochYear(yr) {
      this.stopTimelinePlay();
      this.currentYear = yr;
    },

    openArtifactModal(artifact, initialTab = 'story') {
      this.stopNarration();
      this.activeArtifact = artifact;
      this.activeTab = initialTab;
      this.selectedGalleryIndex = 0;
    },

    closeArtifactModal() {
      this.stopNarration();
      this.activeArtifact = null;
    },

    toggleNarration() {
      if (!this.speechSupported || !this.activeArtifact) return;
      if (this.isSpeaking) {
        this.stopNarration();
        return;
      }

      window.speechSynthesis.cancel();
      const text = `${this.activeArtifact.name}. ${this.activeArtifact.storyTitle}. ` +
        this.activeArtifact.monologueExtended.join(' ');
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.92;
      utterance.pitch = 0.9;

      const voices = window.speechSynthesis.getVoices();
      const preferred = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('David') || v.name.includes('Guy')));
      if (preferred) utterance.voice = preferred;

      utterance.onend = () => { this.isSpeaking = false; };
      utterance.onerror = () => { this.isSpeaking = false; };

      this.isSpeaking = true;
      window.speechSynthesis.speak(utterance);
    },

    stopNarration() {
      if (this.speechSupported) {
        window.speechSynthesis.cancel();
      }
      this.isSpeaking = false;
    },

    getBodyBadgeClasses(body) {
      if (body === 'moon') return 'bg-cyan-500/15 text-cyan-300 border-cyan-400/40';
      if (body === 'mars') return 'bg-orange-500/15 text-orange-300 border-orange-400/40';
      return 'bg-purple-500/15 text-purple-300 border-purple-400/40';
    },

    getDustLabel(body) {
      if (body === 'mars') return 'Martian Regolith Silt Accumulation';
      if (body === 'moon') return 'Lunar Electrostatic Dust & UV Patina';
      return 'Solar Wind & Micrometeoroid Weathering';
    }
  };
}

/**
 * Lightweight, 60fps Three.js Interactive Starfield & Planetary Wireframe Globe
 */
function initThreeSpaceScene(appInstance) {
  const canvas = document.getElementById('cosmos-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 28;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

  // 1. Starfield Particles
  const starCount = 1400;
  const starGeo = new THREE.BufferGeometry();
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount; i++) {
    const i3 = i * 3;
    starPositions[i3] = (Math.random() - 0.5) * 140;
    starPositions[i3 + 1] = (Math.random() - 0.5) * 90;
    starPositions[i3 + 2] = (Math.random() - 0.5) * 80 - 10;

    const paletteRoll = Math.random();
    if (paletteRoll < 0.65) {
      starColors[i3] = 0.85; starColors[i3 + 1] = 0.93; starColors[i3 + 2] = 1.0;
    } else if (paletteRoll < 0.85) {
      starColors[i3] = 0.0; starColors[i3 + 1] = 0.94; starColors[i3 + 2] = 1.0;
    } else {
      starColors[i3] = 1.0; starColors[i3 + 1] = 0.48; starColors[i3 + 2] = 0.22;
    }
  }

  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

  const starMat = new THREE.PointsMaterial({
    size: 0.16,
    vertexColors: true,
    transparent: true,
    opacity: 0.75
  });
  const starField = new THREE.Points(starGeo, starMat);
  scene.add(starField);

  // 2. Telemetry Wireframe Celestial Sphere + Orbital Rings
  const planetGroup = new THREE.Group();
  planetGroup.position.set(14, 2, -8);
  scene.add(planetGroup);

  const sphereGeo = new THREE.IcosahedronGeometry(9.5, 3);
  const sphereMat = new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
    wireframe: true,
    transparent: true,
    opacity: 0.09
  });
  const wireframeSphere = new THREE.Mesh(sphereGeo, sphereMat);
  planetGroup.add(wireframeSphere);

  const ringGeo = new THREE.RingGeometry(12.2, 12.32, 96);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.2
  });
  const orbitalRing = new THREE.Mesh(ringGeo, ringMat);
  orbitalRing.rotation.x = Math.PI / 2.4;
  orbitalRing.rotation.y = Math.PI / 8;
  planetGroup.add(orbitalRing);

  const outerRingGeo = new THREE.RingGeometry(14.8, 14.86, 64);
  const outerRingMat = new THREE.MeshBasicMaterial({
    color: 0xff6b2b,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.14
  });
  const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
  outerRing.rotation.x = Math.PI / 1.8;
  outerRing.rotation.y = -Math.PI / 6;
  planetGroup.add(outerRing);

  window.updateThreeBodyTheme = function(bodyFilter) {
    if (bodyFilter === 'moon') {
      sphereMat.color.setHex(0x38bdf8);
      ringMat.color.setHex(0x00f0ff);
      sphereMat.opacity = 0.12;
    } else if (bodyFilter === 'mars') {
      sphereMat.color.setHex(0xff6b2b);
      ringMat.color.setHex(0xf97316);
      sphereMat.opacity = 0.13;
    } else if (bodyFilter === 'deep-space') {
      sphereMat.color.setHex(0xa855f7);
      ringMat.color.setHex(0xc084fc);
      sphereMat.opacity = 0.11;
    } else {
      sphereMat.color.setHex(0x00f0ff);
      ringMat.color.setHex(0x00f0ff);
      sphereMat.opacity = 0.09;
    }
  };

  let mouseX = 0;
  let mouseY = 0;
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, { passive: true });

  function animate() {
    requestAnimationFrame(animate);

    wireframeSphere.rotation.y += 0.0014;
    wireframeSphere.rotation.x += 0.0004;
    orbitalRing.rotation.z -= 0.0018;
    outerRing.rotation.z += 0.001;

    starField.rotation.y += 0.00025;

    camera.position.x += (mouseX * 1.8 - camera.position.x) * 0.03;
    camera.position.y += (-mouseY * 1.2 - camera.position.y) * 0.03;

    renderer.render(scene, camera);
  }

  animate();
}
