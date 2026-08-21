// Single source of truth for site content, transcribed directly from
// Daniel_Pino_Resume_Improved.pdf / .docx, except `projects`, which is
// allowed to include newer work not yet on the resume — ordered with the
// strongest projects first.

export interface ContactInfo {
  name: string
  title: string
  location: string
  phone: string
  email: string
  github: string
  githubHandle: string
  linkedin: string
  linkedinHandle: string
  resumePdfPath: string
}

export const contact: ContactInfo = {
  name: 'Daniel Pino',
  title: 'Computer Science Graduate & Software Developer',
  location: 'Homestead, FL',
  phone: '786-926-0720',
  email: 'pinoponedaniel@gmail.com',
  github: 'https://github.com/Daniel-Pino-2000',
  githubHandle: 'github.com/Daniel-Pino-2000',
  linkedin: 'https://www.linkedin.com/in/daniel-pino-42a8b031b',
  linkedinHandle: 'linkedin.com/in/daniel-pino',
  resumePdfPath: '/Daniel_Pino_Resume.pdf',
}

export const summary =
  'Computer Science graduate with hands-on experience across Android development (Kotlin, Jetpack Compose), systems and scripting (C, C++, Python), and applied AI/data work. Built and shipped four independent applications spanning task management, file search, cloud file-sharing, and game development. Comfortable working across the stack, from UI to background processing to API integration.'

export interface SkillGroup {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Kotlin', 'Python', 'C', 'C++', 'Java', 'SQL'],
  },
  {
    label: 'Frameworks & Tools',
    items: [
      'Jetpack Compose',
      'Git',
      'Firebase',
      'WorkManager',
      'Ktor',
      'Google Drive API',
      'Pygame',
      'SQLite/Room',
      'Claude Code',
    ],
  },
  {
    label: 'Other',
    items: [
      'Object-oriented design',
      'REST API integration',
      'Agile/collaborative dev practices',
      'Fluent in English and Spanish',
    ],
  },
]

export interface EducationItem {
  degree: string
  school: string
  location: string
  date: string
  detail?: string
}

export const education: EducationItem = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'Florida International University',
  location: 'Miami, FL',
  date: 'July 2026',
  detail: 'GPA: 3.8',
}

export interface Honor {
  title: string
  description: string
}

export const honors: Honor[] = [
  {
    title: 'Academic Achievement Award',
    description:
      'Knight Foundation School of Computing & Information Sciences, FIU Tech Talent Academy (2026); recognized for outstanding academic performance among top students in the program.',
  },
]

export interface ExperienceItem {
  role: string
  organization: string
  location: string
  date: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Programming Tutor',
    organization: 'Miami Dade College',
    location: 'Homestead, FL',
    date: 'November 2024 – Present',
    bullets: [
      'Tutor 12+ students weekly, 1-on-1 and in small groups, on programming fundamentals, algorithms, data structures, OOP, and debugging.',
      'Design and deliver hands-on programming workshops, translating abstract CS concepts into practical exercises for students at varying skill levels.',
      'Build rapport with students by breaking down complex technical topics clearly, contributing to improved grades and higher course engagement.',
    ],
  },
  {
    role: 'AI Trainer (Remote)',
    organization: 'Remotask & DataAnnotation',
    location: 'Remote',
    date: 'March 2024 – August 2024',
    bullets: [
      'Annotated and reviewed 500+ tasks across datasets to improve NLP and code-generation model performance, evaluating outputs for accuracy and reliability.',
      'Provided structured technical feedback on model responses, contributing to measurable improvements in output quality for programming-related tasks.',
    ],
  },
]

export interface ProjectItem {
  name: string
  stack: string[]
  githubUrl: string
  description: string[]
}

export const projects: ProjectItem[] = [
  {
    name: 'Tadu',
    stack: ['Kotlin', 'Jetpack Compose', 'WorkManager'],
    githubUrl: 'https://github.com/Daniel-Pino-2000/Task-Tudu',
    description: [
      'Developed an Android task management application using Kotlin and Jetpack Compose, integrating Firebase Authentication and Cloud Storage for secure, synced user data.',
      'Implemented persistent local storage with the Room Persistence Library and built a task reminder system using AlarmManager and BroadcastReceiver for scheduled notifications.',
    ],
  },
  {
    name: 'BiblioTech',
    stack: ['Python', 'FastAPI', 'MySQL', 'React', 'TypeScript', 'JWT'],
    githubUrl: 'https://github.com/Daniel-Pino-2000/BiblioTech',
    description: [
      'Built a full-stack technical bookstore application with a FastAPI + MySQL REST API and a React/TypeScript frontend, implementing JWT authentication, role-based authorization, and a service-layer architecture separating routers, business logic, and ORM models.',
      'Shipped catalog browsing/search, ratings and threaded comments, a shopping cart, and per-user wishlists, backed by Alembic-versioned migrations, a 27-test pytest suite, Docker Compose for local dev, and GitHub Actions CI.',
    ],
  },
  {
    name: 'BibleApp',
    stack: ['Kotlin', 'Jetpack Compose', 'SQLite/Room', 'Coroutines'],
    githubUrl: 'https://github.com/Daniel-Pino-2000/BibleApp',
    description: [
      'Developing an Android Bible reading app in Kotlin and Jetpack Compose with a bundled King James Version and on-demand downloads of additional translations for fully offline reading, including full-text search, footnotes, and poem/heading formatting.',
      'Designed a repository layer that decouples the ViewModel from local SQLite and a swappable remote data source, and fixed a coroutine/SQLite threading bug by strictly separating async network I/O from batched database transactions.',
    ],
  },
  {
    name: 'FastFinder',
    stack: ['Kotlin', 'File I/O', 'Coroutines', 'SQLite/Room'],
    githubUrl: 'https://github.com/Daniel-Pino-2000/FastFinder',
    description: [
      'Built a Windows file and folder search application in Kotlin that indexes local storage in the background on first run, then supports incremental database updates and custom directory search with advanced filtering by file type and size — all while allowing concurrent search during indexing.',
    ],
  },
  {
    name: 'FileSharingApp',
    stack: ['Python', 'Google Drive API'],
    githubUrl: 'https://github.com/Daniel-Pino-2000/FileSharingApp',
    description: [
      'Developed a Python file-sharing application integrated with the Google Drive API, supporting OAuth authentication, batch upload/download of multiple files and folders, real-time progress tracking, and full folder navigation.',
    ],
  },
  {
    name: 'Minesweeper',
    stack: ['Python', 'Pygame'],
    githubUrl: 'https://github.com/Daniel-Pino-2000/Minesweeper',
    description: [
      'Developed a fully playable Minesweeper clone with an interactive GUI, custom board generation, and multiple configurable difficulty levels.',
    ],
  },
]
