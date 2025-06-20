interface TextInputProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  required?: boolean
  supportText?: string
  error?: string
  size?: 'large' | 'medium' | 'small'
}

export default function TextInput({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  supportText,
  error,
  size = 'large'
}: TextInputProps) {
  const sizeClasses = {
    large: 'h-12 px-4 text-base rounded-lg',
    medium: 'h-10 px-3 text-sm rounded-lg',
    small: 'h-8 px-2 text-xs rounded'
  }

  const inputClass = `
    w-full ${sizeClasses[size]}
    border transition-colors duration-200
    bg-white text-[#323230] placeholder-[#999999]
    focus:outline-none focus:ring-4 focus:ring-[#ffc814] focus:border-[#000000]
    ${error 
      ? 'border-[#f15f00] focus:border-[#f15f00]' 
      : 'border-[#323230] hover:border-[#000000] focus:border-[#000000]'
    }
    disabled:bg-[#f1f1f1] disabled:border-[#f1f1f1] disabled:text-[#999999]
  `.trim()

  return (
    <div className="space-y-2">
      <label className="block">
        <span className="text-[#323230] font-bold text-base leading-[1.7]">
          {label}
          {required && <span className="text-[#f15f00] ml-1">※必須</span>}
        </span>
      </label>
      
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={inputClass}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${name}-error` : supportText ? `${name}-support` : undefined}
      />
      
      {supportText && !error && (
        <p id={`${name}-support`} className="text-[#323230] text-sm leading-[1.7]">
          {supportText}
        </p>
      )}
      
      {error && (
        <p id={`${name}-error`} className="text-[#f15f00] text-sm leading-[1.7]" role="alert">
          {error}
        </p>
      )}
    </div>
  )
} 