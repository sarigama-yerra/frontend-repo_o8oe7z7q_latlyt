import CourseCard from './CourseCard'

const courses = [
  {
    title: 'Digital Marketing Mastery',
    category: 'Marketing',
    price: 79,
    rating: 4.8,
    students: 18420,
    duration: '18h 20m',
  },
  {
    title: 'Web Designing Bootcamp',
    category: 'Web Design',
    price: 89,
    rating: 4.7,
    students: 15234,
    duration: '22h 05m',
  },
  {
    title: 'Graphic Designing Pro',
    category: 'Design',
    price: 69,
    rating: 4.9,
    students: 20311,
    duration: '16h 40m',
  },
  {
    title: 'Video Editing Essentials',
    category: 'Video',
    price: 59,
    rating: 4.6,
    students: 12789,
    duration: '12h 10m',
  },
]

export default function CoursesSection() {
  return (
    <section id="courses" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 text-center">
          <span className="inline-block rounded-full bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1">Popular Courses</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Kickstart your growth</h2>
          <p className="mt-2 text-slate-600">Carefully crafted learning paths to take you from beginner to job-ready.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}
