import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimeGrid from './components/AnimeGrid';

function App() {
  return (
    <div className="bg-[#23252b] min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <AnimeGrid />
      </main>
    </div>
  );
}

export default App;