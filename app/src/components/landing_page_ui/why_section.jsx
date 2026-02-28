import React from 'react'

export default function WhySection() {
  const cards = [
    {
      icon: 'diversity_3',
      title: 'Reconnect',
      description: 'Combat isolation by stepping into vibrant local environments designed for human connection. Move from screens to face-to-face interaction.',
    },
    {
      icon: 'explore',
      title: 'Discover',
      description: 'Find hidden local gems like community gardens, quiet libraries, and bustling social hubs that you never knew existed in your neighborhood.',
    },
    {
      icon: 'handshake',
      title: 'Belong',
      description: 'Build real-world community ties and find a place where everybody knows your name. Turn neighbors into friends in shared local spaces.',
    },
  ]

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Why We Do What We Do
          </h2>
          <div className="mt-4 h-1.5 w-20 rounded-full bg-primary" />
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            Building real-world connections in an increasingly digital age. We believe humans thrive when they have physical spaces to belong.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col rounded-xl border border-primary/10 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:bg-slate-900/50"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 ease-in-out">
                <span className="material-symbols-outlined text-3xl">{card.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{card.title}</h3>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
