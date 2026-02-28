import React from 'react'

export default function Sidebar() {
  const events = [
    {
      id: 'reading-nook',
      title: 'The Reading Nook',
      description: 'Quiet coworking & book exchange. Perfect for deep focus or light reading.',
      distance: '0.4 mi',
      priceTag: 'FREE',
      vibeTag: 'CASUAL',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANYAcqERTAif58r3ETzcKuKqHNA97gvZr7NF9CL3XfChGPr6NHRdaQmDNKRVnZpO4_3_oxJraDwAr5ADy2q8Q79rVBqy344utz6cituvsxmchKwl5KXHi16F5eykX1GfPpTSwLEtvqdX7gJ-h5L4-Gs2sJjiLNPV9yunrkuBoFQR6KzUg-JNUWJcNKtfzGjSJ2xYbiPyZYri3Bw6PmqhcvGxebgjklQEfS-7ROmQgMwP-UaIMxsQSewgEb-4huA5fN3Na0r8hvoDqE',
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBw39cTTyZlGXveLEFzPiJcQSPFZqR3M9fgCA-hiJsbYtvl1A74kEovLYvonAn6fZXSa_KG6V7AqFDbPguNtPPB4_jQERQy-h8BsB27CQoBMlEuyX4QkO829paRREVmvOiq6xfJ7epMjXxOaIvM-pg7GIjxhqdWZeLvsMvyClKZvSlqMKGmYDqUnFZ2zV0qsIwbweu22UOJHcz-dJfv0KR9WDx-lOLmteuXuhA84J3I6tQSg3OkE0tuNJzPysvvi6Hlr12yFYiCvdhB',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAq0aQg6_5M5eTr29jMUI-WyPYfesrXcAZNZRGEgfLx_2lljoE6EdaGVuJDFbgAF3NU0fPahbQ70u8YSaINgxf__RKIZf7eqhIwGSODmH6XqJ7mui5P5z9TheRpVpW3iaV8C-Ebz7ainldbtNznSPRz84tKK6hJZl0sf8iNmefoG2Tlaj-i8tEuYnrbkbKFfvHf9-yo5aFl7YkQ0PqWhN0ikALtN8iVN9LcdksYlk0VvTNnj2KkqrcXoBC7LN8Q8rDBXFlr2nLo46EB',
      ],
      extraCount: 12,
      cta: 'View Details',
    },
    {
      id: 'rooftop-garden',
      title: 'Rooftop Garden Meetup',
      description: 'Weekly social mixer with local organic snacks and chill music vibes.',
      distance: '1.2 mi',
      priceTag: '$10 Entry',
      vibeTag: 'VIBRANT',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFRRqcuzuL1Tr8MVgnWrBB8x7uoVYqa8KvveeyZMnPfBxMlbDFv5IjGc3Un8yQD8Od5jHxA8ytLhImQr02fEMN1t6BpZdAMln_t6tKX1pZRjJds74FT1zmVdNcM8OnmPSKfZcWQUXS-OlP9e1tcx3p8r46fNotwehPy-Ci1wriUOI-_TSnMt6Us7S37RGEcJbIY0VwYo6-gGod7U90HcLjGoSldKrDmfcidDNNRPqCHURLHF_z2tb9VCZhsBx_FtaXY3UMNBgxzPw9',
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCr6HF219a8UoO99jYqHhQS68bg21UH_lGaQeDrogiz9dtI7gq9s_q2Ai8emHWLAUYgMJA3dfUMoE9TBX_TKuKTm18pIB2OMsoXvMh-yM7AmfiljrlOHcU6gSFXKt0K9nWcIpyM95_-phqjAf7zCPKN5JTjwzcRo8wfbzwPUghqsFWJyX6C4pbL3Xr6Ihm7mFGFeor0gKJz54bH4VQZpaF_2WxuEJKyJRe5E8r1N7icNrCZcidCpyKI8B8j5lBwCdJnGT0GQjG69dHf',
      ],
      extraCount: 45,
      cta: 'Join Now',
    },
    {
      id: 'makerspace',
      title: 'Makerspace Open Lab',
      description: 'Bring your own project and use our tools. Community mentoring available.',
      distance: '0.8 mi',
      priceTag: 'FREE',
      vibeTag: 'CREATIVE',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCagbbiK4hB8qkDVrzFjyjDULY3QtSKx8exFI2l-G7MthaVILLCwL93xVaVW2LI3YkhsYeJoP0HNuoGxNFPrZXNQFwX4vASw_OuDhj3_DxbkS6qaPpZLLTXGc7SAej6LlKJ6wVHcQxB5LAYWBOWS_0UPbUoMk9MHC6aNLKRhVLE_AU69IA-OL2zFHt1X3Veez03WQRjI2l5wd2IpSn-MwTJK3PFuvRvW5hJ5wKsIloP9B68ZtXure86dj1Gh1grXBsucqbaXdyALfkO',
      avatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAkXHZa8tOxgwUjU0PaddPDsuilx4KSDYdtuH93SbVuHwFnWL6dg65sG3Qy59SW5XTgWnTNxgOPumQhsO_zhr-htbLHfGpUSNlNhlX-xZvjBG3plYpgGtn5P63K1CgJ2C_8GaUkBPMhS4GlxwRZRBVZvSzUajAulwCnL_JbgJnygepgoeOGuhVrTlAofmGbWowHw-PHLGP0NRCsGBJGYSLerYfnXcLiv_ZVvPQtHwj8kyPLPWBknBUpXtZJNvCQm9fD3U9_SrNyBEmt',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDro7GE_jQvsEvqIvkCfZTJ-81xOFoQpZSr8SqPgLLx3IWT--ayw3M8timtTu1rJHw7_oQDhyb5BjbH-6M_O5XBC6ISBzWGvatNq6wu6-F_DphmoJLZNgzS0T7DI3UFsEG_48wUmPHzeIoZjhCewBMAycY_QL6TjFBSbJuxGckq1kdYCObD6XgwgTKPO3l4xnKcffJ-3NsoLOODYWYwmCxkoZKXqplMAg_FxnzBqPo9V5ADysaBXTsGL-i5kCrETBXEz3ApHONKSaed',
      ],
      extraCount: 8,
      cta: 'Learn More',
    },
  ]

  return (
    <aside className="w-[40%] flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 overflow-y-auto custom-scrollbar">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Happening Now</h2>
          <span className="px-2 py-1 bg-red-100 text-red-600 text-[10px] font-bold rounded uppercase tracking-wider animate-pulse">Live</span>
        </div>
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative flex flex-col gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 hover:shadow-xl hover:border-primary transition-all cursor-pointer"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-lg">
                <div className="absolute top-2 left-2 z-10 flex gap-2">
                  <span className="bg-primary text-slate-900 text-[10px] font-bold px-2 py-1 rounded">{event.priceTag}</span>
                  <span className="bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-md">{event.vibeTag}</span>
                </div>
                <div
                  className="h-full w-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url("${event.imageUrl}")` }}
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
                  <button type="button" className="text-xs font-bold text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg hover:bg-primary transition-colors">
                    {event.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
