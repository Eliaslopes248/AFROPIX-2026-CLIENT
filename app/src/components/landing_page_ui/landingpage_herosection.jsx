import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage_HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-16 pb-24 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Discover Your Community</span>
          </div>
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-7xl">
            Find Your Place in the <span className="text-primary">Real World.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Rediscover community life by finding local spaces to gather, work, and belong beyond home and the office. Escape the digital isolation and reconnect.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/create-acc" className="flex h-14 min-w-[200px] items-center justify-center rounded-full bg-primary px-8 text-lg font-bold text-white shadow-xl shadow-primary/30 hover:scale-105 transition-transform">
              Find Third Spaces
            </Link>
            <button type="button" className="flex h-14 min-w-[200px] items-center justify-center rounded-full border-2 border-slate-200 dark:border-slate-800 px-8 text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
              How it Works
            </button>
          </div>
        </div>
        {/* Abstract Hero Decoration */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      </section>
      {/* Feature Grid Image Component */}
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-slate-200 lg:h-[500px]">
          <img
            alt="People laughing and talking in a cozy, sun-drenched community cafe"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhA6ve1WMoo1X_soZBIt6j2anm64FpfTe9tas4ZxRWM_rUPDq77xCvdsOznOQcfGGfp0V3hi5K5l2KKHiUPY3HG4tK1NiUFnDfwv3vCkKDGqpzBpbvf_X7zvLoXGsY0-_4Pyy_MciG2tAJwBu33zrf_eTOYhgchp5dbkaEgnjnfvd2aowZEKFmpl0yc42U4EnfiGW1mAUyCQMb0TXOl4R8RMpPU0jpPBCs7CVyEfYJWOySiXdevgDkLIGQ7Q6WRPw9mLWLBHe6lA-n"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" aria-hidden />
          <div className="absolute bottom-10 left-10 text-white">
            <p className="text-lg font-medium">Local Gems</p>
            <p className="text-sm opacity-80">Discover spaces that inspire connection.</p>
          </div>
        </div>
      </div>
    </>
  )
}
