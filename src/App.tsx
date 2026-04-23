import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  ShieldCheck,
  Sparkles,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  CheckCircle2,
  Star,
  Waves,
  Droplets,
  Flame,
  Palette,
  Hammer,
  Leaf,
  Cpu,
  Quote,
  ArrowUpRight,
  Calendar,
  PenTool,
  Gem,
  Mail,
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════
// BRAND CONFIG — swap these values when you rebrand for a client.
// Everything in this block is the only thing you should need to
// change to re-skin the site for a new pool builder.
// ═══════════════════════════════════════════════════════════════

const BRAND = {
  name: 'Lagoon & Stone',
  tagline: 'Custom Pool Builders',
  city: 'Scottsdale',
  region: 'Arizona',
  since: 2008,
  phone: '(480) 555-0147',
  phoneRaw: '4805550147',
  email: 'studio@lagoonandstone.com',
  address: '7214 E Stetson Dr, Scottsdale, AZ 85251',
  license: 'ROC-318842',
  hours: 'Mon–Fri: 8am – 5pm · By appointment Sat',
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
  stats: {
    pools: 420,
    years: 18,
    awards: 14,
    rating: 4.9,
  },
};

// Web3Forms access key — swap per client when going live.
const WEB3FORMS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

// ─── NAVBAR ─────────────────────────────────────────────────────

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Portfolio', 'Process', 'Services', 'About', 'FAQ'];

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 rounded-full transition-all duration-500 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl py-2.5 shadow-[0_10px_40px_-12px_rgba(26,23,20,0.25)]'
          : 'bg-white/15 backdrop-blur-md py-4 border border-white/25'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[#0e7490] flex items-center justify-center">
            <Waves size={18} className="text-[#f7f3ec]" />
          </div>
          <span className={`font-display text-xl tracking-tight ${isScrolled ? 'text-[#1a1714]' : 'text-white'}`}>
            {BRAND.name}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                isScrolled ? 'text-[#3d3731] hover:text-[#0e7490]' : 'text-white/90 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#0e7490] text-[#f7f3ec] rounded-full text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#155e75] transition-all shadow-lg shadow-[#0e7490]/20"
          >
            Book Consultation
          </a>
        </div>

        <button
          className={`md:hidden ${isScrolled ? 'text-[#1a1714]' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 left-0 right-0 bg-white rounded-3xl p-6 flex flex-col gap-1 md:hidden shadow-xl"
          >
            {[...links, 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-3 text-base text-[#1a1714] border-b border-[#1a1714]/5 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ─── HERO ───────────────────────────────────────────────────────
// The single most important section on a pool-builder site.
// Full-bleed imagery, serif display headline, dual CTA, trust chips,
// and a featured-build glass card on the right to anchor the eye.

const Hero = () => {
  return (
    <section id="top" className="relative h-[100svh] min-h-[720px] w-full overflow-hidden">
      {/* Full-bleed hero image with slow shimmer */}
      <div className="absolute inset-0 shimmer-slow">
        <img
          src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=2400&auto=format&fit=crop"
          alt={`Luxury custom pool built by ${BRAND.name} in ${BRAND.city}`}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 hero-vignette" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10 items-end pb-28 pt-32">
        {/* Copy column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="md:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-dark mb-7">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="text-[#e8d7b8] fill-[#e8d7b8]" />
              ))}
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/90 font-medium">
              {BRAND.stats.rating} · Award-winning since {BRAND.since}
            </span>
          </div>

          <h1 className="font-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight font-light mb-7">
            The pool you've <br />
            been <em className="font-normal text-[#e8d7b8]">dreaming of.</em>
          </h1>

          <p className="text-white/85 text-lg md:text-xl max-w-xl leading-relaxed font-light mb-10">
            {BRAND.name} is a {BRAND.stats.years}-year-old studio of designers,
            stonemasons, and builders turning {BRAND.city} backyards into
            private resorts. Every pool is drawn, engineered, and built by us.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group px-7 py-4 bg-[#f7f3ec] text-[#1a1714] rounded-full font-semibold text-sm uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-white transition-all shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
            >
              Book a Design Consultation
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#portfolio"
              className="px-7 py-4 glass-dark text-white rounded-full font-semibold text-sm uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              Explore Our Work
            </a>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-3 mt-10 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-[#e8d7b8]" />
              Licensed #{BRAND.license}
            </span>
            <span className="flex items-center gap-2">
              <Award size={15} className="text-[#e8d7b8]" />
              {BRAND.stats.awards} design awards
            </span>
            <span className="flex items-center gap-2">
              <Gem size={15} className="text-[#e8d7b8]" />
              {BRAND.stats.pools}+ pools built
            </span>
          </div>
        </motion.div>

        {/* Featured build card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="hidden md:block md:col-span-5 md:justify-self-end w-full max-w-sm"
        >
          <div className="glass-dark rounded-3xl overflow-hidden">
            <div className="relative aspect-[5/4]">
              <img
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop"
                alt="Recent infinity pool build"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] uppercase tracking-[0.18em] text-white font-semibold">
                Just Completed
              </div>
            </div>
            <div className="p-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#e8d7b8] mb-2">
                Featured Build · Paradise Valley
              </p>
              <h3 className="font-display text-2xl text-white leading-tight mb-3">
                Mesa Ridge Infinity
              </h3>
              <p className="text-white/75 text-sm leading-relaxed mb-5">
                62-foot infinity edge, travertine coping, integrated spa, and
                fire bowls overlooking the McDowell Mountains.
              </p>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-1.5 text-sm text-white font-medium group"
              >
                See full build
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/70 to-transparent" />
      </motion.div>
    </section>
  );
};

// ─── TRUST STRIP ────────────────────────────────────────────────

const TrustStrip = () => {
  const items = [
    'APSP Certified Builder',
    'BBB Accredited · A+',
    'Pentair Platinum Partner',
    'Houzz Best of Design',
    'Jandy Pro Dealer',
    'Licensed & Bonded',
  ];

  return (
    <section className="py-10 bg-[#1a1714] overflow-hidden border-y border-[#e8d7b8]/10">
      <div className="flex marquee-track gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-[#e8d7b8]/70 text-xs uppercase tracking-[0.3em] font-medium flex items-center gap-4"
          >
            <span className="w-1 h-1 rounded-full bg-[#e8d7b8]/40" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

// ─── PORTFOLIO ──────────────────────────────────────────────────
// The primary selling tool for a pool builder.

const Portfolio = () => {
  const projects = [
    {
      image:
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1600&auto=format&fit=crop',
      title: 'Desert Modern',
      location: 'Paradise Valley, AZ',
      tags: ['Infinity Edge', 'Spa', 'Fire Features'],
      size: 'large',
    },
    {
      image:
        'https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=1600&auto=format&fit=crop',
      title: 'Travertine Retreat',
      location: 'Scottsdale, AZ',
      tags: ['Remodel', 'Hardscape'],
      size: 'medium',
    },
    {
      image:
        'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=1600&auto=format&fit=crop',
      title: 'Glass Tile Lagoon',
      location: 'Carefree, AZ',
      tags: ['New Construction', 'Glass Tile'],
      size: 'medium',
    },
    {
      image:
        'https://images.unsplash.com/photo-1615394573835-e2b10cc35b9d?q=80&w=1600&auto=format&fit=crop',
      title: 'Stone & Olive',
      location: 'Cave Creek, AZ',
      tags: ['Natural Stone', 'Landscape'],
      size: 'medium',
    },
    {
      image:
        'https://images.unsplash.com/photo-1617850687395-620757feb1f3?q=80&w=1600&auto=format&fit=crop',
      title: 'Courtyard Plunge',
      location: 'Arcadia, AZ',
      tags: ['Compact Pool', 'Plunge'],
      size: 'medium',
    },
    {
      image:
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1600&auto=format&fit=crop',
      title: 'Sunset Vanishing Edge',
      location: 'Fountain Hills, AZ',
      tags: ['Vanishing Edge', 'Spa', 'Automation'],
      size: 'large',
    },
  ];

  return (
    <section id="portfolio" className="py-28 md:py-36 px-6 bg-[#f7f3ec]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0e7490] mb-5">
              Signature Builds
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-[#1a1714] tracking-tight font-light leading-[1.02]">
              Every backyard is <em className="font-normal text-[#0e7490]">one&nbsp;of&nbsp;one.</em>
            </h2>
          </div>
          <p className="text-[#3d3731] max-w-sm font-light leading-relaxed">
            A curated selection of recent builds across the Valley. Styles span
            modern, Mediterranean, and desert contemporary — no two are alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-[1.75rem] ${
                proj.size === 'large' ? 'md:col-span-4 aspect-[16/10]' : 'md:col-span-2 aspect-[4/5]'
              }`}
            >
              <img
                src={proj.image}
                alt={`${proj.title} pool build in ${proj.location}`}
                className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714] via-[#1a1714]/10 to-transparent opacity-80" />
              <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-end">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#e8d7b8] mb-2 font-semibold">
                  {proj.location}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-white leading-tight mb-3">
                  {proj.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-wider text-white/80 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#0e7490] font-semibold text-sm uppercase tracking-[0.2em] hover:gap-3 transition-all"
          >
            Start your build
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

// ─── PROCESS ────────────────────────────────────────────────────

const Process = () => {
  const steps = [
    {
      num: '01',
      icon: Calendar,
      title: 'Discover',
      description:
        'We walk your property, listen to how you live, and understand how you want to use the space. No sales pressure — we only take on projects we can do right.',
    },
    {
      num: '02',
      icon: PenTool,
      title: 'Design',
      description:
        'Our in-house designer produces scaled site plans, 3D renderings, and a full material palette. You approve every line before a single shovel hits dirt.',
    },
    {
      num: '03',
      icon: Hammer,
      title: 'Build',
      description:
        'A dedicated project manager, our own crews, and licensed subs. Weekly site photos, a live schedule, and zero mystery on where your build stands.',
    },
    {
      num: '04',
      icon: Sparkles,
      title: 'Reveal',
      description:
        "Water-fill, start-up, orientation, and a walkthrough of your automation. Then a lifetime of support — you're a client forever, not just for this build.",
    },
  ];

  return (
    <section id="process" className="py-28 md:py-36 px-6 bg-[#1a1714] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#e8d7b8] mb-5">
            The Process
          </p>
          <h2 className="font-display text-5xl md:text-6xl tracking-tight font-light leading-[1.02]">
            From first sketch to <em className="font-normal text-[#67e8f9]">first swim.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-10 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex items-center justify-between mb-7">
                <span className="font-display text-[#e8d7b8]/20 text-7xl font-light">{step.num}</span>
                <div className="w-12 h-12 rounded-full border border-[#e8d7b8]/30 flex items-center justify-center">
                  <step.icon size={18} className="text-[#e8d7b8]" />
                </div>
              </div>
              <h3 className="font-display text-2xl mb-3">{step.title}</h3>
              <p className="text-white/65 font-light leading-relaxed text-[15px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── SERVICES ───────────────────────────────────────────────────

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: 'Custom Pool Design',
      description:
        'Ground-up design tailored to your lot, architecture, and lifestyle. No templates, no catalogs.',
    },
    {
      icon: Hammer,
      title: 'New Construction',
      description:
        'Full-service build — excavation, shell, plumbing, plaster, decking, and everything in between.',
    },
    {
      icon: Palette,
      title: 'Pool Remodels',
      description:
        "Tired '90s pools reborn. Replaster, retile, equipment upgrades, and full redesigns welcome.",
    },
    {
      icon: Flame,
      title: 'Spas & Water Features',
      description:
        'Attached spas, standalone vessels, sheer descents, rain walls, bubblers, and fire bowls.',
    },
    {
      icon: Leaf,
      title: 'Outdoor Living',
      description:
        'Pergolas, built-in grills, fire pits, and landscape integration to make the whole backyard sing.',
    },
    {
      icon: Cpu,
      title: 'Smart Automation',
      description:
        'Pentair, Jandy, and Hayward automation — control every light, pump, and feature from your phone.',
    },
  ];

  return (
    <section id="services" className="py-28 md:py-36 px-6 bg-[#f7f3ec]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0e7490] mb-5">
            What We Build
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-[#1a1714] tracking-tight font-light leading-[1.02]">
            One studio. Every part of the <em className="font-normal text-[#0e7490]">backyard.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group bg-white/60 glass-light p-8 rounded-[1.5rem] hover:bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(14,116,144,0.25)]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0e7490]/10 flex items-center justify-center mb-6 group-hover:bg-[#0e7490] transition-colors duration-300">
                <s.icon size={22} className="text-[#0e7490] group-hover:text-[#f7f3ec] transition-colors duration-300" />
              </div>
              <h3 className="font-display text-2xl text-[#1a1714] mb-2.5">
                {s.title}
              </h3>
              <p className="text-[#5a524a] font-light leading-relaxed text-[15px]">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── TESTIMONIALS ───────────────────────────────────────────────

const Testimonials = () => {
  const reviews = [
    {
      name: 'Megan & Tom R.',
      location: 'Paradise Valley, AZ',
      text: 'We interviewed four builders. Lagoon & Stone was the only one who listened before they drew. A year later, we still get stopped by neighbors asking who built it.',
      rating: 5,
    },
    {
      name: 'David K.',
      location: 'Scottsdale, AZ',
      text: 'Weekly site photos, a live schedule, and they answered the phone every time I called. The finished pool is somehow even better than the renderings.',
      rating: 5,
    },
    {
      name: 'Priya S.',
      location: 'Arcadia, AZ',
      text: 'Our lot was complicated — sloped, narrow, and loaded with mature olive trees. They kept every tree, engineered around the slope, and the pool feels like it grew out of the hillside.',
      rating: 5,
    },
  ];

  return (
    <section className="py-28 md:py-36 px-6 bg-[#f1eade]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0e7490] mb-5">
            Homeowners
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-[#1a1714] tracking-tight font-light leading-[1.02]">
            Word of mouth, <em className="font-normal text-[#0e7490]">earned.</em>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-7 text-[#5a524a]">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-[#b89968] fill-[#b89968]" />
              ))}
            </div>
            <span className="text-sm font-medium">
              {BRAND.stats.rating} average · 200+ Google reviews
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-[1.5rem] p-8 md:p-9 flex flex-col"
            >
              <Quote size={26} className="text-[#0e7490]/30 mb-5" />
              <blockquote className="font-display text-xl text-[#1a1714] leading-[1.4] font-light mb-8 flex-1">
                "{r.text}"
              </blockquote>
              <figcaption className="flex items-center justify-between pt-6 border-t border-[#1a1714]/8">
                <div>
                  <div className="font-semibold text-[#1a1714] text-sm">{r.name}</div>
                  <div className="text-[#8c7048] text-xs mt-0.5">{r.location}</div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} size={12} className="text-[#b89968] fill-[#b89968]" />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── ABOUT / CRAFT ──────────────────────────────────────────────

const About = () => {
  return (
    <section id="about" className="py-28 md:py-36 px-6 bg-[#f7f3ec]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] rounded-[2rem] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1400&auto=format&fit=crop"
            alt={`${BRAND.name} design studio in ${BRAND.city}`}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714]/40 to-transparent" />
        </motion.div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0e7490] mb-5">
            The Studio
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1714] tracking-tight font-light leading-[1.05] mb-7">
            Designers first. <br />
            Builders <em className="font-normal text-[#0e7490]">always.</em>
          </h2>
          <p className="text-[#3d3731] text-lg font-light leading-relaxed mb-5">
            {BRAND.name} was founded in {BRAND.since} with a simple rule: we
            only build what we would swim in ourselves. Every pool is drawn by
            our in-house designer, engineered by our team, and constructed by
            crews we know by name.
          </p>
          <p className="text-[#3d3731] text-lg font-light leading-relaxed mb-10">
            No cookie-cutter layouts. No subcontracted design. No surprises on
            invoice day. Just a slow, deliberate approach to one of the biggest
            projects you'll ever take on in your home.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-[#1a1714]/10">
            <div>
              <div className="font-display text-4xl text-[#0e7490] font-normal mb-1">
                {BRAND.stats.years}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#5a524a] font-semibold">
                Years Building
              </div>
            </div>
            <div>
              <div className="font-display text-4xl text-[#0e7490] font-normal mb-1">
                {BRAND.stats.pools}+
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#5a524a] font-semibold">
                Pools Delivered
              </div>
            </div>
            <div>
              <div className="font-display text-4xl text-[#0e7490] font-normal mb-1">
                {BRAND.stats.awards}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#5a524a] font-semibold">
                Design Awards
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── FAQ ────────────────────────────────────────────────────────

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#1a1714]/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-7 flex items-center justify-between text-left gap-6"
        aria-expanded={isOpen}
      >
        <span className="font-display text-xl md:text-2xl text-[#1a1714] leading-snug">
          {question}
        </span>
        <ChevronDown
          size={22}
          className={`text-[#0e7490] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-[#3d3731] font-light leading-relaxed pb-7 text-[17px] max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'What does a custom pool typically cost?',
      answer:
        'Most of our builds fall between $95K and $350K depending on size, materials, and features. We never price-gate the design consultation — you get real numbers before you commit.',
    },
    {
      question: 'How long does a build take from contract to swim?',
      answer:
        'Average is 14–20 weeks from permit to water. We publish a live schedule for every build and flag any permitting or weather delays the moment they surface.',
    },
    {
      question: 'Do you handle permits and HOA approvals?',
      answer:
        "Yes. We pull every permit, submit all HOA paperwork, and coordinate with your city's inspections. You sign documents — we handle the rest.",
    },
    {
      question: 'Can you work with my existing landscaper or architect?',
      answer:
        'Absolutely. About a third of our projects are collaborations with an existing design team. We slot in respectfully and communicate constantly.',
    },
    {
      question: 'Do you offer financing?',
      answer:
        "We partner with HFS Financial and LightStream. Most clients qualify in minutes and we'll walk you through the options at your consultation.",
    },
    {
      question: 'What happens after the pool is finished?',
      answer:
        "You're a client for life. Free start-up orientation, a 10-year structural warranty, and priority scheduling on service and remodels down the road.",
    },
  ];

  return (
    <section id="faq" className="py-28 md:py-36 px-6 bg-[#f1eade]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0e7490] mb-5">
            Common Questions
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-[#1a1714] tracking-tight font-light leading-[1.02]">
            What people ask <em className="font-normal text-[#0e7490]">before&nbsp;they&nbsp;build.</em>
          </h2>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── SERVICE AREA ───────────────────────────────────────────────

const ServiceArea = () => {
  const areas = [
    'Scottsdale',
    'Paradise Valley',
    'Arcadia',
    'Cave Creek',
    'Carefree',
    'Fountain Hills',
    'Phoenix',
    'Chandler',
    'Gilbert',
    'Mesa',
    'Tempe',
    'Ahwatukee',
  ];

  return (
    <section className="py-20 px-6 bg-[#1a1714]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#e8d7b8] mb-6">
          Building Across {BRAND.region}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {areas.map((area, i) => (
            <span
              key={i}
              className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 font-light"
            >
              <MapPin size={12} className="inline mr-1.5 text-[#67e8f9]" />
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CONTACT / CONSULTATION ─────────────────────────────────────

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Consultation Request — ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', project: '', budget: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-28 md:py-36 px-6 bg-[#f7f3ec] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#0e7490] mb-5">
              Book a Consultation
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-[#1a1714] tracking-tight font-light leading-[1.02] mb-7">
              Let's design <br /> your <em className="font-normal text-[#0e7490]">backyard.</em>
            </h2>
            <p className="text-[#3d3731] text-lg font-light leading-relaxed mb-10">
              Tell us about your project. We'll reach out within one business
              day to schedule a walk-through of your property and an initial
              design conversation.
            </p>

            <div className="space-y-5">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#0e7490]/10 flex items-center justify-center group-hover:bg-[#0e7490] transition-colors">
                  <Phone size={18} className="text-[#0e7490] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#5a524a] font-semibold">
                    Call the studio
                  </div>
                  <div className="text-[#1a1714] font-semibold">{BRAND.phone}</div>
                </div>
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#0e7490]/10 flex items-center justify-center group-hover:bg-[#0e7490] transition-colors">
                  <Mail size={18} className="text-[#0e7490] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#5a524a] font-semibold">
                    Email us
                  </div>
                  <div className="text-[#1a1714] font-semibold">{BRAND.email}</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0e7490]/10 flex items-center justify-center">
                  <MapPin size={18} className="text-[#0e7490]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#5a524a] font-semibold">
                    Visit the studio
                  </div>
                  <div className="text-[#1a1714] font-medium text-sm">{BRAND.address}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_30px_80px_-30px_rgba(26,23,20,0.15)]">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <CheckCircle2 size={56} className="text-[#0e7490] mx-auto mb-6" />
                  <h4 className="font-display text-3xl text-[#1a1714] mb-3">
                    Request received.
                  </h4>
                  <p className="text-[#5a524a] font-light">
                    We'll be in touch within one business day. If it's urgent,
                    call the studio at {BRAND.phone}.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Full Name"
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(v) => setFormData({ ...formData, name: v })}
                      placeholder="Jordan Alvarez"
                    />
                    <Field
                      label="Phone"
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(v) => setFormData({ ...formData, phone: v })}
                      placeholder="(480) 555-0000"
                    />
                  </div>
                  <Field
                    label="Email"
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(v) => setFormData({ ...formData, email: v })}
                    placeholder="jordan@email.com"
                  />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <SelectField
                      label="Project Type"
                      id="project"
                      value={formData.project}
                      onChange={(v) => setFormData({ ...formData, project: v })}
                      options={[
                        'New pool construction',
                        'Pool remodel',
                        'Spa only',
                        'Outdoor living / hardscape',
                        'Not sure yet',
                      ]}
                    />
                    <SelectField
                      label="Estimated Budget"
                      id="budget"
                      value={formData.budget}
                      onChange={(v) => setFormData({ ...formData, budget: v })}
                      options={[
                        'Under $100K',
                        '$100K – $175K',
                        '$175K – $275K',
                        '$275K+',
                        'Prefer to discuss',
                      ]}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-[10px] text-[#5a524a] uppercase tracking-[0.22em] font-semibold mb-2 block"
                    >
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Lot size, timeline, style you're drawn to, and anything else that'd help us prepare."
                      className="w-full bg-[#f7f3ec] border border-transparent focus:border-[#0e7490] rounded-xl px-5 py-4 text-[#1a1714] placeholder:text-[#5a524a]/60 focus:outline-none transition-colors resize-none font-light"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 bg-[#0e7490] text-[#f7f3ec] rounded-xl font-semibold text-sm uppercase tracking-[0.2em] hover:bg-[#155e75] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      'Sending…'
                    ) : (
                      <>
                        Request Consultation <ChevronRight size={16} />
                      </>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-600 text-sm text-center">
                      Something went wrong. Please call us at {BRAND.phone}.
                    </p>
                  )}
                  <p className="text-[#5a524a]/70 text-xs text-center font-light">
                    One business day response · No spam, ever
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── FIELD HELPERS ──────────────────────────────────────────────

const Field = ({
  label,
  id,
  type,
  required,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  id: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) => (
  <div>
    <label
      htmlFor={id}
      className="text-[10px] text-[#5a524a] uppercase tracking-[0.22em] font-semibold mb-2 block"
    >
      {label} {required && '*'}
    </label>
    <input
      id={id}
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-[#f7f3ec] border border-transparent focus:border-[#0e7490] rounded-xl px-5 py-3.5 text-[#1a1714] placeholder:text-[#5a524a]/60 focus:outline-none transition-colors font-light"
    />
  </div>
);

const SelectField = ({
  label,
  id,
  value,
  onChange,
  options,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) => (
  <div>
    <label
      htmlFor={id}
      className="text-[10px] text-[#5a524a] uppercase tracking-[0.22em] font-semibold mb-2 block"
    >
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-[#f7f3ec] border border-transparent focus:border-[#0e7490] rounded-xl px-5 py-3.5 text-[#1a1714] focus:outline-none transition-colors font-light appearance-none"
    >
      <option value="">Select…</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

// ─── FOOTER ─────────────────────────────────────────────────────

const Footer = () => (
  <footer className="bg-[#1a1714] text-white pt-24 pb-10 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-14 mb-20">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#0e7490] flex items-center justify-center">
              <Waves size={18} className="text-[#f7f3ec]" />
            </div>
            <span className="font-display text-2xl">{BRAND.name}</span>
          </div>
          <h4 className="font-display text-3xl md:text-4xl font-light leading-[1.1] mb-8 max-w-md">
            {BRAND.region}'s most meticulous <em className="font-normal text-[#67e8f9]">custom pool studio.</em>
          </h4>
          <div className="flex gap-3">
            <a
              href={BRAND.social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#0e7490] hover:border-[#0e7490] transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href={BRAND.social.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#0e7490] hover:border-[#0e7490] transition-all"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h5 className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#e8d7b8] mb-6">
            Studio
          </h5>
          <ul className="space-y-3.5 text-white/70 font-light text-sm">
            <li>
              <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-white transition-colors">
                {BRAND.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">
                {BRAND.email}
              </a>
            </li>
            <li>{BRAND.address}</li>
            <li>{BRAND.hours}</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h5 className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#e8d7b8] mb-6">
            Explore
          </h5>
          <ul className="space-y-3.5 text-white/70 font-light text-sm">
            <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
            <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Book Consultation</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h5 className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#e8d7b8] mb-6">
            Credentials
          </h5>
          <ul className="space-y-3.5 text-white/70 font-light text-sm">
            <li>License #{BRAND.license}</li>
            <li>APSP Certified Builder</li>
            <li>BBB Accredited · A+</li>
            <li>Fully Insured & Bonded</li>
          </ul>
        </div>
      </div>

      <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-5 text-white/50 text-xs font-light">
        <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
        <p>Built with care in {BRAND.city}, {BRAND.region}.</p>
      </div>
    </div>
  </footer>
);

// ─── FLOATING CTA ───────────────────────────────────────────────

const FloatingCTA = () => (
  <motion.a
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.2 }}
    href={`tel:${BRAND.phoneRaw}`}
    className="fixed bottom-6 right-6 z-40 w-14 h-14 md:hidden bg-[#0e7490] text-white rounded-full shadow-[0_15px_40px_-10px_rgba(14,116,144,0.6)] flex items-center justify-center hover:bg-[#155e75] active:scale-95 transition-all"
    aria-label={`Call ${BRAND.name}`}
  >
    <Phone size={22} />
  </motion.a>
);

// ─── APP ────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Portfolio />
        <Process />
        <Services />
        <Testimonials />
        <About />
        <FAQ />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
