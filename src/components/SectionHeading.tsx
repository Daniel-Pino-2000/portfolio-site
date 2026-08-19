// Shared heading used by every section below the hero, so style stays
// consistent if you want to tweak it in one place. `id` is required and
// must be unique — it's what each section's `aria-labelledby` points to.
interface SectionHeadingProps {
  id: string
  eyebrow: string
  title: string
}

export default function SectionHeading({ id, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-2 text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
