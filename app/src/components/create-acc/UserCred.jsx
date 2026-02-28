import React from 'react'

export default function UserCred() {
  return (
    <>
         {/* <!-- ----- ACCOUNT DETAILS FORM (card + fields) start ----- --> */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-100 dark:border-slate-800 p-8 md:p-10 mb-24">
              <div className="flex flex-col gap-2 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Account Details</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Almost there! We just need a few details to create your personalized profile.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300" for="first_name">First Name</label>
                  <input className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 px-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 transition-all" id="first_name" placeholder="John" required="" type="text"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300" for="last_name">Last Name</label>
                  <input className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 px-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 transition-all" id="last_name" placeholder="Doe" required="" type="text"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300" for="email">Email Address</label>
                  <input className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 px-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 transition-all" id="email" placeholder="john@example.com" required="" type="email"/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300" for="phone">Phone Number</label>
                  <input className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 px-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 transition-all" id="phone" placeholder="+1 (555) 000-0000" required="" type="tel"/>
                </div>
              </div>
            </div>
            {/* <!-- ----- ACCOUNT DETAILS FORM end ----- --> */}
            <footer class="fixed bottom-0 left-0 right-0 border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 md:px-10 py-5 z-50">
          <div class="max-w-[1024px] mx-auto flex items-center justify-between gap-4">
            <button class="flex min-w-[140px] md:min-w-[180px] cursor-not-allowed items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 text-base font-bold leading-normal tracking-wide transition-all shadow-sm">
              Create Account
            </button>
          </div>
        </footer>
    </>
  )
}
