export type EpochId =
  | 'cosmic'
  | 'earth'
  | 'biological'
  | 'agricultural'
  | 'industrial'
  | 'digital';

export interface EpochDefinition {
  id: EpochId;
  label: string;
  shortLabel: string;
  startYa: number; // years before 2026 CE
  endYa: number;
  logMin: number; // log10(endYa)
  logMax: number; // log10(startYa)
  summary: string;
  keyMetric: string;
  shade: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  epoch: EpochId;
  yearsAgo: number; // strictly > 0 (relative to 2026 CE, minimum 1)
  displayDate: string;
  domain: string;
  oneLiner: string;
  metrics: { label: string; value: string }[];
  deepNote: string;
  brainCc?: number;
  energyKcal?: number;
}

export type ScienceTrackKind = 'episteme' | 'techne' | 'synthesis';

export interface ScienceMilestone {
  id: string;
  yearLabel: string;
  yearsAgo: number;
  figure: string;
  breakthrough: string;
  kind: ScienceTrackKind;
  paradigmNote: string;
}

export interface HomininStage {
  species: string;
  horizon: string;
  brainCc: number;
  rmrSharePct: number;
  toolMode: string;
  energeticShift: string;
}

// Reference present = 2026 CE
export const PRESENT_YEAR = 2026;

export const EPOCHS: EpochDefinition[] = [
  {
    id: 'cosmic',
    label: 'Cosmic Origins',
    shortLabel: 'Cosmic',
    startYa: 13_800_000_000,
    endYa: 4_540_000_000,
    logMin: Math.log10(4_540_000_000),
    logMax: Math.log10(13_800_000_000),
    summary: 'Space expands, the first hydrogen and helium form, the first giant stars (Population III) burn out, and the Milky Way comes together.',
    keyMetric: '75% H / 25% He primordial mass ratio',
    shade: '#f5f2eb',
  },
  {
    id: 'earth',
    label: 'Earth & Prebiotic',
    shortLabel: 'Earth',
    startYa: 4_540_000_000,
    endYa: 538_800_000,
    logMin: Math.log10(538_800_000),
    logMax: Math.log10(4_540_000_000),
    summary: 'Earth forms and cools into oceans. Life starts from one shared ancestor (LUCA, the last universal common ancestor), oxygen floods the air (the Great Oxidation), and one cell takes in another to make the first cell with mitochondria.',
    keyMetric: '100,000x ATP (cell energy) per gene via mitochondria',
    shade: '#f7f5f0',
  },
  {
    id: 'biological',
    label: 'Biological Evolution',
    shortLabel: 'Biological',
    startYa: 538_800_000,
    endYa: 12_000,
    logMin: Math.log10(12_000),
    logMax: Math.log10(538_800_000),
    summary: 'Animal body plans appear in the Cambrian and mass extinctions reset life. Our ancestors start walking upright, fire and cooking help brains grow (encephalisation), and language with symbols arrives.',
    keyMetric: '400 cc to 1,350 cc hominin brain expansion',
    shade: '#fafaf9',
  },
  {
    id: 'agricultural',
    label: 'Agricultural & Antiquity',
    shortLabel: 'Agricultural',
    startYa: 12_000,
    endYa: 276, // 1750 CE
    logMin: Math.log10(276),
    logMax: Math.log10(12_000),
    summary: 'After the Ice Age (in the Holocene), people farm grain and build river-valley cities. Writing, early philosophy and long-distance trade follow.',
    keyMetric: '10x to 100x population density jump (>50/km2)',
    shade: '#f5f5f4',
  },
  {
    id: 'industrial',
    label: 'Industrial Energy',
    shortLabel: 'Industrial',
    startYa: 276, // 1750 CE
    endYa: 76, // 1950 CE
    logMin: Math.log10(76),
    logMax: Math.log10(276),
    summary: 'Coal and steam turn heat into work (thermodynamics), and electricity and magnetism are put to use. Then come the assembly line and government-funded Big Science.',
    keyMetric: '75,000 to 110,000 kcal/day/capita energy capture',
    shade: '#f8f4f0',
  },
  {
    id: 'digital',
    label: 'Digital & Anthropocene',
    shortLabel: 'Digital',
    startYa: 76, // 1950 CE
    endYa: 1, // Present
    logMin: 0,
    logMax: Math.log10(76),
    summary: 'DNA is decoded, ARPANET links computers, markets run on algorithms and CRISPR edits genes. Humans now push the climate of the whole planet (planetary forcing).',
    keyMetric: '>220,000 kcal/day/capita global high-tech frontier',
    shade: '#fff7ed',
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'big-bang',
    title: 'Big Bang & Primordial Nucleosynthesis',
    epoch: 'cosmic',
    yearsAgo: 13_800_000_000,
    displayDate: '13.80 Gya',
    domain: 'Astrophysics',
    oneLiner: 'Space begins to expand. In the first 20 minutes, matter settles at about 75% hydrogen and 25% helium.',
    metrics: [
      { label: 'Uncertainty', value: '+/- 0.02 Gya' },
      { label: 'Recombination', value: '380 kyr (~3,000 K)' },
    ],
    deepNote:
      'About 380,000 years in, the universe had cooled enough for electrons to join protons. The light set free then is still visible as the Cosmic Microwave Background (CMB). The first giant stars (Population III) later forged carbon up to iron, and supernovae and neutron-star collisions made the heavier elements.',
  },
  {
    id: 'milky-way',
    title: 'Milky Way Galactic Assembly',
    epoch: 'cosmic',
    yearsAgo: 13_600_000_000,
    displayDate: '13.6 Gya',
    domain: 'Astrophysics',
    oneLiner: 'Gravity pulls gas together into the halo of the galaxy and its first stars.',
    metrics: [
      { label: 'Formation Window', value: '13.6 - 13.2 Gya' },
      { label: 'Nucleosynthesis', value: 'Pop III -> Pop II' },
    ],
    deepNote:
      'Each generation of massive stars left heavier elements in the gas between stars. Over time that built up the chemistry rocky planets and organic molecules need.',
  },
  {
    id: 'earth-accretion',
    title: 'Earth Accretion & Theia Giant Impact',
    epoch: 'earth',
    yearsAgo: 4_540_000_000,
    displayDate: '4.54 Gya',
    domain: 'Geochemistry',
    oneLiner: 'Small rocky bodies clump together into Earth. A glancing hit from another young planet, Theia (4.51 Gya), makes the Moon and the 23.4 degree tilt.',
    metrics: [
      { label: 'Axial Tilt', value: '23.4 deg' },
      { label: 'Oceans Stable', value: '4.4 Gya' },
    ],
    deepNote:
      'A shockwave from a nearby supernova set the gas cloud around the young Sun collapsing. Later the Moon steadied the tilt of Earth’s axis (its obliquity), which kept the seasons regular across geological time.',
  },
  {
    id: 'luca-abiogenesis',
    title: 'Abiogenesis & LUCA',
    epoch: 'earth',
    yearsAgo: 3_800_000_000,
    displayDate: '3.8 - 3.7 Gya',
    domain: 'Paleobiology',
    oneLiner: 'The earliest chemical traces of life (extra carbon-12). Simple cells that need no oxygen make ATP, the cell energy molecule, by letting protons flow across a membrane.',
    metrics: [
      { label: 'Molecular Clock LUCA', value: '~4.2 Gya' },
      { label: 'Metabolism', value: 'Chemoautotrophic' },
    ],
    deepNote:
      'Rocks rich in carbon-12 and tiny fossils in ancient Archean greenstone belts and deep-sea hot vents mark early life. Molecular clocks, which count genetic changes backwards (Moody et al., 2024), place LUCA around 4.2 Gya.',
  },
  {
    id: 'great-oxidation',
    title: 'Great Oxidation Event (GOE)',
    epoch: 'earth',
    yearsAgo: 2_400_000_000,
    displayDate: '2.4 - 2.1 Gya',
    domain: 'Geobiology',
    oneLiner: 'Cyanobacteria start releasing oxygen through photosynthesis. Iron in the sea rusts out into banded rock layers, and Earth freezes over (Snowball Earth).',
    metrics: [
      { label: 'Mineral Sink', value: 'Fe2+ -> Fe3+ BIFs' },
      { label: 'Glaciation', value: '~300 Myr Huronian' },
    ],
    deepNote:
      'Oxygen from photosynthesis (Photosystems I and II) was first soaked up by iron dissolved in the oceans. Once that iron was used up, oxygen broke down the methane (CH4) in the air. The greenhouse effect collapsed, most life that could not handle oxygen died out, and breathing oxygen (aerobic metabolism) became possible.',
  },
  {
    id: 'eukaryogenesis',
    title: 'Eukaryogenesis & Mitochondrial Symbiosis',
    epoch: 'earth',
    yearsAgo: 1_800_000_000,
    displayDate: '1.8 - 1.5 Gya',
    domain: 'Cell Biology',
    oneLiner: 'A host cell from the Asgard archaea keeps an oxygen-burning bacterium inside it. Energy (ATP) per gene jumps about 100,000x.',
    metrics: [
      { label: 'Bioenergetic Gain', value: '100,000x ATP/gene' },
      { label: 'Multicellularity', value: '1.0 - 0.8 Gya' },
    ],
    deepNote:
      'Simple cells hit an energy ceiling, because they make energy only at their surface and surface grows slower than volume. Mitochondria inside the cell removed that limit. That made room for large genomes, then colonies of cells (1.0 Gya), then the soft-bodied Ediacaran animals (635 to 538.8 Mya).',
  },
  {
    id: 'cambrian-explosion',
    title: 'Cambrian Explosion',
    epoch: 'biological',
    yearsAgo: 538_800_000,
    displayDate: '538.8 Mya',
    domain: 'Evolutionary Biology',
    oneLiner: 'Most modern animal groups (the bilaterian phyla), with eyes, hard shells and active hunting, appear within about 20 million years.',
    metrics: [
      { label: 'Radiation Window', value: '~20 Myr' },
      { label: 'Land Plants', value: '475 Mya (O3 shield)' },
    ],
    deepNote:
      'More oxygen in the oceans and an arms race between predators and prey drove fast change in body plans: arthropods, molluscs and early chordates such as Pikaia. Later the ozone layer shielded the land, so plants (475 Mya) and four-legged animals such as Tiktaalik (375 Mya) could move onto it.',
  },
  {
    id: 'amniotes-great-dying',
    title: 'Amniote Egg & Permian-Triassic Extinction',
    epoch: 'biological',
    yearsAgo: 252_000_000,
    displayDate: '320 - 252 Mya',
    domain: 'Paleontology',
    oneLiner: 'The amniote egg lets animals live on dry land (320 Mya). Later, the Siberian Traps volcanoes wipe out 95% of sea species.',
    metrics: [
      { label: 'Carboniferous O2', value: '~35% atm' },
      { label: 'Great Dying Loss', value: '95% marine / 70% land' },
    ],
    deepNote:
      'The amniotic egg carried its own water, so vertebrates no longer had to breed in water. This happened in the high-oxygen coal-forest era. At 252 Mya, huge lava floods and acidifying oceans emptied many niches, which early dinosaurs and mammals later filled (~225 Mya).',
  },
  {
    id: 'kpg-extinction',
    title: 'K-Pg Asteroid Impact & Primate Radiation',
    epoch: 'biological',
    yearsAgo: 66_000_000,
    displayDate: '66.0 Mya',
    domain: 'Planetary Science',
    oneLiner: 'A 10 km asteroid hits Chicxulub and ends the non-bird dinosaurs, leaving the trees open for primates.',
    metrics: [
      { label: 'Species Lost', value: '~75% terrestrial' },
      { label: 'Euprimates', value: '~56 Mya' },
    ],
    deepNote:
      'Years of impact winter blocked sunlight and broke the food chains that start with photosynthesis. Surviving mammals spread fast. True primates evolved depth vision and grasping hands, and apes split from Old World monkeys around 25 to 20 Mya.',
  },
  {
    id: 'hominin-bipedalism',
    title: 'Hominin Split & Obligate Bipedalism',
    epoch: 'biological',
    yearsAgo: 4_000_000,
    displayDate: '7 - 4.0 Mya',
    domain: 'Paleoanthropology',
    oneLiner: 'The human and chimpanzee lines split (7 to 6 Mya). Australopithecus afarensis walks upright with a 400 cc brain.',
    metrics: [
      { label: 'Brain Volume', value: '380 - 450 cc' },
      { label: 'Key Finding', value: 'Bipedalism precedes big brains' },
    ],
    deepNote:
      'As East Africa dried out, savannah spread. The fossil AL 288-1 ("Lucy") has inward-angled (valgus) knees and arched feet, millions of years before brains grew much bigger.',
    brainCc: 410,
    energyKcal: 2400,
  },
  {
    id: 'homo-erectus-fire',
    title: 'Homo erectus, Cooking & Gut-Brain Trade-Off',
    epoch: 'biological',
    yearsAgo: 1_800_000,
    displayDate: '1.9 - 1.8 Mya',
    domain: 'Bioenergetics',
    oneLiner: 'Controlled fire and cooking, which does part of the digesting outside the body, shrink the gut and make room for a 900 to 1,100 cc brain.',
    metrics: [
      { label: 'Brain Volume', value: '900 - 1,100 cc' },
      { label: 'Egg Protein Digest.', value: '~51% raw -> ~91% cooked' },
    ],
    deepNote:
      'After Homo habilis (2.4 Mya, 600 cc, simple Mode 1 Oldowan stone tools), Homo erectus combined Acheulean handaxes with persistence hunting (running prey down over long distances) and cooking. That is the Wrangham hypothesis, and clear hearths show up around 1.0 to 0.8 Mya. The Expensive Tissue Hypothesis (Aiello and Wheeler) explains the trade-off: the gut burns a lot of energy, so a smaller gut freed energy to pay for a bigger brain.',
    brainCc: 1000,
    energyKcal: 3400,
  },
  {
    id: 'homo-sapiens-cognitive',
    title: 'Homo sapiens & Cognitive Revolution',
    epoch: 'biological',
    yearsAgo: 70_000,
    displayDate: '300 - 70 kya',
    domain: 'Anthropology',
    oneLiner: 'Modern humans (300 kya, 1,350 cc) start using symbols and shared stories, so groups can grow past Dunbar’s number of about 150.',
    metrics: [
      { label: 'Brain share of resting energy (RMR)', value: '20 - 25% (2% mass)' },
      { label: 'Dunbar Threshold', value: '~150 -> thousands' },
    ],
    deepNote:
      'Language that can nest one idea inside another, plus shared imagined realities, let large numbers of strangers cooperate. Humans spread across the world (Australia ~65 to 50 kya, Europe ~45 kya), carrying 1.5 to 2.5% Neanderthal DNA, and many large animals went extinct.',
    brainCc: 1350,
    energyKcal: 4000,
  },
  {
    id: 'neolithic-revolution',
    title: 'Neolithic Agricultural Revolution',
    epoch: 'agricultural',
    yearsAgo: 12_000,
    displayDate: '12 kya (10,000 BCE)',
    domain: 'Archaeology',
    oneLiner: 'A stable post-Ice Age climate (the Holocene) lets people farm grain. The same land feeds 10 to 100x more people, at a cost to health.',
    metrics: [
      { label: 'Density Shift', value: '<1 -> >50 people/km2' },
      { label: 'Holocene Onset', value: '~11,700 ya' },
    ],
    deepNote:
      'Farming started separately in the Fertile Crescent (wheat, barley), China (rice, millet) and the Americas (maize, potatoes), and gave people food they could store. The cost was shorter bodies, tooth decay and diseases caught from livestock (zoonoses).',
    energyKcal: 10000,
  },
  {
    id: 'urban-states',
    title: 'First Urban States: Sumer, Egypt & Harappa',
    epoch: 'agricultural',
    yearsAgo: 5_526,
    displayDate: '3500 - 1900 BCE',
    domain: 'Ancient History',
    oneLiner: 'Grain surpluses pay for writing (cuneiform, 3400 BCE), officials to run the irrigation, and planned cities.',
    metrics: [
      { label: 'Sumer Base', value: 'Sexagesimal (Base-60)' },
      { label: 'Harappa Bricks', value: '1:2:4 standardized ratio' },
    ],
    deepNote:
      'In Sumer, clay counting tokens turned into cuneiform bookkeeping. Egypt unified under Narmer (3100 BCE), fed by the regular Nile silt and spared the salty soils that hurt Mesopotamia. Mature Harappa (2600 to 1900 BCE) built covered town drains and grid-planned cities.',
    energyKcal: 22000,
  },
  {
    id: 'bronze-age-collapse',
    title: 'Late Bronze Age Collapse',
    epoch: 'agricultural',
    yearsAgo: 3_226,
    displayDate: '1200 - 1150 BCE',
    domain: 'Systems History',
    oneLiner: 'Drought, broken tin and copper trade, revolts and the Sea Peoples bring down the states of the Eastern Mediterranean one after another.',
    metrics: [
      { label: 'Collapse Span', value: '~50 years' },
      { label: 'Tech Shift', value: 'Bronze -> local Iron' },
    ],
    deepNote:
      'Palace economies such as Mycenae, the Hittites and Ugarit depended on each other, so they failed together when the long-distance tin and copper routes broke. Iron ore, by contrast, was found almost everywhere, so metalworking after the collapse became local.',
    energyKcal: 18000,
  },
  {
    id: 'classical-athens-socrates',
    title: 'Athenian Democracy & Trial of Socrates',
    epoch: 'agricultural',
    yearsAgo: 2_425,
    displayDate: '508 - 399 BCE',
    domain: 'Political Philosophy',
    oneLiner: 'Open questioning (the Socratic method, elenchus) and direct democracy, as compared to unchanging Sparta. Socrates is executed in 399 BCE.',
    metrics: [
      { label: 'Jury Size', value: '501 citizens' },
      { label: 'Lineage', value: 'Socrates -> Plato -> Aristotle' },
    ],
    deepNote:
      'After the Peloponnesian War and the Thirty Tyrants (404 to 403 BCE), the restored democracy charged Socrates with impiety and corrupting the young. Plato kept his method alive, and with it the line between opinion (doxa) and knowledge (episteme).',
    energyKcal: 31000,
  },
  {
    id: 'columbian-scientific-rev',
    title: 'Columbian Exchange & Scientific Revolution',
    epoch: 'agricultural',
    yearsAgo: 483, // 1543 CE
    displayDate: '1492 - 1687 CE',
    domain: 'History of Science',
    oneLiner: 'Crops, animals and diseases cross the oceans, while maths puts the Sun at the centre, anatomy is redrawn and Newton writes down the laws of motion.',
    metrics: [
      { label: 'Principia', value: '1687 CE (Newton)' },
      { label: 'Motto', value: 'Nullius in verba' },
    ],
    deepNote:
      'Copernicus and Vesalius (1543), Harvey (1628) and Newton (1687) replaced the cosmos of Aristotle with measurement and calculus. Enlightenment thinkers such as Locke and Voltaire then wrote natural rights and reason into political thought.',
    energyKcal: 38000,
  },
  {
    id: 'industrial-thermodynamics',
    title: 'Industrial Fossil-Fuel & Thermodynamic Transition',
    epoch: 'industrial',
    yearsAgo: 186, // ~1840 CE
    displayDate: '1750 - 1914 CE',
    domain: 'Energy & Industry',
    oneLiner: 'Coal, steam engines, Maxwell’s electromagnetism and factory lines break the energy ceiling set by muscle, wood and wind.',
    metrics: [
      { label: 'Energy Capture', value: '75k - 110k kcal/day' },
      { label: 'Key Laws', value: 'Thermodynamics & EM' },
    ],
    deepNote:
      'Swapping muscle and wood for fossil fuels gave each person about 10 times more power. It also brought city smog, lopsided empires and technologies that were hard to move away from (lock-in).',
    energyKcal: 92000,
  },
  {
    id: 'big-science-ww2',
    title: 'Big Science & the Post-1945 World Order',
    epoch: 'industrial',
    yearsAgo: 81, // 1945 CE
    displayDate: '1939 - 1945 CE',
    domain: 'Geopolitics & Physics',
    oneLiner: 'The first controlled nuclear chain reaction (1942) and World War II turn a world of several empires into two superpowers held apart by nuclear deterrence.',
    metrics: [
      { label: 'Chicago Pile-1', value: '1942 CE' },
      { label: 'Order Shift', value: 'Multipolar -> Bipolar' },
    ],
    deepNote:
      'Government money paid for research across many sites at once (the Manhattan Project), which tied physics to national security. Bretton Woods and nuclear deterrence then reshaped the institutions that run the world.',
    energyKcal: 135000,
  },
  {
    id: 'digital-anthropocene',
    title: 'DNA, ARPANET, CRISPR & The Anthropocene',
    epoch: 'digital',
    yearsAgo: 14, // 2012 CE anchor for modern cluster
    displayDate: '1953 - 2026 CE',
    domain: 'Information & Biosphere',
    oneLiner: 'Genetics, worldwide computing and algorithm-driven markets make humanity a force that changes the geology of the planet.',
    metrics: [
      { label: 'Energy Frontier', value: '~230,000 kcal/day/cap' },
      { label: 'Market Latency', value: 'Coffeehouse -> high-frequency trading servers' },
    ],
    deepNote:
      'From DNA (1953) and ARPANET and Apollo 11 (1969) to the Human Genome Project (1990 to 2003) and CRISPR-Cas9 (2012), information theory and engineered (synthetic) biology now grow up against the limits of the climate of the planet.',
    energyKcal: 230000,
  },
];

export const SCIENCE_MILESTONES: ScienceMilestone[] = [
  {
    id: 'sci-thales',
    yearLabel: '585 BCE',
    yearsAgo: 2611,
    figure: 'Thales of Miletus',
    breakthrough: 'Predicted an eclipse from nature, and asked what everything is made of',
    kind: 'episteme',
    paradigmNote: 'Moved explanation away from the gods and towards regular patterns in nature.',
  },
  {
    id: 'sci-aristotle',
    yearLabel: '335 BCE',
    yearsAgo: 2361,
    figure: 'Aristotle',
    breakthrough: 'Founded the Lyceum, with formal logic and careful sorting of living things',
    kind: 'episteme',
    paradigmNote: 'Organised biology and an Earth-centred physics that held for 1,800 years.',
  },
  {
    id: 'sci-eratosthenes',
    yearLabel: '250 BCE',
    yearsAgo: 2276,
    figure: 'Eratosthenes',
    breakthrough: 'Measured Earth’s circumference via solar shadows',
    kind: 'synthesis',
    paradigmNote: 'Compared shadows at Alexandria and Syene, then used geometry to turn the difference into the size of Earth.',
  },
  {
    id: 'sci-khwarizmi',
    yearLabel: '820 CE',
    yearsAgo: 1206,
    figure: 'Al-Khwarizmi',
    breakthrough: 'Kitab al-jabr: the formal start of algebra',
    kind: 'episteme',
    paradigmNote: 'Came out of the Abbasid Translation Movement, which joined Greek and Indian maths.',
  },
  {
    id: 'sci-bisheng',
    yearLabel: '1041 CE',
    yearsAgo: 985,
    figure: 'Bi Sheng',
    breakthrough: 'Ceramic movable-type printing in Song China',
    kind: 'techne',
    paradigmNote: 'Made copying cheaper, so knowledge spread for less.',
  },
  {
    id: 'sci-copernicus',
    yearLabel: '1543 CE',
    yearsAgo: 483,
    figure: 'Copernicus & Vesalius',
    breakthrough: 'Sun-centred astronomy, and anatomy from direct dissection',
    kind: 'episteme',
    paradigmNote: 'Replaced the Earth-centred model of Ptolemy and the textbook claims of Galen with maths and direct evidence from the body.',
  },
  {
    id: 'sci-harvey',
    yearLabel: '1628 CE',
    yearsAgo: 398,
    figure: 'William Harvey',
    breakthrough: 'Closed circulatory system of blood (De motu cordis)',
    kind: 'episteme',
    paradigmNote: 'Measured how much blood the heart moves, which undercut the old four-humours theory of the body.',
  },
  {
    id: 'sci-newton',
    yearLabel: '1687 CE',
    yearsAgo: 339,
    figure: 'Isaac Newton',
    breakthrough: 'Principia Mathematica: universal gravitation & calculus',
    kind: 'synthesis',
    paradigmNote: 'Showed that the same mathematical laws move objects on Earth and planets in the sky.',
  },
  {
    id: 'sci-lavoisier',
    yearLabel: '1789 CE',
    yearsAgo: 237,
    figure: 'Antoine Lavoisier',
    breakthrough: 'Chemistry by measurement, and oxygen as the key to burning',
    kind: 'episteme',
    paradigmNote: 'Replaced phlogiston theory with conservation of mass and careful weighing.',
  },
  {
    id: 'sci-lyell',
    yearLabel: '1833 CE',
    yearsAgo: 193,
    figure: 'Charles Lyell',
    breakthrough: 'Uniformitarianism: slow change over deep geological time',
    kind: 'episteme',
    paradigmNote: 'Showed that slow, ongoing processes, given enough time, shape the Earth.',
  },
  {
    id: 'sci-darwin',
    yearLabel: '1859 CE',
    yearsAgo: 167,
    figure: 'Charles Darwin',
    breakthrough: 'On the Origin of Species: natural selection',
    kind: 'episteme',
    paradigmNote: 'Explained the variety of life as descent with modification over deep time.',
  },
  {
    id: 'sci-maxwell-mendel',
    yearLabel: '1865 CE',
    yearsAgo: 161,
    figure: 'Maxwell & Mendel',
    breakthrough: 'Electromagnetic wave equations & laws of genetics',
    kind: 'synthesis',
    paradigmNote: 'Laid the base for power grids and radio on one side, and for modern genetics (the Modern Synthesis) on the other.',
  },
  {
    id: 'sci-curie-roentgen',
    yearLabel: '1895 - 1898 CE',
    yearsAgo: 129,
    figure: 'Roentgen & M./P. Curie',
    breakthrough: 'X-rays & radioactivity (polonium, radium)',
    kind: 'techne',
    paradigmNote: 'New instruments showed that atoms can break apart, which started modern physics.',
  },
  {
    id: 'sci-einstein',
    yearLabel: '1905 / 1915 CE',
    yearsAgo: 116,
    figure: 'Albert Einstein',
    breakthrough: 'Special & General Relativity (spacetime curvature)',
    kind: 'episteme',
    paradigmNote: 'Changed how we understand gravity, the speed of light and the shape of the universe, which made Big Bang cosmology possible.',
  },
  {
    id: 'sci-fermi',
    yearLabel: '1942 CE',
    yearsAgo: 84,
    figure: 'Enrico Fermi et al.',
    breakthrough: 'Chicago Pile-1: controlled nuclear chain reaction',
    kind: 'techne',
    paradigmNote: 'Started industrial-scale Big Science, nuclear power and nuclear deterrence.',
  },
  {
    id: 'sci-dna',
    yearLabel: '1953 CE',
    yearsAgo: 73,
    figure: 'Franklin, Watson, Crick, Wilkins',
    breakthrough: 'Double-helix structure of DNA',
    kind: 'synthesis',
    paradigmNote: 'X-ray crystallography showed the molecule behind the central dogma of genetics (DNA to RNA to protein).',
  },
  {
    id: 'sci-arpanet',
    yearLabel: '1969 CE',
    yearsAgo: 57,
    figure: 'ARPANET & Apollo 11',
    breakthrough: 'Packet-switched networking & crewed lunar landing',
    kind: 'techne',
    paradigmNote: 'Cold War government money built global computer networks and the first space infrastructure.',
  },
  {
    id: 'sci-hgp',
    yearLabel: '1990 - 2003 CE',
    yearsAgo: 23,
    figure: 'Human Genome Project',
    breakthrough: 'Complete sequencing of the human genome',
    kind: 'synthesis',
    paradigmNote: 'A public and private Big Science project that joined molecular biology with large-scale computing.',
  },
  {
    id: 'sci-crispr',
    yearLabel: '2012 CE',
    yearsAgo: 14,
    figure: 'Doudna, Charpentier et al.',
    breakthrough: 'CRISPR-Cas9 programmable gene editing',
    kind: 'techne',
    paradigmNote: 'Turned a bacterial immune system into a precise tool for editing genes.',
  },
];

export const HOMININ_ENCEPHALIZATION: HomininStage[] = [
  {
    species: 'Australopithecus afarensis',
    horizon: '4.0 - 3.0 Mya',
    brainCc: 410,
    rmrSharePct: 9,
    toolMode: 'None / unmodified',
    energeticShift: 'Obligate bipedalism; large fibrous-forage gut',
  },
  {
    species: 'Homo habilis',
    horizon: '2.4 - 1.6 Mya',
    brainCc: 615,
    rmrSharePct: 13,
    toolMode: 'Mode 1 Oldowan',
    energeticShift: 'Scavenged bone marrow & stone-flaked meat',
  },
  {
    species: 'Homo erectus',
    horizon: '1.9 Mya - 110 kya',
    brainCc: 1000,
    rmrSharePct: 19,
    toolMode: 'Mode 2 Acheulean',
    energeticShift: 'Fire & cooking shrink gut; endurance hunting',
  },
  {
    species: 'Homo sapiens',
    horizon: '300 kya - Present',
    brainCc: 1350,
    rmrSharePct: 22.5,
    toolMode: 'Symbolic / composite',
    energeticShift: '2% body mass consumes 20-25% resting energy',
  },
];
