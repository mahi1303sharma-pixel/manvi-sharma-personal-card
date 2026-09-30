import { GraduationCap, Lightbulb, MessagesSquare } from 'lucide-react'

export function EventDetails() {
  return (
    <section className="px-6 py-16 md:py-24" aria-labelledby="about-heading">
      <div className="mx-auto flex max-w-4xl flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 id="about-heading" className="text-3xl font-bold text-blue-700">
            About the workshop
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-slate-700">
            Students learn about artificial intelligence, current technology trends, and practical
            applications. The workshop includes an interactive learning session and a student Q&amp;A.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <InfoCard icon={<GraduationCap className="size-6" aria-hidden="true" />} title="Who it's for">
            B.Tech students interested in Artificial Intelligence and Technology.
          </InfoCard>
          <InfoCard icon={<Lightbulb className="size-6" aria-hidden="true" />} title="Interactive session">
            Learn about AI, current technology trends, and practical applications.
          </InfoCard>
          <InfoCard icon={<MessagesSquare className="size-6" aria-hidden="true" />} title="Student Q&A">
            Ask your questions during the student Q&amp;A.
          </InfoCard>
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-lg border border-slate-200 p-6">
      <div className="flex size-11 items-center justify-center rounded-md bg-blue-50 text-blue-700">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="leading-relaxed text-slate-600">{children}</p>
    </div>
  )
}
