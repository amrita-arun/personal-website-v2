const base = '/work/verso'

export const versoMedia = {
  hero: `${base}/insightsCanvas.gif`,
  library: `${base}/library.gif`,
  reading: `${base}/currentlyReading.png`,
  insights: `${base}/insights2.png`,
  drawingConnections: `${base}/connections.gif`,
  annotationPipeline: `${base}/annotationToCanvas.gif`,
  markingResonant: `${base}/resonant.gif`,
  themeClusters: `${base}/renameClusters.gif`,
  timelineScrubber: `${base}/timeline.gif`,
  ghostPrompts: `${base}/ghostPrompt.gif`,
  kindle: `${base}/kindle.png`,
  libby: `${base}/libby.png`,
  fig03Canvas: `${base}/INSIGHTS.png`,
  fig04Prototype: `${base}/insightsCanvas.gif`,
  winner: `${base}/winner.png`,
} as const

export const versoOutcomes = {
  title: 'CreateSC 2026 · 3rd Place · MVP',
  body: [
    'Verso was built in 24 hours for CreateSC, USC’s annual designathon focused on reimagining digital experiences.',
    'The project placed 3rd overall in the Figma Make track out of over 50 submissions.',
  ],
  media: versoMedia.winner,
} as const

export const versoChips = [
  "CreateSC '26",
  '3rd Place',
  'Solo',
  'UI/UX',
  'Figma Make',
  'Interaction Design',
] as const

export const versoMeta = [
  { label: 'ROLE', value: 'Solo Designer' },
  { label: 'TIMELINE', value: '24 hours' },
  {
    label: 'TOOLS',
    value: ['Figma Design', 'Figma Make', 'Claude Sonnet'],
  },
  { label: 'OUTCOME', value: ['3rd Place', 'MVP'] },
] as const

export const versoComparisonRows = [
  { feature: 'Margin Annotations', verso: true, kindle: false, libby: false },
  { feature: 'In-App Reading Platform', verso: true, kindle: true, libby: true },
  {
    feature: 'Synthesize thoughts across books',
    verso: true,
    kindle: false,
    libby: false,
  },
  { feature: 'Enhanced Recommendations', verso: true, kindle: false, libby: false },
] as const

export const versoReadingTools = {
  sectionLabel: "A QUICK READ ON TODAY'S READING TOOLS (pun intended)",
  intro: {
    beforeBold:
      'Due to the 24hr time constraints, my project guidelines came from',
    bold: 'lived experience and frustration',
    afterBold:
      'with how reading has been digitized. I focused on three patterns that felt fundamentally broken:',
  },
  items: [
    {
      title: 'Against algorithmic discovery',
      body:
        'Reading has become algorithmic. We default to ratings, lists, and “what everyone else thinks” – losing the experience of wandering and choosing for ourselves.',
    },
    {
      title: 'Annotation is flattened',
      body:
        'Digital highlighting captures text, but not thought. It removes the friction that makes reflection meaningful.',
    },
    {
      title: 'Reflection is disconnected',
      body:
        'Notes live in isolation. There’s no way to see patterns across what you’ve read – or what it reveals about you.',
    },
  ],
} as const

export const versoSolutionFeatures = [
  {
    title: '01 · Library',
    body: [
      'Book recommendations are presented as a spatial shelf - no search, no ratings.',
      'Recommendations are generated from your own annotations.',
    ],
    media: versoMedia.library,
    reverse: false,
  },
  {
    title: '02 · Currently Reading',
    body: [
      'A distraction-free reading experience with generous margins.',
      'No progress bars. No completion metrics.',
      'Highlight → annotate → reflect.',
    ],
    media: versoMedia.reading,
    reverse: true,
  },
  {
    title: '03 · Insights',
    body: [
      'Annotations evolve into a living canvas.',
      'Ideas cluster into emergent themes',
      'Connections form across books',
      'Reflection prompts appear contextually',
      'Over time, your thinking becomes visible.',
    ],
    media: versoMedia.insights,
    reverse: false,
    isList: true,
  },
] as const

export const versoInteractionFeatures = [
  {
    title: '01 · Annotation → Canvas Pipeline',
    body: [
      'The moment you write something, it enters the Insights canvas, drifting into a larger system of ideas. Reading is no longer linear - it accumulates and transforms.',
    ],
    media: versoMedia.annotationPipeline,
    reverse: false,
  },
  {
    title: '02 · Drawing Connections',
    body: [
      'Users can link annotations across books and moments.',
      'This turns isolated thoughts into relationships - making meaning not just from what you read, but how ideas echo and evolve.',
    ],
    media: versoMedia.drawingConnections,
    reverse: true,
  },
  {
    title: '03 · Marking as Resonant',
    body: [
      'A single tap marks an idea as especially meaningful.',
      "The brain icon isn't a typical \"like\", it's a signal of cognitive weight, helping the system understand what stays with you over time.",
    ],
    media: versoMedia.markingResonant,
    reverse: false,
  },
  {
    title: '04 · Renaming Theme Clusters',
    body: [
      'Emerging clusters can be named by the user.',
      'Instead of predefined categories, meaning is authored. The system suggests patterns - but you define what they represent.',
    ],
    media: versoMedia.themeClusters,
    reverse: true,
  },
  {
    title: '05 · Timeline Scrubber',
    body: [
      'A draggable timeline reveals how thinking changes over time.',
      'Older annotations fade as you move through time, allowing you to how your thought shifted over time.',
    ],
    media: versoMedia.timelineScrubber,
    reverse: false,
  },
  {
    title: '06 · Ghost Prompts',
    body: [
      'Reflection prompts appear softly within the canvas over time.',
      'They emerge without interrupting. Once answered, your words remain while the prompt fades, ensuring your voice outlasts the system.',
    ],
    media: versoMedia.ghostPrompts,
    reverse: true,
  },
] as const
