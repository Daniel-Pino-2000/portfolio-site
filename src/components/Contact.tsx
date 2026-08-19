import { contact } from '../data/resume'
import SectionHeading from './SectionHeading'

// mailto:/tel: links only — no form/backend, so this works unmodified on
// any static host. See README "Before going live" if you want a real form.
export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-ink-200 bg-white">
      <div className="mx-auto max-w-content px-6 py-20">
        <SectionHeading id="contact-heading" eyebrow="Contact" title="Let's Talk" />

        <p className="max-w-2xl text-lg text-ink-700">
          I'm actively looking for software development opportunities. Feel free to reach out
          directly — I'll get back to you as soon as I can.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-accent-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-500"
          >
            Email {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
            className="inline-flex items-center gap-2 rounded-md border border-ink-300 bg-white px-5 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-400"
          >
            {contact.phone}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md border border-ink-300 bg-white px-5 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-400"
          >
            LinkedIn
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-md border border-ink-300 bg-white px-5 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-ink-400"
          >
            GitHub
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
