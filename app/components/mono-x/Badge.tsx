import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'paid' | 'pending' | 'unpaid'
  children: React.ReactNode
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const baseClasses = cn(
      // Base styles following MONO-X design
      "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200",
      "focus:outline-none focus:ring-2 focus:ring-mono-x-yellow focus:ring-offset-1",
      // Motion reduce support
      "motion-reduce:transition-none"
    )

    let variantStyles = ""
    
    switch (variant) {
      case 'paid':
        variantStyles = "bg-mono-x-success/10 text-mono-x-success border border-mono-x-success/20"
        break
      case 'pending':
        variantStyles = "bg-mono-x-warning/10 text-mono-x-warning border border-mono-x-warning/30"
        break
      case 'unpaid':
        variantStyles = "bg-mono-x-error/10 text-mono-x-error border border-mono-x-error/20"
        break
      case 'secondary':
        variantStyles = "bg-mono-x-yellow/10 text-mono-x-orange border border-mono-x-yellow/30"
        break
      case 'destructive':
        variantStyles = "bg-mono-x-error/10 text-mono-x-error border border-mono-x-error/20"
        break
      case 'outline':
        variantStyles = "bg-transparent text-mono-x-black border border-mono-x-deep-gray"
        break
      default:
        variantStyles = "bg-mono-x-gray text-mono-x-black border border-mono-x-deep-gray/20"
    }

    return (
      <div
        className={cn(
          baseClasses,
          variantStyles,
          className
        )}
        ref={ref}
        role="status"
        aria-label={`Status: ${variant}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Badge.displayName = "Badge"

export { Badge } 