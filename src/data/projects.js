export const projectGroups = {
  swe: {
    title: 'SWE Projects',
    description: 'Product and engineering builds with a stronger focus on application flow, frontend and backend delivery, and end-to-end implementation.',
  },
  ai: {
    title: 'AI Projects',
    description: 'Projects where recommendation, NLP, chatbot, or model-assisted workflows are a central part of the experience.',
  },
};

const projectEntries = [
  {
    slug: 'equify',
    group: 'swe',
    accent: 'cyan',
    year: '2024',
    category: 'UBS Tomorrow Talent Program',
    title: 'Equify',
    teaser:
      'A mobile app focused on reducing unconscious workplace bias through personalised learning, short-form video, and community discussion.',
    summary:
      'Equify was developed during the UBS Tomorrow Talent Program as a solo full-stack mobile app addressing unconscious bias in the workplace through assessments, personalised content, and role-based insights.',
    challenge:
      'The project needed to make workplace bias education more engaging and actionable, while still giving administrators useful tools to manage content and review participation patterns.',
    outcome:
      'Equify was selected as a Top 3 finalist in the UBS Ideathon among 25+ teams and was presented directly to UBS leadership.',
    metrics: [
      { label: 'Recognition', value: 'Top 3 finalist' },
      { label: 'Teams', value: '25+ teams' },
      { label: 'Role', value: 'Solo full-stack build' },
    ],
    highlights: [
      'Built personalised bias assessment flows to guide each user through tailored learning content.',
      'Designed a short-form video feed inspired by YouTube Shorts to improve engagement with educational material.',
      'Added a community forum and analytics dashboard with multiple chart views for demographic insights.',
      'Implemented AI-powered video categorisation with FastText NLP and role-based admin controls.',
    ],
    stack: ['React Native', 'FastText NLP', 'Mobile product design', 'Analytics dashboards', 'Role-based access'],
    video: 'https://www.youtube.com/embed/S30leXNflMY',
  },
  {
    slug: 'dresssense-ai',
    group: 'ai',
    accent: 'amber',
    year: '2024',
    category: 'Academic Project',
    title: 'DressSense AI',
    teaser:
      'A fashion assistant that combines outfit recommendations, resale comparison, and wardrobe management into one mobile experience.',
    summary:
      'DressSense AI was built as an academic team project focused on helping users get more value from their wardrobe through AI-driven recommendations, marketplace comparison, and automated closet organisation.',
    challenge:
      'The product had to balance fashion discovery, practical resale value, and fast mobile usability while handling image uploads, item descriptions, and recommendation logic.',
    outcome:
      'The final system delivered a responsive Expo React Native frontend, Python APIs, OpenAI-powered recommendation features, and Firebase-backed wardrobe storage.',
    metrics: [
      { label: 'Role', value: 'Mobile app developer' },
      { label: 'Mode', value: 'Team project' },
      { label: 'Focus', value: 'AI fashion assistant' },
    ],
    highlights: [
      'Implemented outfit recommendations and a fashion chatbot using OpenAI with domain-specific NLP constraints.',
      'Integrated Carousell API price comparison across 1,000+ clothing items to support resale and decision-making.',
      'Built a closet module using image upload and AI-generated item descriptions stored in Firebase.',
      'Delivered the frontend in Expo React Native with Python backend APIs for smoother mobile use.',
    ],
    stack: ['Expo React Native', 'Python APIs', 'OpenAI API', 'Firebase', 'Carousell API'],
    video: 'https://www.youtube.com/embed/raq6prdYOvs',
  },
  {
    slug: 'sallyrise',
    group: 'ai',
    accent: 'mint',
    year: '2024',
    category: 'TechFest 2024 Hackathon',
    title: 'SallyRise',
    teaser: 'A hackathon-built study platform with chatbot support and AI-generated flashcards from uploaded notes.',
    summary:
      'SallyRise was developed in a 48-hour hackathon as a full-stack study assistant that combines note understanding, chatbot responses, and flashcard generation for faster revision.',
    challenge:
      'The team had to build a working prototype quickly while combining frontend delivery, backend integration, database support, and ML-driven features into one experience.',
    outcome:
      'The result was a working prototype with Flask and MySQL services, an AI-powered chatbot, note-to-flashcard generation, and agile scope management within the hackathon window.',
    metrics: [
      { label: 'Event', value: '48-hour hackathon' },
      { label: 'Role', value: 'Full-stack developer' },
      { label: 'Output', value: 'Working prototype' },
    ],
    highlights: [
      'Developed the frontend with HTML and CSS and integrated backend services through Flask and MySQL.',
      'Trained and tuned AI or ML models in Python to answer questions and generate flashcards from uploaded notes.',
      'Helped manage agile team collaboration, feature scope, and code integration under tight hackathon deadlines.',
    ],
    stack: ['Flask', 'MySQL', 'Python', 'HTML/CSS', 'Chatbot workflows'],
    video: 'https://www.youtube.com/embed/A5s-SpdTFiY',
  },
];

export const getProjectPath = (slug) => `/projects/${slug}`;

export const projects = projectEntries.map((project, index) => ({
  ...project,
  order: index,
  groupTitle: projectGroups[project.group]?.title ?? 'Projects',
  path: getProjectPath(project.slug),
}));

export const projectMap = Object.fromEntries(projects.map((project) => [project.slug, project]));

export const getProjectBySlug = (slug) => projectMap[slug] ?? null;

export const getProjectsByGroup = (group) => projects.filter((project) => project.group === group);

export const getNextProject = (slug) => {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return projects[0];
  }

  return projects[(currentIndex + 1) % projects.length];
};
