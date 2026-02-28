import React from 'react'

export default function MyEventsFooter() {
  return (
    <footer className="mt-auto border-t border-primary/10 py-10 px-6 md:px-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="size-6 bg-primary/50 rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-[16px] text-background-dark">event</span>
          </div>
          <span className="text-sm font-bold opacity-60">© 2023 Gather Community Events</span>
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-xs font-semibold text-slate-500 hover:text-primary transition-colors uppercase tracking-wider"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-xs font-semibold text-slate-500 hover:text-primary transition-colors uppercase tracking-wider"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-xs font-semibold text-slate-500 hover:text-primary transition-colors uppercase tracking-wider"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
