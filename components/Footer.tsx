import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-premium pt-16 pb-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-10 border-b border-white/20 pb-10">
          <div>
            <h4 className="text-xl font-bold mb-4">AGSC Karachi</h4>
            <p className="text-sm leading-relaxed text-blue-100">
              Building scientific minds with discipline, merit, and excellence since 1961.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <Link href="/#academics" className="hover:text-white transition">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/#tour" className="hover:text-white transition">
                  Tour
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-white transition">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/history" className="hover:text-white transition">
                  History
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Departments</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              {['Pre-Engineering', 'Pre-Medical', 'Computer Science'].map((dept) => (
                <li key={dept}>{dept}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-sm mb-2 text-blue-100">agsckarachi@gmail.com</p>
            <p className="text-sm mb-2 text-blue-100">Phone: 02199215689</p>
            <p className="text-sm mb-2 text-blue-100">WhatsApp: +92 333 2388124</p>
            <p className="text-sm text-blue-100">Business Recorder Road, Soldier Bazaar, Garden East, Karachi</p>
          </div>
        </div>

        <div className="text-center text-sm border-t border-white/20 pt-8 text-blue-100">
          <p>© {new Date().getFullYear()} Adamjee Government Science College. All rights reserved.</p>
          <p className="mt-3 text-xs uppercase tracking-[0.14em] text-blue-200">Excellence in Science Education</p>
          <p className="mt-4">
            Designed & Developed by{' '}
            <a
              href="https://mansoor--ahmed.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white font-semibold"
            >
              Mansoor Ahmed
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
