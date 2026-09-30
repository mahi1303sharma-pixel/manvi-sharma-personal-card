const interests = [
  'Artificial Intelligence',
  'Software Development',
  'Web Development',
]

export function CallingCard() {
  return (
    <article className="w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-xl shadow-blue-950/10 ring-1 ring-slate-200">
      <header className="flex flex-col gap-6 bg-blue-950 px-6 py-10 text-white sm:flex-row sm:items-center sm:gap-8 sm:px-12 sm:py-12">
        <div
          className="flex size-16 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl font-semibold tracking-wide sm:size-20 sm:text-2xl"
          aria-hidden="true"
        >
          MS
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-200">
            B.Tech &middot; AI &amp; ML
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Manvi Sharma
          </h1>
          <p className="text-pretty text-sm font-medium text-white sm:text-base">
            AI &amp; ML Student | Exploring Technology and Building Projects
          </p>
          <p className="text-pretty text-base leading-relaxed text-blue-100 sm:text-lg">
            B.Tech student specializing in Artificial Intelligence and Machine
            Learning.
          </p>
        </div>
      </header>

      <div className="flex flex-col divide-y divide-slate-200 px-6 sm:px-12">
        <section
          aria-labelledby="about-heading"
          className="flex flex-col gap-3 py-8 sm:flex-row sm:gap-8"
        >
          <h2
            id="about-heading"
            className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-blue-950 sm:w-28 sm:pt-1"
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
          className="flex flex-col gap-4 py-8 sm:flex-row sm:gap-8"
        >
          <h2
            id="interests-heading"
            className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-blue-950 sm:w-28 sm:pt-2"
          >
            Interests
          </h2>
          <ul className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <li
                key={interest}
                className="rounded-md border border-blue-950/15 bg-blue-950/5 px-3 py-1.5 text-sm font-medium text-blue-950"
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
