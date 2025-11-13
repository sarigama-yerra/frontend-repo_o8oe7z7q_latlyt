export default function FAQ() {
  const faqs = [
    { q: 'Do I get a certificate?', a: 'Yes, you will receive a certificate upon completion of each course and capstone.' },
    { q: 'Are there live classes?', a: 'Yes, we run live cohort sessions weekly along with recorded lessons and assignments.' },
    { q: 'Can beginners join?', a: 'Absolutely. Every course has a beginner-friendly path that ramps up to advanced projects.' },
    { q: 'Do you offer refunds?', a: 'We offer a 7-day refund policy if you haven’t started more than 10% of the course.' },
  ]

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Frequently asked questions</h2>
          <p className="mt-3 text-slate-600">Everything you need to know before enrolling</p>
        </div>

        <div className="mt-10 grid gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <summary className="marker:content-none list-none cursor-pointer flex items-center justify-between">
                <span className="font-semibold text-slate-900">{f.q}</span>
                <span className="ml-4 text-slate-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-slate-600 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
