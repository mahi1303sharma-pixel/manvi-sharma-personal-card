const interests = [
  'Artificial Intelligence',
  'Software Development',
  'Web Development',
]

export function CallingCard() {
  return (
    <article className="w-full max-w-xl overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
      <div className="h-2 bg-blue-700" aria-hidden="true" />
      <div className="flex flex-col gap-8 p-8 sm:p-12">
        <header className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-700">
            B.Tech &middot; AI &amp; ML
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Manvi Sharma
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-slate-600">
            B.Tech student specializing in Artificial Intelligence and Machine
            Learning.
          </p>
        </header>

        <section aria-labelledby="about-heading" className="flex flex-col gap-3">
          <h2
            id="about-heading"
            className="text-sm font-semibold uppercase tracking-widest text-slate-900"
          >
            About
          </h2>
          <p className="text-pretty leading-relaxed text-slate-600">
            I am a 3rd-year B.Tech AI &amp; ML student at RD Engineering
            College, Duhai, Ghaziabad.
          </p>
        </section>

        <section
          aria-labelledby="interests-heading"
          className="flex flex-col gap-3"
        >
          <h2
            id="interests-heading"
            className="text-sm font-semibold uppercase tracking-widest text-slate-900"
          >
            Interests
          </h2>
          <ul className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <li
                key={interest}
                className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-800"
              >
                {interest}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}
