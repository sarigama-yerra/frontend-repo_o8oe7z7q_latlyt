import { ShieldCheck, Award, MonitorPlay, Headphones } from 'lucide-react'

const features = [
  {
    title: 'Industry-Ready Curriculum',
    desc: 'Up-to-date content aligned with trends and best practices.',
    icon: Award,
  },
  {
    title: 'Hands-on Projects',
    desc: 'Build real projects to showcase in your portfolio.',
    icon: MonitorPlay,
  },
  {
    title: 'Mentor Support',
    desc: 'Live doubt-solving and expert guidance when you need it.',
    icon: Headphones,
  },
  {
    title: 'Certificate of Completion',
    desc: 'Showcase your skills with verified certificates.',
    icon: ShieldCheck,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1">Why choose us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Everything you need to succeed</h2>
          <p className="mt-2 text-slate-600">Practical learning with an outcome-first approach.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm hover:shadow-md transition-all">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 text-white flex items-center justify-center shadow">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
