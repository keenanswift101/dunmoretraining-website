import Image from 'next/image'

const tagConfig: Record<string, { pill: string; dot: string }> = {
  'Primary SETA':       { pill: 'bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500' },
  'SETA':               { pill: 'bg-teal-50 text-teal-700',        dot: 'bg-teal-500'   },
  'QCTO Accreditation': { pill: 'bg-blue-50 text-blue-700',        dot: 'bg-blue-600'   },
  'DoL Registered':     { pill: 'bg-violet-50 text-violet-700',    dot: 'bg-violet-500' },
  'Transformation':     { pill: 'bg-amber-50 text-amber-700',      dot: 'bg-amber-500'  },
}

const accreditations = [
  {
    body: 'FP&M SETA',
    fullName: 'Forestry, Paper & Manufacturing Sector Education & Training Authority',
    ref: 'FPM16/PRPACC-022',
    scope: 'Covers forestry, fire fighting, first aid and health & safety skills programmes.',
    law: 'Skills Development Act 97 of 1998',
    tag: 'Primary SETA',
    sticker: '/seta1.png',
    stickerAlt: 'Officially SETA Accredited',
    stickerScale: 0.85,
    stickerFit: 'cover' as const,
  },
  {
    body: 'AgriSETA',
    fullName: 'Agricultural Sector Education & Training Authority',
    ref: 'AgriSETA Accredited',
    scope: 'Agricultural, environmental and rural skills development programmes.',
    law: 'Skills Development Act 97 of 1998',
    tag: 'SETA',
    sticker: '/seta-agri.png',
    stickerAlt: 'AgriSETA Accredited',
    stickerScale: 1.15,
    stickerFit: 'cover' as const,
  },
  {
    body: 'QCTO',
    fullName: 'Quality Council for Trades & Occupations',
    ref: '01-QCTO/SDP160625160620',
    refs: [
      '01-QCTO/SDP160625160620',
      '01-QCTO/SDP050325093714',
      '01-QCTO/SDP010825145811',
    ],
    scope: 'Occupational qualifications and skills programmes — NQF Levels 2–5.',
    law: 'Skills Development Act Amendment 26 of 2011',
    tag: 'QCTO Accreditation',
    sticker: '/qcto.png',
    stickerAlt: 'QCTO Accredited',
    stickerScale: 0.9,
    stickerFit: 'cover' as const,
  },
  {
    body: 'Dept of Labour',
    fullName: 'Department of Employment & Labour',
    ref: 'CI 296/3/12/1',
    scope: 'Regulated first aid and workplace emergency response programmes.',
    law: 'OHS Act 85 of 1993 — First Aid Regulations',
    tag: 'DoL Registered',
    sticker: '/dol.png',
    stickerAlt: 'Department of Labour Registered',
    stickerScale: 1.15,
    stickerFit: 'cover' as const,
  },
  {
    body: 'Level 1 BBBEE',
    fullName: 'Broad-Based Black Economic Empowerment',
    ref: 'B-BBEE Compliant',
    scope: 'Maximum BEE scorecard contribution. Founded 2014 by historically disadvantaged members.',
    law: 'B-BBEE Act 53 of 2003 (as amended)',
    tag: 'Transformation',
    sticker: '/bbbee.png',
    stickerAlt: 'Certified Level 1 B-BBEE Contributor',
    stickerScale: 0.80,
    stickerFit: 'cover' as const,
  },
]

export function AccreditationBar() {
  return (
    <section
      className="bg-surface-alt border-b border-dunmore-border"
      aria-labelledby="accreditations-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">
            Compliance &amp; Accreditation
          </p>
          <h2
            id="accreditations-heading"
            className="font-display font-bold text-primary"
            style={{ fontSize: 'var(--text-2xl)' }}
          >
            Nationally Recognised. Fully Accredited.
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-xl">
            Accredited by multiple South African regulatory bodies — every certificate
            we issue is recognised by government, corporates and industry.
          </p>
        </div>

        {/* Cards grid */}
        <ul
          role="list"
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {accreditations.map(({ body, fullName, ref, refs, scope, law, tag, sticker, stickerAlt, stickerScale, stickerFit }) => {
            const style = tagConfig[tag] ?? tagConfig['SETA']
            return (
              <li key={ref}>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_1px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.10)] hover:-translate-y-0.5 transition-all duration-200 overflow-hidden h-full flex flex-col">

                  {/* Sticker image header */}
                  <div className="relative h-40 sm:h-52 bg-slate-50 border-b border-slate-100 overflow-hidden">
                    <Image
                      src={sticker}
                      alt={stickerAlt}
                      fill
                      className="drop-shadow-lg"
                      style={{
                        objectFit: stickerFit ?? 'cover',
                        objectPosition: 'center',
                        transform: `scale(${stickerScale ?? 1})`,
                      }}
                    />
                  </div>

                  {/* Card body */}
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    {/* Category tag pill */}
                    <span
                      className={`self-start inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${style.pill}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${style.dot}`} aria-hidden="true" />
                      {tag}
                    </span>

                    {/* Body name */}
                    <h3 className="font-display font-bold text-primary text-xl leading-tight mb-1">
                      {body}
                    </h3>

                    {/* Full authority name */}
                    <p className="text-slate-400 text-[11px] leading-snug mb-4">
                      {fullName}
                    </p>

                    {/* Divider */}
                    <hr className="border-slate-100 mb-4" />

                    {/* Reference + legislation */}
                    <div className="space-y-1.5 mb-4">
                      {refs ? (
                        <ul className="space-y-1">
                          {refs.map((r) => (
                            <li key={r} className="font-mono text-slate-600 text-xs font-semibold tracking-tight">{r}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="font-mono text-slate-600 text-xs font-semibold tracking-tight">{ref}</p>
                      )}
                      <p className="text-slate-400 text-[11px] italic leading-snug">
                        {law}
                      </p>
                    </div>

                    {/* Scope — pushed to bottom */}
                    <p className="mt-auto text-slate-500 text-[11px] leading-relaxed">
                      {scope}
                    </p>
                  </div>

                </div>
              </li>
            )
          })}
        </ul>

        {/* Registration Details */}
        <div className="mt-8 bg-white rounded-xl border border-slate-100 shadow-[0_1px_8px_rgba(0,0,0,0.04)] p-6 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-10">
          <div className="flex items-baseline gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Central Supplier Database (CSD):</span>
            <span className="font-mono font-bold text-primary text-sm">MAAA0160735</span>
          </div>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" aria-hidden="true" />
          <div className="flex items-baseline gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Company Registration:</span>
            <span className="font-mono font-bold text-primary text-sm">2014/239650/07</span>
          </div>
        </div>
      </div>
    </section>
  )
}

