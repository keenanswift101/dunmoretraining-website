import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent hover:bg-accent-light text-primary-dark font-bold shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold',
  ghost:
    'text-slate-700 hover:bg-slate-100 font-medium',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-sm px-4 py-2 rounded-lg gap-1.5',
  md: 'text-base px-6 py-3 rounded-xl gap-2',
  lg: 'text-base px-8 py-4 rounded-xl gap-2',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center transition-all duration-150 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
