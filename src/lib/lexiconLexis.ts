/**
 * Hand-built word lists for the lexis, semantics, register and morphology
 * layers of the annotator.
 *
 * Conventions:
 *  - Every entry is lowercase, so the annotator can look up a lowercased token
 *    and match directly.
 *  - Entries may be multi-word (e.g. "at the end of the day"); the annotator
 *    normalises whitespace and matches these as phrases.
 *  - Entries containing an apostrophe are written with double quotes so the
 *    single-quoted convention of the rest of the file is never broken.
 *  - Lists deliberately overlap. "arvo" is both slang and a clipping; it
 *    belongs in both lists because a word can carry several features at once.
 */

/** Technical and professional vocabulary. Single words and short phrases. */
export const JARGON: string[] = [
  // business and finance
  'synergy', 'leverage', 'stakeholder', 'pipeline', 'deliverables', 'bandwidth',
  'kpi', 'onshore', 'resourcing', 'downsizing', 'right-sizing', 'monetise',
  'scalability', 'optimisation', 'alignment', 'onboarding', 'headcount', 'roi',
  'ebitda', 'quorum', 'indemnity', 'liability', 'tort', 'affidavit', 'plaintiff',
  'defendant', 'jurisdiction', 'litigation', 'statute', 'breach',
  'covenant', 'warranty', 'remittance', 'amortisation', 'depreciation',
  'liquidity', 'collateral', 'escrow', 'hedge', 'portfolio', 'dividend',
  'acquisition', 'merger', 'due diligence',
  // medicine and health
  'triage', 'prognosis', 'diagnosis', 'comorbidity', 'suture', 'intubation',
  'pathology', 'radiology', 'sepsis', 'contraindication', 'dosage', 'referral',
  // legal and governance
  'subpoena', 'caveat', 'force majeure', 'pro bono', 'ex gratia',
  'prima facie', 'tender', 'procurement', 'outsourcing', 'insourcing',
  // corporate planning
  'runway', 'burn rate', 'churn', 'backlog', 'sprint', 'standup',
  'stakeholder engagement',
  // education
  'pedagogy', 'curriculum', 'rubric', 'formative', 'summative', 'criterion',
  'scaffolding', 'differentiation', 'literacy', 'numeracy', 'accreditation',
  'moderation', 'syllabus', 'cohort', 'prerequisites',
  // sport
  'offside', 'scrum', 'maiden', 'hat-trick', 'ruck', 'backline', 'drop punt',
  'torpedo', 'lbw', 'googly', 'bouncer', 'sledging', 'tanking', 'interchange',
  'ruckman', 'fielding', 'leg bye', 'free kick', 'marking contest', 'wing',
  'scrum-half', 'prop', 'fullback', 'wicketkeeper',
  // technology
  'latitude', 'latency', 'deployment', 'repository', 'compile', 'runtime',
  'backend', 'endpoint', 'payload', 'cache', 'encrypted', 'firewall',
  'algorithm', 'iteration', 'migration', 'refactor', 'sandbox',
  // trades and construction
  'gyprock', 'nogging', 'cornice', 'flashing', 'guttering', 'stumps', 'lintel',
  'rebate', 'joist', 'truss', 'aggregate', 'formwork',
]

/** Very informal, in-group vocabulary. Single words and short phrases. */
export const SLANG: string[] = [
  'yeet', 'rizz', 'rizzler', 'sigma', 'skibidi', 'gyatt', 'delulu', 'mid', 'sus',
  'salty', 'bussin', 'fire', 'cap', 'no cap', 'bet', 'flex', 'ghosting',
  'gaslighting', 'vibe', 'vibes', 'lowkey', 'highkey', 'ratio', 'simp', 'stan',
  'goat', 'drip', 'lit', 'sick', 'wicked', 'epic', 'cringe', 'snacc', 'glow up',
  'side eye', 'spill the tea', 'touch grass', 'hits different',
  'main character energy', 'chaotic', 'yapper', 'yapping', 'aura', 'crunch',
  'run it', 'slay', 'ate', 'slaps', 'banger', 'choon', 'sketchy', 'dodgy',
  'shonky', 'chockers', 'gobful', 'gutful', 'stoked', 'munted', 'average',
  'cooked', 'cactus', 'knock-off', 'rego', 'servo', 'smoko', 'brekky', 'barbie',
  'arvo', 'sanger', 'stubby', 'tinny', 'esky', 'chunder', 'pash', 'yarn',
  'chinwag', 'mate', 'cobber', 'ocker', 'drongo', 'galah', 'bogan', 'yobbo',
  'chook', 'mozzie', 'grommet', 'nipper', 'ace', 'ripper', 'bonza', 'heaps',
  'deadset', 'fair dinkum', 'true blue', "she'll be right", 'no worries',
  'you beauty',
]

/** Everyday conversational wording. Informal, but not slang. */
export const COLLOQUIALISMS: string[] = [
  'kids', 'folks', 'guys', 'yeah', 'nope', 'yep', 'okay', 'ok', 'cool',
  'awesome', 'stuff', 'things', 'lots', 'heaps', 'heaps of', 'a bit', 'a lot',
  'pretty', 'pretty good', 'great', 'nice', 'heaps better', 'gonna', 'wanna',
  'gotta', 'kinda', 'sorta', 'dunno', 'gimme', 'lemme', 'outta', 'mate',
  'blokes', 'gals', 'chicks', 'mum', 'dad', 'nan', 'pop', 'cheap as', 'quick as',
  'big time', 'flat out', 'full on', 'guts', 'stoked', 'cranky', 'spewin',
  'heaps busy', 'no idea', 'fair enough', 'too easy', 'no worries', 'cheers',
  'ta', 'righto', 'reckon', 'catch ya', 'see ya', 'later', 'how ya going',
  'take care', 'good on ya', 'muck around', 'muck-up', 'have a yarn', 'chinwag',
  'hard yakka', 'cheeky', 'blinding', 'sick', 'mad', 'dead good', 'proper good',
  'blue', 'ragging', 'have a squiz', 'arvo', 'smoko', 'knock off',
  'chock-a-block', 'run off your feet', 'flat chat', 'in a tick', 'this arvo',
  'heaps good', 'you know', 'sort of', 'kind of', 'you beauty', 'hang on',
  'hold up', 'no way', 'for real', 'seriously', 'obviously', 'basically',
  'whatever', 'anyway', 'alright', 'alrighty', 'sweet', 'sweet as',
  'no dramas', 'all good', 'good value', 'too right', 'bloody oath',
  'have a go', 'give it a crack', "what's doing", 'catch up',
]

/** Softening expressions. Many entries are multi-word. */
export const EUPHEMISMS: string[] = [
  'passed away', 'pass on', 'lost the battle', 'at rest', 'departed',
  'no longer with us', 'sleeping', 'let go', 'let go of', 'made redundant',
  'restructured', 'downsized', 'between jobs', 'between opportunities',
  'on a career break', 'economically disadvantaged', 'low-income',
  'less fortunate', 'underprivileged', 'disadvantaged', 'collateral damage',
  'friendly fire', 'enhanced interrogation', 'targeted operation',
  'the incident', 'the matter', 'the situation', 'visually impaired',
  'hard of hearing', 'differently abled', 'older person', 'third age',
  'plus-size', 'fuller figure', 'big-boned', 'sanitation worker',
  'waste management', 'refuse collector', 'correctional facility',
  'correctional officer', 'residential care', 'aged care', 'rest home',
  'mental health facility', 'behavioural issues', 'strong-willed',
  'pre-loved', 'previously owned', 'value-added', 'restructuring',
  'right-sizing', 'headcount reduction', 'workforce optimisation',
  'redeployment', 'offboarding', 'adjustment', 'negative growth',
  'downward revision', 'gone to a better place', 'in a better place',
  'resting', 'pursuing other opportunities', 'exploring new opportunities',
  'spending more time with family', 'gardening leave', 'performance managed',
  'managed out', 'food insecurity', 'housing insecurity', 'unhoused',
  'rough sleeper', 'person experiencing homelessness', 'justice-involved',
  'at-risk youth', 'under the influence', 'tired and emotional',
  'not himself',
]

/** Deliberately harsh alternatives to a neutral word. Single words and short phrases. */
export const DYSPHEMISMS: string[] = [
  'kicked the bucket', 'croaked', 'snuffed it', 'carked it', 'dead as a doornail',
  'six feet under', 'pushing up daisies', 'worm food', 'shut up', 'shut it',
  'pipe down', 'belt up', 'pig-headed', 'thick', 'dim', 'moron', 'idiot',
  'imbecile', 'drongo', 'dropkick', 'gutless', 'spineless', 'two-faced',
  'backstabber', 'leech', 'parasite', 'bloodsucker', 'vulture', 'bottom feeder',
  'scum', 'sleaze', 'sleazebag', 'ratbag', 'bludger', 'dole bludger', 'sook',
  'whinger', 'coward', 'cheapskate', 'slob', 'slacker', 'deadbeat', 'airhead',
  'dimwit', 'halfwit', 'numpty', 'dill', 'galah',
]

/** Fixed figurative expressions. Almost all entries are multi-word. */
export const IDIOMS: string[] = [
  'a fair go', 'under the weather', 'kick the bucket', 'piece of cake',
  'break a leg', 'hit the sack', 'spill the beans', 'let the cat out of the bag',
  'bite the bullet', 'on the same page', 'in hot water', 'under the radar',
  'off the hook', 'back to square one', 'the last straw',
  'hit the nail on the head', "pull someone's leg", 'raining cats and dogs',
  'cost an arm and a leg', 'once in a blue moon', 'a blessing in disguise',
  'beat around the bush', 'burn the midnight oil',
  'by the skin of your teeth', 'call it a day', 'cut corners', 'cut to the chase',
  'down to the wire', 'every cloud has a silver lining', 'face the music',
  'get cold feet', 'get out of hand', 'give someone a hand', 'go the extra mile',
  'hang in there', 'hit the road', 'in the nick of time',
  'it takes two to tango', 'jump on the bandwagon', 'keep an eye on',
  'kill two birds with one stone', 'let sleeping dogs lie',
  'make a long story short', 'cut a long story short', 'miss the boat',
  'on thin ice', 'out of the blue', 'pull your weight',
  'put all your eggs in one basket', 'ring a bell', 'see eye to eye',
  'sit on the fence', 'speak of the devil',
  'take it with a grain of salt', 'the ball is in your court',
  'through thick and thin', 'time flies', 'turn a blind eye', 'under your nose',
  'up in the air', 'when pigs fly', 'a level playing field',
  'bang for your buck', 'at the end of the day', 'think outside the box',
  'low-hanging fruit', 'move the goalposts', 'take it offline', 'circle back',
  'touch base', 'raise the bar', 'push the envelope',
  'flat out like a lizard drinking', "she'll be right", 'no worries',
  'having a whinge', 'taking the mickey', 'having a go', 'give it a crack',
  'give it a burl', 'go walkabout', 'hard yakka', 'as dry as a bone',
  'chock-a-block', 'run off your feet', 'a bit of a stretch',
  'give someone a bell', 'have a squiz', "that's the way the cookie crumbles",
  'bite off more than you can chew', 'leave no stone unturned',
  'play it by ear', 'sit tight', 'take the plunge', 'throw in the towel',
  'turn over a new leaf', 'water under the bridge', 'whole new ball game',
  'you can say that again', "it's not rocket science", 'get the ball rolling',
  'in the loop', 'keep your head above water', 'learn the ropes',
  'pick up the slack', 'pull your socks up', 'rock the boat', 'sink or swim',
  'take a back seat', 'the elephant in the room', 'tip of the iceberg',
  'read between the lines', 'a slippery slope', 'throw someone under the bus',
  'no strings attached', 'on the ball', 'ahead of the curve',
  'behind the eight ball', 'spitting chips', 'like a stunned mullet',
  'not the sharpest tool in the shed', 'a storm in a teacup',
  'keep your chin up', 'bite the hand that feeds you', 'count your chickens',
  "don't count your chickens", 'cross that bridge when you come to it',
  'easier said than done', 'for the time being', 'in the long run',
  'off the top of my head', 'on second thought', 'the bottom line',
  'up to scratch', "you can't have your cake and eat it too",
]

/** Overused expressions that have lost their impact. Mostly multi-word. */
export const CLICHES: string[] = [
  'at the end of the day', 'think outside the box', 'low-hanging fruit',
  'game changer', 'push the envelope', 'move the needle', 'touch base',
  'circle back', 'take it to the next level', 'a level playing field',
  'best of both worlds', 'the bottom line', 'going forward',
  'in this day and age', 'last but not least',
  'the fact of the matter is', 'when all is said and done',
  'only time will tell', 'at this point in time', 'avoid like the plague',
  'blessed with', 'calm before the storm', 'crystal clear',
  'dead as a doornail', 'easy as pie', 'few and far between', 'fit as a fiddle',
  'hard as nails', 'light as a feather', 'quiet as a mouse', 'sharp as a tack',
  'sick as a dog', 'strong as an ox', 'time and again', 'tried and true',
  'without a shadow of a doubt', 'a needle in a haystack', 'all walks of life',
  'back to the drawing board', 'better late than never', 'easier said than done',
  'every coin has two sides', 'first and foremost', 'food for thought',
  'from rags to riches', 'ignorance is bliss', 'in the blink of an eye',
  'it goes without saying', 'keep your fingers crossed', 'live and learn',
  'needless to say', 'no pain no gain', 'opportunity of a lifetime',
  'pave the way', 'time is money', 'too little too late',
  'when it rains it pours', 'you reap what you sow',
  'a growing body of evidence', 'plays a vital role', 'a double-edged sword',
  'a silver lining', 'the elephant in the room', 'work-life balance',
  'paradigm shift', 'at the coalface', 'reach out', 'win-win', 'value-add',
  'back to basics', 'holistic approach', 'results-driven', 'customer-centric',
  'cutting edge', 'state of the art', 'world class', 'best practice',
  'lessons learned', 'unlocking potential', 'empowering people',
  'take ownership', 'in my humble opinion', 'from the get-go', 'by and large',
]

/** Evaluative word choice that pushes the reader towards a judgement. */
export const LOADED_WORDS: string[] = [
  'regime', 'thug', 'mob', 'riot', 'activist', 'extremist', 'radical',
  'militant', 'rebel', 'freedom fighter', 'insurgent', 'hero', 'villain',
  'victim', 'perpetrator', 'culprit', 'mastermind', 'ringleader', 'schemer',
  'plot', 'conspiracy', 'crackdown', 'purge', 'blitz', 'raid', 'swoop', 'slam',
  'blast', 'hit out', 'lash out', 'rubbish', 'dismiss', 'sneer', 'gloat',
  'boast', 'brag', 'whinge', 'whine', 'moan', 'complain', 'admit', 'confess',
  'reveal', 'expose', 'claim', 'allege', 'insist', 'deny', 'dodge', 'evade',
  'sneak', 'sidestep', 'backflip', 'u-turn', 'chaos', 'crisis', 'shambles',
  'disaster', 'catastrophe', 'debacle', 'fiasco', 'blowout', 'bungle',
  'stagnate', 'plummet', 'plunge', 'soar', 'rocket', 'surge', 'spike',
  'balloon', 'spiral', 'crippling', 'devastating', 'brutal', 'savage',
  'vicious', 'ruthless', 'callous', 'cold-blooded', 'shocking', 'outrageous',
  'appalling', 'disgraceful', 'shameful', 'scandalous', 'disgusting',
  'abhorrent', 'deplorable', 'lamentable', 'dire', 'grim', 'bleak',
  'catastrophic', 'alarming', 'concerning', 'worrying', 'distressing',
  'tragic', 'heart-breaking', 'heroic', 'courageous', 'brave', 'bold', 'daring',
  'selfless', 'dedicated', 'hardworking', 'resilient', 'robust', 'vibrant',
  'thriving', 'booming', 'prosperous', 'world-class', 'iconic', 'legendary',
  'visionary', 'pioneering', 'groundbreaking', 'unprecedented',
  'transformative', 'revolutionary', 'dynamic', 'innovative', 'streamlined',
  'common-sense', 'sensible', 'modest', 'hard-earned', 'battler',
  'quiet achiever',
]

/** Mild taboo language only. Deliberately free of slurs and sexual content. */
export const TABOO_WORDS: string[] = [
  'damn', 'damned', 'dammit', 'bloody', 'bloody hell', 'hell', 'arse', 'crap',
  'crapola', 'bugger', 'buggered', 'sod', 'sod off', 'blooming', 'blimey',
  'freaking', 'freakin', 'frigging', 'heck', 'what the hell', 'jeez', 'crikey',
  'strewth', 'goodness me', "for heaven's sake", 'blast', 'drat', 'ruddy',
  'darn', 'darned',
]

/** Two words shortened into one. All entries contain an apostrophe. */
export const CONTRACTIONS: string[] = [
  "don't", "doesn't", "didn't", "isn't", "aren't", "wasn't", "weren't",
  "haven't", "hasn't", "hadn't", "won't", "wouldn't", "can't", "couldn't",
  "shouldn't", "mustn't", "needn't", "shan't", "i'm", "i've", "i'll", "i'd",
  "you're", "you've", "you'll", "you'd", "he's", "he'll", "he'd", "she's",
  "she'll", "she'd", "it's", "it'll", "we're", "we've", "we'll", "we'd",
  "they're", "they've", "they'll", "they'd", "that's", "that'll", "there's",
  "there'll", "what's", "who's", "let's", "here's", "how's", "where's",
  "nothing's", "everyone's", "someone's", "y'all",
]

/** Distinctively Australian words, forms and idioms. Single words and phrases. */
export const AUSTRALIAN_ENGLISH: string[] = [
  'arvo', 'servo', 'smoko', 'brekky', 'barbie', 'sanger', 'stubby', 'tinny',
  'esky', 'rego', 'ambo', 'tradie', 'postie', 'sparky', 'chippie', 'brickie',
  'garbo', 'compo', 'footy', 'true blue', 'fair go', 'a fair go', 'fair dinkum',
  "she'll be right", 'no worries', 'no wukkas', 'mate', 'cobber', 'ocker',
  'bogan', 'drongo', 'galah', 'yobbo', 'chook', 'mozzie', 'grommet', 'nipper',
  'billy', 'damper', 'swag', 'tucker', 'tinnie', 'ute', 'thongs', 'boardies',
  'cossie', 'bathers', 'maccas', 'bottlo', 'pokies', 'the pokies', 'chunder',
  'pash', 'yarn', 'chinwag', 'hard yakka', 'go walkabout', 'outback', 'bush',
  'scrub', 'jackaroo', 'jillaroo', 'drover', 'stockman', 'cocky', 'dunny',
  'stubbies', 'middy', 'schooner', 'shout', 'my shout', 'shout you', 'chockers',
  'chock-a-block', 'dag', 'daggy', 'u-ey', 'do a u-ey', 'giving it a burl',
  'having a squiz', 'spitting chips', 'spewin', 'cranky', 'ropeable',
  'flat out', 'flat chat', 'full on', 'heaps', 'deadset', 'ripper', 'bonza',
  'beauty', 'you beauty', 'too easy', 'righto', 'strewth', 'crikey', "g'day",
  'hooroo', 'ta', 'kindie', 'sandgroper', 'banana bender', 'mexican',
  'serviette', 'capsicum',
]

/** Usage that breaks the rules of the standard variety. Single words and phrases. */
export const NON_STANDARD: string[] = [
  "ain't", 'youse', "youse's", 'ya', 'yer', 'gonna', 'wanna', 'coulda',
  'shoulda', 'woulda', 'musta', 'dunno', 'gimme', 'lemme', 'outta', 'kinda',
  'sorta', 'somethin', 'nothin', 'anythin', 'everythin', 'yep', 'nope', 'yeah',
  'nah', 'should of', 'could of', 'would of', 'might of', 'alot', 'irregardless',
  'expresso', 'innit', 'wiv', 'woz', 'sez', 'bro', 'cuz', 'cuzzie',
  "'em", 'gotta',
]

/** Abbreviations pronounced as a single word. */
export const ACRONYMS: string[] = [
  'nasa', 'nato', 'naplan', 'atar', 'anzac', 'qantas', 'asio', 'adf', 'abc',
  'unicef', 'unesco', 'fifa', 'uefa', 'afl', 'nrl', 'a-league', 'scuba',
  'laser', 'radar', 'sonar', 'sim', 'gif', 'jpeg', 'png', 'pin', 'captcha',
  'wifi', 'modem', 'aids', 'covid', 'sars', 'elisa', 'pet', 'mri', 'ram', 'rom',
  'gui', 'ascii', 'sql', 'json', 'yaml', 'saas', 'sas', 'ikea', 'lego', 'tafe',
  'csiro', 'medicare', 'centrelink', 'bunnings', 'woolies', 'maccas', 'myki',
  'hecs', 'help', 'austudy', 'opal', 'anu', 'unsw', 'mit', 'icu', 'er', 'gp',
  'aka', 'asap', 'fomo', 'yolo', 'jeep',
]

/** Abbreviations read out letter by letter. */
export const INITIALISMS: string[] = [
  'fyi', 'rsvp', 'diy', 'faq', 'asap', 'btw', 'tbh', 'ngl', 'imo', 'imho',
  'idk', 'lol', 'omg', 'wtf', 'aka', 'eta', 'pto', 'ps', 'cv', 'id', 'pin',
  'atm', 'gps', 'usb', 'tv', 'pc', 'cd', 'dvd', 'pdf', 'html', 'css', 'url',
  'api', 'phd', 'ba', 'bsc', 'mba', 'mp', 'pm', 'am', 'fm', 'ceo', 'cfo', 'coo',
  'hr', 'pr', 'it', 'ato', 'gst', 'rba', 'abs', 'sms', 'mms', 'dm', 'ohs',
  'whs', 'eft', 'pos', 'dob', 'doa', 'ed', 'rn', 'emt', 'ppe', 'n95', 'who',
  'un', 'eu', 'us', 'uk', 'nz', 'wa', 'nsw', 'vic', 'qld', 'sa', 'nt', 'act',
  'tas',
]

/** A word shortened while its meaning is kept. Single words. */
export const CLIPPINGS: string[] = [
  'arvo', 'servo', 'smoko', 'brekky', 'barbie', 'sanger', 'stubby', 'rego',
  'ambo', 'tradie', 'postie', 'sparky', 'chippie', 'brickie', 'garbo', 'compo',
  'footy', 'maccas', 'bottlo', 'cossie', 'boardies', 'uni', 'telly', 'fridge',
  'phone', 'mobile', 'net', 'ad', 'ads', 'memo', 'demo', 'exam', 'gym', 'lab',
  'limo', 'vet', 'deli', 'bike', 'van', 'cab', 'burger', 'chips', 'vegies',
  'veggies', 'sarnie', 'sanga', 'sickie', 'pressie', 'chrissie', 'chrissy',
  'cuppa', 'bevvie', 'ciggie', 'biccy', 'hanky', 'undies', 'jammies', 'sunnies',
  'trackies', 'coz', 'cuz', 'bruv', 'sis', 'bro', 'hubby', 'wifey', 'preggers',
  'preggo', 'aggro', 'defo', 'prob', 'probs', 'glute', 'abs', 'delts', 'quads',
  'pecs', 'tats', 'flu', 'polio', 'info', 'tech', 'auto', 'photo', 'doc',
  'prof', 'admin', 'intro', 'outro', 'macro', 'promo', 'repo', 'combo', 'condo',
  'mem', 'mod', 'retro', 'typo', 'rep', 'reps', 'app',
]

/** Recently coined words and senses. Single words and short phrases. */
export const NEOLOGISMS: string[] = [
  'doomscroll', 'doomscrolling', 'doomscrolled', 'doomspend', 'doomspiral',
  'doomplan', 'doomposting', 'selfie', 'selfies', 'usie', 'delfie', 'rizz',
  'rizzler', 'rizzless', 'rizzed', 'delulu', 'brainrot', 'girlboss', 'gaslight',
  'gaslighting', 'mansplain', 'mansplaining', 'hepeating', 'manterrupt',
  'humblebrag', 'cancel', 'cancelled', 'cancelling', 'subtweet', 'subtweeting',
  'hashtag', 'unfollow', 'unfriended', 'clickbait', 'clickbaity', 'paywall',
  'web3', 'metaverse', 'crypto', 'nft', 'tokenomics', 'deepfake', 'deepfaked',
  'phishing', 'phished', 'catfish', 'catfishing', 'netizen', 'esports',
  'livestream', 'livestreamed', 'vlog', 'vlogger', 'vlogging', 'blog',
  'blogger', 'podcast', 'podcaster', 'podcasting', 'webinar', 'infodemic',
  'infodump', 'snackable', 'shareable', 'bingeable', 'hot take', 'cold take',
  'hot girl summer', 'main character energy', 'side hustle', 'gig economy',
  'quiet quitting', 'quiet firing', 'rage applying', 'career cushioning',
  'bed rotting', 'yassify', 'yassified', 'cringey', 'cringeworthy',
  'unserious', 'unhinged', 'techbro', 'dumbphone', 'vibe shift', 'zombieing',
  'ghosting', 'breadcrumbing', 'situationship', 'soft launch', 'hard launch',
  'talking stage',
]

/** Words and phrases that organise a text or manage a conversation. */
export const DISCOURSE_MARKERS: string[] = [
  'however', 'therefore', 'moreover', 'furthermore', 'nevertheless',
  'nonetheless', 'notwithstanding', 'meanwhile', 'consequently',
  'subsequently', 'accordingly', 'alternatively', 'instead', 'otherwise',
  'besides', 'thus', 'hence', 'henceforth', 'firstly', 'secondly', 'thirdly',
  'finally', 'lastly', 'overall', 'ultimately', 'in short', 'in brief',
  'in fact', 'in essence', 'of course', 'for example', 'for instance',
  'in particular', 'namely', 'specifically', 'notably', 'importantly',
  'crucially', 'significantly', 'conversely', 'on the contrary',
  'on the other hand', 'on balance', 'in contrast', 'by comparison',
  'in comparison', 'as a result', 'as such', 'in addition', 'in addition to',
  'apart from that', 'that said', 'having said that', 'with that in mind',
  'to that end', 'in other words', 'that is', 'keep in mind', 'note that',
  'remember that', 'above all', 'more importantly', 'at the same time',
  'in the meantime', 'in the long run', 'anyway', 'anyhow', 'anyways', 'so',
  'well', 'right', 'okay', 'ok', 'look', 'listen', 'now', 'then', 'mind you',
  'you know', 'you see', 'i mean', 'like', 'basically', 'honestly', 'literally',
  'actually', 'really', 'to be honest', 'to be fair', 'at the end of the day',
  'long story short', 'the thing is', "here's the thing", 'as i was saying',
  'moving on', 'before i forget', 'by the way', 'on that note', 'in any case',
  'at any rate', 'all in all', 'all things considered', 'first of all',
  'last but not least', 'to sum up', 'in summary', 'to conclude',
]

/** Words that imitate the sound they name. Single words. */
export const ONOMATOPOEIA: string[] = [
  'buzz', 'crash', 'bang', 'boom', 'thud', 'thump', 'clang', 'clank', 'clatter',
  'clink', 'clunk', 'crack', 'crackle', 'pop', 'snap', 'sizzle', 'fizz', 'hiss',
  'whoosh', 'swoosh', 'splash', 'splosh', 'gurgle', 'trickle', 'drip', 'drizzle',
  'gush', 'bubble', 'burble', 'hum', 'whir', 'whirr', 'vroom', 'rev', 'beep',
  'honk', 'toot', 'screech', 'squeal', 'squeak', 'creak', 'groan', 'rumble',
  'rattle', 'clack', 'tick', 'tock', 'tick-tock', 'ding', 'dong', 'ring',
  'jingle', 'jangle', 'tinkle', 'chime', 'zap', 'zing', 'ping', 'pong', 'knock',
  'rap', 'tap', 'click', 'clap', 'slap', 'smack', 'whack', 'thwack', 'swish',
  'whisk', 'rustle', 'crunch', 'munch', 'slurp', 'gobble', 'sniff', 'snort',
  'snuffle', 'snore', 'wheeze', 'cough', 'hiccup', 'achoo', 'moo', 'baa',
  'oink', 'cluck', 'quack', 'woof', 'meow', 'purr', 'tweet', 'chirp', 'caw',
  'croak', 'ribbit', 'neigh', 'howl', 'growl', 'bark', 'yap', 'squawk', 'bleat',
  'grunt', 'snarl', 'roar', 'babble', 'chatter', 'murmur', 'whisper', 'mumble',
  'mutter', 'shriek', 'wail', 'sob', 'giggle', 'guffaw', 'cackle',
]

/**
 * Groups of words that sound identical but differ in spelling or meaning.
 * Note the type: this is a list of groups, not a flat word list.
 */
export const HOMOPHONE_GROUPS: string[][] = [
  ['their', 'there', "they're"],
  ['to', 'too', 'two'],
  ['your', "you're"],
  ['its', "it's"],
  ['whose', "who's"],
  ['weather', 'whether'],
  ['affect', 'effect'],
  ['accept', 'except'],
  ['advice', 'advise'],
  ['practice', 'practise'],
  ['principal', 'principle'],
  ['stationary', 'stationery'],
  ['complement', 'compliment'],
  ['discreet', 'discrete'],
  ['ensure', 'insure'],
  ['farther', 'father'],
  ['passed', 'past'],
  ['peace', 'piece'],
  ['plain', 'plane'],
  ['right', 'write', 'rite'],
  ['sea', 'see'],
  ['sight', 'site', 'cite'],
  ['son', 'sun'],
  ['steal', 'steel'],
  ['than', 'then'],
  ['through', 'threw'],
  ['wait', 'weight'],
  ['weak', 'week'],
  ['where', 'wear', 'ware'],
  ['which', 'witch'],
  ['bare', 'bear'],
  ['break', 'brake'],
  ['buy', 'by', 'bye'],
  ['fair', 'fare'],
  ['flour', 'flower'],
  ['hear', 'here'],
  ['hole', 'whole'],
  ['knew', 'new'],
  ['know', 'no'],
  ['male', 'mail'],
  ['meat', 'meet'],
  ['one', 'won'],
  ['pair', 'pear'],
  ['road', 'rode'],
  ['sale', 'sail'],
  ['some', 'sum'],
  ['tail', 'tale'],
  ['wood', 'would'],
  ['blue', 'blew'],
  ['board', 'bored'],
  ['boarder', 'border'],
  ['cell', 'sell'],
  ['cent', 'scent', 'sent'],
  ['course', 'coarse'],
  ['die', 'dye'],
  ['draft', 'draught'],
  ['dual', 'duel'],
  ['groan', 'grown'],
  ['heal', 'heel'],
  ['idle', 'idol'],
  ['lean', 'lien'],
  ['loan', 'lone'],
  ['naval', 'navel'],
  ['peak', 'peek', 'pique'],
  ['role', 'roll'],
  ['scene', 'seen'],
  ['sole', 'soul'],
  ['stair', 'stare'],
  ['suite', 'sweet'],
  ['throne', 'thrown'],
  ['tide', 'tied'],
  ['vain', 'vein', 'vane'],
  ['waist', 'waste'],
  ['warn', 'worn'],
  ['way', 'weigh'],
]
