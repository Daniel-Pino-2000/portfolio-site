import { experience } from '../data/resume'
import SectionHeading from './SectionHeading'

// Renders `experience` (src/data/resume.ts) in array order — keep that
// array reverse-chronological (newest job first) when you add to it.
export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-ink-200 bg-white"
    >
      <div className="mx-auto max-w-content px-6 py-20">
        <SectionHeading
          id="experience-heading"
          eyebrow="Work Experience"
          title="Where I've Worked"
        />

        <ol className="flex flex-col gap-10">
          {experience.map((job) => (
            <li key={job.role + job.organization} className="relative">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold text-ink-950">
                  {job.role} · {job.organization}
                </h3>
                <p className="text-sm font-medium text-ink-500">{job.date}</p>
              </div>
              <p className="text-sm text-ink-500">{job.location}</p>
              <ul className="mt-3 flex flex-col gap-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-ink-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
