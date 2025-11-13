export default function CTA() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-blue-600 p-8 sm:p-14 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.15),transparent_30%)]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Start learning today</h2>
            <p className="mt-2 text-white/80 max-w-2xl">Join thousands of learners leveling up their careers with our expertly crafted courses and hands-on projects.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#courses" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:shadow-md">Browse Courses</a>
              <a href="#" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">Get a Free Guide</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
