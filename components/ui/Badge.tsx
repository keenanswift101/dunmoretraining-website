type BadgeVariant = 'primary' | 'accent' | 'success' | 'warning' | 'error' | 'neutral'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  primary:  'bg-primary/10 text-primary',
  accent:   'bg-amber-100 text-amber-800',
  success:  'bg-green-100 text-green-700',
  warning:  'bg-yellow-100 text-yellow-700',
  error:    'bg-red-100 text-red-700',
  neutral:  'bg-slate-100 text-slate-600',
}

export function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
