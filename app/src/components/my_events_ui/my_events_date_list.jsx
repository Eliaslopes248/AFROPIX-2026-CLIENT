import React from 'react'

const DEFAULT_DAYS = [
  { weekday: 'Mon', date: 23, isHighlight: true, hasDot: true },
  { weekday: 'Tue', date: 24 },
  { weekday: 'Wed', date: 25 },
  { weekday: 'Thu', date: 26 },
  { weekday: 'Fri', date: 27, isSelected: true },
  { weekday: 'Sat', date: 28 },
  { weekday: 'Sun', date: 29 },
]

export default function MyEventsDateList({ days = DEFAULT_DAYS, selectedDate, onSelectDate }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
      {days.map((day) => {
        const isHighlight = day.isHighlight
        const isSelected = day.isSelected || (selectedDate && selectedDate === day.date)
        const isActive = isHighlight || isSelected

        return (
          <button
            key={`${day.weekday}-${day.date}`}
            type="button"
            onClick={() => onSelectDate?.(day)}
            className={`flex flex-col items-center justify-center min-w-[70px] h-24 rounded-2xl cursor-pointer transition-colors shrink-0 ${
              isHighlight
                ? 'bg-primary text-background-dark shadow-lg shadow-primary/20'
                : isSelected
                  ? 'bg-slate-200/50 dark:bg-slate-800/50 border-2 border-primary/40'
                  : 'bg-slate-200/50 dark:bg-slate-800/50 hover:bg-primary/10 text-slate-900 dark:text-slate-100'
            }`}
          >
            <span
              className={`text-xs font-bold uppercase ${
                isHighlight ? 'opacity-80' : 'text-slate-500'
              }`}
            >
              {day.weekday}
            </span>
            <span className="text-2xl font-black leading-none">{day.date}</span>
            {day.hasDot && (
              <div className="mt-1 size-1.5 rounded-full bg-background-dark" />
            )}
          </button>
        )
      })}
    </div>
  )
}
