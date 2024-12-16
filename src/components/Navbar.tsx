import React from 'react';
import { Search, Crown, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-[#23252b] text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Menu className="h-6 w-6 mr-4 cursor-pointer md:hidden" />
              <Crown className="h-8 w-8 text-[#f47521]" />
              <span className="ml-2 text-xl font-bold">Crunchyroll</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-[#f47521]">Browse</a>
              <a href="#" className="hover:text-[#f47521]">Manga</a>
              <a href="#" className="hover:text-[#f47521]">Games</a>
              <a href="#" className="hover:text-[#f47521]">News</a>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <Search className="h-5 w-5 cursor-pointer hover:text-[#f47521]" />
            <User className="h-5 w-5 cursor-pointer hover:text-[#f47521]" />
            <button className="bg-[#f47521] px-4 py-2 rounded-md font-semibold hover:bg-[#ff8a3d]">
              Try Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}