import React, { useState } from 'react'
import NavBar from '../components/ui/NavBar'
import MyEventsHero from '../components/my_events_ui/my_events_hero'
import MyEventsFilterBar from '../components/my_events_ui/my_events_filter_bar'
import MyEventsDateList from '../components/my_events_ui/my_events_date_list'
import MyEventsTimeline from '../components/my_events_ui/my_events_timeline'
import MyEventsMapToggle from '../components/my_events_ui/my_events_map_toggle'
import MyEventsFooter from '../components/my_events_ui/my_events_footer'

export default function MyEvents() {
  const [searchQuery, setSearchQuery] = useState('')
  const [monthLabel, setMonthLabel] = useState('October 2023')
  const [selectedDate, setSelectedDate] = useState(null)
  const [savedEventIds, setSavedEventIds] = useState(new Set())

  const handleCreateEvent = () => {
    // TODO: navigate to create event or open modal
  }

  const handleMonthPrev = () => {
    // TODO: update month state / API
    setMonthLabel((prev) => prev)
  }

  const handleMonthNext = () => {
    // TODO: update month state / API
    setMonthLabel((prev) => prev)
  }

  const handleFilterChange = (filterId) => {
    // TODO: filter events by indoor/outdoor/all
  }

  const handleSelectDate = (day) => {
    setSelectedDate(day?.date ?? null)
  }

  const handleJoinEvent = (event) => {
    // TODO: join event API
  }

  const handleToggleSave = (event) => {
    setSavedEventIds((prev) => {
      const next = new Set(prev)
      if (next.has(event.id)) next.delete(event.id)
      else next.add(event.id)
      return next
    })
  }

  const handleShowMap = () => {
    // TODO: open map view / navigate
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <NavBar isLoggedIn searchValue={searchQuery} onSearchChange={setSearchQuery} />
      <main className="flex-1 flex flex-col items-center">
        <div className="max-w-[1200px] w-full px-6 py-8 flex flex-col gap-8">
          <MyEventsHero onCreateEvent={handleCreateEvent} />
          <MyEventsFilterBar
            monthLabel={monthLabel}
            onMonthPrev={handleMonthPrev}
            onMonthNext={handleMonthNext}
            onFilterChange={handleFilterChange}
          />
          <MyEventsDateList selectedDate={selectedDate} onSelectDate={handleSelectDate} />
          <MyEventsTimeline
            onJoinEvent={handleJoinEvent}
            savedEventIds={savedEventIds}
            onToggleSave={handleToggleSave}
          />
        </div>
      </main>
      <MyEventsMapToggle onShowMap={handleShowMap} />
      <MyEventsFooter />
    </div>
  )
}
