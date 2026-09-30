import { ClipboardList } from 'lucide-react'

export function EventRegistration() {
  return (
    <section id="register" className="bg-blue-50 px-6 py-16 md:py-24" aria-labelledby="register-heading">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <h2 id="register-heading" className="text-3xl font-bold text-blue-700">
            How to register
          </h2>
          <p className="text-lg text-slate-700">Registration at the college event desk.</p>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-blue-700 px-6 py-4 text-white">
          <ClipboardList className="size-6" aria-hidden="true" />
          <span className="font-semibold">Visit the college event desk</span>
        </div>
      </div>
    </section>
  )
}
