
import React, { useState, useEffect } from 'react';
import BackgroundAnimation from './components/BackgroundAnimation';
import { HeroScrollWrapper, SectionScrollTrigger } from './components/ScrollEffects';

// Custom icons and meme motifs
const Sticker = ({ children, className, rotate = "0deg", size = "w-24 h-24" }: any) => (
  <div
    className={`absolute ${size} ${className} flex items-center justify-center bg-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:scale-110 cursor-pointer`}
    style={{ transform: `rotate(${rotate})` }}
  >
    {children}
  </div>
);

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#8051FF] selection:text-white overflow-x-hidden relative">
      <BackgroundAnimation />
      {/* Custom Cursor */}
      <div
        className="fixed w-16 h-16 bg-[#8051FF] rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ left: mousePos.x, top: mousePos.y, transform: 'translate(-50%, -50%)' }}
      />

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/10">
        <h1 className="text-2xl font-black italic tracking-tighter">StickerDump.exe</h1>
        <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest">
          <a href="#lab" className="hover:text-[#8051FF] transition-colors">Sticker Lab</a>
          <a href="#packs" className="hover:text-[#8051FF] transition-colors">Packs</a>
          <a href="#vibes" className="hover:text-[#8051FF] transition-colors">Vibes</a>
          <button className="bg-[#8051FF] px-4 py-2 text-black hover:bg-white transition-all transform -rotate-2">SHOP NOW</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20 z-10 overflow-hidden">
        <HeroScrollWrapper>
          <div className="glass-panel p-12 rounded-3xl border border-white/10 backdrop-blur-xl z-10 text-center px-4 max-w-5xl shadow-[0_0_50px_rgba(128,81,255,0.2)]">
            <h2 className="text-6xl md:text-9xl font-black uppercase leading-none tracking-tighter text-white mb-6 animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              Bring your <br /> <span className="text-[#8051FF] bg-white px-2 -rotate-1 inline-block shadow-[4px_4px_0_black]">vibe</span> to life
            </h2>
            <p className="text-lg md:text-2xl font-medium mb-10 max-w-2xl mx-auto opacity-90 drop-shadow-lg text-gray-200">
              Super-premium, scratch-proof, waterproof stickers that actually say something about you. No more boring backshell.
            </p>
            <button className="group relative bg-[#8051FF] text-white px-12 py-6 text-xl font-black uppercase tracking-widest border-4 border-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(128,81,255,0.6)]">
              Start Your Dump
            </button>
          </div>
        </HeroScrollWrapper>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-6 bg-[#292919]">
        <SectionScrollTrigger>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-16 uppercase tracking-tighter">Bade Brands vs. StickerDump.exe</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* The Boring Guys */}
              <div className="bg-white/5 p-10 border-4 border-dashed border-white/20 hover:border-white/40 transition-all">
                <h3 className="text-3xl font-black mb-6 uppercase text-white/50">Bade Bade Brands</h3>
                <ul className="space-y-4 text-xl font-medium">
                  <li className="flex items-center">❌ <span className="ml-3">Overpriced AF (₹500 for one?)</span></li>
                  <li className="flex items-center">❌ <span className="ml-3">Corporate & Boring designs</span></li>
                  <li className="flex items-center">❌ <span className="ml-3">Peels off in 2 days</span></li>
                  <li className="flex items-center">❌ <span className="ml-3">No personal connection</span></li>
                </ul>
              </div>
              {/* Us */}
              <div className="bg-[#8051FF] p-10 border-4 border-black shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] rotate-1">
                <h3 className="text-3xl font-black mb-6 uppercase text-black italic">StickerDump.exe Wale Log</h3>
                <ul className="space-y-4 text-xl font-bold text-black">
                  <li className="flex items-center">✅ <span className="ml-3">Pocket Friendly (Momo's ke bhav)</span></li>
                  <li className="flex items-center">✅ <span className="ml-3">Meme-inspired & Personal</span></li>
                  <li className="flex items-center">✅ <span className="ml-3">Laminated, Scratch Proof</span></li>
                  <li className="flex items-center">✅ <span className="ml-3">Surprise Mystery Stickers</span></li>
                </ul>
              </div>
            </div>
          </div>
        </SectionScrollTrigger>
      </section>

      {/* Pack Picker (Pricing) */}
      <section id="packs" className="py-24 px-6 bg-black">
        <SectionScrollTrigger>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-center mb-20 uppercase tracking-tighter italic">Choose Your Dump</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {/* CHOTA */}
              <div className="group relative bg-white text-black p-8 flex flex-col h-full hover:scale-105 transition-transform">
                <div className="absolute -top-6 -right-6 bg-red-500 text-white p-2 font-black rotate-12 group-hover:rotate-0 transition-all">POPULAR</div>
                <h3 className="text-4xl font-black mb-2 italic uppercase">CHOTA</h3>
                <p className="text-lg font-bold mb-8 uppercase opacity-60">The Starter Pack</p>
                <div className="text-5xl font-black mb-8 italic">₹54+</div>
                <ul className="space-y-4 mb-10 flex-grow font-bold uppercase text-sm">
                  <li>• 3 Premium Stickers</li>
                  <li>• Any Theme You Choose</li>
                  <li>• Free "Dump" Logo Decal</li>
                </ul>
                <button className="w-full bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-[#8051FF] transition-all">Get It</button>
              </div>

              {/* THODA BADA */}
              <div className="group relative bg-[#8051FF] text-white p-8 flex flex-col h-full shadow-[20px_20px_0px_0px_rgba(255,255,255,1)] -rotate-1 hover:rotate-0 transition-transform">
                <div className="absolute -top-6 -right-6 bg-black text-white p-2 font-black rotate-6 group-hover:scale-110 transition-all">GEN-Z FAV</div>
                <h3 className="text-4xl font-black mb-2 italic uppercase">Thoda Bada</h3>
                <p className="text-lg font-bold mb-8 uppercase opacity-80">The Value Choice</p>
                <div className="text-5xl font-black mb-8 italic">₹99</div>
                <ul className="space-y-4 mb-10 flex-grow font-bold uppercase text-sm">
                  <li>• 8 Premium Stickers</li>
                  <li>• 2 Mystery Stickers 🔥</li>
                  <li>• High-Gloss Finish</li>
                  <li>• Priority Shipping</li>
                </ul>
                <button className="w-full bg-white text-black py-4 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">Claim Now</button>
              </div>

              {/* BOHOT BADA */}
              <div className="group relative bg-white text-black p-8 flex flex-col h-full hover:scale-105 transition-transform">
                <h3 className="text-4xl font-black mb-2 italic uppercase">Bohot Bada</h3>
                <p className="text-lg font-bold mb-8 uppercase opacity-60">The Full Flex</p>
                <div className="text-5xl font-black mb-8 italic">₹299</div>
                <ul className="space-y-4 mb-10 flex-grow font-bold uppercase text-sm">
                  <li>• 25+ Premium Stickers</li>
                  <li>• 6 Mystery Stickers ✨</li>
                  <li>• Custom Vinyl Finish</li>
                  <li>• Free Sticker Tweezers</li>
                </ul>
                <button className="w-full bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-[#8051FF] transition-all">Go Big</button>
              </div>
            </div>
          </div>
        </SectionScrollTrigger>
      </section>

      {/* Sticker Lab (Custom Upload) */}
      <section id="lab" className="py-24 px-6 bg-gradient-to-b from-black to-[#292919]">
        <div className="max-w-5xl mx-auto bg-white p-12 border-8 border-black shadow-[32px_32px_0px_0px_rgba(128,81,255,1)]">
          <div className="text-black">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic mb-4">Sticker Lab</h2>
            <p className="text-xl font-bold mb-10 opacity-70">Drag your wildest designs here. We'll turn them into premium vinyl reality.</p>

            <div className="border-8 border-dashed border-black/20 rounded-3xl h-80 flex flex-col items-center justify-center cursor-pointer hover:border-[#8051FF] hover:bg-[#8051FF]/5 transition-all group">
              <div className="text-8xl mb-4 group-hover:scale-110 transition-transform">📁</div>
              <p className="text-2xl font-black uppercase tracking-widest">Drop 'Em Here</p>
              <p className="text-sm font-bold opacity-40 mt-2 uppercase">PNG, JPG or SVG (Max 10MB)</p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4 items-center">
              <span className="font-black uppercase italic text-sm">Customizing for:</span>
              <button className="bg-black text-white px-4 py-2 text-xs font-black uppercase">Phone</button>
              <button className="border-2 border-black px-4 py-2 text-xs font-black uppercase hover:bg-black hover:text-white transition-all">Laptop</button>
              <button className="border-2 border-black px-4 py-2 text-xs font-black uppercase hover:bg-black hover:text-white transition-all">Car Window</button>
            </div>
          </div>
        </div>
      </section>

      {/* Wall of Vibes (Testimonials) */}
      <section id="vibes" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">
              Wall <br /> of <br /> <span className="text-[#8051FF]">Vibes</span>
            </h2>
            <div className="text-right">
              <div className="text-4xl font-black italic">60+ ORDERS</div>
              <div className="text-2xl font-bold opacity-60">3,000+ STICKERS SOLD</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`aspect-square bg-white border-2 border-black relative group overflow-hidden ${i % 3 === 0 ? 'rotate-2' : '-rotate-2'}`}>
                <img
                  src={`https://picsum.photos/seed/${i + 50}/400/400`}
                  alt="Sticker on phone"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-[#8051FF]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center p-4 text-center transition-all">
                  <p className="font-black text-xs uppercase text-white leading-tight">"Best quality in the market. Actually waterproof!" - User {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-32 px-6 bg-[#8051FF] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none select-none text-[20rem] font-black leading-none whitespace-nowrap -rotate-12 transform -translate-y-1/2">
          STICKERDUMP STICKERDUMP STICKERDUMP
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black uppercase text-black italic mb-10 tracking-tighter">Don't be basic.</h2>
          <button className="bg-white text-black px-16 py-8 text-2xl font-black uppercase border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">
            Join The Dump
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter mb-4">StickerDump.exe</h1>
            <p className="text-lg font-bold opacity-60 uppercase tracking-widest">Aao kabhi StickerDump.exe ke page pe</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-black uppercase mb-6 text-[#8051FF]">Socials</h4>
              <ul className="space-y-4 font-bold uppercase text-sm opacity-60">
                <li><a href="#" className="hover:opacity-100">Instagram</a></li>
                <li><a href="#" className="hover:opacity-100">Twitter (X)</a></li>
                <li><a href="#" className="hover:opacity-100">Discord</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase mb-6 text-[#8051FF]">Help</h4>
              <ul className="space-y-4 font-bold uppercase text-sm opacity-60">
                <li><a href="#" className="hover:opacity-100">Shipping</a></li>
                <li><a href="#" className="hover:opacity-100">Returns</a></li>
                <li><a href="#" className="hover:opacity-100">Bulk Orders</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-black uppercase mb-6 text-[#8051FF]">Newsletter</h4>
              <div className="flex border-b-2 border-white/20 focus-within:border-[#8051FF] transition-all">
                <input type="text" placeholder="YOUR EMAIL" className="bg-transparent py-2 w-full font-black uppercase text-xs focus:outline-none text-white placeholder-white/50" />
                <button className="text-2xl">→</button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] font-bold opacity-40 uppercase tracking-widest gap-4">
          <p>© 2024 STICKERDUMP.EXE ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
