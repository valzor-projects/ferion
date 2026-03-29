import React, { useState, useRef, useEffect } from 'react';

// Social Links Data (Refactored to store raw path strings to avoid React child rendering errors)
const socialLinks = [
  {
    name: 'Reddit',
    url: 'https://www.reddit.com/user/mrujjwalkr/',
    path: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.753 0 .528-.235 1.002-.6 1.325.015.176.03.352.03.535 0 3.125-3.314 5.666-7.4 5.666s-7.4-2.541-7.4-5.666c0-.183.015-.359.03-.535a1.754 1.754 0 0 1-.6-1.325c0-.967.786-1.753 1.754-1.753.477 0 .899.182 1.207.491 1.194-.856 2.85-1.418 4.674-1.488l.942-4.414c.035-.165.195-.274.364-.241l3.051.643a1.246 1.246 0 0 1 1.257-1.043zm-7.64 8.799c-.93 0-1.683.754-1.683 1.684 0 .93.753 1.684 1.683 1.684s1.684-.754 1.684-1.684c0-.93-.754-1.684-1.684-1.684zm5.26 0c-.93 0-1.684.754-1.684 1.684 0 .93.754 1.684 1.684 1.684s1.683-.754 1.683-1.684c0-.93-.753-1.684-1.683-1.684zm-2.63 4.15c-1.385 0-2.591-.532-3.328-1.341l-.664.912c.93.81 2.33 1.43 3.992 1.43 1.662 0 3.063-.62 3.992-1.43l-.664-.912c-.737.809-1.943 1.341-3.328 1.341z"
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/u-k-r/',
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  },
  {
    name: 'Hacker News',
    url: 'https://news.ycombinator.com/user?id=valzor',
    path: "M2 2h20v20H2V2zm9.6 11.2V18H13v-4.8l3.6-6h-1.8L12.4 11 10 7.2H8.2l3.4 6z"
  }
];

// Domains Data Arrays restored to fix ReferenceError
const domainsData = [
  { num: '01', title: 'Technology', cursive: 'Stack', link: '#' },
  { num: '02', title: 'Gaming', cursive: 'World', link: '#' },
  { num: '03', title: 'Language & Culture', cursive: 'Roots', link: '#' },
  { num: '04', title: 'Psychology', cursive: 'Mind', link: '#' },
  { num: '05', title: 'Content Creation', cursive: 'Flow', link: '#' },
  { num: '06', title: 'Sports', cursive: 'Active', link: '#' },
  { num: '07', title: 'Entertainment', cursive: 'Vibes', link: '#' }
];

// Domains Section Component
const DomainsSection = ({ domainsData }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="domains"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 lg:py-48 min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="w-full flex flex-col items-center justify-center">

        <div className="relative mb-24 md:mb-40 lg:mb-56 text-center flex flex-col items-center justify-center w-full px-4">
          <span
            className={`font-['Caveat'] text-[var(--accent)] text-5xl md:text-7xl lg:text-[7rem] absolute z-10 -rotate-[6deg] transition-all duration-1000 ease-out delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ top: '-15%', left: '50%', transform: 'translateX(-90%) rotate(-6deg)' }}
          >
            Table Of
          </span>
          <h2 className={`text-6xl md:text-[8rem] lg:text-[11rem] xl:text-[14rem] font-bold tracking-tight text-[var(--text-primary)] relative z-0 leading-none transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            Domains
          </h2>
        </div>

        <div className="relative w-full px-6 md:px-16 lg:px-24 xl:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 md:gap-x-12 md:gap-y-24 lg:gap-x-20 lg:gap-y-32 xl:gap-y-48 relative z-10 w-full">
            {domainsData.map((domain, index) => {
              const isSeventh = index === 6;
              const delay = index * 100;

              return (
                <a
                  key={domain.num}
                  href={domain.link}
                  className={`relative flex items-center justify-center h-40 md:h-56 lg:h-64 xl:h-80 transition-all duration-[1200ms] group cursor-pointer block
                    ${isSeventh ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                  `}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <span className="absolute text-[8rem] md:text-[10rem] lg:text-[13rem] xl:text-[18rem] font-bold text-[var(--text-primary)] opacity-[0.03] select-none pointer-events-none transition-transform duration-700 group-hover:scale-105">
                    {domain.num}
                  </span>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold relative z-10 text-[var(--text-primary)] pointer-events-none transition-transform duration-500 group-hover:-translate-y-2 text-center flex flex-col items-center">
                    {domain.title}
                    <span className="font-['Caveat'] text-[var(--accent)] text-3xl md:text-4xl lg:text-5xl xl:text-[5.5rem] font-normal absolute -bottom-6 -right-2 md:-bottom-8 md:-right-6 lg:-bottom-10 lg:-right-8 xl:-bottom-12 xl:-right-12 rotate-[-10deg] whitespace-nowrap transition-transform duration-500 group-hover:rotate-[-5deg] group-hover:scale-110">
                      {domain.cursive}
                    </span>
                  </h3>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

// About Me Section Component
const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full border-t border-[var(--glass-border)] bg-[var(--glass-bg)] py-16 md:py-24 lg:py-28"
    >
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage: 'linear-gradient(var(--glass-border) 1px, transparent 1px), linear-gradient(90deg, var(--glass-border) 1px, transparent 1px)',
          backgroundSize: '120px 120px'
        }}
      ></div>

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className={`lg:sticky top-32 transition-all duration-[1000ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <span className="font-['Caveat'] text-[var(--accent)] text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide block mb-3">
                About me,
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold tracking-tight text-[var(--text-primary)] leading-[1.05] mb-8">
                Ujjwal Kumar Rai
              </h2>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col pt-2 lg:pt-0">
            <div className={`transition-all duration-[1000ms] ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

              <p className="text-base md:text-lg lg:text-xl text-[var(--text-secondary)] font-light leading-[1.7] mb-8 md:mb-10 pb-8 md:pb-10 border-b border-[var(--glass-border)]">
                I'm going to be honest with you. I used to think something was wrong with me. Everyone around me had a plan. Doctor. Engineer. Pilot. Pick a lane, stay in it, master it, retire. I couldn't do it. Not because I was lazy. The opposite, actually. <strong className="text-[var(--text-primary)] font-medium">I wanted to do everything.</strong> Build things. Break things. Learn things nobody taught me. Solve problems that hadn't been named yet. Help people in ways that didn't fit a job title.
              </p>

              <div className="columns-1 md:columns-2 gap-8 md:gap-10 text-sm md:text-base text-[var(--text-secondary)] font-light leading-[1.8] mb-8 md:mb-10">
                <p className="mb-6 break-inside-avoid">
                  Every time I got good at something, I wanted to learn the next thing. People called it a lack of focus. I called it <strong className="text-[var(--text-primary)] font-medium">being alive.</strong> School didn't help. The whole system was basically a memory competition. Memorise this. Reproduce it. Get graded. Repeat.
                </p>

                <p className="mb-6 break-inside-avoid">
                  I had one rule: <strong className="text-[var(--text-primary)] font-medium">don't memorise what you can look up.</strong> Which made me a terrible student and a decent thinker.
                </p>
              </div>

              <div className="my-10 lg:my-12">
                <p className="text-base md:text-lg lg:text-xl text-[var(--text-secondary)] font-light leading-[1.7] mb-6">
                  I asked ChatGPT once,
                </p>

                {/* ChatGPT Interface Mockup */}
                <div className="relative overflow-hidden bg-[var(--nav-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex flex-col mb-6">

                  {/* Window Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--glass-border)] bg-[var(--glass-bg)]">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-80"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-80"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-80"></div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                      <span className="text-xs md:text-sm font-medium text-[var(--text-primary)] opacity-80">ChatGPT 4o</span>
                    </div>
                  </div>

                  {/* Chat Area */}
                  <div className="p-5 md:p-8 flex flex-col gap-6 md:gap-8">

                    {/* User Prompt */}
                    <div className="flex justify-end w-full">
                      <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--text-primary)] text-sm md:text-base px-5 py-3.5 rounded-2xl rounded-tr-sm max-w-[95%] md:max-w-[85%] font-light shadow-sm">
                        What do you call someone obsessed with learning everything and can't stick to one field?
                      </div>
                    </div>

                    {/* ChatGPT Reply */}
                    <div className="flex justify-start items-start gap-3 md:gap-4 w-full">
                      {/* Fixed: Official ChatGPT logo fetched via URL to guarantee ZERO distortion */}
                      <div className="w-8 h-8 min-w-[32px] min-h-[32px] flex-shrink-0 rounded-full bg-[#10a37f] flex items-center justify-center mt-1 shadow-sm overflow-hidden">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                          alt="ChatGPT"
                          className="w-[18px] h-[18px] object-contain flex-shrink-0"
                          style={{ filter: 'brightness(0) invert(1)' }}
                        />
                      </div>
                      <div className="text-[var(--text-primary)] text-sm md:text-base font-light leading-[1.8] max-w-[90%] md:max-w-[85%] mt-1">
                        The word you are looking for is <strong className="font-semibold text-[var(--accent)]">Polymath</strong>. It describes an individual whose knowledge spans a substantial number of subjects, known to draw on complex bodies of knowledge to solve specific problems.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="columns-1 md:columns-2 gap-8 md:gap-10 text-sm md:text-base text-[var(--text-secondary)] font-light leading-[1.8]">
                <p className="mb-6 break-inside-avoid">
                  <strong className="text-[var(--text-primary)] font-medium">Polymath. Polyhistor.</strong> Sounds fancy. Sounds like someone who has it figured out. In reality, it just means I was the kid in class wondering why we had to pick one thing when the world clearly needed people who understood many things. I still don't have one answer when people ask what I do. I build things. I break things. I write. I learn. I create.
                </p>

                <p className="mb-6 break-inside-avoid">
                  Some call it impressive. Some call it scattered. I've stopped trying to decide which one is right. All I know is <strong className="text-[var(--text-primary)] font-medium">I've never been bored.</strong> And I think that counts for something.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default function App() {
  const navItems = ['HOME', 'DOMAINS', 'ABOUT'];

  // Theme & Interaction State
  const [theme, setTheme] = useState('dark');
  const [isGlitching, setIsGlitching] = useState(false);

  // Navigation State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [dotProps, setDotProps] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });
  const navRefs = useRef([]);

  // Setup Theme on Mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Theme Toggle Handler
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    // Trigger Subtle Premium Glitch Effect only when switching OFF (Light -> Dark)
    if (newTheme === 'dark') {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 250);
    }

    setTheme(newTheme);
    localStorage.setItem('app-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const scrollToSection = (e, targetId) => {
    e?.preventDefault();
    if (targetId === 'HOME') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const sectionId = targetId.toLowerCase();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // Close mobile menu on navigate
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'domains', 'about'];
      let currentIdx = 0;

      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.4) {
            currentIdx = i;
            break;
          }
        }
      }
      setCurrentActiveIndex(currentIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateDot = () => {
      const targetIndex = hoverIndex !== null ? hoverIndex : currentActiveIndex;
      const el = navRefs.current[targetIndex];
      if (el) {
        setDotProps({
          left: el.offsetLeft,
          top: el.offsetTop,
          width: el.offsetWidth,
          height: el.offsetHeight,
          opacity: 1,
        });
      } else {
        setDotProps(prev => ({ ...prev, opacity: 0 }));
      }
    };

    setTimeout(updateDot, 50);
    window.addEventListener('resize', updateDot);
    return () => window.removeEventListener('resize', updateDot);
  }, [currentActiveIndex, hoverIndex]);

  return (
    <div
      className="min-h-screen relative overflow-x-hidden transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-primary)',
        backgroundImage: 'var(--hero-glow)',
        backgroundAttachment: 'fixed',
        fontFamily: "'Outfit', sans-serif"
      }}
    >
      {/* Global Theme & Animation Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Outfit:wght@300;400;500;600;700;900&display=swap');
          
          :root {
            /* Light Theme Defaults */
            --bg-primary: #e2e8f0;
            --text-primary: #0f172a;
            --text-secondary: #475569;
            --accent: #FF0055;
            --glass-bg: rgba(0, 0, 0, 0.05);
            --glass-border: rgba(0, 0, 0, 0.1);
            --nav-bg: rgba(226, 232, 240, 0.75);
            --hero-glow: radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.9) 0%, rgba(226, 232, 240, 0) 60%, rgba(226, 232, 240, 0) 100%);
          }

          [data-theme='dark'] {
            /* Dark Theme Overrides */
            --bg-primary: #050505;
            --text-primary: #ffffff;
            --text-secondary: #9ca3af;
            --accent: #FF0055;
            --glass-bg: rgba(255, 255, 255, 0.03);
            --glass-border: rgba(255, 255, 255, 0.1);
            --nav-bg: rgba(5, 5, 5, 0.75);
            --hero-glow: radial-gradient(circle at 50% 40%, rgba(255, 0, 85, 0.15) 0%, rgba(10, 10, 10, 1) 50%, rgba(0, 0, 0, 1) 100%);
          }

          /* Glitch Animation */
          .glitch-premium {
            animation: subtle-glitch 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          }
          @keyframes subtle-glitch {
            0% { transform: translate(0); filter: drop-shadow(0 0 0 rgba(255,0,85,0)) drop-shadow(0 0 0 rgba(0,255,255,0)); opacity: 1; }
            20% { transform: translate(-2px, 1px); filter: drop-shadow(2px 0 0 rgba(255,0,85,0.8)) drop-shadow(-2px 0 0 rgba(0,255,255,0.8)); opacity: 0.8; }
            40% { transform: translate(2px, -1px); filter: drop-shadow(-2px 0 0 rgba(255,0,85,0.8)) drop-shadow(2px 0 0 rgba(0,255,255,0.8)); opacity: 0.9; }
            60% { transform: translate(-1px, 0); filter: drop-shadow(1px 0 0 rgba(255,0,85,0.8)) drop-shadow(-1px 0 0 rgba(0,255,255,0.8)); opacity: 1; }
            80% { transform: translate(1px, 1px); filter: drop-shadow(-1px 0 0 rgba(255,0,85,0.8)) drop-shadow(1px 0 0 rgba(0,255,255,0.8)); opacity: 0.9; }
            100% { transform: translate(0); filter: drop-shadow(0 0 0 rgba(255,0,85,0)) drop-shadow(0 0 0 rgba(0,255,255,0)); opacity: 1; }
          }
        `}
      </style>

      {/* Ambient noise overlay */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      ></div>

      <div className="relative z-10 pt-[72px] md:pt-24">

        {/* Fixed Navigation Header - Optimized Glassmorphism */}
        <header
          className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-[var(--glass-border)] transition-colors duration-500"
          style={{
            backgroundColor: 'var(--nav-bg)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          }}
        >
          <nav className="relative w-full max-w-[1440px] mx-auto px-6 py-4 lg:px-12 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group z-50" onClick={(e) => scrollToSection(e, 'HOME')}>
              <span className="text-sm font-bold tracking-widest uppercase mt-1 text-[var(--text-primary)]">FERION</span>
            </div>

            {/* Desktop Navigation Links */}
            <div
              className="hidden md:flex items-center bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-full px-8 py-3 gap-8 relative shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* Premium Sliding Pill Background */}
              <div
                className="absolute top-0 left-0 pointer-events-none bg-[var(--text-primary)] rounded-full z-0"
                style={{
                  transform: `translate3d(${dotProps.left - 16}px, ${dotProps.top - 8}px, 0)`,
                  width: `${dotProps.width + 32}px`,
                  height: `${dotProps.height + 16}px`,
                  opacity: dotProps.opacity > 0 ? 0.04 : 0,
                  transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), width 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease',
                  willChange: 'transform, width'
                }}
              />

              {navItems.map((item, index) => {
                const isTarget = hoverIndex !== null ? index === hoverIndex : index === currentActiveIndex;
                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    ref={el => navRefs.current[index] = el}
                    onClick={(e) => scrollToSection(e, item)}
                    onMouseEnter={() => setHoverIndex(index)}
                    className={`text-xs tracking-wider transition-colors duration-300 relative z-10 font-medium ${isTarget ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                    style={isTarget ? { textShadow: '0 0 10px rgba(255, 255, 255, 0.2)' } : {}}
                  >
                    {item}
                  </a>
                );
              })}

              {/* Smooth GPU-Accelerated Dot */}
              <span
                className="absolute top-0 left-0 bg-[var(--text-primary)] rounded-full pointer-events-none z-10"
                style={{
                  transform: `translate3d(${dotProps.left + (dotProps.width / 2) - 2}px, ${dotProps.top + dotProps.height + 6}px, 0)`,
                  width: '4px',
                  height: '4px',
                  opacity: dotProps.opacity,
                  transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease',
                  willChange: 'transform'
                }}
              ></span>
            </div>

            {/* Desktop Right Side (Socials & Action) */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <div className="flex items-center gap-4 lg:gap-5 text-[var(--text-secondary)]">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="hover:text-[var(--text-primary)] transition-colors p-1"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>

              <button onClick={(e) => scrollToSection(e, 'DOMAINS')} className="bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-full px-5 py-2 lg:py-2.5 text-xs lg:text-sm font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity">
                Learn more
                <span className="bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-full p-1 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[var(--text-primary)] focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {isMobileMenuOpen ? (
                    <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></>
                  ) : (
                    <><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></>
                  )}
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Overlay Dropdown */}
          <div
            className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isMobileMenuOpen ? 'max-h-[500px] border-b border-[var(--glass-border)]' : 'max-h-0'}`}
          >
            <div className="bg-[var(--nav-bg)] backdrop-blur-3xl px-6 py-8 flex flex-col items-center gap-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
              {navItems.map((item) => (
                <a
                  key={`mobile-${item}`}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, item)}
                  className="text-lg tracking-widest font-semibold text-[var(--text-primary)] uppercase"
                >
                  {item}
                </a>
              ))}

              {/* Mobile Social Links */}
              <div className="flex gap-8 mt-4 pt-8 border-t border-[var(--glass-border)] w-full justify-center text-[var(--text-secondary)]">
                {socialLinks.map((social) => (
                  <a
                    key={`mobile-${social.name}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="hover:text-[var(--text-primary)] transition-colors p-2"
                  >
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main id="home" className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-12 pb-16 md:pb-20 pt-16 md:pt-24 lg:pt-32 min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center items-center">

          <div className={`relative flex flex-col items-center w-full max-w-6xl ${isGlitching ? 'glitch-premium' : ''}`}>

            <div className="relative w-full flex flex-col items-center select-none">
              <span className="text-[var(--text-secondary)] tracking-[0.3em] uppercase text-xs md:text-sm lg:text-lg font-semibold self-start md:absolute md:top-[-2rem] md:left-[10%] xl:left-[12%] mb-4 md:mb-0">
                Building
              </span>

              <h1 className="text-[16vw] md:text-[9rem] lg:text-[12rem] xl:text-[14rem] font-black uppercase tracking-tighter leading-none text-[var(--text-primary)] flex items-center justify-center w-full whitespace-nowrap md:whitespace-normal">
                INN

                <div
                  onClick={toggleTheme}
                  className={`relative inline-flex items-center justify-center w-[0.7em] h-[0.7em] mx-2 md:mx-4 rounded-full cursor-pointer transition-all duration-700 hover:scale-105 active:scale-95 z-20 flex-shrink-0
                     ${theme === 'light'
                      ? 'bg-white shadow-[0_0_80px_30px_rgba(255,255,255,0.9),inset_0_0_30px_rgba(255,255,255,1)]'
                      : 'bg-[#111] shadow-[inset_0_0_30px_rgba(0,0,0,0.9),0_0_15px_rgba(255,255,255,0.05)] border border-[var(--glass-border)]'
                    }
                   `}
                  title="Toggle Theme"
                >
                  <div className={`absolute w-3/4 h-3/4 rounded-full transition-all duration-700 ${theme === 'light' ? 'bg-[#ffffe0] blur-[10px] opacity-100' : 'opacity-0'}`}></div>
                  {theme === 'dark' && <div className="absolute inset-0 rounded-full border border-[var(--text-secondary)] opacity-20 pointer-events-none animate-pulse"></div>}
                </div>

                VATIVE
              </h1>

              <span className="font-['Caveat'] text-[var(--accent)] text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] xl:text-[8rem] absolute -bottom-6 sm:-bottom-8 md:-bottom-12 right-0 md:right-[5%] xl:right-[8%] rotate-[-6deg] select-none pointer-events-none drop-shadow-lg">
                Solutions
              </span>
            </div>

            <p className="text-[var(--text-secondary)] text-sm md:text-base lg:text-xl max-w-2xl text-center mt-16 md:mt-24 lg:mt-32 leading-relaxed font-light px-4">
              A list of domains I've spent way too much time in.<br />
              Not because someone told me to.<br />
              Because I genuinely can't stop.
            </p>

          </div>
        </main>

        <DomainsSection domainsData={domainsData} />

        <AboutSection />
      </div>
    </div>
  );
}