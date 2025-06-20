'use client'

import { useRef } from 'react'

interface ImageUploadButtonProps {
  onImageSelect?: (file: File) => void
  disabled?: boolean
}

export default function ImageUploadButton({ 
  onImageSelect, 
  disabled = false 
}: ImageUploadButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && onImageSelect) {
      onImageSelect(file)
    }
  }

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        disabled={disabled}
      />
      <button
        type="button"
        onClick={handleClick}
        disabled={disabled}
        className={`
          h-10 px-4 text-sm font-bold rounded-lg transition-all duration-200
          focus:outline-none focus:ring-4 focus:ring-[#FFD43D] focus:border-[#000000]
          ${disabled
            ? 'bg-transparent text-[#999999] border border-[#CCCCCC] cursor-not-allowed'
            : 'bg-transparent text-[#0017C1] border border-[#0017C1] hover:bg-[#F0F2FF] active:bg-[#E0E6FF]'
          }
        `.trim()}
      >
        画像をアップロード
      </button>
    </div>
  )
} 