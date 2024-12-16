import React from 'react';

const animeList = [
  {
    title: "Attack on Titan",
    image: "https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&q=80",
    rating: "4.9",
    episodes: "87"
  },
  {
    title: "One Piece",
    image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80",
    rating: "4.8",
    episodes: "1064"
  },
  {
    title: "My Hero Academia",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80",
    rating: "4.7",
    episodes: "138"
  },
  {
    title: "Jujutsu Kaisen",
    image: "https://images.unsplash.com/photo-1626548307930-deac221f87d9?auto=format&fit=crop&q=80",
    rating: "4.9",
    episodes: "46"
  },
  {
    title: "Black Clover",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80",
    rating: "4.6",
    episodes: "170"
  },
  {
    title: "Tokyo Revengers",
    image: "https://images.unsplash.com/photo-1624217880342-0a9fda348a4c?auto=format&fit=crop&q=80",
    rating: "4.7",
    episodes: "24"
  }
];

export default function AnimeGrid() {
  return (
    <div className="bg-[#23252b] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-2xl font-bold mb-8">Popular Anime</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {animeList.map((anime, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img 
                  src={anime.image} 
                  alt={anime.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-semibold">{anime.title}</h3>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>⭐ {anime.rating}</span>
                  <span>{anime.episodes} Episodes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}