// Single source of truth for site content, transcribed directly from
// Daniel_Pino_Resume_Updated.pdf / .docx, except `projects`, which is
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
  'Computer Science graduate with hands-on experience across Android development (Kotlin, Jetpack Compose, MVVM, Coroutines/Flow), full-stack web development (Python, FastAPI, React, TypeScript), and systems and scripting (C, C++). Built and shipped four independent applications end-to-end, including two Android apps and a full-stack web platform with authentication and automated testing. Comfortable working across the stack, from UI to background processing to REST API design.'

export interface SkillGroup {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Kotlin', 'Python', 'TypeScript', 'C', 'C++', 'Java', 'SQL'],
  },
  {
    label: 'Frameworks & Tools',
    items: [
      'Jetpack Compose',
      'MVVM',
      'Coroutines & Flow',
      'Gradle',
      'Room/SQLite',
      'WorkManager',
      'Ktor',
      'FastAPI',
      'React',
      'Firebase',
      'Git',
      'Claude Code',
    ],
  },
  {
    label: 'Other',
    items: [
      'REST API design (OpenAPI, JWT/OAuth2)',
      'Object-oriented design',
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
  date: 'August 2026',
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
      'Tutor 12+ students weekly, one-on-one and in small groups, on programming fundamentals, algorithms, data structures, object-oriented design, and debugging.',
      'Design and deliver hands-on programming workshops that translate abstract CS concepts into practical exercises tailored to students at varying skill levels.',
      'Break down complex technical topics into clear, approachable explanations, building rapport that contributes to improved grades and higher course engagement.',
    ],
  },
  {
    role: 'AI Trainer (Remote)',
    organization: 'Remotask & DataAnnotation',
    location: 'Remote',
    date: 'September 2023 – August 2024',
    bullets: [
      'Debugged and corrected AI-generated code across 500+ tasks, writing improved solutions used to fine-tune model performance on code-generation tasks.',
      'Evaluated multiple AI response variants and engineered targeted prompts to test model reasoning, selecting optimal outputs and delivering technical feedback that measurably improved code quality.',
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
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Room'],
    githubUrl: 'https://github.com/Daniel-Pino-2000/Tadu',
    description: [
      'Developed an Android task management application using Kotlin and Jetpack Compose, integrating Firebase Authentication and Cloud Storage for secure, synced user data.',
      'Implemented persistent local storage with the Room Persistence Library and built a task reminder system using AlarmManager and BroadcastReceiver for scheduled notifications.',
    ],
  },
  {
    name: 'BibleApp',
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Coroutines', 'SQLite/Room'],
    githubUrl: 'https://github.com/Daniel-Pino-2000/BibleApp',
    description: [
      'Built an Android Bible reading app in Kotlin and Jetpack Compose with a bundled King James Version and on-demand downloads of additional translations for fully offline reading, including full-text search, footnotes, and poem/heading formatting.',
      'Designed a repository layer that decouples the ViewModel from local SQLite and a swappable remote data source, and fixed a coroutine/SQLite threading bug by strictly separating async network I/O from batched database transactions.',
      'In active development: a Ktor backend (Exposed ORM, JWT authentication, PostgreSQL) for user accounts and cross-device sync of bookmarks, reading progress, and notes.',
    ],
  },
  {
    name: 'BiblioTech',
    stack: ['Python', 'FastAPI', 'MySQL', 'React', 'TypeScript', 'JWT'],
    githubUrl: 'https://github.com/Daniel-Pino-2000/BiblioTech',
    description: [
      'Built a full-stack technical bookstore application with a FastAPI + MySQL REST API (auto-generated OpenAPI docs) and a React/TypeScript frontend, implementing JWT authentication, role-based authorization, and a service-layer architecture separating routers, business logic, and ORM models.',
      'Shipped catalog browsing/search, ratings and threaded comments, a shopping cart, and per-user wishlists, backed by Alembic-versioned migrations, a 27-test pytest suite, Docker Compose for local dev, and GitHub Actions CI.',
    ],
  },
  {
    name: 'FastFinder',
    stack: ['Kotlin', 'Compose Desktop', 'Apache Lucene', 'Coroutines'],
    githubUrl: 'https://github.com/Daniel-Pino-2000/FastFinder',
    description: [
      'Built a Windows desktop app (Kotlin, Jetpack Compose Desktop) that indexes local storage into an Apache Lucene index in a parallel, work-stealing fork-join walk, cutting indexing time roughly in half over a single-threaded walk on a 28-core benchmark, and supports live re-indexing, custom directory search, and filtering/sorting without blocking concurrent search.',
      'Made index rebuilds crash-safe by writing to a fresh temp directory and swapping it in with a single directory rename (rolling back on failure), and added opt-in NTFS USN Journal reads for instant incremental updates instead of a full rescan. Shipped with CI (unit tests + detekt static analysis) and a packaged MSI installer.',
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
