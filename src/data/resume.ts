// Single source of truth for site content, transcribed from
// Daniel_Pino_Resume_Standard_2026-11-11 (.docx/.pdf; the PDF is also
// public/Daniel_Pino_Resume.pdf). `projects` may go deeper than the
// one-page resume and is ordered with the strongest projects first.

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
  title: 'Software Engineer · Android & Full-Stack',
  location: 'Homestead, FL',
  phone: '786-926-0720',
  email: 'pinoponedaniel@gmail.com',
  github: 'https://github.com/Daniel-Pino-2000',
  githubHandle: 'github.com/Daniel-Pino-2000',
  linkedin: 'https://www.linkedin.com/in/daniel-pino-dev',
  linkedinHandle: 'linkedin.com/in/daniel-pino-dev',
  resumePdfPath: '/Daniel_Pino_Resume.pdf',
}

export const summary =
  'Software engineer and Magna Cum Laude Computer Science graduate (FIU, 3.8 GPA) who ships complete products. My flagship, TreasuredWord, is a 10-language Android app released through Google Play closed testing, backed by a Ktor/PostgreSQL API I built and deployed and an LLM-powered assistant. I also build full-stack web apps (FastAPI + React, Express + TypeScript) and desktop tools, with 600+ automated tests and CI across my projects. Fluent in English and Spanish.'

export interface SkillGroup {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Kotlin', 'TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'C', 'C++'],
  },
  {
    label: 'Mobile',
    items: [
      'Android SDK',
      'Jetpack Compose',
      'Material 3',
      'MVVM',
      'Coroutines & Flow',
      'Room/SQLite',
      'WorkManager',
      'Glance widgets',
      'Credential Manager',
      'Firebase',
      'Google Play publishing',
    ],
  },
  {
    label: 'Backend & Web',
    items: [
      'Ktor',
      'Exposed',
      'FastAPI',
      'SQLAlchemy',
      'Node.js',
      'Express',
      'React',
      'Vite',
      'Tailwind CSS',
      'PostgreSQL',
      'MySQL',
      'REST APIs (OpenAPI, JWT/OAuth2)',
    ],
  },
  {
    label: 'AI & LLMs',
    items: [
      'LLM integration',
      'Cloudflare Workers AI',
      'OpenAI-compatible APIs',
      'Prompt engineering',
      'LLM evaluation',
      'Claude Code',
    ],
  },
  {
    label: 'DevOps & Testing',
    items: [
      'Git',
      'GitHub Actions',
      'Docker',
      'Render',
      'Vercel',
      'Neon',
      'Flyway',
      'Alembic',
      'JUnit',
      'pytest',
      'detekt',
      'Gradle',
    ],
  },
  {
    label: 'Other',
    items: [
      'Fluent in English and Spanish',
      'Agile workflow (GitHub Issues, milestones, PR reviews)',
      'Object-oriented design',
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
  detail: 'Magna Cum Laude · GPA: 3.8 · Dean’s List, 6 consecutive terms',
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
    date: 'November 2024 – October 2026',
    bullets: [
      'Tutored 12+ students weekly, one-on-one and in small groups, on programming fundamentals, data structures, algorithms, object-oriented design, and debugging.',
      'Designed and led hands-on workshops that turned abstract CS concepts into practical coding exercises for students at mixed skill levels, helping raise grades and course engagement.',
    ],
  },
  {
    role: 'AI Trainer',
    organization: 'Remotask & DataAnnotation',
    location: 'Remote',
    date: 'September 2023 – August 2024',
    bullets: [
      'Debugged and rewrote AI-generated code across 500+ tasks; the corrected solutions were used to fine-tune code-generation models.',
      'Compared model response variants and wrote targeted prompts to probe model reasoning, delivering technical feedback used to improve output quality.',
    ],
  },
]

export interface ProjectItem {
  name: string
  stack: string[]
  githubUrl: string
  downloadUrl?: string
  /** Short badge shown next to the name, e.g. "In active development". */
  status?: string
  /** Spans the full width of the grid (use for the flagship project). */
  featured?: boolean
  description: string[]
  /** Upcoming work from the repo's open issues, shown as its own list. */
  inProgress?: string[]
}

export const projects: ProjectItem[] = [
  {
    name: 'TreasuredWord',
    stack: ['Kotlin', 'Jetpack Compose', 'WorkManager', 'Ktor', 'Exposed', 'PostgreSQL', 'Cloudflare Workers AI'],
    githubUrl: 'https://github.com/Daniel-Pino-2000/TreasuredWord',
    status: 'Google Play closed testing',
    featured: true,
    description: [
      'Built and released a local-first Android Bible app (Kotlin, Jetpack Compose, MVVM, StateFlow, repository layer) through v1.7 on Google Play’s closed-testing track: 12 testers, Android 7–16, 10 UI languages, and adaptive landscape layouts.',
      'Offline reading with on-demand translation downloads (one streamed request with progress and retry/backoff, replacing ~1,189 per-chapter calls), full-text search, footnotes, highlights, and notes, plus a Glance home-screen widget, verse images to share or set as wallpaper, six Material 3 color themes, Google Sign-In, and Play in-app updates.',
      'Designed and deployed a Ktor + Exposed + PostgreSQL backend (Docker on Render, Neon) with JWT access/refresh auth, email verification and password reset, Flyway migrations, and rate limiting, kept in sync by a Mutex-serialized WorkManager push-then-pull worker.',
      'Shipped an AI “Bible Helper” (Gemma 4 on Cloudflare Workers AI behind a swappable OpenAI-compatible provider) with versioned prompts, an automated evaluation harness, per-user daily quotas, crisis-safety handling, and in-app reporting for Google Play’s AI-content policy, at $0/month.',
      'Fixed a cross-thread SQLite transaction crash and an Android 7–11 startup crash; 500+ unit tests and GitHub Actions CI cover the app and the server.',
    ],
    inProgress: [
      'Streaming AI answers (server-sent events through the Ktor client)',
      'Semantic verse search with bge-m3 embeddings and pgvector',
      'Server cold-start fixes and the public Google Play production launch',
    ],
  },
  {
    name: 'BiblioTech',
    stack: ['Python', 'FastAPI', 'SQLAlchemy', 'MySQL', 'React', 'TypeScript', 'JWT'],
    githubUrl: 'https://github.com/Daniel-Pino-2000/BiblioTech',
    description: [
      'Built a full-stack technical bookstore with a FastAPI + MySQL REST API (auto-generated OpenAPI docs) and a React 19 + TypeScript frontend, with JWT (OAuth2 password flow) authentication, role-based authorization, and a service layer separating routers, business logic, and ORM models.',
      'Delivered catalog search, ratings and threaded comments, a shopping cart, and per-user wishlists, backed by Alembic-versioned migrations, a 27-test pytest suite, Docker Compose for local dev, and GitHub Actions CI.',
    ],
  },
  {
    name: 'FastFinder',
    stack: ['Kotlin', 'Compose Desktop', 'Apache Lucene', 'Coroutines', 'JUnit 5'],
    githubUrl: 'https://github.com/Daniel-Pino-2000/FastFinder',
    downloadUrl: 'https://github.com/Daniel-Pino-2000/FastFinder/releases/latest/download/FastFinder-latest.msi',
    description: [
      'Built a Windows desktop search engine (Kotlin, Compose Desktop) that indexes local storage with a parallel, work-stealing fork-join walk into Apache Lucene, about 2x faster than a single-threaded walk (30K files, 28 cores), with debounced search-as-you-type, filtering and sorting, and cancellable searches.',
      'Made index rebuilds crash-safe (fresh temp directory, single-rename swap, rollback on failure) and added opt-in NTFS USN Journal reads for instant incremental updates; shipped an MSI installer with CI running 70+ JUnit 5 tests and detekt.',
    ],
  },
  {
    name: 'CodeHired',
    stack: ['TypeScript', 'Node.js', 'Express 5', 'Zod', 'React 19', 'Vite', 'SQLite'],
    githubUrl: 'https://github.com/Daniel-Pino-2000/CodeHired',
    status: 'In active development',
    description: [
      'Building a US tech-jobs aggregator in a pnpm monorepo: an Express 5 + TypeScript REST API with Zod-validated search, filtering, and pagination over SQLite, and a responsive React 19 + Vite frontend with light and dark modes.',
    ],
    inProgress: [
      'Ingestion pipeline for Greenhouse, Lever, Ashby, Adzuna, USAJobs, and JSearch on a GitHub Actions schedule',
      'Deduplication, technology tagging, and SQLite FTS5 full-text search',
      'Accounts, saved jobs, and application tracking',
      'Vitest and Playwright tests, CI, and $0 deployment on Vercel + Turso',
    ],
  },
  {
    name: 'Tadu',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Room'],
    githubUrl: 'https://github.com/Daniel-Pino-2000/Tadu',
    description: [
      'Built an offline-first Android task manager (MVVM + repository layer) with Firebase Authentication and Firestore sync and Room persistence: deadlines, priorities, labels, location tags, search, and a calendar view.',
      'Scheduled reminders with AlarmManager and a BroadcastReceiver, rescheduled by a BootReceiver after a device restart.',
    ],
  },
  {
    name: 'FileSharingApp',
    stack: ['Python', 'Google Drive API', 'OAuth'],
    githubUrl: 'https://github.com/Daniel-Pino-2000/FileSharingApp',
    description: [
      'Developed a Python file-sharing application on the Google Drive API with OAuth authentication, batch upload and download of files and folders, real-time progress tracking, and folder navigation.',
    ],
  },
]
