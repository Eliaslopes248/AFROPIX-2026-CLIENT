import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar({ isLoggedIn = false, searchValue, onSearchChange }) {
  const { pathname } = useLocation()
  const isCreateAccountPage = pathname === '/create-acc'
  const isEventFeedPage = pathname === '/event-feed'
  const isMyEventsPage = pathname === '/my-events'
  const isSearchControlled = searchValue !== undefined && typeof onSearchChange === 'function'

  if (isLoggedIn) {
    return (
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 z-50 sticky top-0 shadow-md">
        <div className="flex items-center gap-8">
          <Link to="/landing-page" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-slate-900">
              <span className="material-symbols-outlined text-2xl font-bold">hub</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-extrabold leading-tight tracking-tight">Third Spaces</h2>
          </Link>
          <label className="flex flex-col min-w-64 h-10! max-w-md">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-slate-800">
              <div className="text-slate-500 flex items-center justify-center pl-4">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input
                type="search"
                value={isSearchControlled ? searchValue : undefined}
                onChange={isSearchControlled ? (e) => onSearchChange(e.target.value) : undefined}
                className="flex w-full min-w-0 flex-1 border-none bg-transparent focus:outline-0 focus:ring-0 placeholder:text-slate-500 px-3 text-sm font-normal"
                placeholder="Search spaces or events..."
                aria-label="Search spaces or events"
              />
            </div>
          </label>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <nav className="hidden md:flex items-center gap-6">
            {!isEventFeedPage && (
              <>
                <Link to="/event-feed" className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Discover</Link>
                <Link to="/event-feed" className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Saved</Link>
                <Link to="/event-feed" className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors">Community</Link>
              </>
            )}
            <Link
              to="/my-events"
              className={`text-sm font-medium transition-colors ${isMyEventsPage ? 'text-primary' : 'text-slate-700 dark:text-slate-300 hover:text-primary'}`}
            >
              My Events
            </Link>
          </nav>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700" aria-hidden />
          <button
            type="button"
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 border-2 border-primary/20 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:ring-2 hover:ring-primary/30 transition-all"
            aria-label="User profile"
          >
            <span className="material-symbols-outlined text-2xl">person</span>
          </button>
        </div>
      </header>
    )
  }

  return (
    <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-10 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50 shadow-md">
      <Link to="/landing-page" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-slate-900">
          <span className="material-symbols-outlined text-2xl font-bold">hub</span>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-xl font-extrabold leading-tight tracking-tight">Third Spaces</h2>
      </Link>
      <div className="flex items-center gap-6">
        {isCreateAccountPage && (
          <div className="hidden md:flex items-center gap-8">
            <span className="text-sm font-semibold">1. Setup Profile</span>
          </div>
        )}
      </div>
    </div>
  )
}
