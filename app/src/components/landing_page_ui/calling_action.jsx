import React from 'react'

export default function CallingAction() {
  return (
    <section className="bg-primary/5 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Ready to find your third space?
        </h2>
        <p className="mx-auto mt-6 text-lg text-slate-600 dark:text-slate-400">
          Join thousands of neighbors rediscovering their local communities. Your next favorite spot is just a click away.
        </p>
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="h-14 rounded-full bg-primary px-10 text-lg font-bold text-white shadow-xl shadow-primary/30 hover:scale-105 transition-transform"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  )
}
