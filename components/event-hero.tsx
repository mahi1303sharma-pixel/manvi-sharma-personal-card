import { CalendarDays, Clock, MapPin } from 'lucide-react'

export function EventHero() {
  return (
    <header className="bg-blue-700 px-6 py-20 text-white md:py-28">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <p className="text-sm font-medium uppercase tracking-widest text-blue-100">
          Student Workshop
        </p>
        <h1 className="text-balance text-4xl font-bold leading-tight md:text-6xl">
          AI &amp; Technology Student Workshop
        </h1>
        <ul className="flex flex-col gap-3 text-lg text-blue-50 md:flex-row md:flex-wrap md:gap-8">
          <li className="flex items-center gap-2">
            <CalendarDays className="size-5" aria-hidden="true" />
            <time dateTime="2026-10-15">15 October 2026</time>
          </li>
          <li className="flex items-center gap-2">
            <Clock className="size-5" aria-hidden="true" />
            11:00 AM &ndash; 2:00 PM
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="size-5" aria-hidden="true" />
            RD Engineering College, Duhai, Ghaziabad
          </li>
        </ul>
        <div>
          <a
            href="#register"
            className="inline-flex items-center rounded-md bg-white px-6 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            How to register
          </a>
        </div>
      </div>
    </header>
  )
}
