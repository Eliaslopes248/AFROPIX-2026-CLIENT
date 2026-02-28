import React from 'react'

export default function EventFeedHeadbar() {
  return (
    <div className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar">
      <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-800 px-4 border border-transparent hover:border-primary/50 transition-all">
        <span className="text-slate-700 dark:text-slate-300 text-xs font-semibold">Category</span>
        <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
      </button>
      <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 border border-primary/30 px-4">
        <span className="text-slate-900 dark:text-slate-100 text-xs font-semibold">Time: Now</span>
        <span className="material-symbols-outlined text-[18px]">schedule</span>
      </button>
      <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-800 px-4 border border-transparent hover:border-primary/50 transition-all">
        <span className="text-slate-700 dark:text-slate-300 text-xs font-semibold">Tonight</span>
        <span className="material-symbols-outlined text-[18px]">dark_mode</span>
      </button>
      <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-800 px-4 border border-transparent hover:border-primary/50 transition-all">
        <span className="text-slate-700 dark:text-slate-300 text-xs font-semibold">Weekend</span>
        <span className="material-symbols-outlined text-[18px]">event</span>
      </button>
      <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-800 px-4 border border-transparent hover:border-primary/50 transition-all">
        <span className="text-slate-700 dark:text-slate-300 text-xs font-semibold">Social Vibe</span>
        <span className="material-symbols-outlined text-[18px]">mood</span>
      </button>
      <div className="ml-auto flex items-center gap-2">
        <span className="text-xs text-slate-500 font-medium">Sort by:</span>
        <button className="text-xs font-bold flex items-center gap-1">
          Proximity <span className="material-symbols-outlined text-[16px]">expand_more</span>
        </button>
      </div>
    </div>
  )
}