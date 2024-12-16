import React from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="max-w-xl text-white">
              <h1 className="text-5xl font-bold mb-4">Demon Slayer</h1>
              <p className="text-lg mb-6">
                When demons slaughter his family, a young boy named Tanjiro Kamado 
                resolves to become a demon slayer to turn his sister human again and 
                avenge his family.
              </p>
              <div className="flex space-x-4">
                <button className="flex items-center bg-[#f47521] px-6 py-3 rounded-md font-semibold hover:bg-[#ff8a3d]">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Now
                </button>
                <button className="px-6 py-3 rounded-md font-semibold border-2 border-white hover:bg-white/20">
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}