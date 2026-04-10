export const personalInfo = {
  name: 'Divya Gupta',
  location: 'Singapore',
  nationality: 'Singaporean',
  phone: '+65 94763285',
  email: 'dibya6665@gmail.com',
  github: 'https://github.com/diipperss',
  linkedin: 'https://www.linkedin.com/in/divya-gupta-47335a264/',
  portfolio: 'https://diipperss.github.io/website-portfolio/',
};

export const desktopNavigation = [
  { id: 'intro', label: 'About Me', path: '/intro' },
  { id: 'experience', label: 'Work Experience', path: '/experience' },
  { id: 'swe', label: 'SWE Projects', path: '/projects/swe' },
  { id: 'ai', label: 'AI Projects', path: '/projects/ai' },
  { id: 'beyond-code', label: 'Beyond Code', path: '/beyond-code' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export const education = [
  {
    school: 'Nanyang Technological University (NTU)',
    location: 'Singapore',
    period: 'Aug 2022 - May 2026',
    degree: 'Bachelor of Engineering in Computer Science (Specialisation in Artificial Intelligence)',
  },
  {
    school: 'University of East Anglia',
    location: 'Norwich, England',
    period: 'Aug 2024 - Jan 2025',
    degree: 'Exchange Programme with focus areas in machine learning, advanced software engineering, and human-computer interaction',
  },
];

export const courseModules = [
  'Advanced Software Engineering',
  'Machine Learning',
  'Artificial Intelligence',
  'Data Structures & Algorithms',
  'Databases',
  'Computer Vision',
  'Natural Language Processing',
  'Applied Cryptography',
  'Computer Networks',
  'Deep Neural Networks',
  'Intelligent Agents',
];

export const introSections = [
  {
    title: 'Build style',
    body:
      'I work across mobile, backend, and AI systems together, rather than treating them as separate layers. I enjoy working closely with teammates, communicating clearly, and helping move projects forward through collaboration as much as implementation.',
  },
  {
    title: 'What I care about',
    body:
      'I am drawn to projects that solve clear, real-world problems, are built on strong technical foundations, and deliver intuitive user experiences. I also value leadership, ownership, and being someone a team can rely on to communicate well and work effectively with others.',
  },
];

export const heroSignals = ['Software Development', 'Machine Learning', 'Artificial Intelligence'];

export const featuredExperience = [
  {
    company: 'AMD',
    role: 'Software Development Intern',
    period: 'Jan 2026 - Mar 2026',
    description: [
      'Built a full-stack web portal used by ~300 users (React, FastAPI) to streamline research paper submission and review workflows.',
      'Integrated Azure, Rancher, and GitHub Actions to enable CI/CD pipelines and Kubernetes-based deployment.',
      'Developed agentic AI solutions for plagiarism detection, quality classification, and automated newsletter generation, improving operational efficiency.',
      'Optimized LLM context handling and prompt pipelines, enhancing response relevance and system reliability.',
      'Developed and tested features within a Linux (WSL) environment, ensuring cross-platform compatibility and deployment readiness.',
    ],
    tools: ['React', 'FastAPI', 'Azure', 'Rancher (k8s)', 'GitHub Actions', 'WSL', 'LLM'],
  },

  {
    company: 'UBS Tomorrow Talent Program',
    role: 'equify',
    period: 'June 2024 - Jul 2024',
    projectSlug: 'equify',
    description: [
      'Conceptualized Equify, a mobile app addressing unconscious workplace bias, earning Top 3 Finalist in UBS Ideathon among 25+ teams.',
      'Developed end-to-end features including personalized bias assessment, scrollable video feed using YouTube Shorts API mirroring TikTok, community forum, and demographic analytics dashboard including different charts for visualization.',
      'Implemented AI-powered video categorization using FastText NLP through video description and designed role-based access for admins and users to manage content and insights.',
      'Presented to UBS leadership, receiving high commendation for innovation and technical execution.'
    ],
    tools: ['Spring Boot', 'React Native', 'FastText NLP'],
  },
  {
    company: 'AMD',
    role: 'Software Engineering Intern – Traceability & 2D Pro',
    period: 'Jan 2025 - May 2025',
    description: [
      'Developed a full-stack web app (React, Python, PostgreSQL) used by 50+ engineers, supporting multi-criteria search across 10,000+ files, improving access speed by ~30%.',
      'Built and deployed an Azure-based ETL pipeline supporting an AI-powered LangChain chatbot, with feedback and user history tracking for future model refinement.',
      'Documented technical workflows and system design in line with SDLC standards, ensuring maintainability and process compliance. '
    ],
    tools: ['ETL Pipeline', 'LangChain', 'SDLC'],
  },
  {
    company: 'Geolah',
    role: 'Software Development Intern',
    period: 'May 2024 - Aug 2024',
    description: [
      'Conducted QA testing on mobile applications; identified and documented UI/UX issues, driving improvements across platforms.',
      'Developed and deployed features using PHP and WordPress, ensuring alignment with technical requirements and timelines via Confluence.',
      'Built a retrieval-based chatbot, integrated into native mobile platforms to enhance user interaction.'
    ],
    tools: ['PHP', 'QA Testing'],
  },
  {
    company: 'Passion Gadgets',
    role: 'Web Development Intern',
    period: 'May 2023 - Aug 2023',
    description: [
      'Created a responsive website UI using HTML, CSS, and JavaScript; enhanced features via CS Cart CMS.',
      'Implemented functional and design updates requested by the team, leading to a 10% increase in site traffic.',
      'Collaborated with marketing using Figma for design; trained incoming interns on CMS and task delegation.'
    ],
    tools: ['HTML/CSS', 'JavaScript'],
  },
];

export const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'C', 'SQL'],
  },
  {
    label: 'Frontend',
    items: ['React', 'React Native', 'Tailwind CSS', 'Three.js', 'HTML/CSS'],
  },
  {
    label: 'Backend',
    items: ['FastAPI', 'Flask', 'Django', 'Node.js', 'Spring Boot', 'REST APIs'],
  },
  {
    label: 'AI and data',
    items: ['TensorFlow', 'PyTorch', 'Hugging Face', 'LangChain', 'scikit-learn', 'NLP'],
  },
  {
    label: 'Infra and databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Azure', 'GitHub Actions', 'Rancher'],
  },
];

export const achievements = [
  'JPM Code for Good 2025',
  'UBS Tomorrow Talent Program 2024',
  'Finalist in UBS x WIT Ideathon 2024',
  'MATLAB Onramp Certificate 2024',
];

export const communityActivities = [
  {
    organization: 'NTU College of Computing and Data Science Club',
    period: 'Sep 2023 - May 2024',
    role: 'Vice-President (Communications)',
    points: [
      'Led communication strategies across 5 branches, keeping information clear and consistent among committee members, students, and faculty.',
      'Built partnerships with external companies, securing sponsors and collaborators for workshops, career fairs, and student initiatives reaching 3,000+ students, with 200-500 attendees per event.',
      'Organized and facilitated monthly leadership meetings to set agendas, track progress, and support strategic planning.',
    ],
  },
  {
    organization: 'Rotaract Club',
    period: 'Sep 2022 - Jan 2023',
    role: 'Sub-Committee Member',
    points: [
      'Coordinated and ran weekly 4-hour events with a small team to support a childcare centre for disadvantaged children.',
      'Built rapport with a group of 15 children from challenging backgrounds, creating trust and a more positive environment over time.',
    ],
  },
];

export const hobbies = [
  'Badminton',
  'Gaming: Valorant, Mobile Legends, and co-op games',
];

export const contactChannels = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    label: 'Mobile',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    label: 'LinkedIn',
    value: 'View profile',
    href: personalInfo.linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/diipperss',
    href: personalInfo.github,
    external: true,
  },
];
