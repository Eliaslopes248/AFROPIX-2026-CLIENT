import React from 'react'

export default function InterestGrid() {





    return (
            <>
            {/* <!-- ----- INTERESTS GRID (selectable cards) start ----- --> */}
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {/* <!-- Interest card: Sports & Fitness --> */}
                <div class="interest-card group cursor-pointer flex flex-col gap-0 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div class="w-full aspect-video bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-4xl text-blue-500">fitness_center</span>
                    </div>
                    <div class="p-4">
                    <p class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">Sports &amp; Fitness</p>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Find local teams and gyms</p>
                    </div>
                </div>
                {/* <!-- Interest card: Arts & Culture --> */}
                <div class="interest-card group cursor-pointer flex flex-col gap-0 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div class="w-full aspect-video bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-4xl text-purple-500">palette</span>
                    </div>
                    <div class="p-4">
                    <p class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">Arts &amp; Culture</p>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Galleries and studios</p>
                    </div>
                </div>
                {/* <!-- Interest card: Tech & Coding --> */}
                <div class="interest-card group cursor-pointer flex flex-col gap-0 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div class="w-full aspect-video bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-4xl text-emerald-500">terminal</span>
                    </div>
                    <div class="p-4">
                    <p class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">Tech &amp; Coding</p>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Hackathons and meetups</p>
                    </div>
                </div>
                {/* <!-- Interest card: Music & Performance --> */}
                <div class="interest-card group cursor-pointer flex flex-col gap-0 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div class="w-full aspect-video bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-4xl text-pink-500">music_note</span>
                    </div>
                    <div class="p-4">
                    <p class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">Music &amp; Performance</p>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Live shows and jam sessions</p>
                    </div>
                </div>
                {/* <!-- Interest card: Food & Drink --> */}
                <div class="interest-card group cursor-pointer flex flex-col gap-0 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div class="w-full aspect-video bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-4xl text-orange-500">restaurant</span>
                    </div>
                    <div class="p-4">
                    <p class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">Food &amp; Drink</p>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Cafes, bars, and markets</p>
                    </div>
                </div>
                {/* <!-- Interest card: Nature & Outdoors --> */}
                <div class="interest-card group cursor-pointer flex flex-col gap-0 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div class="w-full aspect-video bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-4xl text-green-500">forest</span>
                    </div>
                    <div class="p-4">
                    <p class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">Nature &amp; Outdoors</p>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Hiking and gardening</p>
                    </div>
                </div>
                {/* <!-- Interest card: Gaming --> */}
                <div class="interest-card group cursor-pointer flex flex-col gap-0 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div class="w-full aspect-video bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-4xl text-indigo-500">sports_esports</span>
                    </div>
                    <div class="p-4">
                    <p class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">Gaming</p>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Arcades and gaming hubs</p>
                    </div>
                </div>
                {/* <!-- Interest card: Volunteering --> */}
                <div class="interest-card group cursor-pointer flex flex-col gap-0 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div class="w-full aspect-video bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <span class="material-symbols-outlined text-4xl text-red-500">volunteer_activism</span>
                    </div>
                    <div class="p-4">
                    <p class="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight">Volunteering</p>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Community service projects</p>
                    </div>
                </div>
                </div>
                
                {/* <!-- ----- INTERESTS GRID end ----- --> */}
        </>
  )
}
