'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 navbar-premium bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/images/agsc.png"
                alt="Adamjee Government Science College Logo"
                width={48}
                height={48}
                className="w-12 h-12"
                priority
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {['Home', 'Academics', 'Tour', 'Admissions', 'History', 'Contact'].map((item) => {
                if (item === 'Academics') {
                  return (
                    <div key={item} className="relative group py-4">
                      <Link
                        href="/#academics"
                        className="font-medium text-sm transition-colors duration-200 text-navy-blue hover:text-blue-accent focus:outline-none focus:ring-2 focus:ring-blue-accent focus:ring-offset-2 rounded flex items-center gap-1"
                      >
                        {item}
                        <ChevronDown size={14} className="text-navy-blue group-hover:text-blue-accent transition-colors" />
                      </Link>
                      {/* Dropdown Menu */}
                      <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden w-64 flex flex-col">
                          <a
                            href="https://drive.google.com/drive/folders/1JbR11sv3I1avlLajkJXFzMqgum21snNE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 text-sm text-blue-accent hover:bg-blue-50 font-medium border-b border-gray-50 transition-colors"
                          >
                            Prelim Papers 2026
                          </a>
                          <Link
                            href="/#academics"
                            className="px-4 py-3 text-sm text-navy-blue hover:bg-gray-50 transition-colors"
                          >
                            Programs Overview
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item}
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="font-medium text-sm transition-colors duration-200 text-navy-blue hover:text-blue-accent focus:outline-none focus:ring-2 focus:ring-blue-accent focus:ring-offset-2 rounded"
                  >
                    {item}
                  </Link>
                );
              })}
            </div>

            <button
              className="md:hidden w-12 h-12 rounded-full font-medium transition-colors duration-200 flex items-center justify-center bg-blue-accent text-white hover:bg-navy-dark focus:outline-none focus:ring-2 focus:ring-blue-accent focus:ring-offset-2"
              aria-label="Mobile menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Positioned outside the navbar to avoid overlay issues */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } md:hidden`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-16 left-0 right-0 w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col p-4 space-y-2">
            {['Home', 'Academics', 'Tour', 'Admissions', 'History', 'Contact'].map((item) => (
              <div key={item} className="flex flex-col">
                <Link
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="font-medium text-base py-3 px-4 transition duration-300 text-navy-blue hover:bg-blue-accent hover:text-white rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>

                {/* Mobile Dropdown Items */}
                {item === 'Academics' && (
                  <div className="flex flex-col ml-4 pl-4 border-l-2 border-gray-100 mt-1 mb-2 space-y-1">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}