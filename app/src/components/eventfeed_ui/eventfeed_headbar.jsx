import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

const CATEGORIES = [
  { id: 'sports', label: 'Sports & Fitness', icon: 'fitness_center' },
  { id: 'arts', label: 'Arts & Culture', icon: 'palette' },
  { id: 'tech', label: 'Tech & Coding', icon: 'terminal' },
  { id: 'music', label: 'Music & Performance', icon: 'music_note' },
  { id: 'food', label: 'Food & Drink', icon: 'restaurant' },
  { id: 'nature', label: 'Nature & Outdoors', icon: 'forest' },
  { id: 'gaming', label: 'Gaming', icon: 'sports_esports' },
  { id: 'volunteer', label: 'Volunteering', icon: 'volunteer_activism' },
  { id: 'social', label: 'Social & Meetups', icon: 'groups' },
]

const WHEN_OPTIONS = [
  { label: 'Now', icon: 'schedule' },
  { label: 'Tonight', icon: 'dark_mode' },
  { label: 'Weekend', icon: 'event' },
]

const SORT_OPTIONS = [
  { id: 'proximity', label: 'Proximity' },
  { id: 'date', label: 'Date' },
  { id: 'popularity', label: 'Popularity' },
  { id: 'newest', label: 'Newest' },
]

export default function EventFeedHeadbar() {
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [whenIndex, setWhenIndex] = useState(0)
  const [sortOpen, setSortOpen] = useState(false)
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const [sortBy, setSortBy] = useState('proximity')
  const categoryRef = useRef(null)
  const sortRef = useRef(null)
  const categoryButtonRef = useRef(null)
  const sortButtonRef = useRef(null)
  const [categoryPos, setCategoryPos] = useState({ top: 0, left: 0 })
  const [sortPos, setSortPos] = useState({ top: 0, left: 0 })

  useEffect(() => {
    function handleClickOutside(e) {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) setCategoryOpen(false)
      if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  useLayoutEffect(() => {
    if (categoryOpen && categoryButtonRef.current) {
      const r = categoryButtonRef.current.getBoundingClientRect()
      setCategoryPos({ top: r.bottom + 8, left: r.left })
    }
  }, [categoryOpen])

  useLayoutEffect(() => {
    if (sortOpen && sortButtonRef.current) {
      const r = sortButtonRef.current.getBoundingClientRect()
      setSortPos({ top: r.bottom + 8, left: r.right - 140 })
    }
  }, [sortOpen])

  const selectCategory = (id) => {
    setSelectedCategoryId(id)
    setCategoryOpen(false)
  }

  const whenOption = WHEN_OPTIONS[whenIndex]
  const sortLabel = SORT_OPTIONS.find((o) => o.id === sortBy)?.label ?? 'Proximity'

  const selectedCategoryLabel =
    selectedCategoryId == null
      ? 'Category'
      : CATEGORIES.find((c) => c.id === selectedCategoryId)?.label ?? 'Category'

  return (
    <div className="relative z-[300] flex items-center gap-3 px-6 py-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-x-auto overflow-y-visible no-scrollbar shrink-0">
      {/* Category button + popup */}
      <div className="relative shrink-0" ref={categoryRef}>
        <button
          ref={categoryButtonRef}
          type="button"
          onClick={(e) => { e.stopPropagation(); setCategoryOpen((o) => !o) }}
          className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 border transition-all max-w-[280px] ${
            categoryOpen || selectedCategoryId != null
              ? 'bg-primary/10 border-primary/30 text-primary'
              : 'bg-slate-100 dark:bg-slate-800 border-transparent hover:border-primary/50 text-slate-700 dark:text-slate-300'
          }`}
        >
          <span className="text-xs font-semibold truncate">
            {selectedCategoryLabel}
          </span>
          <span className="material-symbols-outlined text-[18px] shrink-0">keyboard_arrow_down</span>
        </button>
        {categoryOpen && createPortal(
          <div
            className="fixed z-[500] min-w-[220px] rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg py-2"
            style={{
              animation: 'fadeIn 0.2s ease-out',
              top: categoryPos.top,
              left: categoryPos.left,
            }}
            role="dialog"
            aria-label="Event categories"
          >
            <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800">
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Select categories</p>
            </div>
            <ul className="max-h-64 overflow-y-auto custom-scrollbar">
              {CATEGORIES.map((cat) => {
                const selected = selectedCategoryId === cat.id
                return (
                  <li key={cat.id}>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); selectCategory(cat.id) }}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 ${
                        selected ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">{cat.icon}</span>
                      <span>{cat.label}</span>
                      {selected && <span className="material-symbols-outlined ml-auto text-primary text-[18px]">check</span>}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>,
          document.body
        )}
      </div>

      {/* When button (cycles Now → Tonight → Weekend) */}
      <button
        type="button"
        onClick={() => setWhenIndex((i) => (i + 1) % 3)}
        className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 border border-primary/30 px-4"
      >
        <span className="text-slate-900 dark:text-slate-100 text-xs font-semibold">When: {whenOption.label}</span>
        <span className="material-symbols-outlined text-[18px]">{whenOption.icon}</span>
      </button>

      {/* Sort by dropdown */}
      <div className="ml-auto flex items-center gap-2 shrink-0" ref={sortRef}>
        <span className="text-xs text-slate-500 font-medium">Sort by:</span>
        <div className="relative">
          <button
            ref={sortButtonRef}
            type="button"
            onClick={(e) => { e.stopPropagation(); setSortOpen((o) => !o) }}
            className="flex h-9 shrink-0 items-center gap-x-2 rounded-full px-4 border text-xs font-bold transition-all bg-primary/10 border-primary/30 text-primary hover:opacity-90"
          >
            {sortLabel}
            <span className="material-symbols-outlined text-[16px]">expand_more</span>
          </button>
          {sortOpen && createPortal(
            <div
              className="fixed z-[500] min-w-[140px] rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg py-1.5"
              style={{
                animation: 'fadeSlideIn 0.2s ease-out',
                top: sortPos.top,
                left: sortPos.left,
              }}
              role="listbox"
              aria-label="Sort options"
            >
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSortBy(opt.id)
                    setSortOpen(false)
                  }}
                  className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 ${
                    sortBy === opt.id ? 'bg-primary/10 text-primary font-bold' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {opt.label}
                  {sortBy === opt.id && <span className="material-symbols-outlined text-[18px]">check</span>}
                </button>
              ))}
            </div>,
            document.body
          )}
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
