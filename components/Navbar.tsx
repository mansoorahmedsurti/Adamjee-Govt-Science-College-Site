'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import type { ComponentProps } from 'react';

type NavItem = {
  label: string;
  href: ComponentProps<typeof Link>['href'];
  hasDropdown?: boolean;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Academics', href: { pathname: '/', hash: 'academics' }, hasDropdown: true },
  { label: 'Tour', href: { pathname: '/', hash: 'tour' } },
  { label: 'Admissions', href: '/admissions' },
  { label: 'History', href: '/history' },
  { label: 'Contact', href: { pathname: '/', hash: 'contact' } },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const baseLinkClass =
    'px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 text-navy-blue hover:bg-blue-100/70 hover:text-blue-accent focus:outline-none focus:ring-2 focus:ring-blue-accent focus:ring-offset-2';

  return (
    <>
      <header className="sticky top-0 z-50 navbar-premium">
        <nav aria-label="Primary site navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-18">
              <Link href="/" className="flex items-center gap-3" aria-label="Go to homepage">
                <Image
                  src="/images/agsc.png"
                  alt="Adamjee Government Science College Logo"
                  width={48}
                  height={48}
                  className="w-11 h-11"
                  priority
                />
                <div className="hidden sm:block leading-tight">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-accent">AGSC Karachi</p>
                  <p className="text-sm md:text-base font-semibold text-navy-blue">Adamjee Government Science College</p>
                </div>
              </Link>

              <ul className="hidden md:flex gap-2 items-center" role="list">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.hasDropdown ? (
                      <div className="relative group py-4">
                        <Link href={item.href} className={`${baseLinkClass} flex items-center gap-1`}>
                          {item.label}
                          <ChevronDown size={14} className="text-navy-blue group-hover:text-blue-accent transition-colors" />
                        </Link>

                        <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-blue-100 overflow-hidden w-64 flex flex-col">
                            <a
                              href="https://drive.google.com/drive/folders/1JbR11sv3I1avlLajkJXFzMqgum21snNE"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-3 text-sm text-blue-accent hover:bg-blue-50 font-medium border-b border-blue-50 transition-colors"
                            >
                              Prelim Papers 2026
                            </a>
                            <Link href="/#academics" className="px-4 py-3 text-sm text-navy-blue hover:bg-slate-50 transition-colors">
                              Programs Overview
                            </Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link href={item.href} className={baseLinkClass}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <button
                className="md:hidden w-11 h-11 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center bg-blue-accent text-white hover:bg-navy-dark focus:outline-none focus:ring-2 focus:ring-blue-accent focus:ring-offset-2"
                aria-label="Mobile menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-slate-950/45 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } md:hidden`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-18 left-0 right-0 w-full bg-white/95 backdrop-blur-sm shadow-xl border-t border-blue-100 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav aria-label="Mobile site navigation">
            <ul className="flex flex-col p-4 space-y-2" role="list">
              {navItems.map((item) => (
                <li key={item.label} className="flex flex-col">
                  <Link
                    href={item.href}
                    className="font-semibold text-base py-3 px-4 transition duration-300 text-navy-blue hover:bg-blue-accent hover:text-white rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>

                  {item.hasDropdown && (
                    <div className="flex flex-col ml-4 pl-4 border-l-2 border-blue-100 mt-1 mb-2 space-y-1">
                      <a
                        href="https://drive.google.com/drive/folders/1JbR11sv3I1avlLajkJXFzMqgum21snNE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-sm py-2 px-3 transition duration-300 text-blue-accent hover:bg-blue-50 rounded"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        ↳ Prelim Papers 2026
                      </a>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
