import { contact } from '../data/resume'

// id="top" is the target for Header's logo link ("back to top"). Deliberately
// text-only (no headshot) — keeps it fast and keeps the focus on content.
export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="border-b border-ink-200 bg-gradient-to-b from-white to-ink-50"
    >
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-20 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
          {contact.location}
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
          {contact.name}
        </h1>
        <p className="max-w-2xl text-xl text-ink-600 sm:text-2xl">
          {contact.title}
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-md bg-accent-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-500"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-ink-300 bg-white px-5 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-400"
          >
            Get in Touch
          </a>
          <a
            href={contact.resumePdfPath}
            download
            className="rounded-md border border-ink-300 bg-white px-5 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-400"
          >
            Download Résumé (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}
