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
          focus:outline-none focus:ring-4 focus:ring-[#ffc814] focus:border-[#000000]
          ${disabled
            ? 'bg-transparent text-[#323230] border border-[#f1f1f1] cursor-not-allowed'
            : 'bg-transparent text-[#f15f00] border border-[#f15f00] hover:bg-[#fff5f0] active:bg-[#ffe8dd]'
          }
        `.trim()}
      >
        画像をアップロード
      </button>
    </div>
  )
} 