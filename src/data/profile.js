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

export const introSections = [
  {
    title: 'Current focus',
    body:
      'Building end-to-end products that clean frontend experiences, scalable backend systems and practical AI integrations.',
  },
  {
    title: 'Build style',
    body:
      'I work across mobile, backend, and AI systems together, rather than treating them as separate layers. Most of my projects are designed as complete products, not just isolated technical components.',
  },
  {
    title: 'What I care about',
    body:
      'I am drawn to projects that solve a clear, real-world problem, are built with strong technical foundations and deliver a simple and intuitive user experience.',
  },
];

export const heroSignals = ['Software Development', 'Machine Learning', 'Artificial Intelligence'];

export const featuredExperience = [
  {
    company: 'AMD',
    role: 'Software Development Intern',
    period: 'Jan 2026 - Mar 2026',
    description:
      'Built a full-stack research portal with React and FastAPI, integrated CI/CD with Azure, Rancher, and GitHub Actions, and shipped agentic AI workflows for plagiarism checks and automated newsletter generation.',
    tools: ['React', 'FastAPI', 'Azure', 'Rancher', 'GitHub Actions'],
  },
  {
    company: 'Final Year Project',
    role: 'AI-Powered Trading Education App',
    period: 'Aug 2025 - May 2026',
    description:
      'Developing a mobile learning platform for stock market education with adaptive AI tutoring, news-driven sentiment analysis, and reinforcement-learning trader simulations.',
    tools: ['React Native', 'AI tutoring', 'Sentiment analysis', 'RL simulation'],
  },
  {
    company: 'Stock Watch',
    role: 'Full-Stack Mobile App',
    period: 'Jul 2025 - Present',
    description:
      'Building a personal finance stock app with real-time tracking for 10,000+ global stocks, portfolio tools, and a Spring Boot API serving sub-100ms queries.',
    tools: ['Spring Boot', 'Real-time APIs', 'Mobile product design', 'Finance data'],
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
