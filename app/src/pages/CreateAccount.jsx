import React, { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/ui/NavBar'
import InterestGrid from '../components/create-acc/InterestGrid'
import UserCred from '../components/create-acc/UserCred'
import Loader from '../components/ui/Loader'

const MAX_INTERESTS = 3
const LOADER_DURATION_MS = 2500

export default function CreateAccount() {
  const navigate = useNavigate()
  const [selectedIds, setSelectedIds] = useState([])
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isFormFilled =
    formData.firstName.trim() !== '' &&
    formData.lastName.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.phone.trim() !== ''
  const canSubmit = selectedIds.length >= MAX_INTERESTS && isFormFilled

  const handleCreateAccount = useCallback(() => {
    if (!canSubmit) return
    setIsSubmitting(true)
  }, [canSubmit])

  useEffect(() => {
    if (!isSubmitting) return
    const timer = setTimeout(() => {
      navigate('/event-feed')
    }, LOADER_DURATION_MS)
    return () => clearTimeout(timer)
  }, [isSubmitting, navigate])

  const handleToggleInterest = useCallback((id) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      if (prev.length >= MAX_INTERESTS) return prev
      return [...prev, id]
    })
  }, [])

  const handleFormChange = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  if (isSubmitting) {
    return (
      <div className="fixed inset-0 z-100 flex items-center justify-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
        <Loader />
      </div>
    )
  }

  return (
    <>
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display">
          <div className="layout-container flex h-full grow flex-col">
            <NavBar />

            <div className="flex flex-1 justify-center py-12 px-6 pb-28">
              <div className="layout-content-container flex flex-col max-w-[1024px] flex-1">
                <div className="flex flex-col gap-4 mb-10 text-center md:text-left">
                  <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-black leading-tight tracking-tight">What brings you joy?</h1>
                  <p className="text-slate-600 dark:text-slate-400 text-lg font-medium max-w-2xl">
                    Select up to {MAX_INTERESTS} interests and complete your details to find your perfect third space.
                  </p>
                </div>

                <InterestGrid selectedIds={selectedIds} onToggle={handleToggleInterest} />

                <UserCred formData={formData} onChange={handleFormChange} canSubmit={canSubmit} onSubmit={handleCreateAccount} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
