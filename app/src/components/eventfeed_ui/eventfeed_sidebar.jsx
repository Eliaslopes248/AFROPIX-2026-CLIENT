import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { MOCK_EVENTS, CATEGORY_IMAGES } from '../../data/mockEvents'

const CATEGORY_LABELS = {
  sports: 'Sports & Fitness',
  arts: 'Arts & Culture',
  tech: 'Tech & Coding',
  music: 'Music & Performance',
  food: 'Food & Drink',
  nature: 'Nature & Outdoors',
  gaming: 'Gaming',
  volunteer: 'Volunteering',
  social: 'Social & Meetups',
}

function matchEvent(query, event) {
  if (!query || !query.trim()) return true
  const q = query.trim().toLowerCase()
  const title = (event.title || '').toLowerCase()
  const desc = (event.description || '').toLowerCase()
  const location = (event.locationLabel || '').toLowerCase()
  const categoryLabel = (CATEGORY_LABELS[event.categoryId] || '').toLowerCase()
  const tags = (event.tags || []).join(' ').toLowerCase()
  const vibe = (event.vibeTag || '').toLowerCase()
  const words = q.split(/\s+/)
  return words.every(
    (word) =>
      title.includes(word) ||
      desc.includes(word) ||
      location.includes(word) ||
      categoryLabel.includes(word) ||
      tags.includes(word) ||
      vibe.includes(word)
  )
}

export default function EventFeedSidebar({
  onEventHover,
  onEventLeave,
  searchQuery = '',
  savedEventIds = new Set(),
  onToggleSave,
}) {
  const navigate = useNavigate()
  const filteredEvents = MOCK_EVENTS.filter((event) => matchEvent(searchQuery, event))
  const savedSet = savedEventIds instanceof Set ? savedEventIds : new Set(savedEventIds || [])

  const handleCardClick = (event) => {
    navigate('/event-details', { state: { event } })
  }

  return (
    <aside className="w-full md:w-[40%] flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 overflow-y-auto custom-scrollbar">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Happening Now</h2>
          <span className="px-2 py-1 bg-red-100 text-red-600 text-[10px] font-bold rounded uppercase tracking-wider animate-pulse">Live</span>
        </div>
        <div className="space-y-4">
          {filteredEvents.length === 0 ? (
            <p className="text-slate-500 text-sm py-4">No events match your search.</p>
          ) : (
            filteredEvents.map((event) => {
              const imageUrl = event.imageUrl || CATEGORY_IMAGES[event.categoryId]
              return (
                <div
                  key={event.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleCardClick(event)}
                  onKeyDown={(e) => e.key === 'Enter' && handleCardClick(event)}
                  className="group relative flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 hover:shadow-xl hover:border-primary transition-all cursor-pointer"
                  onMouseEnter={() => onEventHover?.(event.lat, event.lng)}
                  onMouseLeave={() => onEventLeave?.()}
                >
                  <div className="relative h-40 w-full overflow-hidden rounded-lg">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        onToggleSave?.(event)
                      }}
                      className="absolute top-2 right-2 z-10 p-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 text-slate-400 hover:text-primary transition-colors shadow-sm"
                      aria-label={savedSet.has(event.id) ? 'Unsave event' : 'Save event'}
                    >
                      {savedSet.has(event.id) ? (
                        <IoMdHeart className="text-xl text-primary" />
                      ) : (
                        <IoMdHeartEmpty className="text-xl" />
                      )}
                    </button>
                    <div className="absolute top-2 left-2 z-10 flex gap-2">
                      <span className="bg-primary text-slate-900 text-[10px] font-bold px-2 py-1 rounded">{event.priceTag}</span>
                      <span className="bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-md">{event.vibeTag}</span>
                    </div>
                    <div
                      className="h-full w-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url("${imageUrl}")` }}
                      role="img"
                      aria-label="Event cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{event.title}</h3>
                      <div className="flex items-center text-xs font-semibold text-primary">
                        <span className="material-symbols-outlined text-[14px] mr-1">location_on</span>
                        {event.distance}
                      </div>
                    </div>
                    <p className="text-slate-500 text-xs font-medium">{event.locationLabel}</p>
                    <p className="text-slate-500 text-sm leading-snug">{event.description}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {event.avatars.map((avatar, i) => (
                          <div
                            key={i}
                            className="size-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 bg-cover bg-center"
                            style={{ backgroundImage: `url("${avatar}")` }}
                            role="img"
                            aria-label="User avatar"
                          />
                        ))}
                        <div className="size-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300 flex items-center justify-center text-[8px] font-bold">+{event.extraCount}</div>
                      </div>
                      <button
                        type="button"
                        className="text-xs font-bold text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg hover:bg-primary transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCardClick(event)
                        }}
                      >
                        {event.cta}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </aside>
  )
}
