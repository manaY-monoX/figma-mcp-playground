'use client'

import { useState } from 'react'

interface ToggleSwitchProps {
  name: string
  defaultChecked?: boolean
  disabled?: boolean
}

export default function ToggleSwitch({ 
  name, 
  defaultChecked = false, 
  disabled = false 
}: ToggleSwitchProps) {
  const [checked, setChecked] = useState(defaultChecked)

  const handleToggle = () => {
    if (!disabled) {
      setChecked(!checked)
    }
  }

  return (
    <div className="inline-flex items-center">
      <input
        type="hidden"
        name={name}
        value={checked ? 'true' : 'false'}
      />
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={handleToggle}
        disabled={disabled}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200
          focus:outline-none focus:ring-4 focus:ring-[#ffc814] focus:border-[#000000]
          ${disabled 
            ? 'bg-[#f1f1f1] cursor-not-allowed' 
            : checked 
              ? 'bg-[#f15f00] hover:bg-[#d64d00]' 
              : 'bg-[#323230] hover:bg-[#000000]'
          }
        `.trim()}
      >
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200
            ${checked ? 'translate-x-6' : 'translate-x-1'}
          `.trim()}
        />
      </button>
    </div>
  )
} 