import React from 'react'

export default function MyEventsHero({ onCreateEvent }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
      <div className="flex flex-col gap-2 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-slate-50">
          What's happening soon
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Discover and join time-sensitive activities happening near you today.
        </p>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onCreateEvent}
          className="flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-background-dark hover:brightness-110 transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          Create Event
        </button>
      </div>
    </div>
  )
}
