'use client'

import { useState } from "react";
import Link from "next/link";

export const AppHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative">

      <div className="bg-white border-b border-gray-200 relative z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          
          <Link href="/" className="font-bold text-xl text-blue-600">
            AlikStore
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-blue-600">Գլխավոր</Link>
            <Link href="/products" className="hover:text-blue-600">Ապրանքներ</Link>
            <Link href="/about" className="hover:text-blue-600">Մեր մասին</Link>
            
            {isLoggedIn && (
              <Link href="/products/new" className="text-blue-600 font-semibold">
                + Ավելացնել
              </Link>
            )}
            
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className={
                isLoggedIn
                  ? 'rounded-md bg-zinc-100 px-4 py-2 text-zinc-800'
                  : 'rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'
              }
            >
              {isLoggedIn ? 'Դուրս գալ' : 'Մուտք'}
            </button>
          </nav>

          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-200 px-4 pt-2 pb-6 space-y-4 z-40 transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <Link href="/" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Գլխավոր</Link>
        <Link href="/products" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Ապրանքներ</Link>
        <Link href="/about" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Մեր մասին</Link>
        
        {isLoggedIn && (
          <Link href="/products/new" className="block text-blue-600 font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
            + Ավելացնել Ապրանք
          </Link>
        )}
        
        <div className="pt-2 border-t border-gray-100">
          <button
            onClick={() => {
              setIsLoggedIn(!isLoggedIn);
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-left mt-2 block"
          >
            <span className={isLoggedIn ? 'text-zinc-600' : 'text-blue-600 font-bold'}>
              {isLoggedIn ? 'Դուրս գալ' : 'Մուտք գործել'}
            </span>
          </button>
        </div>
      </div>

    </header>
  );
};