// ─── Types ────────────────────────────────────────────────────────────────────

export type AssetType = 'image' | 'rsa_copy' | 'landing_page' | 'video';

export interface FocusGroupPanellist {
  panellist: string;
  age: number;
  profile: string;
  reaction: string;
  score: number;
  liked: string;
  change: string;
}

export interface FocusGroupScores {
  clarity: number;
  emotional_impact: number;
  brand_fit: number;
  call_to_action: number;
  overall: number;
}

export interface FocusGroupResult {
  synthesis: string;
  summary_bullets: string[];
  scores: FocusGroupScores;
  full_transcript: FocusGroupPanellist[];
}

export interface RSACopy {
  headlines: { text: string; chars: number }[];
  descriptions: { text: string; chars: number }[];
}

export interface AssetData {
  type: AssetType;
  urls?: string[];
  content?: RSACopy | Record<string, unknown>;
  html_path?: string;
}

export interface Iteration {
  number: number;
  timestamp: string;
  asset: AssetData;
  focus_group?: FocusGroupResult;
}

export interface DemoCampaign {
  id: string;
  name: string;
  asset_type: AssetType;
  brief: string;
  created_at: string;
  iterations: Iteration[];
}

// ─── Focus Group Panellists ───────────────────────────────────────────────────

const PANELLISTS = {
  sarah:  { panellist: 'Sarah',  age: 34, profile: 'EV-curious professional, price-conscious' },
  marcus: { panellist: 'Marcus', age: 41, profile: 'Fleet manager, reliability-focused' },
  priya:  { panellist: 'Priya',  age: 29, profile: 'Eco-conscious millennial, brand-aware' },
  james:  { panellist: 'James',  age: 52, profile: 'Traditional car buyer, sceptical of EVs' },
  emma:   { panellist: 'Emma',   age: 38, profile: 'Family SUV driver, practicality-first' },
};

const YOUNG_PANELLISTS = {
  jake:   { panellist: 'Jake',   age: 22, profile: 'First-time buyer, eco-motivated, TikTok native' },
  maya:   { panellist: 'Maya',   age: 19, profile: 'Student eco-activist, budget-constrained' },
  tom:    { panellist: 'Tom',    age: 26, profile: 'London commuter, tech-savvy, cost-conscious' },
  sofia:  { panellist: 'Sofia',  age: 28, profile: 'Brand-aware professional, social media-driven' },
  callum: { panellist: 'Callum', age: 24, profile: 'Gig economy worker, highly price-sensitive' },
};

const OLDER_PANELLISTS = {
  david:    { panellist: 'David',    age: 63, profile: 'Retired engineer, reliability-first, range anxiety' },
  margaret: { panellist: 'Margaret', age: 67, profile: 'Car-dependent retiree, tech-sceptical' },
  george:   { panellist: 'George',   age: 71, profile: 'Traditional buyer, simplicity-above-all' },
  helen:    { panellist: 'Helen',    age: 64, profile: 'Eco-aware grandmother, legacy-motivated' },
  peter:    { panellist: 'Peter',    age: 68, profile: 'Pension-conscious, researches thoroughly' },
};

// ─── RSA Copy Campaign ────────────────────────────────────────────────────────

const RSA_ITERATION_1: Iteration = {
  number: 1,
  timestamp: '2026-02-27T09:00:00Z',
  asset: {
    type: 'rsa_copy',
    content: {
      headlines: [
        { text: 'Find Your Perfect Car', chars: 21 },
        { text: 'Compare Deals Today', chars: 19 },
        { text: 'Best Prices Guaranteed', chars: 22 },
        { text: 'Save Money on Your Next Car', chars: 27 },
        { text: 'Thousands of Vehicles', chars: 21 },
        { text: 'Top Rated Car Platform', chars: 22 },
        { text: 'No Haggling Required', chars: 20 },
        { text: 'Free Online Comparison', chars: 22 },
        { text: 'Trusted by UK Drivers', chars: 21 },
        { text: 'Start Your Search Now', chars: 21 },
        { text: 'Great Deals Await You', chars: 21 },
        { text: 'Compare 100s of Cars', chars: 20 },
        { text: 'Find the Best Offer', chars: 19 },
        { text: 'Easy Car Buying Process', chars: 23 },
        { text: 'Get Your Best Deal', chars: 18 },
      ],
      descriptions: [
        { text: 'Compare car deals from dealers across the UK and find great prices on your next vehicle today.', chars: 91 },
        { text: 'Carwow makes buying a car easier. Browse hundreds of cars and get competitive dealer prices.', chars: 91 },
        { text: 'No more haggling. Get free car comparisons and save money on your next car with Carwow.', chars: 88 },
        { text: 'Join millions of UK drivers who trust Carwow to find the best deal on their next vehicle.', chars: 89 },
      ],
    } as RSACopy,
  },
  focus_group: {
    synthesis: "The copy lacks focus — all five panellists noted it could apply to any car comparison site and doesn't address the specific EV switch journey at all. Generic phrases like 'Find Your Perfect Car' and 'Best Prices Guaranteed' fail to differentiate Carwow or acknowledge the unique anxieties around EV buying. The descriptions are too long and dense. To land with the target audience, the next iteration must lead with EV-specific language, surface Carwow's scale advantage, and address the range/cost concerns that hold back EV switchers.",
    summary_bullets: [
      'No EV-specific language anywhere — copy could be for any car type, missing the campaign target.',
      "Generic urgency ('Save Money', 'Best Prices') without proof points creates low trust.",
      'Headlines are interchangeable — none stand out or create a clear hierarchy.',
      'Descriptions exceed 90-character limit and pack in too many generic claims.',
    ],
    scores: { clarity: 5.4, emotional_impact: 3.6, brand_fit: 4.2, call_to_action: 5.0, overall: 4.6 },
    full_transcript: [
      { ...PANELLISTS.sarah,  score: 4, reaction: "I came to this ad looking for help switching to an EV and nothing here speaks to me. 'Save Money on Your Next Car' is vague — save how much? I need specifics to trust a claim like that.", liked: "'No Haggling Required' caught my eye — that removes a real barrier for me.", change: 'Add EV-specific headlines. Tell me how much I could save on fuel costs, or mention charging savings.' },
      { ...PANELLISTS.marcus, score: 5, reaction: "Fleet perspective: this reads like every other car aggregator. No mention of fleet deals, reliability data, or EV running costs. It's not differentiated.", liked: "'Trusted by UK Drivers' is a mild trust signal, but needs a number behind it.", change: "Mention fleet or business use. '10,000+ fleet managers trust Carwow' would stop my scroll." },
      { ...PANELLISTS.priya,  score: 4, reaction: "As someone eco-motivated, there's nothing here about sustainability or the environmental angle of switching to electric. It's just generic deal-finding copy.", liked: "'Free Online Comparison' — I like free tools, no commitment.", change: "Add language about reducing emissions or the EV switch. 'Switch to electric the smart way' speaks to me." },
      { ...PANELLISTS.james,  score: 6, reaction: "I'm sceptical about EVs but this ad doesn't do anything to address my concerns. 'Compare Deals Today' is fine but it doesn't give me a reason to consider EV over petrol.", liked: "The straightforward language suits me — no jargon.", change: "Give me a comparison angle: EVs vs petrol running costs, or range reassurance." },
      { ...PANELLISTS.emma,   score: 4, reaction: "As a family car buyer I need to know if EVs are practical for school runs and motorway trips. Nothing here addresses family use or practicality.", liked: "'Easy Car Buying Process' — simplicity appeals to busy parents.", change: "Add 'family EV' angle or something about range for everyday driving." },
    ],
  },
};

const RSA_ITERATION_2: Iteration = {
  number: 2,
  timestamp: '2026-02-27T09:08:12Z',
  asset: {
    type: 'rsa_copy',
    content: {
      headlines: [
        { text: 'Switch to Electric Today', chars: 24 },
        { text: 'Compare EVs — Save Thousands', chars: 28 },
        { text: 'Find Your Perfect EV', chars: 20 },
        { text: 'EV Deals from UK Dealers', chars: 24 },
        { text: 'No Haggling. Just Savings.', chars: 26 },
        { text: '500+ EVs to Compare Free', chars: 24 },
        { text: 'Cut Fuel Bills with an EV', chars: 25 },
        { text: 'Trusted by 10M+ Drivers', chars: 23 },
        { text: 'Real Dealer Prices Online', chars: 25 },
        { text: 'Best EV Deals, No Hassle', chars: 24 },
        { text: 'Go Electric the Easy Way', chars: 24 },
        { text: 'Compare Electric Cars Free', chars: 26 },
        { text: 'EV Savings Start Here', chars: 21 },
        { text: 'Find the Right EV for You', chars: 25 },
        { text: 'Your EV Search Starts Here', chars: 26 },
      ],
      descriptions: [
        { text: 'Compare 500+ EVs from UK dealers. Get real prices, no haggling. Find your perfect electric car on Carwow.', chars: 103 },
        { text: 'Save on fuel and tax with an EV. Carwow lets you compare deals from trusted dealers — free, no commitment.', chars: 104 },
        { text: "Worried about range or cost? Carwow's EV comparison shows running costs, range and real dealer prices.", chars: 101 },
        { text: 'Join 10 million UK drivers who use Carwow to find the best car deal — now including 500+ electric models.', chars: 103 },
      ],
    } as RSACopy,
  },
  focus_group: {
    synthesis: "Significant improvement — EV language is now present throughout and panellists responded much more positively to the specificity. Headlines like 'Compare EVs — Save Thousands' and 'Cut Fuel Bills with an EV' directly address purchase motivators. However, all descriptions exceed the 90-character limit, which will cause Google to truncate them and undermine the message. The range anxiety angle in description 3 is the right instinct but needs to be tighter. One more iteration to tighten character counts and sharpen the emotional hook should produce a strong final set.",
    summary_bullets: [
      'EV-specific language is now strong — a major improvement on iteration 1.',
      'All 4 descriptions exceed the 90-character limit and will be truncated by Google Ads.',
      "Proof point '10M+ drivers' in headline 8 is highly effective — replicate in descriptions.",
      "Range anxiety addressed in description 3 — good instinct, needs tighter phrasing.",
    ],
    scores: { clarity: 6.8, emotional_impact: 6.2, brand_fit: 6.6, call_to_action: 7.0, overall: 6.7 },
    full_transcript: [
      { ...PANELLISTS.sarah,  score: 7, reaction: "'Compare EVs — Save Thousands' immediately speaks to my price anxiety. I'd click that. But the descriptions are too long and I know Google will cut them off.", liked: "Headlines 2, 7, and 13 — clear financial benefit with EV specificity.", change: 'Cut descriptions to under 90 chars. Lead with the saving figure.' },
      { ...PANELLISTS.marcus, score: 6, reaction: "Better. '10M+ Drivers' is a strong trust signal. But still no fleet angle and the descriptions would get truncated — I've managed enough Google Ads to know that's a problem.", liked: "'Real Dealer Prices Online' — I know what I'm getting, no surprises.", change: "Tighten description length. Add something about fleet or business EVs." },
      { ...PANELLISTS.priya,  score: 7, reaction: "'Go Electric the Easy Way' speaks to the barrier I face — it feels accessible. The eco angle is implied but I'd love it stated explicitly.", liked: "The EV-forward language throughout. Feels like the ad is for me now.", change: 'Add one headline about sustainability or carbon savings — that seals it for eco buyers.' },
      { ...PANELLISTS.james,  score: 6, reaction: "I appreciate the range mention in the descriptions — that's my main concern. But the descriptions being too long would mean I only see half the message.", liked: "'Worried about range or cost?' — that's exactly my objection, called out directly.", change: 'Get description 3 under 90 chars and keep the range question — that targeting is smart.' },
      { ...PANELLISTS.emma,   score: 7, reaction: "'Find the Right EV for You' is inclusive for family buyers. The 500+ models claim gives me confidence there's something for us.", liked: "Specificity has really improved — I now know this is an EV comparison tool, not just any car site.", change: 'Mention family-suitable EVs or range for real-world use in a description.' },
    ],
  },
};

const RSA_ITERATION_3: Iteration = {
  number: 3,
  timestamp: '2026-02-27T09:16:44Z',
  asset: {
    type: 'rsa_copy',
    content: {
      headlines: [
        { text: 'Compare EVs, Save Thousands', chars: 27 },
        { text: 'Find Your Perfect EV', chars: 20 },
        { text: 'Switch Electric the Easy Way', chars: 28 },
        { text: 'No Haggling. Just EV Deals.', chars: 27 },
        { text: '500+ EVs. Real Dealer Prices', chars: 28 },
        { text: 'Cut Fuel Bills by Up to 70%', chars: 27 },
        { text: 'Trusted by 10M+ UK Drivers', chars: 26 },
        { text: 'Range & Cost — All Answered', chars: 27 },
        { text: 'Go Electric. Save More.', chars: 23 },
        { text: 'EV or Hybrid? Compare Free', chars: 26 },
        { text: 'Best EV Deals, Zero Hassle', chars: 26 },
        { text: 'Your EV Switch Starts Here', chars: 26 },
        { text: 'Compare 500 EVs for Free', chars: 24 },
        { text: 'Demystify the EV Switch', chars: 23 },
        { text: 'Save on Tax, Fuel & More', chars: 24 },
      ],
      descriptions: [
        { text: 'Compare 500+ EVs from UK dealers. Real prices, no haggling. Find yours free on Carwow.', chars: 87 },
        { text: 'Cut fuel bills by up to 70%. Carwow shows EV running costs, range & dealer prices in one place.', chars: 94 },
        { text: 'Range anxiety? Carwow compares real-world EV range & charging costs. Trusted by 10M+ drivers.', chars: 93 },
        { text: 'From pure electric to plug-in hybrid — compare every option free. No commitment, no pressure.', chars: 93 },
      ],
    } as RSACopy,
  },
  focus_group: {
    synthesis: "A strong final set. The copy is now EV-specific, proof-point-led, and emotionally resonant across all five audience segments. 'Cut Fuel Bills by Up to 70%' is the standout headline — every panellist responded to it positively. The 10M+ trust signal and 500+ EVs scale claim are working hard in both headlines and descriptions. Two descriptions slightly exceed 90 characters but by only 3-4 chars — Google's smart truncation will likely preserve the core message. The 'Range anxiety?' opener in description 3 is exactly the right objection to surface for the target audience. This set is ready to run.",
    summary_bullets: [
      "'Cut Fuel Bills by Up to 70%' — standout headline, responded to by all 5 panellists.",
      "Trust signals ('10M+ drivers', '500+ EVs') are now consistent across headlines and descriptions.",
      "Range anxiety directly addressed in description 3 — the #1 objection for EV-curious buyers.",
      'Descriptions 2-4 are 3-4 chars over 90 — minor; Google smart truncation will preserve the message.',
    ],
    scores: { clarity: 8.6, emotional_impact: 8.0, brand_fit: 8.4, call_to_action: 8.8, overall: 8.5 },
    full_transcript: [
      { ...PANELLISTS.sarah,  score: 9, reaction: "'Cut Fuel Bills by Up to 70%' — I stopped scrolling. That's a real number that changes my calculation on EV ownership. This ad earns a click.", liked: "The financial specificity throughout. This ad understands my decision-making process.", change: "Tiny: descriptions 2 and 3 are just over 90 chars — worth trimming if possible." },
      { ...PANELLISTS.marcus, score: 8, reaction: "For fleet, '500+ EVs. Real Dealer Prices' is exactly what I need. I know I'm getting competitive pricing at scale. The trust signals are credible now.", liked: "'No Haggling. Just EV Deals.' — fleet managers hate negotiating, this removes that pain directly.", change: "A fleet-specific headline would score a 10 from me, but this is genuinely strong." },
      { ...PANELLISTS.priya,  score: 9, reaction: "'Go Electric. Save More.' is punchy and values-aligned. 'Your EV Switch Starts Here' makes the journey feel achievable. I'd click and share this.", liked: "The combination of eco framing and financial benefit — speaks to both my motivations simultaneously.", change: 'Nothing significant. Maybe one headline referencing carbon savings, but this stands without it.' },
      { ...PANELLISTS.james,  score: 8, reaction: "'Range & Cost — All Answered' speaks directly to my hesitation. I'd click just to see if those answers are actually there. Good targeting.", liked: "The directness. It doesn't assume I've already decided — it meets me where I am in the journey.", change: "I'd want the landing page to actually answer range and cost questions — if it does, this ad is perfect." },
      { ...PANELLISTS.emma,   score: 9, reaction: "'EV or Hybrid? Compare Free' — that headline made me feel like the tool understands family buyers who aren't ready to go full electric yet.", liked: "'No Commitment, No Pressure' in description 4 — removes anxiety about the process itself.", change: 'Could mention family-specific range (e.g. 200+ miles), but the current set already converts me.' },
    ],
  },
};

// ─── Display Images Campaign ──────────────────────────────────────────────────

const IMAGE_ITERATION_1: Iteration = {
  number: 1,
  timestamp: '2026-02-27T09:00:00Z',
  asset: {
    type: 'image',
    urls: [
      '/images/ev-display-v1-square.jpg',
      '/images/ev-display-v1-portrait.jpg',
      '/images/ev-display-v1-story.jpg',
    ],
  },
  focus_group: {
    synthesis: "The images are clean but lack emotional pull — all five panellists described them as 'functional' rather than aspirational. The dark background and minimal composition don't differentiate the brand, and there is no clear product or person visible to create connection. The Carwow brand colour (#1CDCEB) is under-utilised. The 1:1 variant works best structurally but the copy overlay is too small to read at feed size. The 9:16 story format feels empty in the upper third. The next iteration should introduce a human element, bolder brand colour usage, and more legible headline typography.",
    summary_bullets: [
      'No human element — aspirational lifestyle ads need a person or clear lifestyle cue to drive emotional connection.',
      'Brand colour (#1CDCEB) barely visible — needs to be the dominant accent, not a detail.',
      'Text overlay too small for mobile feed — headline must be legible at thumb-scroll speed.',
      '9:16 story variant has dead space in upper third — place key message or person there.',
    ],
    scores: { clarity: 5.0, emotional_impact: 3.8, brand_fit: 4.6, call_to_action: 4.4, overall: 4.5 },
    full_transcript: [
      { ...PANELLISTS.sarah,  score: 4, reaction: "It's fine but it doesn't stop my scroll. I've seen a hundred ads like this. Nothing tells me this is about EVs or about Carwow specifically.", liked: 'The clean layout — not cluttered.', change: 'Show a person in the car, smiling, on a UK road. Make it feel real and achievable.' },
      { ...PANELLISTS.marcus, score: 5, reaction: "Professional enough but generic. The lack of a headline I can read quickly is a problem — I won't squint to understand an ad.", liked: 'Dark, premium feel suits a considered purchase.', change: 'Make the headline 3x bigger. Lead with the saving or the USP, not a vague image.' },
      { ...PANELLISTS.priya,  score: 4, reaction: "Where's the green angle? Where's the EV identity? This could be an ad for any car brand. For an eco-motivated buyer, I need to feel the brand cares about what I care about.", liked: 'Minimalist style I personally prefer.', change: 'Use the Carwow blue-green boldly. Add a sustainability message. Show a charging scene.' },
      { ...PANELLISTS.james,  score: 5, reaction: "I can't read the text so I have no idea what action I should take. Too much relies on the visual doing the work alone.", liked: 'Not over-designed — easy on the eye.', change: 'Clear call to action. Tell me exactly what to do next.' },
      { ...PANELLISTS.emma,   score: 5, reaction: "Doesn't speak to families at all. The image composition feels like a solo driver ad — where's the family, the boot space, the school run context?", liked: 'Clean backgrounds work well on Instagram.', change: 'Show a family scene or at minimum a more spacious vehicle. Make it relatable.' },
    ],
  },
};

const IMAGE_ITERATION_2: Iteration = {
  number: 2,
  timestamp: '2026-02-27T09:08:30Z',
  asset: {
    type: 'image',
    urls: [
      '/images/ev-display-v2-square.jpg',
      '/images/ev-display-v2-portrait.jpg',
      '/images/ev-display-v2-story.jpg',
    ],
  },
  focus_group: {
    synthesis: "A marked improvement — introducing a human element and bolder use of the Carwow brand colour drove significantly higher emotional scores across all segments. The 4:5 portrait variant is the strongest of the three, with the person-and-vehicle composition working well in Instagram feed placement. The 1:1 headline is now legible at feed size. The 9:16 story format still feels slightly imbalanced — the lower third CTA needs more contrast. One consistent note from panellists: the copy on the image should name Carwow earlier and more prominently, since brand recognition is a key conversion driver at this stage of the funnel.",
    summary_bullets: [
      'Human element dramatically improved emotional scores — continue this in iteration 3.',
      'Brand colour now visible and effective — the cyan accent works well against the dark treatment.',
      '4:5 portrait is the strongest format — consider making it the lead creative.',
      '9:16 CTA needs higher contrast — white text on light background is getting lost.',
    ],
    scores: { clarity: 7.0, emotional_impact: 6.6, brand_fit: 6.8, call_to_action: 6.4, overall: 6.7 },
    full_transcript: [
      { ...PANELLISTS.sarah,  score: 7, reaction: "Much better — I can see a person, I can read the headline, and the colour is Carwow. I'd pause on this. Still want a stronger CTA button visible in the image.", liked: "The person in frame — creates aspiration and makes the product feel real.", change: "Make the Carwow logo slightly bigger and add a visible CTA overlay — 'Compare EVs Free'." },
      { ...PANELLISTS.marcus, score: 7, reaction: "The headline is legible now. The 4:5 format looks strong — professional and clear. Still no fleet angle but I understand that's not this campaign's brief.", liked: "Clean brand use. The dark-to-light gradient draws the eye down to the CTA.", change: "The 9:16 white text is difficult — more contrast or a text shadow needed." },
      { ...PANELLISTS.priya,  score: 7, reaction: "The cyan accent really sings now. Eco-forward feel comes through better. The person looks genuinely happy — aspirational without being fake.", liked: "Brand colour prominence. It feels distinctly Carwow now, not generic.", change: "Add a leaf or charge icon somewhere subtle to reinforce the EV/eco angle for people like me." },
      { ...PANELLISTS.james,  score: 6, reaction: "I can read it, I know what they want me to do. Prefer the more direct version. The person feels a bit young for my demographic.", liked: "Clearer messaging on this iteration — I understand the offer.", change: "Show someone my age (50s) or a range of ages. Don't assume all EV buyers are 30-somethings." },
      { ...PANELLISTS.emma,   score: 7, reaction: "Better — the composition feels more spacious, less sporty-solo-driver. I could see myself in that image. The 4:5 works great in my Instagram feed.", liked: "The warmth added to this iteration. It feels more welcoming.", change: "One more detail: if there's a car boot visible, that's family-relevant without being clichéd." },
    ],
  },
};

const IMAGE_ITERATION_3: Iteration = {
  number: 3,
  timestamp: '2026-02-27T09:17:10Z',
  asset: {
    type: 'image',
    urls: [
      '/images/ev-display-v3-square.jpg',
      '/images/ev-display-v3-portrait.jpg',
      '/images/ev-display-v3-story.jpg',
    ],
  },
  focus_group: {
    synthesis: "The final set is ready for campaign deployment. All three formats now score above 8 across the panel. The 4:5 portrait is the standout — universally praised for the aspirational composition, legible headline, and prominent Carwow branding. The 9:16 story format has been resolved with a high-contrast CTA overlay. The 1:1 square variant is clean and feed-optimised. Across segments — from eco-motivated Priya to sceptical James — the imagery now speaks to the EV switch journey rather than generic car advertising. The Carwow brand colour is working as a distinctive identifier. Recommend the 4:5 as primary creative with 1:1 and 9:16 as placements.",
    summary_bullets: [
      'All three formats score 8+ across the focus group — ready for campaign deployment.',
      '4:5 portrait is the standout creative — recommend as the primary placement.',
      'High-contrast CTA in 9:16 resolves the previous iteration\'s legibility issue.',
      'Brand colour is now a distinctive identifier — Carwow recognisable at a glance.',
    ],
    scores: { clarity: 8.8, emotional_impact: 8.4, brand_fit: 8.6, call_to_action: 8.6, overall: 8.6 },
    full_transcript: [
      { ...PANELLISTS.sarah,  score: 9, reaction: "I would stop scrolling for this. The headline, the person, the Carwow colour — it all comes together. The CTA is visible and clear. This earns a click from me.", liked: "The confidence of the composition. It feels premium but accessible at the same time.", change: "Nothing material. A/B test with and without the price saving overlay to optimise." },
      { ...PANELLISTS.marcus, score: 8, reaction: "Professional, legible, clear brand. The 9:16 CTA contrast is fixed. From a media buyer's perspective, this creative will perform well across placements.", liked: "Consistency across formats — the brand identity holds across all three aspect ratios.", change: "Tiny: the 1:1 bottom padding feels slightly tight on some devices. Otherwise production-ready." },
      { ...PANELLISTS.priya,  score: 9, reaction: "That cyan really pops now. The charging visual in the background of the 9:16 is a perfect subtle eco signal. I feel like this brand understands me.", liked: "The EV-forward visual language. It's aspirational and purposeful simultaneously.", change: "Perfect for my segment. Run it." },
      { ...PANELLISTS.james,  score: 8, reaction: "I can see a range of people in the composition now — not just young buyers. The copy is direct and the 'no haggling' message is visible. I'd click.", liked: "The directness. Doesn't over-sell — just shows me what I get.", change: "I'd personally want more range information but I understand that's for the landing page to handle." },
      { ...PANELLISTS.emma,   score: 9, reaction: "The 4:5 with the wider vehicle composition is exactly right for family buyers. Spacious, warm, real-world setting. This feels like it was made for people like me.", liked: "The warmth and the practical feel. Not sporty or intimidating — welcoming.", change: "This set is ready. The family angle lands without being explicit — smart." },
    ],
  },
};

// ─── Display Images — Younger Driver (18-30) Campaign ────────────────────────

const YOUNG_IMAGE_ITERATION_1: Iteration = {
  number: 1,
  timestamp: '2026-02-27T09:00:00Z',
  asset: {
    type: 'image',
    urls: [
      '/images/ev-display-v1-square.jpg',
      '/images/ev-display-v1-portrait.jpg',
      '/images/ev-display-v1-story.jpg',
    ],
  },
  focus_group: {
    synthesis: "The current creative fails to register with the 18-30 cohort. The aesthetic feels too corporate — polished in a way that reads as inauthentic to a generation that values UGC-adjacent visuals and brand purpose. Nothing gives a scroll-stopping reason to pause: no social proof, no peer-group imagery, no visible saving or eco signal. The Carwow brand is almost entirely unknown to first-time buyers in this age bracket, meaning the name and colour must do more heavy lifting. The EV angle has strong appeal for this demographic's values, but the creative hasn't activated it yet.",
    summary_bullets: [
      'Aesthetic reads as corporate, not native to Instagram/TikTok — no scroll-stop quality for 18-30s.',
      'No social proof or peer-group imagery — this demographic expects to see people their own age.',
      'Carwow brand unfamiliar to first-time buyers — name and colour must work significantly harder.',
      'EV angle resonates in principle but the creative has not activated the sustainability message.',
    ],
    scores: { clarity: 4.8, emotional_impact: 3.4, brand_fit: 4.0, call_to_action: 4.2, overall: 4.1 },
    full_transcript: [
      { ...YOUNG_PANELLISTS.jake,   score: 4, reaction: "I'd scroll past without stopping. It has no energy, no personality. My generation expects brands to have a vibe and this has none. It could be an ad for anything.", liked: "Clean and non-spammy — at least it's not obnoxious.", change: "Make it feel like a brand I'd tell my mates about. Less stock-image energy, more authentic." },
      { ...YOUNG_PANELLISTS.maya,   score: 3, reaction: "There's no environmental message at all. I switch to EVs because of the planet, not just because it's cool. This ad completely ignores the reason I'd actually buy.", liked: "The minimal layout — I hate cluttered ads.", change: "Lead with the impact. Show CO₂ savings, not just a car." },
      { ...YOUNG_PANELLISTS.tom,    score: 4, reaction: "This feels like a LinkedIn ad, not an Instagram ad. The composition is safe but safe is invisible in a crowded feed. You need energy for the algorithm.", liked: "At least it's not screaming at me.", change: "Shoot this with UGC-style authenticity — someone charging outside their flat, not a studio composition." },
      { ...YOUNG_PANELLISTS.sofia,  score: 5, reaction: "I'd consider pausing but not clicking. The brand isn't visible enough for me to know if it's aspirational or budget. That context matters for my age group.", liked: "The dark, premium palette is strong — it doesn't look cheap.", change: "Add a visible brand personality marker. Make me feel like Carwow is 'my kind of brand'." },
      { ...YOUNG_PANELLISTS.callum, score: 4, reaction: "I only care about cost and this doesn't show me any savings or pricing. Young drivers are broke — talk to that. I'd never click without a number.", liked: "Simple. Not misleading.", change: "Put a saving figure front and centre. '£1,200/yr saved vs petrol' would stop my scroll." },
    ],
  },
};

const YOUNG_IMAGE_ITERATION_2: Iteration = {
  number: 2,
  timestamp: '2026-02-27T09:08:30Z',
  asset: {
    type: 'image',
    urls: [
      '/images/ev-display-v2-square.jpg',
      '/images/ev-display-v2-portrait.jpg',
      '/images/ev-display-v2-story.jpg',
    ],
  },
  focus_group: {
    synthesis: "A strong step forward. Introducing a younger model, bolder Carwow colour use, and a visible saving figure raised emotional engagement across the panel. The 9:16 story format is the standout for this age group — the full-bleed vertical composition suits native Instagram Story behaviour perfectly. The 4:5 portrait also performs well in feed. The primary remaining gap is the CTA: 18-30s respond to low-commitment, peer-endorsed actions, and 'Compare EVs Free' doesn't yet carry social proof. The eco message is appreciated but could be surfaced more prominently to motivate the values-driven buyers in this cohort.",
    summary_bullets: [
      'Younger in-frame model dramatically improved relatability — continue this direction in iteration 3.',
      'Saving figure drives pause-and-read behaviour for cost-conscious young buyers — make it more prominent.',
      '9:16 story format is strongest for this demographic — native vertical scroll behaviour.',
      'CTA needs social proof ("Join 4M drivers") to feel peer-endorsed rather than corporate.',
    ],
    scores: { clarity: 6.8, emotional_impact: 6.4, brand_fit: 6.4, call_to_action: 6.0, overall: 6.5 },
    full_transcript: [
      { ...YOUNG_PANELLISTS.jake,   score: 7, reaction: "Okay, this is more like it. There's a person my age, I can see a saving, the brand is visible. I'd pause on this. Still feels slightly too polished but close.", liked: "The person — finally someone who looks like me, not a stock model from 2010.", change: "Push the social element — 'Join 4 million drivers' or a Trustpilot badge makes it feel less corporate, more peer-endorsed." },
      { ...YOUNG_PANELLISTS.maya,   score: 6, reaction: "Improved. I can see the brand cares a bit more now. Still no explicit eco message but the overall feeling is more purposeful and modern.", liked: "Bolder use of the Carwow colour — feels more confident and contemporary.", change: "A leaf or charge icon would complete the eco signal for buyers driven by values like me." },
      { ...YOUNG_PANELLISTS.tom,    score: 7, reaction: "The 9:16 stops my scroll — that full-bleed format with the person and saving figure works perfectly for Instagram Stories. This format would perform.", liked: "The 9:16 format is built for how I actually use Instagram. That's what it needed.", change: "Make the CTA less generic. 'See deals near you' feels more personally relevant than 'Compare EVs Free'." },
      { ...YOUNG_PANELLISTS.sofia,  score: 6, reaction: "Now I understand what Carwow is — a comparison platform for EVs. The brand reads as modern, which is right for my peer group. The aesthetic is nearly there.", liked: "The updated composition feels premium and intentional — it's growing into a brand identity.", change: "Add a Trustpilot star rating somewhere subtle. My generation checks social proof before clicking anything." },
      { ...YOUNG_PANELLISTS.callum, score: 7, reaction: "The saving figure works on me. Specific numbers stop my scroll. I'd actually click this to find out more about running costs.", liked: "Specific numbers. Don't tell me it's 'great value' — show me the value, exactly.", change: "Consider adding 'No deposit required' or a finance angle — young drivers' biggest blocker is upfront cost." },
    ],
  },
};

const YOUNG_IMAGE_ITERATION_3: Iteration = {
  number: 3,
  timestamp: '2026-02-27T09:17:10Z',
  asset: {
    type: 'image',
    urls: [
      '/images/ev-display-v3-square.jpg',
      '/images/ev-display-v3-portrait.jpg',
      '/images/ev-display-v3-story.jpg',
    ],
  },
  focus_group: {
    synthesis: "The final set is optimised for the 18-30 demographic and ready for campaign deployment. The 9:16 story variant is outstanding — full-bleed, relatable peer-age model, Trustpilot social proof, specific saving figure, and a low-commitment CTA. The 4:5 portrait performs strongly in feed. The 1:1 is punchy and clean for discovery placements. Together, the saving figure, Trustpilot badge, and younger-demographic model address the three main conversion blockers for this age group: trust, relevance, and financial justification. The eco angle is present but calibrated — aspirational without being preachy, which is exactly right for an audience that is values-aware but not values-activist in their purchasing.",
    summary_bullets: [
      '9:16 story format is the standout for 18-30s — recommend as lead creative for Stories placement.',
      'Social proof (Trustpilot rating) and saving figure together address both key conversion blockers.',
      'Relatable peer-age model and UGC-adjacent aesthetic make the creative feel native, not forced.',
      'All three formats are campaign-ready — 9:16 as primary, 4:5 as secondary feed placement.',
    ],
    scores: { clarity: 8.6, emotional_impact: 8.4, brand_fit: 8.2, call_to_action: 8.6, overall: 8.5 },
    full_transcript: [
      { ...YOUNG_PANELLISTS.jake,   score: 9, reaction: "I would click this. The whole set is strong. The 9:16 is genuinely Instagram-native. The Trustpilot badge made me trust it. The person looks like someone I actually know.", liked: "Authenticity — it doesn't feel like a traditional car ad, which is exactly right for this audience.", change: "Nothing major. Maybe A/B test with a slightly younger model (18-22) vs the current 26-28 range." },
      { ...YOUNG_PANELLISTS.maya,   score: 8, reaction: "The eco angle is there — subtle but present. The overall brand feel is one I'd trust. I'd click for the EV comparison and the values signal it sends.", liked: "The balance between aspiration and accessibility — it doesn't feel elitist or out of reach for my income level.", change: "The charge icon in the 9:16 background is a perfect detail. Keep it. It signals purpose without being preachy." },
      { ...YOUNG_PANELLISTS.tom,    score: 9, reaction: "The 9:16 would stop my scroll every single time. The format is native, the creative is contemporary, the saving is specific and the CTA is low friction. Job done.", liked: "It feels made for the platform, not adapted to it. That's rare in car advertising.", change: "Test it. I'd bet it outperforms most EV creative in this age bracket. The format alone gives it an edge." },
      { ...YOUNG_PANELLISTS.sofia,  score: 8, reaction: "The brand reads premium but approachable — exactly the right positioning for my peer group. The Trustpilot stars seal it for someone like me who checks everything before clicking.", liked: "The aesthetic is 2026 social — not trying too hard, not too bland. It earns its place in the feed.", change: "Perfect. I'd share this in a group chat if a friend asked about EVs." },
      { ...YOUNG_PANELLISTS.callum, score: 8, reaction: "Saving figure front and centre, low-commitment CTA, social proof. This hits all my actual decision points. I'd save this to my phone for when I can actually afford a car.", liked: "Specific financial information makes me feel respected, not manipulated. Most ads don't do this.", change: "Great creative. Ship it. Maybe add a finance monthly figure for buyers who can't do upfront." },
    ],
  },
};

// ─── Display Images — Older Driver (60+) Campaign ─────────────────────────────

const OLDER_IMAGE_ITERATION_1: Iteration = {
  number: 1,
  timestamp: '2026-02-27T09:00:00Z',
  asset: {
    type: 'image',
    urls: [
      '/images/ev-display-v1-square.jpg',
      '/images/ev-display-v1-portrait.jpg',
      '/images/ev-display-v1-story.jpg',
    ],
  },
  focus_group: {
    synthesis: "The current creative fails comprehensively with the 60+ demographic. The text is too small to read comfortably at any display size — a critical accessibility failure for this group. The dark, minimal aesthetic that works for younger audiences feels cold and uninviting to older buyers who respond to warmth and human connection. The Carwow brand is entirely unknown to this cohort, so trust signals are essential from the first impression. Nothing in the creative addresses the specific concerns driving 60+ EV hesitancy: range anxiety, charging complexity, and technology unfamiliarity. To reach this audience, the creative must be warm, legible, simple, and address at least one concern directly.",
    summary_bullets: [
      'Text too small to read comfortably — a critical failure for the 60+ demographic at all display sizes.',
      'No warmth or human connection — cold aesthetic alienates older buyers who trust relationships over aesthetics.',
      'Carwow brand entirely unknown to this cohort — trust signals (users, years, Trustpilot) must be prominent.',
      'No concern-addressing content — range, charging, or running cost must be visible in the creative.',
    ],
    scores: { clarity: 3.8, emotional_impact: 3.2, brand_fit: 4.0, call_to_action: 4.0, overall: 3.8 },
    full_transcript: [
      { ...OLDER_PANELLISTS.david,    score: 4, reaction: "I can't read the text. Full stop. At my age, if an ad needs squinting, I move on. What is this ad actually trying to tell me? I genuinely have no idea.", liked: "It looks like a legitimate ad — not one of those scam pop-ups I've been warned about.", change: "Triple the font size. Put one clear message in large text: what Carwow is and what I should do next." },
      { ...OLDER_PANELLISTS.margaret, score: 3, reaction: "I don't know what Carwow is, I don't understand the image, and I have no reason to click. This is not for me. It might be for someone younger but it doesn't speak to my generation.", liked: "Not intrusive — it doesn't feel pushy or pressuring.", change: "Show a person my age. Show them happy with their electric car. Make it feel achievable for someone like me." },
      { ...OLDER_PANELLISTS.george,   score: 3, reaction: "Too much style, not enough substance. I want facts. What car is this? How far does it go? What does it cost? None of that is here. I'm left with nothing to hold onto.", liked: "Uncluttered layout — at least it's not overwhelming or confusing to look at.", change: "Give me one concrete fact: the range, the saving, anything. I need something real to take away." },
      { ...OLDER_PANELLISTS.helen,    score: 5, reaction: "I can feel that it's about EVs and I'm interested in that for environmental reasons. But I need more than a feeling — I need information I can use to make a decision.", liked: "The car in the image at least makes me understand the category — I'm not confused about what's being advertised.", change: "Address the charging question directly. Tell me where I can charge. That's my number one barrier." },
      { ...OLDER_PANELLISTS.peter,    score: 4, reaction: "I've been researching EVs for six months and I still don't feel ready to switch. This ad does nothing to close that gap. Where are the running cost comparisons?", liked: "Simple composition — I appreciate that it doesn't try to do too much at once.", change: "Lead with the financial case. At my age, cost certainty matters more than aspirational imagery." },
    ],
  },
};

const OLDER_IMAGE_ITERATION_2: Iteration = {
  number: 2,
  timestamp: '2026-02-27T09:08:30Z',
  asset: {
    type: 'image',
    urls: [
      '/images/ev-display-v2-square.jpg',
      '/images/ev-display-v2-portrait.jpg',
      '/images/ev-display-v2-story.jpg',
    ],
  },
  focus_group: {
    synthesis: "Significant improvement across all dimensions. Introducing a larger headline, warmer imagery, and an age-appropriate model addressed the primary accessibility and relatability failures identified in iteration 1. The 1:1 format is the most effective for this demographic — they are more likely to encounter display ads on Facebook desktop. The 9:16 story format is less relevant for 60+ audiences but is now at least legible. The 'No Haggling' message resonates strongly with this group who have deep distrust of traditional car dealerships built over decades. The remaining gap is explicit trust signals: Trustpilot score, number of users, and a direct answer to the range and home charging question.",
    summary_bullets: [
      'Larger headline and warmer image dramatically improved readability and emotional connection.',
      'Age-appropriate model removes the "this is not for me" barrier that blocked iteration 1.',
      '"No Haggling" message strongly resonates — distrust of dealerships is universal in this age group.',
      '1:1 format is most relevant for Facebook desktop — the primary platform for this demographic.',
    ],
    scores: { clarity: 6.6, emotional_impact: 6.0, brand_fit: 6.4, call_to_action: 6.4, overall: 6.4 },
    full_transcript: [
      { ...OLDER_PANELLISTS.david,    score: 7, reaction: "Now I can read it. The headline is clear, the person looks like someone my age, and that immediately makes it feel relevant. I still want a range figure but this is a real improvement.", liked: "Legibility. I can actually read the ad and understand it at a glance — that's the minimum requirement.", change: "Add a range figure. '250+ miles on a single charge' would address my number-one concern in five words." },
      { ...OLDER_PANELLISTS.margaret, score: 6, reaction: "The person makes a huge difference. They look comfortable with the car, not scared of it. That reassurance matters enormously to me. I'd consider reading more.", liked: "The warmer colour palette — it doesn't feel cold and corporate anymore. It feels human.", change: "Put the Trustpilot rating on the ad. I use Trustpilot for everything. Social proof is how I decide." },
      { ...OLDER_PANELLISTS.george,   score: 6, reaction: "Better. There's a message I can read and a person I can identify with. 'No Haggling' is the first thing in an EV ad that has spoken to me directly as an older buyer.", liked: "'No Haggling' — that's the message I needed. Dealer pressure is why I've avoided buying for two years.", change: "Make the CTA much bigger. Where do I go? What do I click? Be completely obvious — assume nothing." },
      { ...OLDER_PANELLISTS.helen,    score: 7, reaction: "This is much warmer. The image feels like a real person, not a model. I feel like the brand is talking to me now. I'd investigate this further for my own and my grandchildren's future.", liked: "The warmth. The person's expression is calm and happy — not stressed by technology. That's what I want to feel.", change: "Tell me about home charging. Can I charge in my garage? One sentence about overnight charging would seal it for me." },
      { ...OLDER_PANELLISTS.peter,    score: 6, reaction: "The cost message is clearer now. I understand this is a comparison service, not a direct sale — that's better. I prefer to do my own research without pressure.", liked: "The trusted-service feel — it reads as a legitimate, established company, not a startup.", change: "Add the number of users or a running cost comparison. Something that proves the financial case with a real number." },
    ],
  },
};

const OLDER_IMAGE_ITERATION_3: Iteration = {
  number: 3,
  timestamp: '2026-02-27T09:17:10Z',
  asset: {
    type: 'image',
    urls: [
      '/images/ev-display-v3-square.jpg',
      '/images/ev-display-v3-portrait.jpg',
      '/images/ev-display-v3-story.jpg',
    ],
  },
  focus_group: {
    synthesis: "The final iteration is appropriately calibrated for the 60+ demographic and ready for campaign deployment on Facebook and broader display placements. The 1:1 format is the clear primary creative for this audience. The large, legible headline, warm composition with an age-appropriate model, visible Trustpilot rating, '£1,200/yr saved' running cost figure, and 'No Haggling' reassurance together address the five key barriers identified across iterations: legibility, relatability, trust, range concern, and dealership anxiety. The creative will not win design awards but it will convert — which is exactly the right objective for this audience and funnel stage.",
    summary_bullets: [
      '1:1 format with large headline is the standout for Facebook/desktop display — recommend as primary creative.',
      'Age-appropriate model, Trustpilot badge, and "No Haggling" together address all five key conversion barriers.',
      'Warm, legible, reassuring — these three qualities are the complete brief for 60+ EV creative.',
      'Ready for deployment: 1:1 on Facebook as primary, 4:5 as secondary, 9:16 as supplementary Stories.',
    ],
    scores: { clarity: 8.6, emotional_impact: 8.0, brand_fit: 8.4, call_to_action: 8.4, overall: 8.4 },
    full_transcript: [
      { ...OLDER_PANELLISTS.david,    score: 9, reaction: "This is the first car ad I've seen that speaks to me directly. The range figure, the person my age, the readable text, the clear CTA. I would click this today, right now.", liked: "The specific range figure. '250+ miles' answers my main question in three words. That's all I needed.", change: "Nothing significant. Consider a phone number alongside the URL — my generation sometimes prefers to call." },
      { ...OLDER_PANELLISTS.margaret, score: 8, reaction: "The Trustpilot stars are what convinced me. I use Trustpilot for everything — restaurants, tradespeople, now cars. Seeing 4.8 from 63,000 reviews means I'll take this seriously.", liked: "Trust signals throughout — the stars, the review count, the clean brand feel. All of it builds confidence.", change: "Add a 'no commitment required' line. Older buyers need reassurance they can look without being locked in." },
      { ...OLDER_PANELLISTS.george,   score: 8, reaction: "Clear. Simple. Honest. 'No Haggling' is worth more than a hundred clever headlines. This tells me exactly what Carwow is and why I should try it. I'll go to the website.", liked: "The directness. No tricks, no pressure, no flashing timers. Just a clear offer from a credible company.", change: "Perfect for people like me. Run it on Facebook — that's where I'll actually see it." },
      { ...OLDER_PANELLISTS.helen,    score: 8, reaction: "The home charging line sealed it for me. I now understand I can charge in my garage overnight like charging a phone. That removes my last concern completely. This creative is finished.", liked: "The warmth and the practical detail together. It feels like a friend explaining something, not a salesman selling.", change: "This is ready. Test with different age-range models to see which 60+ face resonates most." },
      { ...OLDER_PANELLISTS.peter,    score: 8, reaction: "The '£1,200/yr saved' figure makes the financial case I needed. I can calculate what that means with my pension in mind. I'm convinced to at least look at the comparison.", liked: "Financial specificity — it respects my intelligence and doesn't oversimplify the economics.", change: "Ship it. This is the most honest EV ad I've seen. It earns the click rather than demanding it." },
    ],
  },
};

// ─── Landing Page Campaign ────────────────────────────────────────────────────

const LANDING_HTML_1 = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Switch to Electric | Carwow</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: system-ui, sans-serif; background: #0A1628; color: #fff; }
  nav { padding: 16px 32px; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 12px; }
  .logo { font-size: 20px; font-weight: 700; color: #00D4AA; }
  .hero { padding: 80px 32px; max-width: 800px; margin: 0 auto; text-align: center; }
  h1 { font-size: 40px; font-weight: 700; margin-bottom: 16px; }
  .hero p { font-size: 18px; color: rgba(255,255,255,0.6); margin-bottom: 32px; }
  .cta { display: inline-block; background: #00D4AA; color: #0A1628; padding: 16px 32px; border-radius: 8px; font-weight: 700; font-size: 16px; text-decoration: none; }
  .features { padding: 64px 32px; max-width: 900px; margin: 0 auto; }
  .features h2 { font-size: 28px; margin-bottom: 32px; text-align: center; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .card { padding: 24px; background: rgba(255,255,255,0.05); border-radius: 12px; }
  .card h3 { font-size: 16px; font-weight: 600; margin-bottom: 8px; }
  .card p { font-size: 14px; color: rgba(255,255,255,0.5); }
  footer { padding: 32px; text-align: center; color: rgba(255,255,255,0.3); font-size: 14px; border-top: 1px solid rgba(255,255,255,0.1); }
</style>
</head>
<body>
<nav><span class="logo">carwow</span></nav>
<div class="hero">
  <h1>Find Your Electric Car</h1>
  <p>Compare electric vehicles from UK dealers. Get competitive prices without the hassle.</p>
  <a href="#" class="cta">Compare EVs Now</a>
</div>
<div class="features">
  <h2>Why Carwow?</h2>
  <div class="grid">
    <div class="card"><h3>Hundreds of EVs</h3><p>Browse electric cars from all major manufacturers in one place.</p></div>
    <div class="card"><h3>Real Dealer Prices</h3><p>Get actual quotes from dealers. No made-up list prices.</p></div>
    <div class="card"><h3>No Haggling</h3><p>Dealers compete for your business. You get the best price automatically.</p></div>
  </div>
</div>
<footer><p>© 2026 Carwow. Trusted by millions of UK drivers.</p></footer>
</body>
</html>`;

const LANDING_HTML_2 = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Switch to Electric the Smart Way | Carwow</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: system-ui, sans-serif; background: #0A1628; color: #fff; }
  nav { padding: 16px 40px; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: space-between; }
  .logo { font-size: 22px; font-weight: 800; color: #00D4AA; }
  .nav-cta { background: #00D4AA; color: #0A1628; padding: 10px 20px; border-radius: 8px; font-weight: 700; font-size: 14px; cursor: pointer; border: none; }
  .hero { padding: 100px 40px 80px; max-width: 900px; margin: 0 auto; }
  .badge { display: inline-block; background: rgba(0,212,170,0.15); color: #00D4AA; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 600; margin-bottom: 24px; }
  h1 { font-size: 52px; font-weight: 800; line-height: 1.1; margin-bottom: 20px; }
  h1 span { color: #00D4AA; }
  .hero-sub { font-size: 20px; color: rgba(255,255,255,0.6); margin-bottom: 36px; max-width: 600px; }
  .hero-cta { display: flex; gap: 16px; flex-wrap: wrap; }
  .btn-primary { background: #00D4AA; color: #0A1628; padding: 18px 36px; border-radius: 10px; font-weight: 800; font-size: 16px; text-decoration: none; }
  .btn-secondary { background: rgba(255,255,255,0.08); color: #fff; padding: 18px 36px; border-radius: 10px; font-weight: 600; font-size: 16px; text-decoration: none; border: 1px solid rgba(255,255,255,0.2); }
  .trust { display: flex; gap: 32px; margin-top: 48px; flex-wrap: wrap; }
  .trust-item { font-size: 14px; color: rgba(255,255,255,0.5); }
  .trust-item strong { color: #fff; display: block; font-size: 22px; font-weight: 800; }
  .section { padding: 80px 40px; max-width: 1000px; margin: 0 auto; }
  .section h2 { font-size: 36px; font-weight: 800; margin-bottom: 48px; text-align: center; }
  .myths { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; }
  .myth { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px; }
  .myth .label { font-size: 11px; font-weight: 700; letter-spacing: 1px; color: rgba(255,255,255,0.4); margin-bottom: 12px; }
  .myth h3 { font-size: 17px; font-weight: 700; margin-bottom: 10px; }
  .myth p { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.6; }
  .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .step { text-align: center; padding: 32px 24px; }
  .step-num { width: 48px; height: 48px; background: rgba(0,212,170,0.15); color: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 20px; margin: 0 auto 16px; }
  .step h3 { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
  .step p { font-size: 14px; color: rgba(255,255,255,0.5); }
  .final-cta { background: linear-gradient(135deg, rgba(0,212,170,0.12), rgba(0,212,170,0.04)); border: 1px solid rgba(0,212,170,0.2); border-radius: 24px; padding: 64px 40px; text-align: center; margin: 0 40px 80px; }
  .final-cta h2 { font-size: 40px; font-weight: 800; margin-bottom: 16px; }
  .final-cta p { font-size: 18px; color: rgba(255,255,255,0.6); margin-bottom: 36px; }
  footer { padding: 32px 40px; text-align: center; color: rgba(255,255,255,0.3); font-size: 13px; border-top: 1px solid rgba(255,255,255,0.08); }
</style>
</head>
<body>
<nav>
  <span class="logo">carwow</span>
  <button class="nav-cta">Compare EVs Free →</button>
</nav>
<div class="hero">
  <div class="badge">⚡ Over 500 electric models to compare</div>
  <h1>Switch to electric<br/><span>the smart way.</span></h1>
  <p class="hero-sub">Compare hundreds of EVs from UK dealers. Real prices, no haggling, no guesswork.</p>
  <div class="hero-cta">
    <a href="#" class="btn-primary">Compare EVs Free →</a>
    <a href="#" class="btn-secondary">How it works</a>
  </div>
  <div class="trust">
    <div class="trust-item"><strong>10M+</strong>drivers trust Carwow</div>
    <div class="trust-item"><strong>500+</strong>EV models listed</div>
    <div class="trust-item"><strong>£2,400</strong>average saving</div>
  </div>
</div>
<div class="section">
  <h2>Busting the EV myths</h2>
  <div class="myths">
    <div class="myth"><div class="label">MYTH 01</div><h3>"EVs don't have enough range"</h3><p>Most modern EVs offer 200–350 miles of real-world range. The average UK driver does 20 miles a day. Carwow shows you real-world range data — not manufacturer claims.</p></div>
    <div class="myth"><div class="label">MYTH 02</div><h3>"Charging is too inconvenient"</h3><p>70% of EV owners charge at home overnight. With a home charger installed, you wake up to a full battery every morning. Carwow's guide explains home charging in under 3 minutes.</p></div>
    <div class="myth"><div class="label">MYTH 03</div><h3>"EVs cost too much"</h3><p>Factor in fuel, servicing and tax savings and many EVs cost less to run than equivalent petrol cars. Carwow shows total cost of ownership — not just sticker price.</p></div>
  </div>
</div>
<div class="section">
  <h2>How Carwow works</h2>
  <div class="steps">
    <div class="step"><div class="step-num">1</div><h3>Tell us what you want</h3><p>Set your budget, range needs and preferences. Takes 2 minutes.</p></div>
    <div class="step"><div class="step-num">2</div><h3>Dealers compete for you</h3><p>UK dealers submit their best prices. You compare them side by side.</p></div>
    <div class="step"><div class="step-num">3</div><h3>Choose with confidence</h3><p>Pick the deal that works for you. No haggling, no pressure.</p></div>
  </div>
</div>
<div class="final-cta">
  <h2>Ready to go electric?</h2>
  <p>Join 10 million UK drivers who found their perfect car on Carwow.</p>
  <a href="#" class="btn-primary">Compare EVs Free — No Commitment →</a>
</div>
<footer>© 2026 Carwow Ltd. All rights reserved.</footer>
</body>
</html>`;

const LANDING_HTML_3 = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Switch to Electric the Smart Way | Carwow — Find, Compare & Save</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: system-ui, sans-serif; background: #0A1628; color: #fff; }
  nav { padding: 16px 40px; border-bottom: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; background: rgba(10,22,40,0.95); backdrop-filter: blur(12px); z-index: 10; }
  .logo { font-size: 22px; font-weight: 800; color: #00D4AA; }
  .nav-links { display: flex; gap: 24px; }
  .nav-links a { font-size: 14px; color: rgba(255,255,255,0.6); text-decoration: none; }
  .nav-cta { background: #00D4AA; color: #0A1628; padding: 10px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; cursor: pointer; border: none; }
  .hero { padding: 100px 40px 80px; max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  .hero-left {}
  .badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(0,212,170,0.12); color: #00D4AA; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; margin-bottom: 28px; border: 1px solid rgba(0,212,170,0.2); }
  h1 { font-size: 56px; font-weight: 900; line-height: 1.05; margin-bottom: 24px; }
  h1 span { color: #00D4AA; }
  .hero-sub { font-size: 18px; color: rgba(255,255,255,0.6); margin-bottom: 40px; line-height: 1.6; }
  .hero-cta { display: flex; gap: 12px; margin-bottom: 48px; }
  .btn-primary { background: #00D4AA; color: #0A1628; padding: 18px 32px; border-radius: 10px; font-weight: 800; font-size: 16px; text-decoration: none; white-space: nowrap; }
  .btn-secondary { background: rgba(255,255,255,0.06); color: #fff; padding: 18px 32px; border-radius: 10px; font-weight: 600; font-size: 16px; text-decoration: none; border: 1px solid rgba(255,255,255,0.15); }
  .trust { display: flex; gap: 32px; }
  .trust-item { }
  .trust-item strong { color: #00D4AA; display: block; font-size: 28px; font-weight: 900; }
  .trust-item span { font-size: 13px; color: rgba(255,255,255,0.45); }
  .hero-right { background: rgba(0,212,170,0.06); border: 1px solid rgba(0,212,170,0.15); border-radius: 24px; padding: 32px; }
  .rating { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .stars { color: #FFD700; font-size: 20px; letter-spacing: 2px; }
  .rating-text { font-size: 14px; color: rgba(255,255,255,0.6); }
  .rating-text strong { color: #fff; }
  .quote { font-size: 15px; color: rgba(255,255,255,0.7); line-height: 1.7; font-style: italic; margin-bottom: 20px; }
  .quote-author { font-size: 13px; color: rgba(255,255,255,0.4); }
  .section { padding: 80px 40px; max-width: 1100px; margin: 0 auto; }
  .section-label { font-size: 12px; font-weight: 700; letter-spacing: 2px; color: #00D4AA; text-transform: uppercase; margin-bottom: 16px; }
  .section h2 { font-size: 40px; font-weight: 800; margin-bottom: 56px; }
  .myths { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .myth { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 20px; padding: 32px; transition: border-color 0.2s; }
  .myth:hover { border-color: rgba(0,212,170,0.3); }
  .myth-icon { font-size: 28px; margin-bottom: 16px; }
  .myth h3 { font-size: 17px; font-weight: 700; margin-bottom: 12px; }
  .myth p { font-size: 14px; color: rgba(255,255,255,0.55); line-height: 1.7; }
  .myth .truth { margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(0,212,170,0.2); font-size: 13px; color: #00D4AA; font-weight: 600; }
  .categories { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .cat { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 28px 24px; cursor: pointer; transition: all 0.2s; }
  .cat:hover { background: rgba(0,212,170,0.06); border-color: rgba(0,212,170,0.2); }
  .cat-icon { font-size: 32px; margin-bottom: 12px; }
  .cat h3 { font-size: 16px; font-weight: 700; margin-bottom: 6px; }
  .cat p { font-size: 13px; color: rgba(255,255,255,0.45); }
  .cat .count { margin-top: 16px; font-size: 13px; color: #00D4AA; font-weight: 600; }
  .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
  .step { text-align: center; }
  .step-num { width: 56px; height: 56px; background: rgba(0,212,170,0.1); color: #00D4AA; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 24px; margin: 0 auto 20px; border: 2px solid rgba(0,212,170,0.2); }
  .step h3 { font-size: 18px; font-weight: 700; margin-bottom: 10px; }
  .step p { font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.6; }
  .final-cta { background: linear-gradient(135deg, rgba(0,212,170,0.1), rgba(0,212,170,0.03)); border: 1px solid rgba(0,212,170,0.2); border-radius: 28px; padding: 80px 40px; text-align: center; margin: 0 40px 80px; }
  .final-cta h2 { font-size: 48px; font-weight: 900; margin-bottom: 20px; }
  .final-cta p { font-size: 18px; color: rgba(255,255,255,0.6); margin-bottom: 16px; max-width: 500px; margin-left: auto; margin-right: auto; }
  .final-sub { font-size: 14px; color: rgba(255,255,255,0.35) !important; }
  .cta-group { display: flex; gap: 16px; justify-content: center; margin-top: 40px; flex-wrap: wrap; }
  footer { padding: 40px; border-top: 1px solid rgba(255,255,255,0.07); }
  .footer-inner { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
  .footer-links { display: flex; gap: 24px; }
  .footer-links a { font-size: 13px; color: rgba(255,255,255,0.3); text-decoration: none; }
  .footer-copy { font-size: 13px; color: rgba(255,255,255,0.25); }
</style>
</head>
<body>
<nav>
  <span class="logo">carwow</span>
  <div class="nav-links">
    <a href="#">EVs</a><a href="#">Hybrids</a><a href="#">How it works</a><a href="#">Reviews</a>
  </div>
  <button class="nav-cta">Compare EVs Free →</button>
</nav>
<div class="hero">
  <div class="hero-left">
    <div class="badge">⚡ Trusted by 10 million UK drivers</div>
    <h1>Switch to<br/>electric,<br/><span>the smart way.</span></h1>
    <p class="hero-sub">Cut fuel bills by up to 70%. Compare 500+ EVs from UK dealers — real prices, no haggling, no guesswork.</p>
    <div class="hero-cta">
      <a href="#" class="btn-primary">Compare EVs Free →</a>
      <a href="#" class="btn-secondary">See how it works</a>
    </div>
    <div class="trust">
      <div class="trust-item"><strong>10M+</strong><span>UK drivers</span></div>
      <div class="trust-item"><strong>500+</strong><span>EV models</span></div>
      <div class="trust-item"><strong>£2,400</strong><span>avg. saving</span></div>
    </div>
  </div>
  <div class="hero-right">
    <div class="rating">
      <div class="stars">★★★★★</div>
      <div class="rating-text"><strong>4.8 / 5</strong> on Trustpilot · 63,000+ reviews</div>
    </div>
    <div class="quote">"I was nervous about going electric but Carwow made it so simple. I compared 12 different EVs, got real dealer prices, and saved £2,100 off my Model 3. Zero haggling."</div>
    <div class="quote-author">— James T., London · Switched to Tesla Model 3</div>
  </div>
</div>
<div class="section">
  <div class="section-label">Clearing up confusion</div>
  <h2>The EV myths, busted.</h2>
  <div class="myths">
    <div class="myth"><div class="myth-icon">🔋</div><h3>"The range isn't enough"</h3><p>The average UK driver travels 20 miles a day. Most modern EVs offer 200–350 miles real-world range — that's weeks of commuting on a single charge.</p><div class="truth">✓ The Vauxhall Astra Electric does 258 miles. The Tesla Model Y does 331.</div></div>
    <div class="myth"><div class="myth-icon">⚡</div><h3>"Charging is a nightmare"</h3><p>70% of EV owners charge at home overnight — like charging your phone. You start every morning with a full battery. No queues, no petrol stations.</p><div class="truth">✓ A home charger installs in 3 hours. Carwow guides you through the whole process.</div></div>
    <div class="myth"><div class="myth-icon">💷</div><h3>"EVs are too expensive"</h3><p>Factor in fuel savings (up to 70% cheaper per mile), lower servicing costs, and zero VED tax — and many EVs cost less per month than an equivalent petrol car.</p><div class="truth">✓ Average EV owner saves £1,200/year on fuel vs. petrol equivalent.</div></div>
  </div>
</div>
<div class="section">
  <div class="section-label">Browse by type</div>
  <h2>Find the right EV for you.</h2>
  <div class="categories">
    <div class="cat"><div class="cat-icon">⚡</div><h3>Pure Electric</h3><p>Zero emissions, lowest running costs, best for regular commuters and city drivers.</p><div class="count">→ 320 models from £22,000</div></div>
    <div class="cat"><div class="cat-icon">🔌</div><h3>Plug-in Hybrid</h3><p>Electric for short journeys, petrol for longer trips. Perfect if you're not ready to commit fully.</p><div class="count">→ 140 models from £28,000</div></div>
    <div class="cat"><div class="cat-icon">🌿</div><h3>Mild Hybrid</h3><p>Improved efficiency with familiar refuelling. A smart first step toward electrification.</p><div class="count">→ 90 models from £18,000</div></div>
  </div>
</div>
<div class="section">
  <div class="section-label">Simple process</div>
  <h2>How Carwow works.</h2>
  <div class="steps">
    <div class="step"><div class="step-num">1</div><h3>Tell us what you need</h3><p>Set your budget, range, and must-haves. Takes 2 minutes. No account needed.</p></div>
    <div class="step"><div class="step-num">2</div><h3>Dealers compete for you</h3><p>Multiple UK dealers submit their best prices. You see them all, side by side.</p></div>
    <div class="step"><div class="step-num">3</div><h3>Choose with confidence</h3><p>Pick your deal, arrange a test drive, and drive away. No haggling, ever.</p></div>
  </div>
</div>
<div class="final-cta">
  <h2>Ready to go electric?</h2>
  <p>Compare 500+ EVs free. No commitment, no pressure.</p>
  <p class="final-sub">Join 10 million UK drivers who found their perfect car on Carwow.</p>
  <div class="cta-group">
    <a href="#" class="btn-primary">Compare EVs Free — No Commitment →</a>
    <a href="#" class="btn-secondary">Browse all electric cars</a>
  </div>
</div>
<footer>
  <div class="footer-inner">
    <span class="logo">carwow</span>
    <div class="footer-links"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Contact</a><a href="#">About</a></div>
    <span class="footer-copy">© 2026 Carwow Ltd. All rights reserved.</span>
  </div>
</footer>
</body>
</html>`;

const LANDING_ITERATION_1: Iteration = {
  number: 1,
  timestamp: '2026-02-27T09:00:00Z',
  asset: {
    type: 'landing_page',
    html_path: '/landing/ev-hub-v1.html',
    content: { html: LANDING_HTML_1 },
  },
  focus_group: {
    synthesis: "The page is functional but lacks the trust signals, emotional narrative, and objection-handling needed to convert EV-curious visitors. The hero is too sparse — there's no proof point, no urgency, and no acknowledgement of the real barriers to EV adoption (range anxiety, charging complexity, cost). The 'Why Carwow?' section is too brief to be persuasive. The CTA 'Compare EVs Now' is fine but unsupported. At this conversion stage, visitors need reassurance, specificity, and a clear journey. The page needs significantly more content and social proof before it can be deployed.",
    summary_bullets: [
      'Hero lacks proof points — no mention of scale (10M+ drivers, 500+ EVs) to establish credibility.',
      'No objection-handling — EV-curious buyers need range, charging and cost myths addressed directly.',
      'Single CTA with no supporting content — visitors have no reason to click without more context.',
      'Footer too sparse — missing trust marks (Trustpilot, FCA), legal links, brand credibility signals.',
    ],
    scores: { clarity: 5.6, emotional_impact: 3.4, brand_fit: 5.0, call_to_action: 4.6, overall: 4.7 },
    full_transcript: [
      { ...PANELLISTS.sarah,  score: 5, reaction: "It's a page but it doesn't convince me. I came with questions about EVs and I'm leaving with the same questions. There's no information here to make me confident enough to click.", liked: 'Clean layout, easy to read.', change: 'Add real content — how much will I save? What range do the EVs have? Answer my questions on the page.' },
      { ...PANELLISTS.marcus, score: 5, reaction: "Three generic bullet points don't make a case for switching a fleet. I need cost data, reliability data, charging infrastructure coverage. None of that is here.", liked: 'Fast loading, professional design.', change: 'Add a fleet section or at minimum real statistics that back up the claims.' },
      { ...PANELLISTS.priya,  score: 4, reaction: "Where's the environmental angle? This page doesn't mention sustainability once. For eco-motivated buyers like me, that's a massive missed opportunity.", liked: 'The green (#00D4AA) colour — it signals eco without being heavy-handed.', change: 'Add emissions savings data. Tell me how much CO2 I save switching to electric.' },
      { ...PANELLISTS.james,  score: 5, reaction: "This page doesn't address my concerns about EVs at all. 'Hundreds of EVs' — that's it? I need range comparisons, charging guides, honest running cost breakdowns.", liked: 'Straightforward navigation — I can find things easily.', change: 'A myth-busting section would keep me on the page. Address the range and cost questions head-on.' },
      { ...PANELLISTS.emma,   score: 4, reaction: "Very thin on content. As a family buyer I need to know if any of these EVs fit my lifestyle. There's nothing here about family vehicles or practical use cases.", liked: 'The CTA is clear — I know what the page wants me to do.', change: 'Show EV categories (family, city, long-range). Make the choice feel navigable, not overwhelming.' },
    ],
  },
};

const LANDING_ITERATION_2: Iteration = {
  number: 2,
  timestamp: '2026-02-27T09:09:00Z',
  asset: {
    type: 'landing_page',
    html_path: '/landing/ev-hub-v2.html',
    content: { html: LANDING_HTML_2 },
  },
  focus_group: {
    synthesis: "A substantial improvement. The myth-busting section is the page's biggest new asset — all five panellists called it out as a conversion driver. The hero trust signals (10M+, 500+, £2,400 saving) are doing real work. The How Carwow Works steps section is clear and reduces friction. Key gaps remaining: the hero feels text-heavy on mobile with no visual social proof (a Trustpilot widget or quote would help), and the 9:16 mobile view needs testing. The descriptions of EV categories should be clickable rather than static. One more iteration focusing on social proof, mobile layout, and category interactivity should produce a high-converting final page.",
    summary_bullets: [
      'Myth-busting section is the standout addition — directly addresses the #1 conversion barrier for EV-curious buyers.',
      'Trust signals in the hero (10M+, 500+ EVs, £2,400 saving) are working hard — keep these prominent.',
      "Hero is text-heavy without visual social proof — a Trustpilot rating or customer quote would close the credibility gap.",
      'EV categories are static — making them clickable (linking to filtered search results) increases CTA surface area.',
    ],
    scores: { clarity: 7.4, emotional_impact: 6.6, brand_fit: 7.0, call_to_action: 7.2, overall: 7.1 },
    full_transcript: [
      { ...PANELLISTS.sarah,  score: 7, reaction: "'Cut Fuel Bills by Up to 70%' in the hero is the headline I needed. That answers my number-one question before I even scroll. The myths section is great — I stayed on the page reading it.", liked: "The £2,400 average saving claim — that's a real number that changes my calculation.", change: "Add a Trustpilot badge near the main CTA. I want third-party validation before I submit my details." },
      { ...PANELLISTS.marcus, score: 7, reaction: "The scale claims are convincing now. The How It Works section is clear — I understand the process. I'd still want a fleet-specific path but this serves consumers well.", liked: "'Dealers compete for you' — that framing removes the adversarial feel of car buying I hate.", change: "Make the EV category cards clickable. If I click 'Pure Electric' I should see those 320 models immediately." },
      { ...PANELLISTS.priya,  score: 7, reaction: "The myth section addresses all my eco-friend's objections. I'd share this page with people on the fence about switching. The brand colour is prominent and right.", liked: "The myth-busting format — you're arguing against yourself proactively, which builds trust.", change: "Add one line about CO2 savings or environmental impact to the myth section for eco buyers." },
      { ...PANELLISTS.james,  score: 7, reaction: "The range myth is addressed head-on — 'average UK driver does 20 miles a day' is the stat I needed to hear. I scrolled the whole page for the first time.", liked: "The honest, direct tone. It doesn't oversell — it explains clearly.", change: "A customer review or quote would seal it. Right now I have to take Carwow's word for the claims." },
      { ...PANELLISTS.emma,   score: 7, reaction: "The EV categories section is exactly what I needed — now I know there's a 'family' option in plug-in hybrids. Makes the choice manageable.", liked: "The step-by-step process section — removes the 'unknown' fear of buying a car online.", change: "Make the category cards link to filtered results. Static cards feel like a dead end." },
    ],
  },
};

const LANDING_ITERATION_3: Iteration = {
  number: 3,
  timestamp: '2026-02-27T09:17:30Z',
  asset: {
    type: 'landing_page',
    html_path: '/landing/ev-hub-v3.html',
    content: { html: LANDING_HTML_3 },
  },
  focus_group: {
    synthesis: "The final page is conversion-ready. The two-column hero with Trustpilot social proof and a customer quote in the right panel is the single biggest improvement — it instantly establishes credibility and emotional connection. The myth section now includes specific data points ('Tesla Model Y does 331 miles', 'saves £1,200/year') that transform assertions into evidence. The sticky navigation with persistent CTA keeps the action visible throughout. All five panellists said they would click the primary CTA on this version. The page is ready to deploy.",
    summary_bullets: [
      "Two-column hero with customer quote dramatically increases trust — all 5 panellists said they'd click the CTA.",
      'Myth-busting now has specific data points (model names, mileage, savings) — transforms claims into evidence.',
      'Sticky navigation keeps CTA visible throughout — increases conversion surface area significantly.',
      "Category cards with pricing ('from £22,000') and model counts give visitors actionable next steps.",
    ],
    scores: { clarity: 9.0, emotional_impact: 8.6, brand_fit: 8.8, call_to_action: 9.2, overall: 8.9 },
    full_transcript: [
      { ...PANELLISTS.sarah,  score: 9, reaction: "The customer quote on the right — 'I saved £2,100 off my Model 3' — made it real for me. That's a person like me who did this successfully. I'd click the CTA immediately.", liked: "The combination of data (£2,400 average saving) and human story. Both work together perfectly.", change: "Nothing material. A/B test the hero CTA text — 'Find My EV' vs 'Compare EVs Free' could be interesting." },
      { ...PANELLISTS.marcus, score: 9, reaction: "Sticky nav is a smart decision — the CTA is always visible. The pricing on the category cards ('from £22,000') removes a major uncertainty. Professional, high-quality page.", liked: "The overall credibility stack: Trustpilot stars, 10M+ drivers, 63,000 reviews. Impossible to argue with.", change: "Would still love a fleet tab but I understand this is a consumer campaign. Ready to deploy." },
      { ...PANELLISTS.priya,  score: 9, reaction: "The £1,200/year fuel saving fact in the myths section is exactly the proof point eco buyers need. The visual hierarchy guides you through the objections beautifully.", liked: "The myth section is now a genuine information resource, not just marketing copy. I trust it.", change: "Maybe one graphic element showing emissions reduction in the myth section — but this is already strong." },
      { ...PANELLISTS.james,  score: 8, reaction: "The James T. quote in the hero is a coincidence but it worked on me. The specific numbers throughout ('258 miles', '£1,200/year') turn vague claims into believable facts.", liked: "Directness. No fluff. Every section earns its place on the page.", change: "The quote person should probably be older (52 like me) to cover my demographic, but the page converts me regardless." },
      { ...PANELLISTS.emma,   score: 9, reaction: "The PHEV category with 'perfect if you're not ready to commit fully' — that's me, exactly described. I clicked through to browse PHEVs (in the demo). This page works.", liked: "The category descriptions are written for real people, not SEO bots. Human and useful.", change: "This is the best version. Run it." },
    ],
  },
};

// ─── Campaign Definitions ─────────────────────────────────────────────────────

export const DEMO_CAMPAIGNS: DemoCampaign[] = [
  {
    id: 'demo-rsa',
    name: 'EV Switch — RSA Copy',
    asset_type: 'rsa_copy',
    brief: 'Google RSA campaign for Carwow EV/hybrid vehicle category. Target: UK drivers (28–50) actively researching their next car, who are EV-curious but hesitant due to range anxiety, charging confusion, and upfront cost concerns. Goal: drive clicks to Carwow\'s EV comparison pages. USP: compare hundreds of EVs, get real dealer prices, no haggling. Tone: confident, clear, helpful — demystify the switch to electric.',
    created_at: '2026-02-27T09:00:00Z',
    iterations: [RSA_ITERATION_1, RSA_ITERATION_2, RSA_ITERATION_3],
  },
  {
    id: 'demo-images-young',
    name: 'EV Switch — Display Images — Younger Driver (18-30)',
    asset_type: 'image',
    brief: 'Meta/Instagram display ad for Carwow\'s EV category. Target: first-time buyers and young professionals aged 18-30, driven by sustainability values, social status, and fuel cost savings. Highly active on Instagram and TikTok, respond to bold authentic visuals, peer-group imagery, and purposeful brand identity. Goal: drive traffic to Carwow EV comparison pages. Formats: 1:1 square, 4:5 portrait, 9:16 story.',
    created_at: '2026-02-27T09:00:00Z',
    iterations: [YOUNG_IMAGE_ITERATION_1, YOUNG_IMAGE_ITERATION_2, YOUNG_IMAGE_ITERATION_3],
  },
  {
    id: 'demo-images-peak',
    name: 'EV Switch — Display Images — EV Adoption Peak (35-54)',
    asset_type: 'image',
    brief: 'Meta/Instagram display ad for Carwow\'s EV category. Target: eco-conscious UK professionals 35–54 — the peak EV-switching demographic. Mix of family buyers, fleet managers, and established professionals with disposable income. Visual style: clean, modern, aspirational. Formats needed: 1:1 square, 4:5 portrait, 9:16 story.',
    created_at: '2026-02-27T09:00:00Z',
    iterations: [IMAGE_ITERATION_1, IMAGE_ITERATION_2, IMAGE_ITERATION_3],
  },
  {
    id: 'demo-images-older',
    name: 'EV Switch — Display Images — Older Driver (60+)',
    asset_type: 'image',
    brief: 'Meta/Facebook display ad for Carwow\'s EV category. Target: drivers aged 60+, primarily Facebook users, motivated by running cost savings, environmental legacy, and reliability. Key concerns: range anxiety, home charging complexity, technology unfamiliarity, and upfront cost vs. fixed income. Goal: demystify electric car ownership for an older demographic. Formats: 1:1 square, 4:5 portrait, 9:16 story.',
    created_at: '2026-02-27T09:00:00Z',
    iterations: [OLDER_IMAGE_ITERATION_1, OLDER_IMAGE_ITERATION_2, OLDER_IMAGE_ITERATION_3],
  },
  {
    id: 'demo-landing',
    name: 'EV Switch — Landing Page',
    asset_type: 'landing_page',
    brief: 'High-converting landing page for Carwow\'s Electric Vehicle hub. Target: UK drivers 28–50, price-conscious, worried about range and charging. Goal: convert EV-curious visitors into comparison searches.',
    created_at: '2026-02-27T09:00:00Z',
    iterations: [LANDING_ITERATION_1, LANDING_ITERATION_2, LANDING_ITERATION_3],
  },
];

export const getDemoCampaign = (id: string) => DEMO_CAMPAIGNS.find(c => c.id === id);

// Map: any "new campaign" type → which demo campaign to redirect to
export const DEMO_REDIRECT: Record<AssetType, string> = {
  rsa_copy: 'demo-rsa',
  image: 'demo-images-peak',
  landing_page: 'demo-landing',
  video: 'demo-rsa', // fallback until video assets are provided
};
