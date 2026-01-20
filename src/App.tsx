import { useState } from 'react';
import { Sparkles } from './components/Sparkles';

interface Meme {
  id: number;
  url: string;
  alt: string;
}

const initialMemes: Meme[] = [
  {
    id: 1,
    url: '/johnny_pfp_-_2026-01-19t181823.335.png',
    alt: 'PISSCOIN Meme 1'
  },
  {
    id: 2,
    url: '/3153a690-8e0f-4cb0-9b4b-49f985f7af55-md.jpeg',
    alt: 'PISSCOIN Meme 2'
  },
  {
    id: 3,
    url: '/johnny_pfp_-_2026-01-19t182323.297.png',
    alt: 'PISSCOIN Meme 3'
  },
  {
    id: 4,
    url: '/725551b4-f22a-4251-9008-f61c457f33c3-md.jpeg',
    alt: 'PISSCOIN Meme 4'
  }
];

function App() {
  const [memes] = useState<Meme[]>(initialMemes);
  const duplicatedMemes = [...memes, ...memes, ...memes];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Sparkles />

      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <img
              src="/the_indomitable_human_spirit_(7).png"
              alt="PISSCOIN"
              className="max-w-2xl w-full h-auto"
            />
          </div>
          <div className="flex items-center justify-center gap-2 text-yellow-500 mb-4">
            <p className="text-2xl font-bold tracking-wide">GOLD AT ATH</p>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We've had FARTCOIN. SHITCOIN. TITCOIN. BUTTCOIN.
            <br />
            <span className="text-yellow-500 font-bold">NOW IT'S TIME FOR PISSCOIN TO SHINE</span>
          </p>
        </header>

        {/* DexScreener Chart */}
        <section className="mb-20">
          <h2 className="text-3xl font-black text-yellow-500 mb-8 text-center tracking-tight">
            LIVE CHART
          </h2>
          <div className="bg-neutral-900 rounded-lg overflow-hidden border-2 border-yellow-500/20 shadow-2xl shadow-yellow-500/10">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://dexscreener.com/solana/YOUR_TOKEN_ADDRESS?embed=1&theme=dark&trades=0&info=0"
                title="DexScreener Chart"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center pb-8">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mx-auto mb-6" />
          <p className="text-gray-600 text-sm font-bold tracking-widest">
            $PISSCOIN
          </p>
        </footer>
      </div>

      {/* Infinite Carousel */}
      <section className="mb-20 overflow-hidden">
        <h2 className="text-3xl font-black text-yellow-500 mb-8 text-center tracking-tight relative z-10">
          MEME GALLERY
        </h2>
        <div className="relative">
          <div className="flex animate-scroll gap-6">
            {duplicatedMemes.map((meme, index) => (
              <div
                key={`${meme.id}-${index}`}
                className="flex-shrink-0 w-80 h-80 relative overflow-hidden rounded-lg border-2 border-yellow-500/20 bg-neutral-900 hover:border-yellow-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20"
              >
                <img
                  src={meme.url}
                  alt={meme.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
