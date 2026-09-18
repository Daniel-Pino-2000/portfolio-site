import { projects } from '../data/resume'
import SectionHeading from './SectionHeading'

// One card per entry in `projects` (src/data/resume.ts) — add a project by
// adding an object there, nothing here needs to change.
export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="mx-auto max-w-content px-6 py-20">
        <SectionHeading id="projects-heading" eyebrow="Projects" title="Things I've Built" />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col gap-4 rounded-xl border border-ink-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-ink-950">{project.name}</h3>
                <div className="flex shrink-0 items-center gap-2">
                  {project.downloadUrl && (
                    <a
                      href={project.downloadUrl}
                      className="inline-flex items-center gap-1.5 rounded-md bg-accent-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-accent-500"
                    >
                      Download
                      <span className="sr-only"> ({project.name} installer, .msi)</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      >
                        <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                      </svg>
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 rounded-md border border-ink-300 px-3 py-1.5 text-xs font-semibold text-ink-700 transition-colors hover:border-ink-400 hover:text-ink-950"
                  >
                    GitHub
                    <span className="sr-only">
                      {' '}
                      ({project.name} repository, opens in new tab)
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </a>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-600"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <ul className="flex flex-col gap-2 text-sm text-ink-700">
                {project.description.map((line) => (
                  <li key={line} className="flex gap-2.5">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-400" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
