import { summary } from '../data/resume'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-content px-6 py-20"
    >
      <SectionHeading id="about-heading" eyebrow="About" title="Summary" />
      <p className="max-w-3xl text-lg leading-relaxed text-ink-700">
        {summary}
      </p>
    </section>
  )
}
