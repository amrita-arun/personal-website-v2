import type { ReactNode } from 'react'
import { CaseStudyMedia } from './CaseStudyMedia'
import { caseStudyStyles } from './case-study-styles'

type CaseStudySplitProps = {
  title: string
  children: ReactNode
  mediaSrc: string
  mediaAlt: string
  reverse?: boolean
}

export function CaseStudySplit({
  title,
  children,
  mediaSrc,
  mediaAlt,
  reverse = false,
}: CaseStudySplitProps) {
  const textBlock = (
    <div className="w-full max-w-[420px] space-y-3">
      <h3 className={caseStudyStyles.featureTitle}>{title}</h3>
      <div className={caseStudyStyles.body}>{children}</div>
    </div>
  )

  const mediaBlock = (
    <div className="w-full min-w-0">
      <CaseStudyMedia src={mediaSrc} alt={mediaAlt} variant="feature" />
    </div>
  )

  return (
    <div
      className={`grid grid-cols-1 gap-8 ${
        reverse
          ? 'lg:grid-cols-[minmax(0,0.62fr)_minmax(240px,0.38fr)]'
          : 'lg:grid-cols-[minmax(240px,0.38fr)_minmax(0,0.62fr)]'
      } lg:items-start lg:gap-10`}
    >
      {reverse ? (
        <>
          {mediaBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {mediaBlock}
        </>
      )}
    </div>
  )
}
