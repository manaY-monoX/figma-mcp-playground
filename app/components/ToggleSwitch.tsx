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
          focus:outline-none focus:ring-4 focus:ring-[#FFD43D] focus:border-[#000000]
          ${disabled 
            ? 'bg-[#CCCCCC] cursor-not-allowed' 
            : checked 
              ? 'bg-[#0017C1] hover:bg-[#00118F]' 
              : 'bg-[#666666] hover:bg-[#333333]'
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