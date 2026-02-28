import React from 'react'

export default function MyEventsMapToggle({ onShowMap }) {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <button
        type="button"
        onClick={onShowMap}
        className="flex items-center gap-2 bg-background-dark text-white px-6 py-3 rounded-full shadow-xl font-bold"
      >
        <span className="material-symbols-outlined">map</span>
        Show Map
      </button>
    </div>
  )
}
