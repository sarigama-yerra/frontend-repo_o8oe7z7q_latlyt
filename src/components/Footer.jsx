export default function Footer() {
  return (
    <footer className="pt-16 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Courses</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#courses" className="hover:text-slate-900">Digital Marketing</a></li>
              <li><a href="#courses" className="hover:text-slate-900">Web Designing</a></li>
              <li><a href="#courses" className="hover:text-slate-900">Graphic Designing</a></li>
              <li><a href="#courses" className="hover:text-slate-900">Video Editing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900">Blog</a></li>
              <li><a href="#" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Help Center</a></li>
              <li><a href="#" className="hover:text-slate-900">Pricing</a></li>
              <li><a href="#" className="hover:text-slate-900">Refund Policy</a></li>
              <li><a href="#" className="hover:text-slate-900">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Stay in the loop</h4>
            <p className="mt-3 text-sm text-slate-600">Get updates on new courses and exclusive offers.</p>
            <form className="mt-4 flex gap-2">
              <input type="email" placeholder="Your email" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
              <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SkillHub. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
