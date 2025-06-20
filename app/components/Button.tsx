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
  const baseClasses = 'font-bold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#ffc814] focus:border-[#000000] disabled:cursor-not-allowed'
  
  const sizeClasses = {
    'large': 'h-12 px-6 text-base rounded-lg',
    'medium': 'h-10 px-4 text-sm rounded-lg',
    'small': 'h-8 px-3 text-xs rounded',
    'x-small': 'h-6 px-2 text-xs rounded'
  }

  const variantClasses = {
    solid: disabled
      ? 'bg-[#f1f1f1] text-[#323230] border border-[#f1f1f1]'
      : 'bg-[#ffc814] text-[#000000] border border-[#ffc814] hover:bg-[#e6b412] active:bg-[#cc9f10]',
    outlined: disabled
      ? 'bg-transparent text-[#323230] border border-[#f1f1f1]'
      : 'bg-transparent text-[#ffc814] border border-[#ffc814] hover:bg-[#fffbf0] active:bg-[#fff7e0]',
    text: disabled
      ? 'bg-transparent text-[#323230] border border-transparent'
      : 'bg-transparent text-[#ffc814] border border-transparent hover:bg-[#fffbf0] active:bg-[#fff7e0]'
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