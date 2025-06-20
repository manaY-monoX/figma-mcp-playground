'use client'

import { useActionState } from 'react'
import { updateProfile, type ProfileFormState } from '../actions/profile'
import ToggleSwitch from './ToggleSwitch'
import Image from 'next/image'

const initialState: ProfileFormState = {
  message: '',
  errors: {}
}

export default function ProfileEditForm() {
  const [state, formAction, pending] = useActionState(updateProfile, initialState)

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Close button */}
          <div className="absolute top-4 right-4 z-10">
            <button className="w-8 h-8 bg-black/20 rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Header with gradient background */}
          <div className="relative h-32 bg-gradient-to-r from-[#323230] to-[#ffc814]">
            {/* Profile Image */}
            <div className="absolute bottom-0 left-6 transform translate-y-1/2">
              <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden bg-white">
                <Image 
                  src="/user.jpg" 
                  alt="Profile" 
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full bg-[#f1f1f1] flex items-center justify-center">
                  <svg 
                    className="w-10 h-10 text-[#323230]" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              {/* Verified badge */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Action buttons */}
            <div className="absolute top-4 right-16 flex gap-2">
              <button className="px-3 py-1 bg-black/20 text-white text-xs rounded hover:bg-black/30 transition-colors">
                Archive
              </button>
              <button className="px-3 py-1 bg-black/20 text-white text-xs rounded hover:bg-black/30 transition-colors">
                View orders
              </button>
            </div>
          </div>

          {/* Dark section */}
          <div className="bg-[#1a1a1a] text-white p-6 pt-12">
            {/* User info */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-bold">山下 真和都</h2>
                <span className="text-xs bg-gray-600 px-2 py-1 rounded">Subscribed</span>
              </div>
              <p className="text-gray-400 text-sm">m-yamashita@mono-x.com</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div>
                <p className="text-gray-400 text-xs">First seen</p>
                <p className="text-white text-sm font-medium">1 Mar, 2025</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">First purchase</p>
                <p className="text-white text-sm font-medium">4 Mar, 2025</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Revenue</p>
                <p className="text-white text-sm font-medium">$118.00</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">MRR</p>
                <p className="text-white text-sm font-medium">$0.00</p>
              </div>
            </div>

            <form action={formAction} className="space-y-4">
              {/* Name fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Name</label>
                  <input
                    name="firstName"
                    placeholder="Sienna"
                    className="w-full h-10 px-3 bg-[#2a2a2a] border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffc814] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-transparent text-sm font-medium mb-2">.</label>
                  <input
                    name="lastName"
                    placeholder="Hewitt"
                    className="w-full h-10 px-3 bg-[#2a2a2a] border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffc814] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email address</label>
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    value="m-yamashita@mono-x.com"
                    readOnly
                    className="w-full h-10 px-10 bg-[#2a2a2a] border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#ffc814] focus:border-transparent"
                  />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="flex items-center mt-2">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-green-500">VERIFIED 2 JAN, 2025</span>
                </div>
              </div>

              {/* Country field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Country</label>
                <div className="relative">
                  <select className="w-full h-10 px-3 bg-[#2a2a2a] border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#ffc814] focus:border-transparent appearance-none">
                    <option>🇺🇸 United States</option>
                    <option>🇯🇵 Japan</option>
                  </select>
                  <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Username field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Username</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-400 bg-[#2a2a2a] border border-r-0 border-gray-600 rounded-l">
                    untitledui.com/
                  </span>
                  <input
                    name="username"
                    value="manaY-monoX"
                    readOnly
                    className="flex-1 h-10 px-3 bg-[#2a2a2a] border border-gray-600 rounded-r text-white focus:outline-none focus:ring-2 focus:ring-[#ffc814] focus:border-transparent"
                  />
                  <button type="button" className="ml-2 p-2 text-gray-400 hover:text-white">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Notification toggle */}
              <div className="flex items-center justify-between py-2">
                <label className="text-white text-sm font-medium">
                  メール通知を有効にする
                </label>
                <ToggleSwitch name="emailNotifications" />
              </div>

              {/* Error message */}
              {state.message && (
                <div className="p-3 bg-red-900/20 border border-red-500/20 rounded">
                  <p className="text-red-400 text-sm">{state.message}</p>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  className="flex-1 h-10 px-4 bg-transparent border border-gray-600 text-white rounded hover:bg-[#2a2a2a] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={pending}
                  className="flex-1 h-10 px-4 bg-[#ffc814] text-[#000000] rounded hover:bg-[#e6b412] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {pending ? 'Saving...' : 'Save changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 