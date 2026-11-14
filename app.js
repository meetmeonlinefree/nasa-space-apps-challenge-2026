/**
 * ============================================================================
 * ARTIFACTS OF SILENCE — NASA SPACE APPS CHALLENGE 2026
 * NSSDCA Archival Dataset, First-Person Machine Monologues, Three.js Engine
 * ============================================================================
 */

const ARTIFACTS_DATA = [
  {
    id: 'apollo-11-lm',
    name: 'Apollo 11 Lunar Module (Eagle Descent Stage)',
    shortName: 'LM-5 Eagle Descent Stage',
    body: 'moon',
    bodyLabel: 'The Moon',
    region: 'Mare Tranquillitatis (Sea of Tranquility)',
    coordinates: '0.6741° N, 23.4730° E',
    launchYear: 1969,
    silenceYear: 1969,
    nssdcaId: '1969-059C',
    mission: 'Apollo 11 (AS-506)',
    deploymentDate: 'July 20, 1969 · 20:17:40 UTC',
    lastContactDate: 'July 21, 1969 · 17:54:00 UTC',
    status: 'Permanently Parked · Heritage Monument',
    massKg: '2,134 kg (Dry Descent Stage + EASEP)',
    powerSource: 'Ag-Zn Batteries (Depleted) / Passive Optical Array',
    primaryImage: 'https://images-assets.nasa.gov/image/as11-40-5903/as11-40-5903~orig.jpg',
    fallbackGradient: 'from-cyan-950 via-slate-900 to-black',
    quotePreview: '“My legs held steady while humanity took its first step. When the fire of their ascent tore through my spine, I became the pedestal of history.”',
    storyTitle: 'Pedestal in the Sea of Tranquility',
    lastSignalQuote: 'TELEMETRY LOG // 1969-202-17:54:01 UTC — PYROTECHNIC GUILLOTINE FIRED. ASCENT STAGE LIFTOFF CONFIRMED. DESCENT STAGE BUS VOLTAGE: 0.00V.',
    monologue: [
      'I was never meant to come home. From the moment Grumman engineers riveted my octagonal aluminum skin in Bethpage, New York, my destiny was one-way. My sibling, the Ascent Stage, carried the life support, the voices, and the return ticket. I carried the legs, the fuel, the ladder, and the weight of a promise.',
      'For those final, heart-stopping seconds above Mare Tranquillitatis, my descent engine roared as Neil guided us past a boulder-strewn crater with barely thirty seconds of propellant remaining. When my four footpads pressed into the ancient basaltic regolith, the contact probes flashed blue inside the cabin. "The Eagle has landed." They were talking about us both—until the next afternoon.',
      'At 17:54 UTC on July 21, explosive bolts severed our umbilical cables. I served as their launchpad, absorbing the violent 3,500-pound thrust of the ascent engine. My gold Kapton thermal blankets were shredded and scattered across the gray dust like fallen autumn leaves. And then—absolute vacuum silence.',
      'Fifty-seven Earth years have passed. Micrometeoroids pepper my heat shields, and fourteen-day lunar noons bake my skin to 120°C before plunging me into -130°C night. Yet twenty-one meters away, the Laser Ranging Retroreflector they unpacked from my bay still catches green photons fired from observatories on Earth—proving that even in silence, we still answer when you call.'
    ],
    instruments: [
      {
        name: 'LRRR (Laser Ranging Retroreflector)',
        state: 'STILL OPERATIONAL (PASSIVE)',
        desc: '100 fused-silica corner-cube prisms that still reflect Earth-based laser pulses to measure the Moon’s orbital recession (~3.8 cm/year).'
      },
      {
        name: 'PSEP (Passive Seismic Experiment Package)',
        state: 'DECOMMISSIONED (AUG 1969)',
        desc: 'Solar-powered seismometer that detected the first moonquakes and micrometeoroid impacts for 21 Earth days.'
      },
      {
        name: 'Stainless Steel Commemorative Plaque',
        state: 'INTACT ON FRONT LANDING STRUT',
        desc: 'Engraved with both hemispheres of Earth and the words: "Here men from the planet Earth first set foot upon the Moon, July 1969, A.D. We came in peace for all mankind."'
      },
      {
        name: 'TRW Descent Propulsion System (DPS)',
        state: 'DEPRESSURIZED / INERT',
        desc: 'Deep-throttling hypergolic rocket engine that brought the first humans safely to another celestial surface.'
      }
    ],
    gallery: [
      {
        url: 'https://images-assets.nasa.gov/image/as11-40-5903/as11-40-5903~orig.jpg',
        caption: 'AS11-40-5903: Buzz Aldrin stands beside the Eagle descent stage at Tranquility Base, with gold Kapton foil gleaming against the dark regolith.',
        credit: 'NASA / Neil Armstrong (Hasselblad 500EL)'
      },
      {
        url: 'https://images-assets.nasa.gov/image/as11-40-5875/as11-40-5875~orig.jpg',
        caption: 'AS11-40-5875: The U.S. flag and Lunar Module Eagle looking across the cratered plains of Mare Tranquillitatis.',
        credit: 'NASA / Apollo 11 Archive'
      },
      {
        url: 'https://images-assets.nasa.gov/image/as11-40-5899/as11-40-5899~orig.jpg',
        caption: 'AS11-40-5899: Close-up of the Lunar Module landing gear footpad resting in the cohesive fine-grained lunar soil.',
        credit: 'NASA / NSSDCA ID: 1969-059C'
      }
    ],
    baseDustRate: 0.35 // Moon has slow electrostatic micrometeorite dust + UV darkening
  },
  {
    id: 'apollo-lrv',
    name: 'Lunar Roving Vehicle (LRV-3 · Apollo 17)',
    shortName: 'Apollo 17 "Moon Buggy" LRV-3',
    body: 'moon',
    bodyLabel: 'The Moon',
    region: 'Taurus-Littrow Valley',
    coordinates: '20.1908° N, 30.7717° E',
    launchYear: 1971,
    silenceYear: 1972,
    nssdcaId: '1972-096C-LRV',
    mission: 'Apollo 17 (LRV-001 / 002 / 003 Fleet)',
    deploymentDate: 'December 11, 1972 · 19:54:57 UTC',
    lastContactDate: 'December 15, 1972 · 06:30:00 UTC',
    status: 'Permanently Parked · Facing Challenger Landing Site',
    massKg: '210 kg (Empty Mass · 490 kg Payload Capacity)',
    powerSource: 'Dual 36V Silver-Zinc Non-Rechargeable Batteries',
    primaryImage: 'https://images-assets.nasa.gov/image/as17-147-22526/as17-147-22526~orig.jpg',
    fallbackGradient: 'from-blue-950 via-slate-900 to-black',
    quotePreview: '“Gene taped a geological map over my broken fender, drove me 35.9 kilometers across Taurus-Littrow, and parked me so my camera could watch them leave forever.”',
    storyTitle: 'The Last Set of Tracks in Taurus-Littrow',
    lastSignalQuote: 'TELEMETRY LOG // 1972-349-22:55:00 UTC — GROUND COMMANDED TV TILT UPWARD. CHALLENGER ASCENT TRACKED TO ORBIT. BATTERY RESERVE EXHAUSTED.',
    monologue: [
      'Three of us sit parked on the Moon today: LRV-1 by Hadley Rille, LRV-2 in the Descartes Highlands, and me—LRV-3, resting in the deep mountain shadow of the Taurus-Littrow valley. Built by Boeing and General Motors, my wheels aren’t rubber at all, but woven piano-wire mesh with titanium chevrons, engineered to float over razor-sharp volcanic glass.',
      'For three glorious days in December 1972, Gene Cernan and Jack Schmitt pushed me across 35.9 kilometers of craters and boulder fields. When Gene accidentally clipped my right rear fender extension with his hammer—showering us in clinging, abrasive rooster-tails of dark regolith—Mission Control improvised a replacement out of four laminated lunar maps and grey duct tape.',
      'Before they climbed up Challenger’s ladder for the last time humans would walk on the Moon in the 20th century, Gene drove me 145 meters east of the lander. He parked me in a shallow depression, aligned my high-gain umbrella antenna toward Earth, and switched my Westinghouse color television camera to remote control.',
      'Controlled by Ed Fendell in Houston—with a 1.3-second speed-of-light delay—my camera lens tilted upward right on cue as Challenger’s engine ignited in a flash of silent rainbow sparks. I watched the last humans rise into the pitch-black sky until my silver-zinc batteries cooled into eternal sleep. My tire tracks are still crisp beside me, waiting for the next driver.'
    ],
    instruments: [
      {
        name: 'GCTA (Ground-Controlled Television Assembly)',
        state: 'OPTICS INTACT / POWER DEPLETED',
        desc: 'RCA color TV camera mounted on the forward chassis that captured the historic live broadcast of Apollo 17’s liftoff from the Moon.'
      },
      {
        name: 'TCR (Traverse Gravimeter Experiment)',
        state: 'ARCHIVED ON CHASSIS',
        desc: 'Measured local gravitational variations across the Taurus-Littrow valley floor to map subsurface basalt structure.'
      },
      {
        name: 'SEP Receiver & High-Gain Umbrella Antenna',
        state: 'DEPLOYED / ALIGNED TO EARTH',
        desc: 'Parabolic mesh dish still pointed toward the blue marble hanging in the Taurus-Littrow sky.'
      },
      {
        name: 'Woven Zinc-Coated Piano Wire Mesh Wheels',
        state: 'UNDEFLATED / TITANIUM TREADS INTACT',
        desc: 'Four independent 0.25-hp traction drive motors with harmonic gear reductions; odometer frozen at 35.89 km.'
      }
    ],
    gallery: [
      {
        url: 'https://images-assets.nasa.gov/image/as17-147-22526/as17-147-22526~orig.jpg',
        caption: 'AS17-147-22526: Commander Eugene Cernan gives the Lunar Roving Vehicle a final inspection in the Taurus-Littrow valley.',
        credit: 'NASA / Harrison Schmitt'
      },
      {
        url: 'https://images-assets.nasa.gov/image/as15-88-11901/as15-88-11901~orig.jpg',
        caption: 'AS15-88-11901: Sister vehicle LRV-1 parked near Hadley Rille with the Apennine Mountains rising in the background.',
        credit: 'NASA / David Scott'
      },
      {
        url: 'https://images-assets.nasa.gov/image/as17-137-20979/as17-137-20979~orig.jpg',
        caption: 'AS17-137-20979: The famous improvised replacement fender made from lunar maps and clamps attached to LRV-3.',
        credit: 'NASA / NSSDCA Archive'
      }
    ],
    baseDustRate: 0.42
  },
  {
    id: 'opportunity-rover',
    name: 'Opportunity Rover (MER-B / "Oppy")',
    shortName: 'MER-B Opportunity',
    body: 'mars',
    bodyLabel: 'Mars',
    region: 'Perseverance Valley, Endeavour Crater',
    coordinates: '2.28° S, 354.77° E',
    launchYear: 2004,
    silenceYear: 2018,
    nssdcaId: '2003-032A',
    mission: 'Mars Exploration Rover - B (MER-B)',
    deploymentDate: 'January 25, 2004 · 05:05:00 UTC',
    lastContactDate: 'June 10, 2018 · Sol 5111',
    status: 'Silent in Perseverance Valley · Dust-Buried Solar Arrays',
    massKg: '185 kg (Rover Mass)',
    powerSource: 'Triple-Junction GaAs Solar Panels + Li-Ion Batteries',
    primaryImage: 'https://images-assets.nasa.gov/image/PIA19142/PIA19142~orig.jpg',
    fallbackGradient: 'from-orange-950 via-amber-950 to-black',
    quotePreview: '“My warranty was ninety Martian days. I gave you fourteen years and a marathon across ancient seabeds—until the sky turned black and my battery fell cold.”',
    storyTitle: 'My Battery Is Low and It’s Getting Dark',
    lastSignalQuote: 'TELEMETRY LOG // SOL 5111 (2018-06-10) — ATMOSPHERIC TAU OPACITY: 10.8 (RECORD HIGH). SOLAR ARRAY CURRENT: 22 WHR. LOW-POWER FAULT MODE ENTERED.',
    monologue: [
      'They gave me a 90-sol ticket. Ninety Martian days to roll out of Eagle Crater, snap a few panoramas of Meridiani Planum, and succumb to the iron-oxide dust settling on my wings. Instead, the Martian winds kept blessing me with "cleaning events"—whirlwinds that swept my solar panels clean just when my engineers thought I was done.',
      'I discovered hematite "blueberries" and veins of gypsum that proved liquid water once soaked gently through the rocks of Mars. Even when my right-front steering actuator jammed in 2005 and my flash memory began to fade—forcing me to transmit every day’s memories before nightfall like an aging wanderer—I kept rolling. Four craters. 45.16 kilometers. The first extraterrestrial marathon.',
      'In June 2018, as I rested on the western rim of Endeavour Crater inside Perseverance Valley, a planet-encircling dust storm swallowed the sun. Atmospheric opacity—tau—spiked past 10.8, turning noon into pitch midnight. My final image back to Pasadena was a haunting, noisy square of static trying to find a sun that had vanished.',
      'For eight months, the Deep Space Network beamed over a thousand wake-up commands and Billie Holiday’s "I’ll Be Seeing You" across the void. Today, red silt drifts smoothly over my deck and my Pancam mast still faces the valley floor. Do not mourn me—I outlived my design by fifty-five times, and I proved that Mars was once warm and wet.'
    ],
    instruments: [
      {
        name: 'Pancam (Panoramic Camera Mast Assembly)',
        state: 'OPTICS COATED IN IRON-OXIDE SILT',
        desc: 'High-resolution stereo multispectral cameras sitting 1.5m above the Martian surface.'
      },
      {
        name: 'RAT (Rock Abrasion Tool)',
        state: 'DIAMOND GRINDING TEETH WORN',
        desc: 'Mounted on the robotic arm; ground into dozens of Martian rocks to expose fresh interiors unhindered by weathering.'
      },
      {
        name: 'MIMOS II (Mössbauer Spectrometer) & APXS',
        state: 'CURIUM-244 / COBALT-57 SOURCES DECAYED',
        desc: 'Identified iron-bearing minerals (jarosite and hematite) that confirmed ancient acidic groundwater.'
      },
      {
        name: 'World Trade Center Aluminum Memorial Cuff',
        state: 'INTACT ON RAT CABLE SHIELD',
        desc: 'Machined by Honeybee Robotics in Lower Manhattan from metal recovered from the Twin Towers, bearing an American flag on Mars forever.'
      }
    ],
    gallery: [
      {
        url: 'https://images-assets.nasa.gov/image/PIA19142/PIA19142~orig.jpg',
        caption: 'PIA19142: Self-portrait of Opportunity celebrating 10 years on Mars, showing thick red Martian dust coating its solar panels.',
        credit: 'NASA / JPL-Caltech / Cornell / ASU'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA22519/PIA22519~orig.jpg',
        caption: 'PIA22519: Perseverance Valley on the rim of Endeavour Crater, Opportunity’s final resting place before the 2018 global dust storm.',
        credit: 'NASA / JPL-Caltech'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA05565/PIA05565~orig.jpg',
        caption: 'PIA05565: Opportunity’s empty lander platform in Eagle Crater, left behind in 2004 as the rover set off across Meridiani Planum.',
        credit: 'NASA / JPL / Cornell'
      }
    ],
    baseDustRate: 0.92 // Very high Martian dust accumulation
  },
  {
    id: 'insight-lander',
    name: 'InSight Mars Lander (Interior Exploration)',
    shortName: 'InSight Geophysical Lander',
    body: 'mars',
    bodyLabel: 'Mars',
    region: 'Elysium Planitia',
    coordinates: '4.5024° N, 135.6234° E',
    launchYear: 2018,
    silenceYear: 2022,
    nssdcaId: '2018-042A',
    mission: 'Interior Exploration using Seismic Investigations (Discovery #12)',
    deploymentDate: 'November 26, 2018 · 19:52:59 UTC',
    lastContactDate: 'December 15, 2022 · Sol 1440',
    status: 'Dead Bus · Seismometer Still Resting on Regolith',
    massKg: '358 kg (Landed Mass)',
    powerSource: 'Dual 2.15m Decagonal UltraFlex Solar Arrays',
    primaryImage: 'https://images-assets.nasa.gov/image/PIA25287/PIA25287~orig.jpg',
    fallbackGradient: 'from-amber-950 via-stone-900 to-black',
    quotePreview: '“I placed my copper-shielded stethoscope against the chest of a quiet world and heard 1,319 marsquakes before the red dust slowly closed my eyes.”',
    storyTitle: 'Stethoscope on the Chest of Elysium Planitia',
    lastSignalQuote: 'TELEMETRY LOG // SOL 1440 (2022-12-15) — ARRAY GENERATION < 5% OF LANDING CAPACITY. SEIS POWER PRIORITIZED UNTIL FINAL CUTOFF.',
    monologue: [
      'Unlike my roving cousins, I was born to stand perfectly still. They landed me on Elysium Planitia—a flat, unremarkable lava plain chosen precisely because it had no dramatic cliffs or canyons. Why? Because my job was not to look at Mars, but to close my eyes and listen to its heartbeat.',
      'With my robotic arm, I lifted SEIS—the most sensitive seismometer ever built—and set it gently onto the rusty soil beneath a gleaming white wind-and-thermal shield. In April 2019, on Sol 128, I felt a faint, eerie tremor ripple up through the crust. The first confirmed marsquake. Over four years, I cataloged 1,319 quakes, mapped the thickness of the Martian crust, and measured the molten iron alloy core at the planet’s heart.',
      'As the sols ticked past, Elysium Planitia offered no dust devils strong enough to clean my round UltraFlex solar wings. My last selfie in 2022 showed me nearly camouflaged against the ground, buried beneath a velvety blanket of reddish-brown dust.',
      'Instead of shutting off my seismometer to hoard power for survival heaters, my team at JPL and I made a pact: we turned off my fault-protection safeguards so I could keep listening to the very last drop of energy. My final postcard home showed the copper dome of SEIS sitting quietly in front of me. Now we both rest in the silence we came here to measure.'
    ],
    instruments: [
      {
        name: 'SEIS (Seismic Experiment for Interior Structure)',
        state: 'DEPLOYED ON SURFACE · COPPER WTS INTACT',
        desc: 'French CNES-led ultra-sensitive broadband seismometer sitting 1.6m from the lander deck; detected 1,319 marsquakes and meteoroid strikes.'
      },
      {
        name: 'HP³ ("The Mole" Heat Flow and Physical Properties Probe)',
        state: 'BURIED 37 CM IN COHESIVE DURICRUST',
        desc: 'German DLR self-hammering thermal probe resting just beneath the surface after an epic 2-year engineering battle with clumping Martian soil.'
      },
      {
        name: 'RISE (Rotation and Interior Structure Experiment)',
        state: 'X-BAND TRANSPONDER TRANSDUCERS INERT',
        desc: 'Tracked tiny wobbles in Mars’s north pole as it orbited the Sun, revealing a liquid iron-sulfur-oxygen core.'
      },
      {
        name: 'LaRRI (Laser Retroreflector for InSight)',
        state: 'PASSIVE OPTICAL DOME ACTIVE',
        desc: 'Italian Space Agency corner-cube reflectors mounted on the top deck for future orbital laser ranging.'
      }
    ],
    gallery: [
      {
        url: 'https://images-assets.nasa.gov/image/PIA25287/PIA25287~orig.jpg',
        caption: 'PIA25287: InSight’s final full selfie on Sol 1211 (April 2022), showing thick Martian dust coating its twin solar arrays.',
        credit: 'NASA / JPL-Caltech'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA25686/PIA25686~orig.jpg',
        caption: 'PIA25686: One of the final images ever transmitted by InSight (Dec 2022), gazing out at the SEIS wind shield and tether in twilight.',
        credit: 'NASA / JPL-Caltech'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA23179/PIA23179~orig.jpg',
        caption: 'PIA23179: Pristine early view of the white dome of the SEIS seismometer and HP3 Mole deployed on Elysium Planitia.',
        credit: 'NASA / JPL-Caltech'
      }
    ],
    baseDustRate: 0.95
  },
  {
    id: 'ingenuity-helicopter',
    name: 'Ingenuity Mars Helicopter ("Ginny")',
    shortName: 'Ingenuity Rotorcraft (Valinor Hills)',
    body: 'mars',
    bodyLabel: 'Mars',
    region: 'Valinor Hills, Neretva Vallis (Jezero Crater)',
    coordinates: '18.4972° N, 77.3113° E',
    launchYear: 2021,
    silenceYear: 2024,
    nssdcaId: '2020-052A-ING',
    mission: 'Mars 2020 Helicopter Technology Demonstration',
    deploymentDate: 'April 3, 2021 · First Flight April 19, 2021',
    lastContactDate: 'April 16, 2024 (Final Perseverance Relay)',
    status: 'Grounded Upright · Autonomous Weather Station Mode',
    massKg: '1.8 kg (Total Mass · 4-Foot Carbon-Fiber Rotor Span)',
    powerSource: 'Top-Mounted Solar Panel + 6 Sony Li-Ion Cells (ACTIVE)',
    primaryImage: 'https://images-assets.nasa.gov/image/PIA26243/PIA26243~orig.jpg',
    fallbackGradient: 'from-red-950 via-orange-950 to-black',
    quotePreview: '“I carried a postage-stamp piece of the Wright Brothers’ Kitty Hawk fabric under my solar panel. Though my rotor blade is broken, I still wake up every morning.”',
    storyTitle: 'Broken Wing in the Valinor Hills',
    lastSignalQuote: 'TELEMETRY LOG // FLIGHT 72 (2024-01-18) — ROTOR TIP IMPACT DETECTED IN FEATURELESS SAND RIPPLES. AUTONOMOUSDAILY WAKE-UP LOOP LOADED.',
    monologue: [
      'When they strapped me beneath Perseverance’s belly, I was a 1.8-kilogram gamble. Flying in Mars’s atmosphere—just one percent the density of Earth’s—is equivalent to flying a helicopter at 100,000 feet on Earth. My twin carbon-fiber rotors had to spin at 2,537 RPM just to bite into the thin carbon-dioxide air. They asked me for five test flights over thirty days.',
      'I flew seventy-two times. For nearly three years, I became Perseverance’s aerial scout, soaring above boulder fields and ancient river deltas in Jezero Crater where rover wheels dared not roll. Tucking a tiny swatch of unbleached muslin from the Wright Brothers’ 1903 Flyer beneath my solar panel, I turned Sagan’s dream into an extraterrestrial airfield.',
      'On Flight 72, over the steep, featureless sand ripples of Neretva Vallis, my downward navigation camera lost visual surface features to lock onto. During a hard descent, my spinning rotor blades struck the slope. One blade snapped clean off fifteen meters away; the others splintered at their tips. Yet somehow, I landed upright.',
      'Because Perseverance had to keep climbing west up the crater rim, we said our final goodbye in April 2024. Before she drove out of radio range, my engineers uploaded one final software patch. I am not dead! Every single Martian morning, I still wake up, test my avionics, snap a color photo of the sand dunes with my RTE camera, and log the temperature onto my internal memory—able to hold twenty years of solitary diaries until an astronaut walks into Valinor Hills to plug in a cable.'
    ],
    instruments: [
      {
        name: '1903 Wright Flyer I Wing Fabric Swatch',
        state: 'SEALED Beneath SOLAR PANEL CABLE',
        desc: 'A postage-stamp-sized piece of muslin from Orville and Wilbur Wright’s original Kitty Hawk aircraft, gifted by Carillon Historical Park.'
      },
      {
        name: 'Qualcomm Snapdragon 801 Flight Computer & Flash Archive',
        state: 'AUTONOMOUS DAILY LOGGING ACTIVE (~2044)',
        desc: 'Continues to wake daily on solar power, recording avionics temperatures and surface photos with 20 years of onboard storage capacity.'
      },
      {
        name: 'RTE (Return-to-Earth) 13MP Color Camera & Navcam',
        state: 'OPERATIONAL IN STATIONARY MODE',
        desc: 'Captures daily imagery of wind-driven sand ripple migration in Neretva Vallis.'
      },
      {
        name: 'Garmin LIDAR-Lite v3 Laser Altimeter',
        state: 'INTACT ON LOWER FUSELAGE',
        desc: 'Measured altitude during 128.8 total minutes of powered flight across 17.0 kilometers of Martian terrain.'
      }
    ],
    gallery: [
      {
        url: 'https://images-assets.nasa.gov/image/PIA26243/PIA26243~orig.jpg',
        caption: 'PIA26243: Perseverance’s Mastcam-Z telephoto view of Ingenuity resting upright on a dune in "Valinor Hills" after its final 72nd flight.',
        credit: 'NASA / JPL-Caltech / ASU / MSSS'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA26242/PIA26242~orig.jpg',
        caption: 'PIA26242: Ingenuity’s own shadow on the Martian sand after Flight 72, clearly revealing the damaged rotor blade tip.',
        credit: 'NASA / JPL-Caltech'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA24584/PIA24584~orig.jpg',
        caption: 'PIA24584: Ingenuity newly deployed on the floor of Jezero Crater in April 2021 prior to its historic first powered flight on another planet.',
        credit: 'NASA / JPL-Caltech'
      }
    ],
    baseDustRate: 0.65
  },
  {
    id: 'kepler-telescope',
    name: 'Kepler Space Telescope',
    shortName: 'Kepler Exoplanet Observatory',
    body: 'deep-space',
    bodyLabel: 'Deep Space / Orbit',
    region: 'Earth-Trailing Heliocentric Orbit (372.5-Day Period)',
    coordinates: '1.013 AU Solar Orbit · ~151 Million km from Earth',
    launchYear: 2009,
    silenceYear: 2018,
    nssdcaId: '2009-011A',
    mission: 'Kepler & K2 Extended Mission (Discovery #10)',
    deploymentDate: 'March 7, 2009 · 03:49:57 UTC',
    lastContactDate: 'November 15, 2018 · "Goodnight" Command',
    status: 'Passivated & Drifting in Safe Solar Orbit',
    massKg: '1,052 kg (Launch) · 0.0 kg Hydrazine Remaining',
    powerSource: '2.86m² Non-Articulated Solar Array (Transmitter Disabled)',
    primaryImage: 'https://images-assets.nasa.gov/image/PIA18904/PIA18904~orig.jpg',
    fallbackGradient: 'from-purple-950 via-indigo-950 to-black',
    quotePreview: '“When two of my reaction wheels failed, they balanced me on the pressure of sunlight itself. Before I closed my eyes, I showed you there are more planets than stars.”',
    storyTitle: 'Balanced on a Beam of Sunlight',
    lastSignalQuote: 'TELEMETRY LOG // 2018-319-00:26:00 UTC — COMMAND SENT FROM LASP BOULDER: FAULT PROTECTION DISABLED. X-BAND TRANSMITTER OFF. GOODNIGHT KEPLER.',
    monologue: [
      'Before I launched into the dark in March 2009, humanity did not know whether rocky, Earth-sized worlds were rare miracles or cosmic commonplace. For four years, I stared without blinking at a single starry patch of Cygnus and Lyra—watching 150,000 stars simultaneously for the tiny, rhythmic dimming caused when an unseen world crossed in front of its sun.',
      'In 2013, my second of four gyroscopic reaction wheels ground to a halt. Without three working wheels to hold my gaze steady, everyone thought my mission was over. Then Ball Aerospace and NASA engineers conceived a miracle: K2. They turned my hexagonal barrel sideways so the gentle, physical pressure of photons streaming from the Sun balanced me like a kayaker leaning into the current.',
      'For five more years I sailed on sunlight alone, burning through my last milligrams of hydrazine thruster fuel to hop from constellation to constellation. By the time my fuel tank coughed dry in October 2018, I had observed over half a million stars and discovered more than 2,600 confirmed exoplanets—revealing that our Milky Way holds billions of hidden worlds.',
      'On November 15, 2018—the 388th anniversary of Johannes Kepler’s passing—mission controllers sent my final "goodnight" command. They switched off my radio transmitter so I would never pollute the Deep Space Network frequencies as I slowly tumble. Today I drift peacefully around the Sun at 1.013 AU, a silent golden barrel forever surrounded by the worlds I introduced you to.'
    ],
    instruments: [
      {
        name: '95-Megapixel Focal Plane CCD Photometer Array',
        state: 'SHUTTERLESS / DRIFTING IN DARKNESS',
        desc: '42 sapphire-field-flattened CCD sensors—the largest camera ever launched into space at the time—cooled passively to -85°C.'
      },
      {
        name: '1.4-Meter Fused Quartz Primary Mirror',
        state: 'OPTICAL COATING PRISTINE IN VACUUM',
        desc: 'Ultra-lightweight Corning glass mirror inside the Schmidt corrector barrel, only 14% the mass of a solid mirror.'
      },
      {
        name: 'Reaction Wheel Assembly (RWA 1–4)',
        state: 'WHEELS #2 & #4 SEIZED / ALL SPUN DOWN',
        desc: 'High-precision momentum wheels whose failure sparked the legendary solar-photon-balanced K2 mission.'
      },
      {
        name: 'Blowdown Hydrazine Propulsion Tank',
        state: 'COMPLETELY DEPLETED (0.00 PSI)',
        desc: 'Stretched 12 kg of hydrazine across 9.6 years in deep space until the very last drop.'
      }
    ],
    gallery: [
      {
        url: 'https://images-assets.nasa.gov/image/PIA18904/PIA18904~orig.jpg',
        caption: 'PIA18904: Artist concept showing how Kepler used the balanced pressure of solar photons as a "virtual third reaction wheel" during its K2 mission.',
        credit: 'NASA / Ames / Wendy Stenzel'
      },
      {
        url: 'https://images-assets.nasa.gov/image/KSC-2009-1188/KSC-2009-1188~orig.jpg',
        caption: 'KSC-2009-1188: Technicians inspect the Kepler spacecraft in the Astrotech clean room prior to encapsulation atop its Delta II rocket.',
        credit: 'NASA / Kim Shiflett'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA22835/PIA22835~orig.jpg',
        caption: 'PIA22835: Kepler’s final "Last Light" full-field image captured on September 25, 2018 before its hydrazine tanks ran dry.',
        credit: 'NASA / Ames Research Center'
      }
    ],
    baseDustRate: 0.08 // Deep space vacuum has only solar wind radiation weathering, minimal dust
  },
  {
    id: 'sojourner-pathfinder',
    name: 'Sojourner Rover & Carl Sagan Memorial Station',
    shortName: 'Mars Pathfinder / Sojourner',
    body: 'mars',
    bodyLabel: 'Mars',
    region: 'Ares Vallis',
    coordinates: '19.13° N, 33.22° W',
    launchYear: 1997,
    silenceYear: 1997,
    nssdcaId: '1996-068A',
    mission: 'Mars Pathfinder (MESUR Pathfinder)',
    deploymentDate: 'July 4, 1997 · 16:56:55 UTC',
    lastContactDate: 'September 27, 1997 · Sol 83',
    status: 'Autonomous Circling Mode Until Battery Depletion',
    massKg: '10.6 kg (Sojourner Rover) · 264 kg (Sagan Station)',
    powerSource: '0.22m² GaAs Solar Panel + Li-SOCl₂ Batteries',
    primaryImage: 'https://images-assets.nasa.gov/image/PIA01122/PIA01122~orig.jpg',
    fallbackGradient: 'from-orange-950 via-red-950 to-black',
    quotePreview: '“When the lander stopped answering me, my contingency code told me to drive back toward home base and circle my silent mother in the red dust.”',
    storyTitle: 'Circling Home in Ares Vallis',
    lastSignalQuote: 'TELEMETRY LOG // SOL 83 (1997-09-27) — LANDER BATTERY CELL FAILURE DUE TO THERMAL CYCLING. ROVER CONTINGENCY FAULT TRIGGERED: RETURN TO LANDER PERIMETER.',
    monologue: [
      'I was barely the size of a microwave oven—just 10.6 kilograms on six tiny aluminum wheels—yet I carried the weight of every future rover on my back. Before July 4, 1997, no wheeled vehicle had ever rolled across Mars. I bounced down onto the floodplains of Ares Vallis wrapped inside giant airbags alongside my mother ship, the Carl Sagan Memorial Station.',
      'Unlike my descendants who talk directly to orbiters, my little UHF modem could only whisper a few dozen meters to the Pathfinder lander, which relayed my words to Earth. Together we inspected rocks nicknamed "Barnacle Bill," "Yogi," and "Scooby Doo," proving that a low-cost six-wheeled rocker-bogie rover could conquer Martian boulders.',
      'On Sol 83, after three times its design lifetime, the lander’s rechargeable battery froze during the bitter Martian night and lost its ability to warm the main radio transmitter. Suddenly, when the sun rose, my mother station didn’t answer my morning ping.',
      'My programmers at JPL had written a heart-wrenching contingency routine into my 8-bit Intel 80C85 processor: if I went five sols without hearing from the lander, I was instructed to assume my radio link was blocked, drive autonomously back toward the Carl Sagan Memorial Station, and slowly circle around its petals—trying again and again to reconnect until the Martian winter put me to sleep beside her.'
    ],
    instruments: [
      {
        name: 'APXS (Alpha Proton X-Ray Spectrometer)',
        state: 'DEPLOYED ONNOSE MOUNT',
        desc: 'Analyzed the elemental composition of Ares Vallis flood rocks and Martian soils.'
      },
      {
        name: 'WAE (Wheel Abrasion Experiment)',
        state: 'ALUMINUM / PLATINUM STRIPS WEATHERED',
        desc: 'Thin metal strips on the middle wheel measured the abrasive wear of fine Martian dust.'
      },
      {
        name: 'IMP (Imager for Mars Pathfinder) Mast on Lander',
        state: 'EXTENDED AT 1.8 METERS',
        desc: 'Pop-up stereo camera on the Carl Sagan Memorial Station that captured the iconic panoramas of Twin Peaks.'
      },
      {
        name: 'Intel 80C85 2MHz Rad-Hard CPU (176 KB RAM)',
        state: 'HALTED IN CONTINGENCY LOOP',
        desc: 'Executed autonomous hazard-avoidance laser striping and the final "return to lander" protocol.'
      }
    ],
    gallery: [
      {
        url: 'https://images-assets.nasa.gov/image/PIA01122/PIA01122~orig.jpg',
        caption: 'PIA01122: Sojourner rover nestling its Alpha Proton X-Ray Spectrometer against the "Yogi" rock in Ares Vallis.',
        credit: 'NASA / JPL'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA00622/PIA00622~orig.jpg',
        caption: 'PIA00622: Sojourner rolls down the rear ramp of the Pathfinder lander onto the Martian soil for the first time on Sol 2.',
        credit: 'NASA / JPL'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA00995/PIA00995~orig.jpg',
        caption: 'PIA00995: The "Twin Peaks" hills on the horizon of Ares Vallis as seen from the Carl Sagan Memorial Station.',
        credit: 'NASA / JPL / University of Arizona'
      }
    ],
    baseDustRate: 0.88
  },
  {
    id: 'spitzer-telescope',
    name: 'Spitzer Space Telescope (SIRTF)',
    shortName: 'Spitzer Infrared Great Observatory',
    body: 'deep-space',
    bodyLabel: 'Deep Space / Orbit',
    region: 'Earth-Trailing Heliocentric Orbit (~254 Million km)',
    coordinates: '1.7 AU from Earth · Trailing Drift ~0.1 AU/Year',
    launchYear: 2003,
    silenceYear: 2020,
    nssdcaId: '2003-038A',
    mission: 'Space Infrared Telescope Facility (Great Observatories #4)',
    deploymentDate: 'August 25, 2003 · 05:35:39 UTC',
    lastContactDate: 'January 30, 2020 · 22:34:00 UTC',
    status: 'Passivated in Safe Mode · Trailing Solar Orbit',
    massKg: '865 kg (Dry Observatory Mass)',
    powerSource: 'Dual Cantilevered Solar Panels (Safe-Mode Hibernation)',
    primaryImage: 'https://images-assets.nasa.gov/image/PIA23645/PIA23645~orig.jpg',
    fallbackGradient: 'from-violet-950 via-purple-950 to-black',
    quotePreview: '“Even after my liquid helium boiled away, I stayed cold enough in the shadow of my solar shield to reveal the seven sister worlds of TRAPPIST-1.”',
    storyTitle: 'The Warm Eye in the Cold Dark',
    lastSignalQuote: 'TELEMETRY LOG // 2020-030-22:34:00 UTC — GOLDSTONE DSS-14 DOWNLINK TERMINATED. SPACECRAFT PLACED IN ETERNAL SAFE HIBERNATION.',
    monologue: [
      'I was the fourth and final sibling of NASA’s Great Observatories, built to peer through the cosmic dust clouds that blinded Hubble. To see the faint infrared warmth of newborn stars and distant galaxies, my beryllium mirror had to be kept just five degrees above absolute zero—colder than Pluto—bathed in 360 liters of liquid helium.',
      'For five and a half years I drank that helium one vapor breath at a time. When the tank finally ran dry in May 2009, many thought I would go blind. Instead, because I trailed far behind Earth in open deep space—shaded by my gleaming solar panel shield—passive radiation into the void kept me at a chilly 29 Kelvin (-244°C). My "Warm Mission" lasted longer than my cold one!',
      'In 2016, staring at an ultra-cool dwarf star forty light-years away, I watched seven rocky, Earth-sized planets parade across TRAPPIST-1—three of them in the habitable zone. Every year, however, my Earth-trailing orbit carried me another fifteen million kilometers farther from home. By 2020, just pointing my antenna toward Earth tilted my solar panels at such an extreme angle that my batteries drained to critical levels during every transmission.',
      'On January 30, 2020, Project Manager Joseph Hunt declared my mission complete. Somewhere around the year 2053, my drifting orbit will finally lap Earth from behind—passing silently through the night sky of the planet that built me.'
    ],
    instruments: [
      {
        name: 'IRAC (Infrared Array Camera · 3.6 & 4.5 µm)',
        state: 'PASSIVELY COOLED TO ~29 KELVIN',
        desc: 'Two short-wavelength Indium-Antimonide detector channels that operated for an astonishing 16.4 years in space.'
      },
      {
        name: '85-cm All-Beryllium Ritchey-Chrétien Mirror',
        state: 'PRISTINE IN HELIOCENTRIC VACUUM',
        desc: 'Ultra-lightweight beryllium optics weighing less than 50 kg, immune to thermal distortion near absolute zero.'
      },
      {
        name: 'Cryostat Superfluid Helium Tank (360L)',
        state: 'DEPLETED MAY 15, 2009',
        desc: 'Cooled the MIPS and IRS instruments to 1.4 Kelvin during Spitzer’s prime cryogenic mission.'
      },
      {
        name: 'Cantilevered Solar Shield Assembly',
        state: 'SHADING OPTICS FROM SOLAR RADIATION',
        desc: 'Continues to block direct sunlight so the telescope hull radiates heat into deep space.'
      }
    ],
    gallery: [
      {
        url: 'https://images-assets.nasa.gov/image/PIA23645/PIA23645~orig.jpg',
        caption: 'PIA23645: Artist rendering of the Spitzer Space Telescope drifting in its Earth-trailing heliocentric orbit surrounded by infrared nebulae.',
        credit: 'NASA / JPL-Caltech'
      },
      {
        url: 'https://images-assets.nasa.gov/image/PIA21422/PIA21422~orig.jpg',
        caption: 'PIA21422: Spitzer’s landmark discovery of the seven Earth-sized exoplanets orbiting the ultra-cool dwarf star TRAPPIST-1.',
        credit: 'NASA / JPL-Caltech'
      },
      {
        url: 'https://images-assets.nasa.gov/image/KSC-03PD-0782/KSC-03PD-0782~orig.jpg',
        caption: 'KSC-03PD-0782: The Spitzer spacecraft (then SIRTF) undergoing final optical inspection at Kennedy Space Center before launch in 2003.',
        credit: 'NASA / Kennedy Space Center'
      }
    ],
    baseDustRate: 0.06
  }
];

const TIMELINE_EVENTS = [
  { year: 1969, label: '1969 · Tranquility Base', desc: 'Apollo 11 Eagle Descent Stage becomes humanity’s first permanent monument on the Moon.' },
  { year: 1972, label: '1972 · Taurus-Littrow', desc: 'Apollo 17 LRV-3 is parked 145m east of Challenger to broadcast the final lunar liftoff.' },
  { year: 1997, label: '1997 · Ares Vallis', desc: 'Sojourner Rover enters autonomous circling mode around the silent Carl Sagan Memorial Station.' },
  { year: 2004, label: '2004 · Meridiani Planum', desc: 'Opportunity Rover bounces into Eagle Crater on Mars to begin a 90-sol mission that lasts 14 years.' },
  { year: 2018, label: '2018 · Year of Great Silence', desc: 'A global Martian dust storm silences Opportunity (Sol 5111), while Kepler runs out of fuel in deep space.' },
  { year: 2022, label: '2022 · Elysium Planitia', desc: 'InSight Lander transmits its final dust-choked selfie beside the SEIS seismometer on Sol 1440.' },
  { year: 2024, label: '2024 · Valinor Hills', desc: 'Ingenuity Helicopter grounded on Flight 72; reprogrammed as a 20-year autonomous Martian weather station.' },
  { year: 2026, label: '2026 · Present Epoch', desc: 'NASA Space Apps 2026 Archive: All 8 iconic relics monitored via NSSDCA coordinates and orbital reconnaissance.' }
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

    // Modal state
    activeArtifact: null,
    activeTab: 'story', // 'story' | 'nssdca' | 'gallery'
    selectedGalleryIndex: 0,

    // Voice Synthesizer (Web Speech API)
    isSpeaking: false,
    speechSupported: typeof window !== 'undefined' && 'speechSynthesis' in window,

    init() {
      // Initialize Lucide icons after DOM mounts
      this.$nextTick(() => {
        if (window.lucide) window.lucide.createIcons();
        initThreeSpaceScene(this);
      });

      // Re-render icons when filter or modal changes
      this.$watch('selectedBody', () => {
        this.$nextTick(() => {
          if (window.lucide) window.lucide.createIcons();
          if (window.updateThreeBodyTheme) window.updateThreeBodyTheme(this.selectedBody);
        });
      });

      this.$watch('activeArtifact', (val) => {
        if (!val) {
          this.stopNarration();
          document.body.style.overflow = '';
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

    get filteredArtifacts() {
      return this.artifacts.filter(item => {
        const matchesBody = this.selectedBody === 'all' || item.body === this.selectedBody;
        const q = this.searchQuery.trim().toLowerCase();
        const matchesSearch = !q ||
          item.name.toLowerCase().includes(q) ||
          item.region.toLowerCase().includes(q) ||
          item.nssdcaId.toLowerCase().includes(q) ||
          item.mission.toLowerCase().includes(q);
        return matchesBody && matchesSearch;
      });
    },

    get currentEpochEvent() {
      // Find closest historical milestone <= currentYear
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
          summary: `Still on Earth undergoing assembly or mission integration (${artifact.launchYear - yr} yrs to launch).`
        };
      }

      if (yr <= artifact.silenceYear) {
        const activeYrs = yr - artifact.launchYear;
        const dust = Math.min(45, Math.round(activeYrs * 6 * artifact.baseDustRate));
        return {
          code: 'ACTIVE TELEMETRY',
          badgeText: 'Prime Mission Active',
          badgeClass: 'bg-emerald-950/90 text-emerald-300 border-emerald-500/50',
          dotClass: 'bg-emerald-400 pulse-beacon',
          yearsSilent: 0,
          dustPercent: dust,
          solarEfficiency: Math.max(40, 100 - dust),
          summary: `Transmitting live telemetry via NASA Deep Space Network (Year ${activeYrs + 1} of operations).`
        };
      }

      // Post-silence: Relic / Monument state
      const yearsSilent = yr - artifact.silenceYear;
      const totalYearsDeployed = yr - artifact.launchYear;
      let dustPercent = 0;

      if (artifact.body === 'mars') {
        // Martian regolith silt builds up quickly and plateaus around 94-99%
        dustPercent = Math.min(98, Math.round(35 + Math.pow(totalYearsDeployed, 0.72) * 14 * artifact.baseDustRate));
      } else if (artifact.body === 'moon') {
        // Electrostatic lunar dust levitation + micrometeorite patina
        dustPercent = Math.min(68, Math.round(8 + totalYearsDeployed * 0.95));
      } else {
        // Deep space solar wind radiation weathering / micrometeorite pitting
        dustPercent = Math.min(32, Math.round(4 + totalYearsDeployed * 1.1));
      }

      const solarEff = artifact.body === 'mars'
        ? Math.max(0, 100 - dustPercent)
        : (artifact.id === 'ingenuity-helicopter' ? 38 : 0);

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
          ? `Iron-oxide regolith patina: ${dustPercent}% coverage over ${totalYearsDeployed} Earth years on Mars.`
          : (artifact.body === 'moon'
            ? `Micrometeoroid & UV thermal patina after ${totalYearsDeployed} years in lunar vacuum.`
            : `Drifting silently in heliocentric orbit (${yearsSilent} years since transmitter passivation).`)
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
        this.activeArtifact.monologue.join(' ');
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.92;
      utterance.pitch = 0.9;

      // Pick an expressive English voice if available
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

    // Mix of crisp white, cyan, and warm Mars amber stars
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

  // Orbital Telemetry Ring
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

  // Second Outer Dashed/Tilted Ring
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

  // Dynamic color transitions when user switches celestial body filter
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

  // Subtle Mouse Parallax
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

  // Render Loop
  function animate() {
    requestAnimationFrame(animate);

    wireframeSphere.rotation.y += 0.0014;
    wireframeSphere.rotation.x += 0.0004;
    orbitalRing.rotation.z -= 0.0018;
    outerRing.rotation.z += 0.001;

    starField.rotation.y += 0.00025;

    // Smooth camera parallax
    camera.position.x += (mouseX * 1.8 - camera.position.x) * 0.03;
    camera.position.y += (-mouseY * 1.2 - camera.position.y) * 0.03;

    renderer.render(scene, camera);
  }

  animate();
}
