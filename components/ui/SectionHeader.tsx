interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  id?: string
  light?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  id,
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const textClass  = light ? 'text-white' : 'text-primary'
  const mutedClass = light ? 'text-white/70' : 'text-slate-500'

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`font-display font-bold leading-tight ${textClass}`}
        style={{ fontSize: 'var(--text-3xl)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 leading-relaxed ${mutedClass}`}
          style={{ fontSize: 'var(--text-lg)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
