'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg backdrop-blur-md py-2 md:py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-xl md:text-2xl font-bold text-white hover:text-indigo-200 transition-colors">
              Portfolio
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-indigo-200 z-50 relative p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-sm lg:text-base text-white hover:text-indigo-200 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-violet-900 via-purple-900 to-pink-900 z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'translate-x-0' 
            : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-2xl text-white hover:text-violet-200 transition-all transform hover:scale-110 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
