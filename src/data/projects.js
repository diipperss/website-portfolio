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
    showInList: false,
    accent: 'cyan',
    year: '2024',
    sortDate: '2024-07',
    category: 'UBS Tomorrow Talent Program',
    title: 'Equify',
    teaser:
      'A mobile app focused on reducing unconscious workplace bias through personalised learning, short-form video, and community discussion.',
    summary:
      'Equify was developed during the UBS Tomorrow Talent Program as a solo full-stack mobile app addressing unconscious bias in the workplace through assessments, personalised content, and role-based insights.',
    challenge:
      'The project needed to make workplace bias education more engaging and actionable, while still giving administrators useful tools to manage content and review participation patterns.',
    outcome:
      'Equify was selected as a Top 3 finalist in the UBS Ideathon among 25+ teams and was presented directly to UBS leadership. It garnered great feedback from the leadership upon implementation',
    metrics: [
      { label: 'Ideathon', value: 'Top 3 finalist' },
      { label: 'Role', value: 'Solo full-stack build' },
    ],
    highlights: [
      'Built personalised bias assessment flows to guide each user through tailored learning content.',
      "Designed a short-form video feed inspired by YouTube Shorts to improve engagement with educational material according to each user's learning path.",
      'Added a community forum and analytics dashboard with multiple chart views for demographic insights.',
      'Implemented AI-powered video categorisation with FastText NLP and role-based admin controls.',
    ],
    stack: ['React Native', 'Spring Boot','FastText NLP'],
    video: 'https://www.youtube.com/embed/S30leXNflMY',
  },
  {
    slug: 'dresssense-ai',
    group: 'swe',
    groups: ['swe'],
    accent: 'amber',
    year: 'Jan 2024 - Apr 2024',
    sortDate: '2024-04',
    category: 'Academic Project',
    title: 'DressSense AI',
    teaser:
      'A fashion assistant that combines outfit recommendations, resale comparison, and wardrobe management into one mobile experience.',
    summary:
      'DressSense AI was built as an academic team project where I contributed as a mobile app developer, delivering AI-assisted outfit discovery, wardrobe tooling, and responsive full-stack mobile experiences.',
    challenge:
      'The product needed to address an environmental or social issue; our group chose to focus on the increasing consumption of fast fashion.',
    outcome:
      'The final product delivered AI-driven outfit recommendations, pricing comparison across 1,000+ items, a Firebase-backed closet workflow, and scalable Python APIs with sub-200ms response times.',
    metrics: [
      { label: 'Role', value: 'Mobile app developer' },
      { label: 'Mode', value: 'Team project' },
      { label: 'Grade', value: 'A' },

    ],
    highlights: [
      'Implemented AI-driven outfit recommendation and fashion chatbot features using the OpenAI API with domain-specific NLP constraints.',
      'Integrated the Carousell API to enable price comparison across 1,000+ clothing items, helping users save money and find better deals.',
      'Engineered a closet module using image upload and OpenAI-generated item descriptions, with data stored in Firebase.',
      'Delivered a responsive Expo React Native frontend and scalable Python backend APIs for smooth interactions and sub-200ms data retrieval.',
    ],
    stack: ['React Native', 'FastAPI', 'OpenAI API', 'Firebase', 'Carousell API'],
    video: 'https://www.youtube.com/embed/raq6prdYOvs',
  },
  {
    slug: 'sallyrise',
    group: 'swe',
    groups: ['swe'],
    accent: 'mint',
    year: 'Feb 2024',
    sortDate: '2024-02',
    category: 'TechFest 2024 Hackathon',
    title: 'SallyRise',
    teaser: 'A hackathon-built study platform with chatbot support and AI-generated flashcards from uploaded notes.',
    summary:
      'SallyRise was built during TechFest 2024 as a team full-stack hackathon project combining frontend delivery, backend services, and AI-powered study support in a 48-hour sprint.',
    challenge:
      "The team had to deliver a solution that helped in solving a problem of individuals' daily lives.",
    outcome:
      'The final prototype combined Chatbot support, AI-generated flashcards from uploaded notes as form of study support within the hackathon deadline.',
    metrics: [
      { label: 'Event', value: '48-hour hackathon' },
      { label: 'Role', value: 'Full-stack developer' },
      { label: 'Mode', value: 'Team project' },
    ],
    highlights: [
      'Developed the frontend using React, HTML and CSS and integrated backend services with Flask and MySQL for reliable data management.',
      'Trained and optimized Hugging Face models in Python to power a chatbot that answers questions and generates flashcards from uploaded notes.',
      'Led agile team collaboration to deliver a working prototype within a 48-hour hackathon, managing feature scope and code integration.',
    ],
    stack: ['React', 'HTML/CSS','Flask', 'MySQL', 'Chatbot workflows'],
    video: 'https://www.youtube.com/embed/A5s-SpdTFiY',
  },
  {
    slug: 'stock-watch',
    group: 'swe',
    accent: 'cyan',
    year: 'Jul 2025',
    sortDate: '2025-07',
    category: 'Personal Finance Stock App',
    title: 'Stock Watch',
    teaser:
      'A full-stack mobile app for tracking global stocks, managing portfolios, and building a more practical day-to-day investing experience.',
    summary:
      'Stock Watch is a solo full-stack mobile application focused on real-time market visibility, portfolio management, and scalable backend delivery for 10,000+ global stocks.',
    challenge:
      'The project needed to balance fast market-data access, clear user workflows, and scalable backend integration while preparing room for future AI-assisted finance features.',
    outcome:
      'The current build delivers real-time tracking, personalized favorites, portfolio tooling, and a Spring Boot REST API with sub-100ms queries backed by PostgreSQL and Twelve Data integration.',
    metrics: [
      { label: 'Role', value: 'Solo full-stack build' },
      { label: 'Coverage', value: '10,000+ global stocks' },
      { label: 'Latency', value: '<100ms queries' },
    ],
    highlights: [
      'Designed the system architecture and user workflows based on analysis of existing financial platforms.',
      'Designed and developed a full-stack mobile app enabling real-time tracking for 10,000+ global stocks, portfolio management, and personalized favorites.',
      'Engineered a Spring Boot REST API serving sub-100ms queries, integrating Twelve Data API and PostgreSQL for scalable data handling.',
      'Planned the roadmap for AI or ML-driven stock prediction, in-app financial education, transaction logging, and customizable alerts.',
    ],
    stack: ['React Native','Spring Boot', 'PostgreSQL', 'Twelve Data API', 'Portfolio tools'],
    video: 'https://drive.google.com/file/d/1Yp10JqW5lAxh1gSw0PPHhen2x8wn92LF/preview',
  },
  {
    slug: 'ai-trading-education-app',
    group: 'ai',
    accent: 'cyan',
    year: 'Aug 2025 - May 2026',
    sortDate: '2026-05',
    category: 'Final Year Project',
    title: 'StockED: AI-Powered Trading Education App',
    teaser:
      'An in-progress mobile learning platform combining adaptive tutoring, structured financial content, and AI-powered trading simulations.',
    summary:
      'This final year project is an AI-powered trading education app built with React Native and FastAPI to deliver adaptive stock market learning, modular backend services, and production-ready AI workflows.',
    challenge:
      'The system needed to unify mobile product delivery with gamification frameworks, scalable content pipelines, adaptive tutoring logic, and experimental AI trader behavior into one reliable learning experience.',
    outcome:
      'The current implementation includes modular backend APIs, AI-driven personalized tutoring, structured content pipelines, and reinforcement-learning trader prototypes evaluated with historical backtesting.',
    metrics: [
      { label: 'Status', value: 'In progress' },
    ],
    highlights: [
      'Architected and developed a React Native and FastAPI-based mobile application with AI-driven adaptive learning for stock market education, with modular backend APIs and scalable data pipelines.',
      'Implemented the end-to-end ML lifecycle, processing 1000+ financial content items via web scraping or APIs, LLM-based preprocessing and content structuring in JSON or YAML, model fine-tuning, and production deployment of AI-powered features.',
      'Built a multi-level adaptive learning system with LLM-based, context-aware responses for personalized tutoring.',
      'Prototyped AI trader personalities using reinforcement learning and evaluated performance via historical backtesting, benchmarking multiple models against user decision strategies.',
      'Applied SDLC practices with unit, integration, and user testing to ensure system reliability and end-to-end functionality.',
    ],
    stack: ['React Native', 'FastAPI', 'LLMs', 'Reinforcement Learning', 'Web scraping', 'Adaptive learning'],
  },
  {
    slug: 'nlp-topic-classification',
    group: 'ai',
    accent: 'amber',
    year: 'Oct 2025',
    sortDate: '2025-10',
    category: 'Academic Project',
    title: 'NLP Topic Classification Project',
    teaser:
      'A topic classification system exploring pretrained embeddings, sequence models, and visualization techniques for robust sentence understanding.',
    summary:
      'This academic NLP project focused on sentence classification using pretrained embeddings, neural sequence models, and interpretability workflows to improve both performance and understanding of topic clusters.',
    challenge:
      'The project needed to handle out-of-vocabulary terms, compare several neural architectures fairly, and strengthen weaker topic classes through targeted tuning and analysis.',
    outcome:
      'The final system combined pretrained embeddings, tuned RNN-family and CNN models, and t-SNE or PCA analysis to improve validation accuracy and model interpretability.',
    metrics: [
      { label: 'Area', value: 'NLP classification' },
      { label: 'Dataset', value: 'TREC' },
      { label: 'Models', value: 'RNN, biLSTM, biGRU, CNN' },
    ],
    highlights: [
      'Built a sentence classification system using pretrained Word2Vec and GloVe embeddings on the TREC dataset, mitigating out-of-vocabulary issues with custom strategies.',
      'Implemented RNN, biLSTM, biGRU, and CNN models for topic classification, tuning hyperparameters and applying regularization to optimize validation accuracy.',
      'Conducted feature extraction and embedding visualization using t-SNE and PCA to analyze topic clusters and model interpretability.',
      'Evaluated topic-wise accuracy, trained models end-to-end, and iteratively enhanced performance with targeted strategies for weaker topics.',
    ],
    stack: ['Python', 'Word2Vec', 'GloVe', 'RNNs', 'CNNs', 't-SNE/PCA'],
  },
  {
    slug: 'factcheck-ai',
    group: 'ai',
    accent: 'mint',
    year: 'Apr 2025',
    sortDate: '2025-04',
    category: 'TechFest 2025 Hackathon',
    title: 'FactCheck AI',
    teaser:
      'A multimedia fact-checking web app that validates claims and detects manipulated media through a combined AI-powered workflow.',
    summary:
      'FactCheck AI was built during TechFest 2025 as a full-stack web application combining claim verification, deepfake detection, and responsive user flows through React and Flask.',
    challenge:
      'The team needed to connect external verification APIs, transformer-based text workflows, and media-classification pipelines into one usable product under hackathon constraints.',
    outcome:
      'The result was a working prototype that delivered real-time credibility scoring for text claims and deepfake detection for media within one end-to-end web experience.',
    metrics: [
      { label: 'Event', value: 'TechFest 2025' },
      { label: 'Stack', value: 'React + Flask' },
      { label: 'Accuracy', value: '~90% media classification' },
    ],
    highlights: [
      'Developed a full-stack web application with React and Material UI, combining a Flask backend and React frontend to enable automated fact-checking of objective claims and deepfake media detection.',
      'Integrated Google Fact Check API and Hugging Face Transformers to validate user-submitted text claims, delivering real-time credibility scores via RESTful APIs.',
      'Engineered a deepfake classifier using OpenAI API, PyTorch, and TensorFlow, achieving about 90% accuracy in classifying manipulated media.',
    ],
    stack: ['React', 'Material UI', 'Flask', 'Hugging Face Transformers', 'PyTorch', 'TensorFlow'],
    video: 'https://www.youtube.com/embed/9Tu2I3BMNUw',
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

export const getProjectsByGroup = (group) =>
  projects
    .filter((project) => (project.groups ?? [project.group]).includes(group) && project.showInList !== false)
    .sort((a, b) => (b.sortDate ?? '').localeCompare(a.sortDate ?? ''));

export const getNextProject = (slug) => {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return projects[0];
  }

  return projects[(currentIndex + 1) % projects.length];
};
