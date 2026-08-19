import { education, honors } from '../data/resume'
import SectionHeading from './SectionHeading'

// `education` is a single object (one degree) rather than an array; add a
// second degree by turning it into an array and mapping here if that's
// ever needed. `honors` list renders only when non-empty.
export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading">
      <div className="mx-auto max-w-content px-6 py-20">
        <SectionHeading id="education-heading" eyebrow="Education" title="Academic Background" />

        <div className="rounded-xl border border-ink-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-xl font-semibold text-ink-950">{education.degree}</h3>
            <p className="text-sm font-medium text-ink-500">{education.date}</p>
          </div>
          <p className="text-ink-600">
            {education.school} — {education.location}
          </p>
          {education.detail && (
            <p className="mt-1 text-sm font-medium text-accent-600">{education.detail}</p>
          )}
        </div>

        {honors.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
              Honors &amp; Awards
            </h3>
            <ul className="mt-3 flex flex-col gap-3">
              {honors.map((honor) => (
                <li key={honor.title} className="flex gap-3 text-ink-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-ink-900">{honor.title}</span>
                    {' — '}
                    {honor.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
