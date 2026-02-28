import React from 'react'

const INTERESTS = [
  { id: 'sports-fitness', title: 'Sports & Fitness', subtitle: 'Find local teams and gyms', icon: 'fitness_center', iconBg: 'bg-blue-100 dark:bg-blue-900/30', iconColor: 'text-blue-500' },
  { id: 'arts-culture', title: 'Arts & Culture', subtitle: 'Galleries and studios', icon: 'palette', iconBg: 'bg-purple-100 dark:bg-purple-900/30', iconColor: 'text-purple-500' },
  { id: 'tech-coding', title: 'Tech & Coding', subtitle: 'Hackathons and meetups', icon: 'terminal', iconBg: 'bg-emerald-100 dark:bg-emerald-900/30', iconColor: 'text-emerald-500' },
  { id: 'music-performance', title: 'Music & Performance', subtitle: 'Live shows and jam sessions', icon: 'music_note', iconBg: 'bg-pink-100 dark:bg-pink-900/30', iconColor: 'text-pink-500' },
  { id: 'food-drink', title: 'Food & Drink', subtitle: 'Cafes, bars, and markets', icon: 'restaurant', iconBg: 'bg-orange-100 dark:bg-orange-900/30', iconColor: 'text-orange-500' },
  { id: 'nature-outdoors', title: 'Nature & Outdoors', subtitle: 'Hiking and gardening', icon: 'forest', iconBg: 'bg-green-100 dark:bg-green-900/30', iconColor: 'text-green-500' },
  { id: 'gaming', title: 'Gaming', subtitle: 'Arcades and gaming hubs', icon: 'sports_esports', iconBg: 'bg-indigo-100 dark:bg-indigo-900/30', iconColor: 'text-indigo-500' },
  { id: 'volunteering', title: 'Volunteering', subtitle: 'Community service projects', icon: 'volunteer_activism', iconBg: 'bg-red-100 dark:bg-red-900/30', iconColor: 'text-red-500' },
]

export default function InterestGrid({ selectedIds = [], onToggle }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
      {INTERESTS.map((item) => {
        const selected = selectedIds.includes(item.id)
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onToggle(item.id)}
            className={`interest-card group cursor-pointer flex flex-col gap-0 rounded-xl border-2 overflow-hidden shadow-sm transition-all duration-300 text-left w-full ${
              selected
                ? 'border-primary ring-2 ring-primary/30 bg-primary/5 dark:bg-primary/10 shadow-lg shadow-primary/20'
                : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700'
            }`}
          >
            <div className={`w-full aspect-video flex items-center justify-center transition-colors duration-300 ${item.iconBg} ${selected ? 'opacity-90' : ''}`}>
              <span className={`material-symbols-outlined text-4xl ${item.iconColor}`}>{item.icon}</span>
            </div>
            <div className="p-4">
              <p className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">{item.title}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{item.subtitle}</p>
            </div>
          </button>
        )
      })}
    </div>
  )
}
