import React, { useState } from 'react'

const FILTERS = [
  { id: 'indoor', label: 'Indoor', icon: 'home' },
  { id: 'outdoor', label: 'Outdoor', icon: 'forest' },
  { id: 'all', label: 'All Filters', icon: 'tune' },
]

export default function MyEventsFilterBar({
  monthLabel = 'October 2023',
  onMonthPrev,
  onMonthNext,
  onFilterChange,
}) {
  const [activeFilter, setActiveFilter] = useState('indoor')

  const handleFilterClick = (id) => {
    setActiveFilter(id)
    onFilterChange?.(id)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-primary/10 pb-6">
        <div className="flex gap-3">
          {FILTERS.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleFilterClick(id)}
              className={`flex h-9 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold text-slate-900 dark:text-slate-100 transition-colors ${
                activeFilter === id
                  ? 'bg-primary/20 border border-primary/30'
                  : 'bg-slate-200/50 dark:bg-slate-800/50 hover:bg-primary/10'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{icon}</span>
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <span className="text-sm font-medium">{monthLabel}</span>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={onMonthPrev}
              className="p-1 hover:text-primary"
              aria-label="Previous month"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              type="button"
              onClick={onMonthNext}
              className="p-1 hover:text-primary"
              aria-label="Next month"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
