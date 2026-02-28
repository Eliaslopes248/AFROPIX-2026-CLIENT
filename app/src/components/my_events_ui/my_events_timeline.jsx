import React from 'react'
import MyEventsTimelineItem from './my_events_timeline_item'

const MOCK_EVENTS = [
  {
    id: '1',
    time: '18:00',
    timeLabel: 'Starting',
    tag: 'Indoor',
    durationMins: 90,
    title: 'Open Mic Night',
    location: 'The Urban Bean Café',
    description:
      "Unleash your talent! Whether it's music, poetry, or comedy, the stage is yours. Complimentary coffee for performers.",
    participantAvatars: [],
    extraCount: 12,
    joined: false,
  },
  {
    id: '2',
    time: '19:30',
    timeLabel: 'In 1 hour',
    tag: 'Outdoor',
    durationMins: 120,
    title: 'Pickup Basketball',
    location: 'Sunset Heights Park',
    description:
      "All skill levels welcome. We're playing 5v5 full court. Bring water and your best game!",
    participantAvatars: [],
    extraCount: 8,
    joined: true,
  },
  {
    id: '3',
    time: '20:00',
    timeLabel: 'Tonight',
    tag: 'Indoor',
    durationMins: 180,
    title: 'Coding Workshop',
    location: 'Digital Hub Co-working',
    description:
      'Introduction to Tailwind CSS and Modern UI Design. Bring your laptop and your curiosity!',
    participantAvatars: [],
    extraCount: 5,
    joined: false,
  },
]

export default function MyEventsTimeline({
  events = MOCK_EVENTS,
  onJoinEvent,
  savedEventIds = [],
  onToggleSave,
}) {
  const savedSet = Array.isArray(savedEventIds) ? new Set(savedEventIds) : savedEventIds
  return (
    <div className="flex flex-col gap-6">
      {events.map((event, index) => (
        <MyEventsTimelineItem
          key={event.id}
          isLast={index === events.length - 1}
          {...event}
          onAction={() => onJoinEvent?.(event)}
          isSaved={savedSet.has(event.id)}
          onToggleSave={() => onToggleSave?.(event)}
        />
      ))}
    </div>
  )
}
