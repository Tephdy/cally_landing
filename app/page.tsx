'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

// ============================================
// CONSTANTS
// ============================================
const APP_URL = 'https://cally-pro.vercel.app';

// ============================================
// ICON COMPONENT
// ============================================
function Icon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  switch (name) {
    case 'headphones':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
        </svg>
      );
    case 'book':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'pencil':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      );
    case 'mic':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      );
    case 'keyboard':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12" />
        </svg>
      );
    case 'academic':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
        </svg>
      );
    case 'chart':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case 'shield':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'sparkles':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
    case 'check':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      );
    case 'users':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'zap':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'trophy':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3h14a2 2 0 012 2v2a6 6 0 01-6 6H9a6 6 0 01-6-6V5a2 2 0 012-2zm0 10v2a5 5 0 005 5h4a5 5 0 005-5v-2m-9 9v3m-3 0h6" />
        </svg>
      );
    case 'globe':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
        </svg>
      );
    case 'lock':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      );
    case 'download':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      );
    case 'menu':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
    case 'x':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    case 'star':
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3.5l2.63 5.33 5.88.85-4.25 4.14 1 5.85L12 16.9l-5.26 2.77 1-5.85L3.5 9.68l5.87-.85L12 3.5z" />
        </svg>
      );
    default:
      return null;
  }
}

// ============================================
// ANIMATED COUNTER
// ============================================
function AnimatedCounter({ value, suffix = '', duration = 1600 }: { value: number; suffix?: string; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById(`counter-${value}-${suffix}`);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix, started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let raf: number;

    const animate = (t: number) => {
      if (!startTime) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [started, value, duration]);

  return (
    <span id={`counter-${value}-${suffix}`}>
      {display}
      {suffix}
    </span>
  );
}

// ============================================
// MAIN LANDING PAGE
// ============================================
export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const modules = [
    {
      icon: 'headphones',
      title: 'Listening & Dictation',
      description: 'Single-play audio comprehension drills with auto-evaluation and dictation scoring.',
      color: 'bg-rose-600',
      accent: 'text-rose-400',
    },
    {
      icon: 'book',
      title: 'Reading & Grammar',
      description: 'Sentence completion, SVAR vocabulary, and grammar proficiency checks.',
      color: 'bg-amber-600',
      accent: 'text-amber-400',
    },
    {
      icon: 'pencil',
      title: 'Writing Assessment',
      description: 'Draft professional customer emails scored on grammar, coherence, and task achievement.',
      color: 'bg-violet-600',
      accent: 'text-violet-400',
    },
    {
      icon: 'mic',
      title: 'Speaking Simulation',
      description: 'Record verbatim sentence repetition. Whisper AI evaluates pronunciation, fluency, and lexical depth.',
      color: 'bg-emerald-600',
      accent: 'text-emerald-400',
    },
    {
      icon: 'keyboard',
      title: 'Typing Speed Test',
      description: 'Net WPM and accuracy scoring built for BPO chat-support screening.',
      color: 'bg-sky-600',
      accent: 'text-sky-400',
    },
    {
      icon: 'book',
      title: 'Learning & Lessons',
      description: 'Self-paced modules covering grammar, phonics, conditionals, and academic discourse.',
      color: 'bg-indigo-600',
      accent: 'text-indigo-400',
    },
  ];

  const features = [
    {
      icon: 'shield',
      title: 'Verified Certification',
      description: 'Cumulative 80%+ across all five exam modules earns a verifiable Certificate of Achievement with a unique Certificate ID.',
    },
    {
      icon: 'zap',
      title: 'AI-Assisted Scoring',
      description: 'Whisper-powered speech evaluation and rule-based writing analysis deliver instant, objective results.',
    },
    {
      icon: 'chart',
      title: 'Progress Tracking',
      description: 'Historical performance logs, module breakdown, WPM tracking, and score improvement trends.',
    },
    {
      icon: 'trophy',
      title: 'Public Leaderboard',
      description: 'Compete with peers across every module — overall ranking plus WPM leaderboard for typing.',
    },
    {
      icon: 'globe',
      title: 'BPO Industry Guide',
      description: 'Built-in knowledge base with top PH BPO companies, application steps, required documents, and success tips.',
    },
    {
      icon: 'lock',
      title: 'Assessment Integrity',
      description: 'Fullscreen enforcement, tab-switch detection, and clipboard restriction during official timed exams.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Create your account',
      description: 'Sign up in seconds with email or Google. Your progress syncs across all your devices.',
    },
    {
      number: '02',
      title: 'Practice the modules',
      description: 'Train each skill independently — listening, reading, writing, speaking, and typing — as many times as you need.',
    },
    {
      number: '03',
      title: 'Take the full exam',
      description: 'Complete all five modules under timed, fullscreen, integrity-monitored conditions.',
    },
    {
      number: '04',
      title: 'Earn your certificate',
      description: 'Score 80% or higher overall and download your verifiable Certificate of Achievement as a PDF.',
    },
  ];

  const testimonials = [
    {
      name: 'BPO Candidate',
      role: 'Customer Service Applicant',
      quote: 'The typing module saved me during my interview. I knew my exact WPM going in — no surprises.',
    },
    {
      name: 'Team Lead',
      role: 'Manila-based BPO',
      quote: 'We use Cally for pre-screening. The 80% certificate threshold gives us confidence in every hire.',
    },
    {
      name: 'Graduate',
      role: 'Fresh BPO Entrant',
      quote: 'The BPO Industry Guide helped me understand which companies to target and what documents to prepare.',
    },
  ];

  const trustedStats = [
    { label: 'Assessment Modules', value: 6, suffix: '' },
    { label: 'Avg. Completion Time', value: 45, suffix: ' min' },
    { label: 'Certificate Threshold', value: 80, suffix: '%' },
    { label: 'Industry Partners', value: 12, suffix: '+' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased selection:bg-indigo-500/30 overflow-x-hidden">
      {/* ============================================ */}
      {/* NAVBAR */}
      {/* ============================================ */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center gap-3 min-w-0 group">
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/logo.png"
                alt="Cally Assessment Hub"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="min-w-0">
              <span className="block font-black tracking-tight text-base sm:text-lg leading-none truncate">
                Cally
              </span>
              <span className="block text-[10px] font-mono text-indigo-400 uppercase tracking-widest mt-0.5">
                Assessment Hub
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#modules" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Modules
            </a>
            <a href="#features" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#certificate" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Certification
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={APP_URL}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <span>Get Started</span>
              <Icon name="arrow-right" className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 rounded-xl border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-900 transition"
            aria-label="Open menu"
          >
            <Icon name="menu" className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />
          <div className="absolute right-0 top-0 bottom-0 w-[80vw] max-w-xs bg-slate-900 border-l border-slate-800 p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="font-black text-lg">Menu</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition"
                aria-label="Close"
              >
                <Icon name="x" className="w-5 h-5" />
              </button>
            </div>
            <nav className="space-y-2">
              {[
                { href: '#modules', label: 'Modules' },
                { href: '#features', label: 'Features' },
                { href: '#how-it-works', label: 'How It Works' },
                { href: '#certificate', label: 'Certification' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-8">
              <a
                href={APP_URL}
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-5 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 transition"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ============================================ */}
      {/* HERO */}
      {/* ============================================ */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.15)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute -top-20 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-[11px] font-bold uppercase tracking-widest text-indigo-300 mb-8">
              <Icon name="sparkles" className="w-3.5 h-3.5" />
              Official BPO Readiness & Certification Portal
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
              Master Your Skills.
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Validate Your Career.
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              The complete BPO readiness platform. Practice professional simulations across six modules,
              track your progress, and earn a verifiable certification to launch your career.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={APP_URL}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-black text-sm shadow-xl shadow-indigo-500/30 transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Icon name="academic" className="w-5 h-5" />
                <span>Start Free Assessment</span>
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>See How It Works</span>
                <Icon name="arrow-right" className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Icon name="check" className="w-3.5 h-3.5 text-emerald-400" />
                No credit card
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="check" className="w-3.5 h-3.5 text-emerald-400" />
                Instant results
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <Icon name="check" className="w-3.5 h-3.5 text-emerald-400" />
                Free certificate
              </span>
            </div>
          </div>

          <div className="mt-20 sm:mt-28 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {trustedStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-5 sm:p-6 text-center"
              >
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* MODULES */}
      {/* ============================================ */}
      <section id="modules" className="relative py-24 sm:py-32 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-indigo-400 mb-4">
              <span className="w-8 h-px bg-indigo-500" />
              Assessment Modules
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Six skills. One platform.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              Every module simulates real BPO work. Every result is scored instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod) => (
              <a
                key={mod.title}
                href={APP_URL}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6 sm:p-7 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/70 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-2xl ${mod.color} flex items-center justify-center shadow-lg mb-5`}>
                  <Icon name={mod.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-black tracking-tight mb-2">{mod.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{mod.description}</p>

                <div className={`mt-6 flex items-center gap-2 text-xs font-bold ${mod.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <span>Practice this module</span>
                  <Icon name="arrow-right" className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FEATURES */}
      {/* ============================================ */}
      <section id="features" className="relative py-24 sm:py-32 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-cyan-400 mb-4">
              <span className="w-8 h-px bg-cyan-500" />
              Why Cally
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Built for real BPO hiring.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
              Objective scoring, verifiable certificates, and a knowledge base that gets you hired.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7 transition-colors hover:border-slate-700 hover:bg-slate-900/70"
              >
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg mb-5">
                  <Icon name={feature.icon} className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-black tracking-tight mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HOW IT WORKS */}
      {/* ============================================ */}
      <section id="how-it-works" className="relative py-24 sm:py-32 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-emerald-400 mb-4">
              <span className="w-8 h-px bg-emerald-500" />
              How It Works
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              From signup to certificate in four steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="relative rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7 overflow-hidden"
              >
                <div className="text-6xl font-black text-slate-800 leading-none mb-4 select-none">
                  {step.number}
                </div>
                <h3 className="text-base font-black tracking-tight mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>

                {idx < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-5 text-slate-700"
                  >
                    <Icon name="arrow-right" className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CERTIFICATE SHOWCASE */}
      {/* ============================================ */}
      <section id="certificate" className="relative py-24 sm:py-32 border-t border-slate-900 overflow-hidden">
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-violet-500/10 rounded-full blur-[140px] pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-violet-400 mb-4">
                <span className="w-8 h-px bg-violet-500" />
                Certification
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Earn a verifiable certificate.
              </h2>
              <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
                Score 80% or higher across all five full-exam modules and receive an
                official Certificate of Achievement with a unique Certificate ID — a
                real, downloadable credential to attach to your resume.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Instant PDF download upon qualification',
                  'Unique Certificate ID for electronic verification',
                  'Cumulative scoring across all five exam modules',
                  'Automated notification when the certificate is ready',
                  'No expiry — the credential stays valid for life',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                      <Icon name="check" className="w-3 h-3 text-emerald-400" />
                    </span>
                    <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={APP_URL}
                className="mt-10 inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-black text-sm shadow-xl shadow-violet-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Icon name="download" className="w-5 h-5" />
                <span>Start Your Certification Path</span>
              </a>
            </div>

            {/* Certificate mock */}
            <div className="relative">
              <div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-3 shadow-2xl shadow-violet-500/10 rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="rounded-2xl bg-[#fbf9f4] text-slate-900 p-6 sm:p-8">
                  <div className="border-2 border-amber-700/60 rounded-xl p-5 sm:p-6">
                    <div className="text-center mb-4">
                      <div className="text-[9px] uppercase tracking-[0.3em] text-slate-700 font-bold">
                        Cally Assessment Systems
                      </div>
                      <div className="text-[8px] text-amber-800 font-semibold mt-0.5">
                        EST. 2026
                      </div>
                    </div>

                    <h3
                      className="text-xl sm:text-2xl font-black text-amber-900 text-center uppercase tracking-widest"
                      style={{ fontFamily: 'serif' }}
                    >
                      Certificate
                    </h3>
                    <div className="text-[8px] uppercase tracking-[0.25em] text-slate-700 text-center font-bold mt-1 mb-3">
                      of Achievement
                    </div>

                    <div className="text-[9px] italic text-slate-600 text-center mb-1">
                      This is to certify that
                    </div>
                    <div
                      className="text-lg sm:text-xl font-bold text-slate-900 text-center border-b-2 border-slate-300 pb-1 mb-3"
                      style={{ fontFamily: 'serif' }}
                    >
                      Juan Dela Cruz
                    </div>

                    <p className="text-[9px] text-slate-700 text-center leading-relaxed mb-3">
                      has successfully demonstrated exceptional proficiency across all
                      official Cally assessment modules.
                    </p>

                    <div className="grid grid-cols-2 gap-1.5 text-[8px] font-semibold text-slate-800 mb-3">
                      <div>Listening: 92%</div>
                      <div>Speaking: 88%</div>
                      <div>Reading: 95%</div>
                      <div>Typing: 78 WPM</div>
                      <div>Writing: 86%</div>
                      <div className="text-amber-800">Final: 90%</div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-300 pt-3">
                      <div className="text-[7px] uppercase tracking-wider text-slate-600 font-bold">
                        Authorized Validation
                      </div>
                      <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center text-white text-[6px] font-black text-center leading-tight">
                        OFFICIAL<br />VERIFIED
                      </div>
                      <div className="text-[7px] uppercase tracking-wider text-slate-600 font-bold">
                        Cally Authority
                      </div>
                    </div>

                    <div className="text-center mt-2 text-[7px] text-slate-500 font-semibold tracking-widest">
                      CERTIFICATE ID: TEPHDYTECH-BPO-2026-9412
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 px-4 py-3 rounded-2xl border border-emerald-500/40 bg-slate-900 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <Icon name="shield" className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                    Verified
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    ID unique & trackable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALS */}
      {/* ============================================ */}
      <section className="relative py-24 sm:py-32 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-amber-400 mb-4">
              <span className="w-8 h-px bg-amber-500" />
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Trusted by candidates and employers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7"
              >
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Icon key={i} name="star" className="w-4 h-4 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-black text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-[11px] text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA */}
      {/* ============================================ */}
      <section className="relative py-24 sm:py-32 border-t border-slate-900 overflow-hidden">
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.15)_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-[11px] font-bold uppercase tracking-widest text-indigo-300 mb-8">
            <Icon name="zap" className="w-3.5 h-3.5" />
            Get Started Today
          </div>

          <h2 className="text-3xl sm:text-6xl font-black tracking-tight leading-[1.05]">
            Ready to prove
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              what you're capable of?
            </span>
          </h2>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Join thousands of candidates preparing for BPO careers. Free to start, no
            credit card required, results in minutes.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <a
              href={APP_URL}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-black text-sm shadow-xl shadow-indigo-500/30 transition-all hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Icon name="academic" className="w-5 h-5" />
              <span>Start Free Assessment</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer className="relative border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand column */}
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Cally"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-black tracking-tight text-base leading-none">
                    Cally
                  </div>
                  <div className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest mt-0.5">
                    Assessment Hub
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                The complete BPO readiness and certification platform.
                Practice, get scored, and earn verifiable credentials.
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                <Icon name="shield" className="w-3.5 h-3.5 text-emerald-400" />
                <span>GDPR & CPRA compliant</span>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#modules" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Modules
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#certificate" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Certification
                  </a>
                </li>
                <li>
                  <a href={APP_URL} className="text-sm text-slate-400 hover:text-white transition-colors">
                    Open App
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:tephdytech@gmail.com"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:tephdytech@gmail.com"
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a href="/legal/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/legal/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              &copy; {new Date().getFullYear()} TephdyTech. All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}