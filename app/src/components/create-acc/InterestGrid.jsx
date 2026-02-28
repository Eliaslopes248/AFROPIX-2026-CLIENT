import React from 'react'

const INTERESTS = [
  { id: 'sports', title: 'Sports & Fitness', subtitle: 'Find local teams and gyms', icon: 'fitness_center', iconBg: 'bg-blue-100 dark:bg-blue-900/30', iconColor: 'text-blue-500', enum: 'SPORTS_AND_FITNESS' },
  { id: 'arts', title: 'Arts & Culture', subtitle: 'Galleries and studios', icon: 'palette', iconBg: 'bg-purple-100 dark:bg-purple-900/30', iconColor: 'text-purple-500', enum: 'ARTS_AND_CULTURE' },
  { id: 'tech', title: 'Tech & Coding', subtitle: 'Hackathons and meetups', icon: 'terminal', iconBg: 'bg-emerald-100 dark:bg-emerald-900/30', iconColor: 'text-emerald-500', enum: 'TECH_AND_CODING' },
  { id: 'music', title: 'Music & Performance', subtitle: 'Live shows and jam sessions', icon: 'music_note', iconBg: 'bg-pink-100 dark:bg-pink-900/30', iconColor: 'text-pink-500', enum: 'MUSIC_AND_PERFORMANCE' },
  { id: 'food', title: 'Food & Drink', subtitle: 'Cafes, bars, and markets', icon: 'restaurant', iconBg: 'bg-orange-100 dark:bg-orange-900/30', iconColor: 'text-orange-500', enum: 'FOOD_AND_DRINK' },
  { id: 'nature', title: 'Nature & Outdoors', subtitle: 'Hiking and gardening', icon: 'forest', iconBg: 'bg-green-100 dark:bg-green-900/30', iconColor: 'text-green-500', enum: 'NATURE_AND_OUTDOORS' },
  { id: 'gaming', title: 'Gaming', subtitle: 'Arcades and gaming hubs', icon: 'sports_esports', iconBg: 'bg-indigo-100 dark:bg-indigo-900/30', iconColor: 'text-indigo-500', enum: 'GAMING' },
  { id: 'volunteering', title: 'Volunteering', subtitle: 'Community service projects', icon: 'volunteer_activism', iconBg: 'bg-red-100 dark:bg-red-900/30', iconColor: 'text-red-500', enum: 'VOLUNTEERING' },
]



const cardBaseClass = 'interest-card group cursor-pointer flex flex-col gap-0 rounded-xl border-2 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-all'
const cardHoverRingClass = 'hover:ring-2 hover:ring-blue-400 dark:hover:ring-blue-500 hover:ring-offset-2'
const cardSelectedClass = 'border-blue-500 dark:border-blue-400'

export default function InterestGrid({ selectedInterests, onToggle }) {
  function toggle(id) {
    onToggle((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <>
      {/* <!-- ----- INTERESTS GRID (selectable cards) start ----- --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {INTERESTS.map((item) => {
          const isSelected = selectedInterests.has(item.id)
          return (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => toggle(item.id)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(item.id) } }}
              className={`${cardBaseClass} ${!isSelected ? cardHoverRingClass : ''} ${isSelected ? cardSelectedClass : 'border-slate-100 dark:border-slate-800'}`}
            >
              <div className={`w-full aspect-video ${item.iconBg} flex items-center justify-center`}>
                <span className={`material-symbols-outlined text-4xl ${item.iconColor}`}>{item.icon}</span>
              </div>
              <div className="p-4">
                <p className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">{item.title}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{item.subtitle}</p>
              </div>
            </div>
          )
        })}
      </div>
      {/* <!-- ----- INTERESTS GRID end ----- --> */}
    </>
  )
}
