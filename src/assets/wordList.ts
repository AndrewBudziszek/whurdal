import { DateTime, Interval } from 'luxon';
import { verify } from 'whurdal-word-verifier';

const wordList: string[] = [
  'KNIFE',
  'YOUTH',
  'UNION',
  'HAVOC',
  'DRAMA',
  'ABOUT',
  'INDEX',
  'BRAVO',
  'MAGIC',
  'PEACH',
  'FUDGE',
  'STICK',
  'WRONG',
  'SHARP',
  'FAULT',
  'GRIFT',
  'VOICE',
  'CRYPT',
  'FAITH',
  'CHEAP',
  'ABOVE',
  'ALOHA',
  'STUDY',
  'SUPER',
  'LAYER',
  'SUGAR',
  'FORTE',
  'SPANK',
  'VIRUS',
  'DELTA',
  'MUSIC',
  'CHEWY',
  'NOISE',
  'BLOCK',
  'APPLE',
  'WASTE',
  'THEME',
  'LIGHT',
  'ABUSE',
  'TONES',
  'WHITE',
  'ALIKE',
  'UPSET',
  'COURT',
  'QUEEN',
  'PRIDE',
  'WRITE',
  'VIDEO',
  'URBAN',
  'SHOCK',
  'NORTH',
  'GRAND',
  'SPITE',
  'MARSH',
  'GIANT',
  'THETA',
  'POWER',
  'DOUBT',
  'SWING',
  'DRAFT',
  'RAISE',
  'FRESH',
  'RAPID',
  'VAGUE',
  'POUND',
  'AWFUL',
  'CREAM',
  'TULLE',
  'CRAZY',
  'JUDGE',
  'CHONK',
  'PARSE',
  'CIRCA',
  'PRIME',
  'THICK',
  'SCENE',
  'PIANO',
  'EXTRA',
  'UNITY',
  'CHIEF',
  'WORLD',
  'ORDER',
  'SHANK',
  'VALOR',
  'POINT',
  'FARCE',
  'SPIRE',
  'TOWER',
  'GUSTO',
  'MOIST',
  'CRANE',
  'SPIKE',
  'LEARN',
  'CHOIR',
  'XEROX',
  'QUANT',
  'MANOR',
  'EMAIL',
  'SERVE',
  'CABLE',
  'STEAM',
  'PRINT',
  'MONEY',
  'BIDET',
  'SPINE',
  'GIRTH',
  'FIBER',
  'SMART',
  'GHAST',
  'TOTAL',
  'ULTRA',
  'DIODE',
  'POISE',
  'BUILD',
  'GROIN',
  'FOCAL',
  'SCONE',
  'AXION',
  'INEPT',
  'FIRST',
  'MARIA',
  'SHAFT',
  'HYPER',
  'MOTIF',
  'BOSON',
  'SPACE',
  'AVANT',
  'MEDIA',
  'CHORE',
  'SHINE',
  'ORGAN',
  'MONTH',
  'DRIVE',
  'TROPE',
  'BATIK',
  'LADLE',
  'DRAWN',
  'ELOPE',
  'LEVEL',
  'PANEL',
  'FLUID',
  'GOURD',
  'ALBUM',
  'LINER',
  'QUERY',
  'INERT',
  'FIGHT',
  'CANON',
  'EMOTE',
  'DECAY',
  'BURST',
  'STYLO',
  'FARAD',
  'BELLE',
  'TUPLE',
  'STEEL',
  'MOTOR',
  'CRISP',
  'LARGE',
  'GLUON',
  'CLOSE',
  'FOCUS',
  'MOVIE',
  'EAGER',
  'CHAIN',
  'SLICE',
  'TRUNK',
  'INLAY',
  'ANION',
  'RATIO',
  'CLOUD',
  'SHORT',
  'OPTIC',
  'TETRA',
  'DUPLE',
  'CREST',
  'STAFF',
  'JOULE',
  'CHIME',
  'TONIC',
  'PHOTO',
  'APART',
  'MESON',
  'CRIMP',
  'OUTRO',
  'TENOR',
  'QUIRK',
  'STORY',
  'ALPHA',
  'PRIMO',
  'MIGHT',
  'FIFTH',
  'DEPTH',
  'LYRIC',
  'HERTZ',
  'AURAL',
  'SLASH',
  'CARET',
  'TODAY',
  'HEART',
  'MORPH',
  'TWERP',
  'BASIC',
  'SHEAR',
  'HEXAD',
  'PITCH',
  'ANGEL',
  'TRICK',
  'SHOWN',
  'RADIX',
  'MEZZO',
  'PROTO',
  'SLIDE',
  'VERSE',
  'CRAFT',
  'ANODE',
  'SCORE',
  'TESLA',
  'EBONY',
  'WATCH',
  'SOLAR',
  'BLOKE',
  'ALLOY',
  'TEMPO',
  'GENUS',
  'PHASE',
  'METER',
  'PEDAL',
  'WHOLE',
  'CABIN',
  'TONAL',
  'TRIAD',
  'INTRO',
  'SCALE',
  'MOLAR',
  'RETRO',
  'CRUST',
  'RANGE',
  'FRUNK',
  'GUIDE',
  'MAJOR',
  'STERN',
  'LOVER',
  'BLIND',
  'CHORD',
  'ALARM',
  'PRISM',
  'VALUE',
  'ALIEN',
  'ISSUE',
  'DEATH',
  'PENNY',
  'WIRED',
  'FUGUE',
  'THEFT',
  'SCREW',
  'WOMAN',
  'QUARK',
  'PINOT',
  'BENCH',
  'TASTE',
  'DEBUT',
  'LEGAL',
  'STUFF',
  'GREEN',
  'WROTE',
  'VERGE',
  'WEIRD',
  'CREEP',
  'PAUSE',
  'STINK',
  'HUMAN',
  'GROUP',
  'IMAGE',
  'SOLVE',
  'WHEEL',
  'ANIME',
  'SHOOK',
  'PHONE',
  'LASER',
  'WORRY',
  'HOUSE',
  'NIFTY',
  'ADOBE',
  'SWEET',
  'APPLY',
  'STORM',
  'FUNKY',
  'RELAY',
  'CREED',
  'PACER',
  'STINT',
  'PARTY',
  'SLIME',
  'EARLY',
  'FINAL',
  'MOUSE',
  'COMIC',
  'AWARD',
  'STALL',
  'READY',
  'MERGE',
  'CLONE',
  'QUEER',
  'NERVE',
  'SWEEP',
  'BREAK',
  'CLING',
  'PEARL',
  'DRESS',
  'FORCE',
  'CAUSE',
  'BEACH',
  'GOOFY',
  'CHILL',
  'BROOD',
  'STALE',
  'DOING',
  'PIXEL',
  'DREAM',
  'SWELL',
  'GENRE',
  'QUEST',
  'ADULT',
  'SLING',
  'GIDDY',
  'CHESS',
  'SHARD',
  'UNTIL',
  'CHICK',
  'SCARE',
  'OTHER',
  'WHILE',
  'SQUAD',
  'FETUS',
  'BLOOD',
  'SLANG',
  'SPERM',
  'YOUNG',
  'ROUGE',
  'SKIRT',
  'ANGRY',
  'SHAME',
  'FETCH',
  'LATER',
  'BIRTH',
  'CLACK',
  'SPEAK',
  'HEAVY',
  'BLACK',
  'PUBIS',
  'ROGUE',
  'CHEEK',
  'QUICK',
  'SHIRT',
  'MOLDY',
  'COVEN',
  'OFFER',
  'WORSE',
  'AFTER',
  'USUAL',
  'START',
  'GUESS',
  'USING',
  'TWEET',
  'QUAKE',
  'REPLY',
  'CLICK',
  'SHAPE',
  'BENDY',
  'QUITE',
  'URINE',
  'PERCH',
  'MUNCH',
  'UNDER',
  'CORNY',
  'STORE',
  'VOWEL',
  'GLINT',
  'SPENT',
  'NAIVE',
  'CHAFE',
  'FEAST',
  'EJECT',
  'TEPID',
  'BRAVE',
  'MAPLE',
  'GLYPH',
  'STEIN',
  'DENIM',
  'GROVE',
  'EXIST',
  'VIGOR',
  'RECAP',
  'SCALD',
  'BOOZE',
  'QUART',
  'HUNKY',
  'WOVEN',
  'CLOWN',
  'GAUZE',
  'LILAC',
  'TRITE',
  'PIETY',
  'DONOR',
  'TRAIT',
  'BLOWN',
  'CACAO',
  'FORGO',
  'MIDST',
  'PROXY',
  'TANGY',
  'BOOST',
  'GORGE',
  'CAULK',
  'AROMA',
  'ULCER',
  'PLEAT',
  'ALOFT',
  'NYMPH',
  'DILDO',
  'SMELT',
  'PLUCK',
  'SLOSH',
  'RUPEE',
  'VALID',
  'SNARL',
  'TAPER',
  'OXIDE',
  'SYRUP',
  'ASKEW',
  'OLIVE',
  'MINCE',
  'COMMA',
  'TWANG',
  'ROOMY',
  'POLKA',
  'KIOSK',
  'FORAY',
  'SNOUT',
  'ZESTY',
  'WOKEN',
  'DITTY',
  'BAYOU',
  'TIARA',
  'SCOUR',
  'BLAND',
  'GECKO',
  'ROYAL',
  'YIELD',
  'PIXIE',
  'DELVE',
  'TIPSY',
  'CANNY',
  'UNLIT',
  'BADGE',
  'HAIRY',
  'OPERA',
  'BLURB',
  'UPEND',
  'LATHE',
  'KHAKI',
  'GRAFT',
  'MOURN',
  'CYCLE',
  'BOOZY',
  'FLAIR',
  'SLUSH',
  'LEMON',
  'BLUFF',
  'SURLY',
  'GAMER',
  'HOARD',
  'FLUME',
  'SHRUG',
  'KEBAB',
  'BUGGY',
  'FLIRT',
  'GOUGE',
  'HOWDY',
  'CREDO', // 6/21/2023
  'AVAIL', // 6/22/2023
  'UNZIP', // 6/23/2023
  'OTTER', // 6/24/2023
  'CURRY',
  'WHINE',
  'CLAIM',
  'FLAIL',
  'REPAY',
  'STONE', // 6/30/2023
  'CREEK',
  'ADMIN',
  'DALLE',
  'SPALL',
  'LIVER',
  'GLOVE',
  'FRONT',
  'KNOWN',
  'PINKY',
  'FOUND',
  'EPOXY',
  'GRAPH', // 7/12/2023
  'SALSA',
  'DEBUG',
  'PRICK',
  'WRUNG', // 7/16/2023
  'APRON',
  'HUTCH',
  'SNAFU',
  'PANIC',
  'ATONE', // 7/21/2023
  'DEITY',
  'FROCK',
  'YACHT',
  'THIEF',
  'HELIX',
  'INLET',
  'KOALA',
  'MAXIM',
  'SPOKE',
  'OUGHT',
  'BRINK',
  'SPIEL',
  'ELDER',
  'GLOAT', // 8/4/2023
  'UNFED',
  'WACKY',
  'STOOL',
  'FLOSS',
  'QUALM',
  'GAMMA',
  'UNIFY',
  'GLOOM',
  'TASTY',
  'REGAL',
  'WHACK',
  'SEDAN',
  'CYNIC',
  'BEGIN',
  'SKIMP',
  'FOGGY',
  'STRIP',
  'MOUNT',
  'CIGAR',
  'WHIFF',
  'ALOUD',
  'SMILE',
  'LIBEL',
  'BORAX',
  'CRAPE',
  'GLEAM',
  'SWELT',
  'RAMEN',
  'LOFTY',
  'CACHE',
  'MOTEL',
  'TRUSS',
  'UNTIE', // 9/6/23
  'INPUT',
  'LARVA',
  'AMPLE',
  'CLAMP',
  'DOZEN',
  'SAUTE',
  'MATEY',
  'EXULT',
  'LEAFY',
  'FLORA',
  'PINTO',
  'AORTA',
  'DWELT',
  'DITTO',
  'FEWER',
  'KAYAK',
  'SPURT',
  'CARAT',
  'WALTZ',
  'SAINT',
  'ZELDA',
  'HUMID',
  'DROLL',
  'IMPEL',
  'BESET',
  'PANTS',
  'NATAL',
  'STAID',
  'GRIME',
  'TOXIC',
  'SPOOL',
  'PERKY',
  'CRAZE',
  'RACER',
  'HUMOR',
  'JAZZY',
  'SHRUB',
  'PLAZA',
  'REACT',
  'CRAVE',
  'BASED',
  'SPARK',
  'CATER',
  'KAZOO',
  'ALTER',
  'GRIEF',
  'SHINY',
  'PASTE',
  'CHARM',
  'FRACK',
  'ENEMA',
  'STRAP',
  'CHUTE',
  'SWIRL',
  'PROVE',
  'REBUS',
  'IGLOO',
  'BRISK',
  'DUCHY',
  'BASTE',
  'HUMPH',
  'QUAIL',
  'STEER',
  'CLEAN',
  'PLUMB',
  'TIGER',
  'PLUME',
  'CRATE',
  'RANCH',
  'BLAZE',
  'SPUNK',
  'DOWDY',
  'WHARF',
  'ENVOY',
  'CRIME',
  'STAIN',
  'HASTE',
  'BRASH',
  'CHASM',
  'KIRBY',
  'BLOAT',
  'PLACE',
  'STRAW',
  'WIPER',
  'JOUST',
  'EXILE',
  'FLIER',
  'GRAIL',
  'PANKO',
  'GUEST',
  'SHYLY',
  'VOUGE',
  'BOUGE',
  'SHARK',
  'PANTY',
  'ABORT',
  'DINER',
  'GLAMP',
  'STRAY',
  'TRACT',
  'STENT',
  'FLAMY',
  'ENSUE',
  'OCCUR',
  'CHIRL',
  'FENCE',
  'VISOR',
  'GURLY',
  'PLATE',
  'BOARD',
  'SPECS',
  'PENAL',
  'WRECK',
  'MINER',
  'OZONE',
  'STARK',
  'GRIMY',
  'FLUNK',
  'DIVER',
  'SHORE',
  'ANTIC',
  'SPELL',
  'MOSSY',
  'POTED',
  'HOTEL',
  'VENOM',
  'NAVEL',
  'SIEGE',
  'FIEND',
  'RIVER',
  'FRANC',
  'SHREK',
  'WHIRL',
  'VALET',
  'LUSTY',
  'DROOP',
  'FROZE',
  'MINOR',
  'SALAD',
  'BARGE',
  'CHARD',
  'FOLKY',
  'DUVET',
  'SPEAR',
  'BURLY',
  'ERROR',
  'NINTH',
  'TOPAZ',
  'BASTI',
  'TWIST',
  'CURVE',
  'PORNO',
  'WRANG',
  'GRONE',
  'CLOUT',
  'NORMA',
  'MILKY',
  'POLAR',
  'FLANK',
  'CHURL',
  'HOMEY',
  'SKUNK',
  'CHOCK',
  'BIBLE',
  'STYLE',
  'DOGGY',
  'SNEER',
  'FRAME',
  'SHART',
  'CHIMP',
  'BROKE',
  'KITTY',
  'SLACK',
  'WHALE',
  'HORNY',
  'WHELM',
  'SPARE',
  'BULKY',
  'STILE',
  'CHART',
  'FORGE',
  'BLOOM',
  'CINCH',
  'DISCO',
  'ISLAM',
  'TANGO',
  'ETHOS',
  'SPICE',
  'WHARE',
  'TWINE',
  'CARVE',
  'KARMA',
  'SKEET',
  'WHELP',
  'BAMBI',
  'CURLY',
  'SMALL',
  'BATHE',
  'WHORE',
  'SWEAT',
  'TRAIL',
  'MOMMY',
  'INBOX',
  'CLUMP',
  'SNORE',
  'BRINE',
  'SPADE',
  'TENTH',
  'POACH',
  'SPORT',
  'BOGEY',
  'AGREE',
  'BEGET',
  'SLEEP',
  'WEAVE',
  'LEGGO',
  'SKILL',
  'FLOUR',
  'BLEED',
  'NANNY',
  'SONIC',
  'CRAMP',
  'SMACK',
  'APORT',
  'MARIO',
  'POLYP',
  'WITCH',
  'UNLET',
  'CHOKE',
  'SPOON',
  'CHOMP',
  'SHADE',
  'PSYCH',
  'HINKY',
  'JIFFY',
  'LABOR',
  'SHUNT',
  'DEVIL',
  'SAUCE',
  'FANCY',
  'TRIAL',
  'FLOOR',
  'CHAIR',
  'WOUND',
  'DADDY',
  'PORCH',
  'SCRAM',
  'GROPE',
  'LAUGH',
  'COMFY',
  'BRIDE',
  'ANKLE',
  'ELOTE',
  'GRILL',
  'RINSE',
  'CURSE',
  'BLINK',
  'GHOST',
  'SOBER',
  'EXFIL',
  'ENJOY',
  'COCOA',
  'SCRUB',
  'OCTAL',
  'STEAL',
  'MOWER',
  'BLADE',
  'ROWDY',
  'TRAIN',
  'SMOCK',
  'CHILI',
  'SPICY',
  'AWASH',
  'BUNNY',
  'INFIL',
  'BRAID',
  'COUNT',
  'SLATE',
  'PYLON',
  'COMET',
  'AGISM',
  'OMEGA',
  'EMPTY',
  'MOULD',
  'AMBER',
  'SUPRA',
  'QUASI',
  'FLOAT',
  'SWORD',
  'WIMPY',
  'CONVO',
  'JAPAN',
  'BLITE',
  'ROVER',
  'HOCUS',
  'GHOUL',
  'SUDSY',
  'WORDY',
  'SNOWY',
  'COMBO',
  'SMELL',
  'MOUTH',
  'IRISH',
  'SHAKE',
  'GNASH',
  'POCUS',
  'INTEL',
  'TRIKE',
  'BRASS',
  'SPOUT',
  'FLASH',
  'CAPER',
  'GNARL',
  'STEAD',
  'VERVE',
  'MAGMA',
  'FOLLY',
  'CRONE',
  'FLYER',
  'BANJO',
  'GUARD',
  'FROST',
  'SWISH',
  'DWELL',
  'UTTER',
  'SCARF',
  'LOCUS',
  'PETAL',
  'LIGER',
  'STALK',
  'BROWN'
];

export const nonSowpodsAcceptedWords: string[] = ['POCUS', 'EXFIL', 'INFIL', 'MARIO', 'CHONK', 'GRATZ', 'FRUNK', 'PROTO', 'ZELDA', 'PANKO', 'GLAMP', 'SHREK', 'SHART', 'ISLAM', 'LEGGO', 'INBOX', 'ELOTE', 'IRISH'];

export function verifyWordsInList(): string[] {
  let rejectedWords: string[] = [];
  let words: string[] = [];
  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i];

    if (word.length > 5) {
      rejectedWords.push(word + ' TOO LONG'); break;
    }
    if (words.includes(word)) {
      rejectedWords.push(word + ' DUPLICATE')
      break;
    }
    if (!wordIsValid(word)) {
      rejectedWords.push(word + ' NOT IN DICTIONARY')
      break;
    }

    words.push(word)
  }

  return rejectedWords;
}

export type Definition = {
  phonetic: string,
  definition: string
}

export function getNonSowpodsDefinition(word: string): Definition | null {
  switch (word) {
    case 'CHONK':
      return {
        phonetic: '/CHäNGk/',
        definition: 'An unusually large cat.'
      }
    case 'GRATZ':
      return {
        phonetic: '/ɡræts/',
        definition: 'Congratulations.'
      }
    case 'FRUNK':
      return {
        phonetic: '/frəNGk/',
        definition: 'A trunk (boot, storage compartment) located at the front rather than the rear of a car. Most commonly in Electric Vehicles.',
      }
    case 'PROTO':
      return {
        phonetic: '/ˈprōdō/',
        definition: 'A prototype.'
      }
    case 'INFIL':
      return {
        phonetic: '/ˈinˌfil/',
        definition: 'To infiltrate.'
      }
    case 'ZELDA':
      return {
        phonetic: '/ˈzeldə/',
        definition: 'A video game series created by Nintendo.'
      }
    case 'PANKO':
      return {
        phonetic: '/ˈpäNGkō/',
        definition: 'A type of breadcrumb.'
      }
    case 'GLAMP':
      return {
        phonetic: '/ɡlamp/',
        definition: 'Glamorous camping.'
      }
    case 'KIRBY':
      return {
        phonetic: '/ˈkərbē/',
        definition: 'A pink puffball character from the Nintendo video game series "Kirby".'
      }
    case 'SHREK':
      return {
        phonetic: '/SHrek/',
        definition: 'A fictional ogre character created by American author William Steig.'
      }
    case 'SHART':
      return {
        phonetic: '/SHärt/',
        definition: 'To expel feces accidentally when breaking wind.'
      }
    case 'ISLAM':
      return {
        phonetic: '/ˈisläm/',
        definition: 'The religion of the Muslims, a monotheistic faith regarded as revealed through Muhammad as the Prophet of Allah.'
      }
    case 'LEGGO':
      return {
        phonetic: '/ˈleɡō/',
        definition: '...my Eggo.'
      }
    case 'INBOX':
      return {
        phonetic: '/ˈinˌbäks/',
        definition: 'An electronic folder in which emails received by an individual are held.'
      }
    case 'MARIO':
      return {
        phonetic: '/ˈmerēˌō/',
        definition: 'A fictional character in the Mario video game franchise, owned by Nintendo and created by Japanese video game designer Shigeru Miyamoto.'
      }
    case 'ELOTE':
      return {
        phonetic: '/əˈlōtē/',
        definition: 'A popular Mexican street food made from corn on the cob that is grilled and then coated in a mixture of mayonnaise, sour cream, cotija cheese, chile powder, and lime.'
      }
    case 'IRISH':
      return {
        phonetic: '/ˈīriSH/',
        definition: 'A native or inhabitant of Ireland, or a person of Irish descent.'
      }
    case 'EXFIL':
      return {
        phonetic: '/ˈeksˌfil/',
        definition: 'To remove (someone) from a hostile area of operations by rapid movement.'
      }
    case 'POCUS':
      return {
        phonetic: '/ˈpōkəs/',
        definition: 'Hocus... Pocus.'
      }
    default:
      return null;
  }
}

export function wordIsValid(word: string): boolean {
  word = word.toUpperCase();
  return (verify(word) || nonSowpodsAcceptedWords.includes(word)) && word.length === 5;
}

export function getDaysSinceBeginning(): number {
  const startDate = DateTime.local(2022, 2, 26);
  const daysSince = Interval.fromDateTimes(startDate, DateTime.local());
  const daysSinceInt = daysSince.length('days');

  return Math.floor(daysSinceInt);
}

export function getTimeUntilTomorrow(): string {
  let rightNow = DateTime.local();
  let tomorrow = DateTime.local().plus({ days: 1 }).startOf('day');

  return tomorrow.diff(rightNow).toFormat('hh:mm:ss');
}

export function getTodaysWord(): string {
  let daysSinceBeginning = getDaysSinceBeginning();
  return wordList[(daysSinceBeginning % wordList.length)];
}
