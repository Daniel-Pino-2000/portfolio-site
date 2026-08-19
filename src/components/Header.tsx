import { useState } from 'react'
import { contact } from '../data/resume'

// Add/remove/reorder entries here to change the nav — every section id must
// match the `id` prop passed to that section's <SectionHeading>.
const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  // Controls the slide-down mobile nav (below Tailwind's `md` breakpoint).
  // The desktop <ul> and this menu render NAV_LINKS separately (rather than
  // one list toggling visibility) so each can have its own layout/spacing.
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-ink-200 bg-ink-50/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4"
      >
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-ink-900"
        >
          {contact.name}
        </a>

        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-600 transition-colors hover:text-accent-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={contact.resumePdfPath}
          download
          className="hidden rounded-md bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ink-800 md:inline-block"
        >
          Download Resume
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink-700 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-ink-200 md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-2 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={contact.resumePdfPath}
                download
                className="block rounded-md bg-ink-900 px-4 py-2 text-center text-sm font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
