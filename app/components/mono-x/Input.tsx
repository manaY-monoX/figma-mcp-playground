import * as React from "react"
import { useId } from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  supportText?: string
  error?: string
  required?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, supportText, error, required, id, ...props }, ref) => {
    const generatedId = useId()
    const inputId = id || `input-${generatedId}`
    const supportId = `${inputId}-support`
    const errorId = `${inputId}-error`

    const inputClasses = cn(
      // Base styles following MONO-X design
      "w-full px-4 py-3 rounded-lg border transition-all duration-200",
      "bg-white text-mono-x-black placeholder:text-mono-x-deep-gray/60",
      "font-mono-x-body text-mono-x-base leading-relaxed",
      // Focus states with MONO-X yellow ring
      "focus:outline-none focus:ring-2 focus:ring-mono-x-yellow focus:border-mono-x-orange",
      "focus-visible:ring-4 focus-visible:ring-mono-x-yellow",
      // Error states
      error 
        ? "border-mono-x-error focus:border-mono-x-error focus:ring-mono-x-error/30" 
        : "border-gray-300 hover:border-mono-x-deep-gray",
      // Disabled state
      "disabled:bg-mono-x-gray disabled:border-mono-x-deep-gray disabled:text-mono-x-deep-gray disabled:cursor-not-allowed",
      // Motion reduce support
      "motion-reduce:transition-none",
      className
    )

    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-mono-x-black font-bold text-mono-x-base leading-relaxed"
          >
            {label}
            {required && (
              <span className="text-mono-x-error ml-1" aria-label="必須">
                ※必須
              </span>
            )}
          </label>
        )}
        
        <input
          type={type}
          className={inputClasses}
          ref={ref}
          id={inputId}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? errorId : supportText ? supportId : undefined
          }
          aria-required={required}
          {...props}
        />
        
        {supportText && !error && (
          <p 
            id={supportId} 
            className="text-mono-x-deep-gray text-mono-x-sm leading-relaxed"
          >
            {supportText}
          </p>
        )}
        
        {error && (
          <p 
            id={errorId} 
            className="text-mono-x-error text-mono-x-sm leading-relaxed" 
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input } 