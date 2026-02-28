import React, { useState } from 'react'

const inputClass = "h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border border-black dark:border-slate-200 px-4 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-0 transition-all"

const initialAccountCredentials = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  interests: [],
}

export default function UserCred({ selectedInterests = new Set() }) {
  const [accountCredentials, setAccountCredentials] = useState(initialAccountCredentials)

  const allValid =
    accountCredentials.firstName.trim().length > 0 &&
    accountCredentials.lastName.trim().length > 0 &&
    accountCredentials.email.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(accountCredentials.email.trim()) &&
    accountCredentials.phone.trim().length > 0

  function updateField(field, value) {
    setAccountCredentials((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e) {
    e?.preventDefault?.()
    if (!allValid) return
    const saved = {
      accountCredentials: {
        firstName: accountCredentials.firstName.trim(),
        lastName: accountCredentials.lastName.trim(),
        email: accountCredentials.email.trim(),
        phone: accountCredentials.phone.trim(),
        interests: Array.from(selectedInterests),
      },
    }
    console.log(saved)
    // TODO: wire to your API or navigation
    alert('Account creation ready — wire this to your API or redirect.')
  }

  return (
    <>
         {/* <!-- ----- ACCOUNT DETAILS FORM (card + fields) start ----- --> */}
            <form id="account-details-form" onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 md:p-10 mb-24">
              <div className="flex flex-col gap-2 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Account Details</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Almost there! We just need a few details to create your personalized profile.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="first_name">First Name</label>
                  <input className={inputClass} id="first_name" placeholder="John" required type="text" value={accountCredentials.firstName} onChange={(e) => updateField('firstName', e.target.value)}/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="last_name">Last Name</label>
                  <input className={inputClass} id="last_name" placeholder="Doe" required type="text" value={accountCredentials.lastName} onChange={(e) => updateField('lastName', e.target.value)}/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="email">Email Address</label>
                  <input className={inputClass} id="email" placeholder="john@example.com" required type="email" value={accountCredentials.email} onChange={(e) => updateField('email', e.target.value)}/>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="phone">Phone Number</label>
                  <input className={inputClass} id="phone" placeholder="+1 (555) 000-0000" required type="tel" value={accountCredentials.phone} onChange={(e) => updateField('phone', e.target.value)}/>
                </div>
              </div>
            </form>
            {/* <!-- ----- ACCOUNT DETAILS FORM end ----- --> */}
            <footer className="fixed bottom-0 left-0 right-0 border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 md:px-10 py-5 z-50">
          <div className="max-w-[1024px] mx-auto flex items-center justify-between gap-4">
            <button
              type="submit"
              form="account-details-form"
              onClick={handleSubmit}
              disabled={!allValid}
              className={`flex min-w-[140px] md:min-w-[180px] items-center justify-center overflow-hidden rounded-xl h-12 px-8 text-base font-bold leading-normal tracking-wide transition-all shadow-sm ${allValid ? 'cursor-pointer bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:opacity-90' : 'cursor-not-allowed bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600'}`}
            >
              Create Account
            </button>
          </div>
        </footer>
    </>
  )
}
