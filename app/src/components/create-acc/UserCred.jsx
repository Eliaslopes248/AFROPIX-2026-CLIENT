import React from 'react'

const inputClass =
  'h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all'

export default function UserCred({ formData = {}, onChange, canSubmit = false, onSubmit }) {
  const handleChange = (field) => (e) => onChange(field, e.target.value)

  return (
    <>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-slate-100 dark:border-slate-800 p-6 md:p-10 mb-24">
        <div className="flex flex-col gap-2 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Account Details</h3>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Almost there! We just need a few details to create your personalized profile.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="first_name">First Name</label>
            <input
              className={inputClass}
              id="first_name"
              placeholder="John"
              type="text"
              value={formData.firstName ?? ''}
              onChange={handleChange('firstName')}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="last_name">Last Name</label>
            <input
              className={inputClass}
              id="last_name"
              placeholder="Doe"
              type="text"
              value={formData.lastName ?? ''}
              onChange={handleChange('lastName')}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="email">Email Address</label>
            <input
              className={inputClass}
              id="email"
              placeholder="john@example.com"
              type="email"
              value={formData.email ?? ''}
              onChange={handleChange('email')}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="phone">Phone Number</label>
            <input
              className={inputClass}
              id="phone"
              placeholder="+1 (555) 000-0000"
              type="tel"
              value={formData.phone ?? ''}
              onChange={handleChange('phone')}
            />
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 md:px-10 py-5 z-50">
        <div className="max-w-[1024px] mx-auto flex items-center justify-between gap-4">
          <button
            type="button"
            disabled={!canSubmit}
            onClick={onSubmit}
            className={`flex min-w-[140px] md:min-w-[180px] items-center justify-center overflow-hidden rounded-xl h-12 px-8 text-base font-bold leading-normal tracking-wide transition-all duration-300 shadow-sm ${
              canSubmit
                ? 'cursor-pointer bg-primary text-white shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]'
                : 'cursor-not-allowed bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600'
            }`}
          >
            Create Account
          </button>
        </div>
      </footer>
    </>
  )
}
