import { skillGroups } from '../data/resume'
import SectionHeading from './SectionHeading'

// One column per group in `skillGroups` (src/data/resume.ts) — add a skill
// by appending to a group's `items`, or a new column by adding a group.
export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-t border-ink-200 bg-white">
      <div className="mx-auto max-w-content px-6 py-20">
        <SectionHeading id="skills-heading" eyebrow="Skills" title="Technical Toolbox" />

        <div className="grid gap-8 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-ink-200 bg-ink-50 px-3 py-1.5 text-sm font-medium text-ink-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
