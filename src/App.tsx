import { useState } from 'react';
import { ArrowUpRight, Award, Crown, X } from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Projects", "Studio", "Offerings", "Inquire"];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white selection:bg-white selection:text-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
          type="video/mp4"
        />
      </video>

      {/* Video Hot Pink Tint & Dark Overlay */}
      <div className="absolute inset-0 bg-[#ff1493]/45 mix-blend-color z-10" />
      <div className="absolute inset-0 bg-[#ff69b4]/25 mix-blend-screen z-10" />
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
            VANGUARD
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-10 lg:space-x-14">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-inter text-sm text-white/80 tracking-widest uppercase hover:text-white transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Get In Touch Button */}
          <div className="hidden md:block">
            <a
              href="#inquire"
              className="group flex items-center gap-1.5 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white/10 font-inter text-white font-medium"
            >
              Get In Touch
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex flex-col space-y-1.5 cursor-pointer md:hidden p-2 focus:outline-none"
            aria-label="Open navigation menu"
          >
            <div className="w-6 h-0.5 bg-white transition-all duration-300" />
            <div className="w-6 h-0.5 bg-white transition-all duration-300" />
            <div className="w-4 h-0.5 bg-white self-end transition-all duration-300" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between transition-all duration-500 px-6 sm:px-10 py-5 lg:py-7 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Overlay Header */}
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="font-podium text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white">
            VANGUARD
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 cursor-pointer focus:outline-none hover:opacity-85 transition-opacity"
            aria-label="Close navigation menu"
          >
            <X className="w-7 h-7 text-white" />
          </button>
        </div>

        {/* Centered Mobile Nav Links */}
        <div className="flex flex-col items-center justify-center flex-grow space-y-7">
          {menuItems.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={`font-podium text-4xl sm:text-5xl text-white uppercase tracking-wider transition-all duration-500 transform ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${i * 80 + 100}ms` }}
            >
              {item}
            </a>
          ))}

          {/* Staggered Get In Touch Button */}
          <a
            href="#inquire"
            onClick={() => setMenuOpen(false)}
            className={`group flex items-center gap-1.5 border border-white/30 hover:border-white/60 px-8 py-4 text-xs tracking-widest uppercase hover:bg-white/10 transition-all duration-500 transform font-inter text-white font-medium mt-6 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: `${menuItems.length * 80 + 100}ms` }}
          >
            Get In Touch
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>

        {/* Footer/Empty Space inside mobile overlay for layout balance */}
        <div className="h-12" />
      </div>

      {/* Hero Content */}
      <main className="relative z-20 h-full flex flex-col justify-center px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full">
        {/* 1. Tagline */}
        <div className="animate-fade-up mb-6 lg:mb-8 flex items-center gap-2">
          <Crown className="w-4 h-4 text-white/70" />
          <span className="text-white/70 text-xs sm:text-sm font-inter tracking-[0.3em] uppercase font-semibold">
            World-Class Digital Collective
          </span>
        </div>

        {/* 2. Main Heading */}
        <h1 className="animate-fade-up-delay-1 font-podium text-white uppercase leading-[0.92] tracking-tight text-[clamp(2.8rem,8vw,7rem)] flex flex-col">
          <span>Design.</span>
          <span>Disrupt.</span>
          <span>Conquer.</span>
        </h1>

        {/* 3. Subtext */}
        <p className="animate-fade-up-delay-2 text-white/70 text-sm sm:text-base font-inter leading-relaxed max-w-md mt-6 lg:mt-8">
          We build fierce brand identities <br className="hidden sm:inline" />
          that don't just turn heads -- <strong className="font-bold text-white">they lead.</strong>
        </p>

        {/* 4. CTA Row */}
        <div className="animate-fade-up-delay-3 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#projects"
            className="group bg-black hover:bg-neutral-900 border border-white/10 hover:border-white/20 text-white px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase flex items-center gap-2 transition-all duration-300 font-inter font-bold"
          >
            See Our Work
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>

          <div className="hidden sm:flex items-center gap-3">
            <Award className="w-8 h-8 text-white/50" />
            <div className="text-[10px] sm:text-xs tracking-wider text-white/60 uppercase leading-tight font-inter">
              <div>Top-Rated</div>
              <div className="font-semibold text-white/80">Brand Studio</div>
            </div>
          </div>
        </div>

        {/* 5. Stats Row */}
        <div className="animate-fade-up-delay-4 mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-8 sm:gap-12 lg:gap-16">
          <div className="flex flex-col font-inter">
            <span className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              250+
            </span>
            <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1 font-medium">
              Brands Transformed
            </span>
          </div>

          <div className="flex flex-col font-inter">
            <span className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              95%
            </span>
            <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1 font-medium">
              Client Retention
            </span>
          </div>

          <div className="flex flex-col font-inter">
            <span className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              10+
            </span>
            <span className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1 font-medium">
              Years in the Game
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
