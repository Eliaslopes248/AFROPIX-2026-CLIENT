import React from 'react'
import NavBar from '../components/ui/NavBar'
import InterestGrid from '../components/create-acc/InterestGrid'
import UserCred from '../components/create-acc/UserCred'

export default function CreateAccount() {
  return (
    <>
        <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
            <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display">
                <div class="layout-container flex h-full grow flex-col">
                    <NavBar/>

                    {/* main content */}
                    <div class="flex flex-1 justify-center py-12 px-6">
                        <div class="layout-content-container flex flex-col max-w-[1024px] flex-1">
                            {/* <!-- ----- PAGE HERO / TITLE SECTION start ----- --> */}
                            <div class="flex flex-col gap-4 mb-10 text-center md:text-left">
                                <h1 class="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-black leading-tight tracking-tight">What brings you joy?</h1>
                                <p class="text-slate-600 dark:text-slate-400 text-lg font-medium max-w-2xl">
                                    Select interests and complete your details to find your perfect third space.
                                </p>
                            </div>
                            {/* <!-- ----- PAGE HERO / TITLE SECTION end ----- --> */}
                            {/* interest grid  */}
                            <InterestGrid/>

                            <UserCred/>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}
