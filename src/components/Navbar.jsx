import { useState } from 'react'
import { Menu, X, GraduationCap, ShoppingCart } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#courses', label: 'Courses' },
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-md group-hover:scale-105 transition-transform">
              <GraduationCap size={20} />
            </div>
            <span className="font-extrabold tracking-tight text-xl bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-600">SkillHub</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#courses" className="text-sm font-medium text-slate-700 hover:text-slate-900">Browse</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold shadow-sm hover:shadow transition-all bg-white">
              <ShoppingCart size={16} />
              Cart
            </a>
            <a href="#" className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:shadow-violet-600/40 transition-all">
              Sign In
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100">
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 mt-2">
                <a href="#" className="flex-1 rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold bg-white">Cart</a>
                <a href="#" className="flex-1 rounded-md bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white">Sign In</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
