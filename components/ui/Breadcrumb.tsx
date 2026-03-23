import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  /** 'dark' = for use on navy/dark hero backgrounds (default)
   *  'light' = for use on white/light backgrounds */
  variant?: 'dark' | 'light'
}

export function Breadcrumb({ items, variant = 'dark' }: BreadcrumbProps) {
  const baseOl = variant === 'dark' ? 'text-slate-400' : 'text-slate-400'
  const linkCls = variant === 'dark'
    ? 'hover:text-white transition-colors'
    : 'hover:text-primary transition-colors'
  const currentCls = variant === 'dark'
    ? 'text-slate-200 font-medium'
    : 'text-slate-700 font-medium'
  const chevronCls = variant === 'dark' ? 'text-slate-600' : 'text-slate-300'

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className={`flex flex-wrap items-center gap-1.5 ${baseOl}`}>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <svg className={`w-3.5 h-3.5 flex-shrink-0 ${chevronCls}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
            {item.href ? (
              <Link href={item.href} className={linkCls}>
                {item.label}
              </Link>
            ) : (
              <span className={currentCls} aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
