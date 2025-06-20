interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outlined' | 'text'
  size?: 'large' | 'medium' | 'small' | 'x-small'
  children: React.ReactNode
}

export default function Button({
  variant = 'solid',
  size = 'medium',
  children,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'font-bold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#FFD43D] focus:border-[#000000] disabled:cursor-not-allowed'
  
  const sizeClasses = {
    'large': 'h-12 px-6 text-base rounded-lg',
    'medium': 'h-10 px-4 text-sm rounded-lg',
    'small': 'h-8 px-3 text-xs rounded',
    'x-small': 'h-6 px-2 text-xs rounded'
  }

  const variantClasses = {
    solid: disabled
      ? 'bg-[#CCCCCC] text-[#999999] border border-[#CCCCCC]'
      : 'bg-[#0017C1] text-white border border-[#0017C1] hover:bg-[#00118F] active:bg-[#000060]',
    outlined: disabled
      ? 'bg-transparent text-[#999999] border border-[#CCCCCC]'
      : 'bg-transparent text-[#0017C1] border border-[#0017C1] hover:bg-[#F0F2FF] active:bg-[#E0E6FF]',
    text: disabled
      ? 'bg-transparent text-[#999999] border border-transparent'
      : 'bg-transparent text-[#0017C1] border border-transparent hover:bg-[#F0F2FF] active:bg-[#E0E6FF]'
  }

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim()

  return (
    <button
      className={combinedClasses}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
} 