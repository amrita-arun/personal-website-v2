import type { ReactNode } from 'react'
import { caseStudyStyles } from './case-study-styles'

type CaseStudySectionProps = {
  label: string
  children: ReactNode
  className?: string
}

export function CaseStudySection({ label, children, className = '' }: CaseStudySectionProps) {
  return (
    <section className={`space-y-6 md:space-y-8 ${className}`}>
      <h2 className={caseStudyStyles.sectionLabel}>{label}</h2>
      <div className={caseStudyStyles.body}>{children}</div>
    </section>
  )
}
