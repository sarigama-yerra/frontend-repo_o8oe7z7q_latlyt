import { ArrowRight, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-300/40 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-300/40 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-black/5 shadow-sm">
            New Courses just dropped!
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Learn in-demand skills and grow your career faster
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            High-quality courses in Digital Marketing, Web Designing, Graphic Designing, and Video Editing. Learn from experts with hands-on projects.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#courses" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:shadow-violet-600/40 transition-all">
              Explore Courses
              <ArrowRight size={16} />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:shadow">
              <PlayCircle size={18} />
              See how it works
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
              <p className="text-3xl font-extrabold text-slate-900">50k+</p>
              <p className="text-xs text-slate-500">Students enrolled</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
              <p className="text-3xl font-extrabold text-slate-900">95%</p>
              <p className="text-xs text-slate-500">Satisfaction rate</p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
              <p className="text-3xl font-extrabold text-slate-900">120+</p>
              <p className="text-xs text-slate-500">Industry projects</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 p-1 shadow-xl">
            <div className="h-full w-full rounded-[14px] bg-white p-6 grid grid-cols-2 gap-4">
              {['Digital Marketing','Web Designing','Graphic Designing','Video Editing'].map((t, i) => (
                <div key={t} className="rounded-xl border border-slate-200 p-4 hover:shadow-md transition-shadow">
                  <div className="h-28 rounded-lg bg-gradient-to-br from-violet-100 to-blue-100 mb-3"></div>
                  <p className="text-sm font-semibold text-slate-800">{t}</p>
                  <p className="text-xs text-slate-500">Beginner to Pro</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg ring-1 ring-black/5">
            <p className="text-xs text-slate-500">Trusted by learners at</p>
            <div className="mt-2 flex gap-3 opacity-70">
              <div className="h-6 w-16 rounded bg-slate-200" />
              <div className="h-6 w-16 rounded bg-slate-200" />
              <div className="h-6 w-16 rounded bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
