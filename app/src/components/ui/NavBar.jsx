import React from 'react'

export default function NavBar() {
  return (
    <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-10 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-slate-900">
              <span className="material-symbols-outlined text-2xl font-bold">hub</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-extrabold leading-tight tracking-tight">Third Spaces</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8">
              <span className=" text-sm font-semibold">1. Setup Profile</span>
              {/* <span className="text-slate-400 dark:text-slate-500 text-sm font-medium">2. Location</span>
              <span className="text-slate-400 dark:text-slate-500 text-sm font-medium">3. Finalize</span> */}
            </div>
            {/* <button className="flex items-center justify-center rounded-full h-10 px-6 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-bold transition-colors hover:bg-slate-200 dark:hover:bg-slate-700">
              Skip
            </button> */}
          </div>
    </div>
  )
}
