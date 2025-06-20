import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive'
  size?: 'large' | 'medium' | 'small'
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'medium', disabled, children, ...props }, ref) => {
    const baseClasses = cn(
      // Base styles
      "inline-flex items-center justify-center rounded-lg font-bold transition-all duration-200",
      "focus:outline-none focus:ring-2 focus:ring-mono-x-yellow focus:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      // High contrast support
      "focus-visible:ring-4 focus-visible:ring-mono-x-yellow",
      // Animation respect
      "motion-reduce:transition-none"
    )

    const sizeClasses = {
      large: "h-12 px-6 text-mono-x-base gap-2",
      medium: "h-10 px-4 text-mono-x-sm gap-2", 
      small: "h-8 px-3 text-mono-x-xs gap-1"
    }

    const variantClasses = {
      primary: disabled
        ? "bg-mono-x-gray text-mono-x-deep-gray border border-mono-x-gray"
        : "bg-mono-x-orange hover:bg-mono-x-orange/90 active:bg-mono-x-orange/80 text-white border border-mono-x-orange",
      secondary: disabled
        ? "bg-mono-x-gray text-mono-x-deep-gray border border-mono-x-gray"
        : "bg-mono-x-gray hover:bg-mono-x-gray/80 active:bg-mono-x-gray/70 text-mono-x-black border border-mono-x-gray",
      outline: disabled
        ? "bg-transparent text-mono-x-deep-gray border border-mono-x-deep-gray"
        : "bg-transparent hover:bg-mono-x-orange hover:text-white active:bg-mono-x-orange/90 text-mono-x-orange border-2 border-mono-x-orange",
      destructive: disabled
        ? "bg-mono-x-gray text-mono-x-deep-gray border border-mono-x-gray"
        : "bg-mono-x-error hover:bg-mono-x-error/90 active:bg-mono-x-error/80 text-white border border-mono-x-error"
    }

    return (
      <button
        className={cn(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        ref={ref}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button } 