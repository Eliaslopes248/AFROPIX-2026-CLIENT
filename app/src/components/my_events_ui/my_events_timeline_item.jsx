import React from 'react'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'

const PLACEHOLDER_AVATAR =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2394a3b8"%3E%3Cpath d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/%3E%3C/svg%3E'

export default function MyEventsTimelineItem({
  time,
  timeLabel,
  tag,
  durationMins,
  title,
  location,
  description,
  participantAvatars = [],
  extraCount,
  joined = false,
  onAction,
  isLast,
  isSaved = false,
  onToggleSave,
}) {
  return (
    <div className="group relative grid grid-cols-[100px_1fr] gap-6 items-start">
      <div className="flex flex-col items-end pt-2">
        <span className="text-lg font-bold text-slate-900 dark:text-slate-100">{time}</span>
        <span className="text-xs font-semibold text-slate-500 uppercase">{timeLabel}</span>
      </div>
      <div className="relative flex flex-col bg-white dark:bg-slate-900/50 border border-primary/10 rounded-2xl p-6 shadow-sm group-hover:shadow-md group-hover:border-primary/30 transition-all">
        <button
          type="button"
          onClick={onToggleSave}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors"
          aria-label={isSaved ? 'Unsave event' : 'Save event'}
        >
          {isSaved ? (
            <IoMdHeart className="text-xl text-primary" />
          ) : (
            <IoMdHeartEmpty className="text-xl" />
          )}
        </button>
        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                {tag}
              </span>
              <span className="text-slate-500 text-xs font-medium">{durationMins} mins</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{title}</h3>
            <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              <span>{location}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 overflow-hidden">
              {participantAvatars.slice(0, 2).map((src, i) => (
                <img
                  key={i}
                  alt=""
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                  src={src || PLACEHOLDER_AVATAR}
                />
              ))}
              {extraCount != null && extraCount > 0 && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-[10px] font-bold ring-2 ring-white dark:ring-slate-900">
                  +{extraCount}
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={onAction}
              className={
                joined
                  ? 'bg-primary/10 text-primary border border-primary/20 px-4 h-9 rounded-lg text-sm font-bold shadow-sm hover:bg-primary/20 active:scale-95 transition-all'
                  : 'bg-primary text-background-dark px-4 h-9 rounded-lg text-sm font-bold shadow-sm hover:brightness-110 active:scale-95 transition-all'
              }
            >
              {joined ? 'Joined' : 'Count me in'}
            </button>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
      <div
        className={`absolute left-[108px] top-0 w-0.5 bg-primary/10 -z-10 ${isLast ? 'bottom-0' : 'bottom-[-24px]'}`}
        aria-hidden
      />
    </div>
  )
}
