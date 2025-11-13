export default function Testimonials() {
  const data = [
    { name: 'Aisha Khan', role: 'Digital Marketer', quote: 'Got promoted within 3 months after completing the course. Projects were super practical!' },
    { name: 'Rahul Mehta', role: 'Web Designer', quote: 'Clean learning path and amazing mentors. My portfolio finally stands out.' },
    { name: 'Priya Sharma', role: 'Video Editor', quote: 'Loved the hands-on approach. The community support kept me on track.' },
  ]

  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Learners who leveled up with us</h2>
          <p className="mt-3 text-slate-600">Real results from real students</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {data.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 mb-3" />
              <p className="text-slate-700">“{t.quote}”</p>
              <p className="mt-3 text-sm font-semibold text-slate-900">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
