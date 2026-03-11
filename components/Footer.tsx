import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-premium py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-blue-accent pb-12">
          <div>
            <h4 className="text-xl font-bold mb-4">AGSC Karachi</h4>
            <p className="text-sm leading-relaxed">Excellence in Science Education serving Karachi since 1961</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Academics', 'Tour', 'Admissions', 'History', 'Contact'].map((link) => {
                const href = link === 'Academics' || link === 'Contact' || link === 'Tour'
                  ? `/#${link.toLowerCase()}`
                  : `/${link.toLowerCase()}`;
                return (
                  <li key={link}>
                    <Link href={href} className="hover:text-blue-300 transition">
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Departments</h4>
            <ul className="space-y-2 text-sm">
              {['Pre-Engineering', 'Pre-Medical', 'Computer Science'].map((dept) => (
                <li key={dept}>{dept}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-sm mb-2">agsckarachi@gmail.com</p>
            <p className="text-sm mb-2">Phone: 02199215689</p>
            <p className="text-sm mb-2">WhatsApp: +92 333 2388124</p>
            <p className="text-sm">V2JP+PGJ, Business Recorder Road, Soldier Bazaar, Garden East, Karachi</p>
          </div>
        </div>
        <div className="text-center text-sm border-t border-blue-accent pt-8">
          <p>© {new Date().getFullYear()} Adamjee Government Science College. All rights reserved.</p>
          <p className="mt-4">
            Designed & Developed by{' '}
            <a
              href="https://mansoor--ahmed.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 font-semibold"
            >
              Mansoor Ahmed
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}