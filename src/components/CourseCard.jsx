import { Star, Clock8, Users } from 'lucide-react'

export default function CourseCard({ title, category, price, rating, students, duration }) {
  return (
    <div className="group rounded-2xl bg-white p-4 ring-1 ring-black/5 shadow-sm hover:shadow-lg transition-all">
      <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-violet-100 to-blue-100 mb-4" />
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-700">{category}</span>
        <div className="flex items-center gap-1 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill={i < Math.round(rating) ? 'currentColor' : 'none'} />
          ))}
          <span className="text-xs text-slate-500 ml-1">{rating.toFixed(1)}</span>
        </div>
      </div>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
      <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-1"><Clock8 size={14} /> {duration}</div>
        <div className="flex items-center gap-1"><Users size={14} /> {students.toLocaleString()} students</div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xl font-extrabold text-slate-900">${price}</p>
        <button className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
          Enroll Now
        </button>
      </div>
    </div>
  )
}
