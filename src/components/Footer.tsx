import { contact } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-ink-50">
      <div className="mx-auto max-w-content px-6 py-8 text-sm text-ink-500">
        <p>
          &copy; {new Date().getFullYear()} {contact.name}. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
