import { EventHero } from '@/components/event-hero'
import { EventDetails } from '@/components/event-details'
import { EventRegistration } from '@/components/event-registration'

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <EventHero />
      <EventDetails />
      <EventRegistration />
      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        AI &amp; Technology Student Workshop &middot; RD Engineering College, Duhai, Ghaziabad
      </footer>
    </main>
  )
}
