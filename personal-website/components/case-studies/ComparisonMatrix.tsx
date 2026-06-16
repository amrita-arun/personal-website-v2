import { caseStudyStyles } from './case-study-styles'

type ComparisonRow = {
  feature: string
  verso: boolean
  kindle: boolean
  libby: boolean
}

type ComparisonMatrixProps = {
  rows: ComparisonRow[]
}

const COLUMNS = 'grid-cols-[minmax(0,1fr)_3.25rem_3.25rem_3.25rem] md:grid-cols-[minmax(0,1fr)_4rem_4rem_4rem]'

function Dot({ filled }: { filled: boolean }) {
  return (
    <span
      className={`inline-block h-3 w-3 shrink-0 rounded-full border ${
        filled ? 'border-[#DC4F7C] bg-[#DC4F7C]' : 'border-[#C1C7CD] bg-transparent'
      }`}
    />
  )
}

export function ComparisonMatrix({ rows }: ComparisonMatrixProps) {
  return (
    <div className="w-full max-w-[560px]">
      <div className={`grid ${COLUMNS} items-center gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-5`}>
        {/* Header row */}
        <div aria-hidden className="min-w-0" />
        {(['Verso', 'Kindle', 'Libby'] as const).map((label) => (
          <p
            key={label}
            className="text-center font-sans text-sm font-normal leading-none text-[#958F84]"
          >
            {label}
          </p>
        ))}

        {/* Feature rows */}
        {rows.flatMap((row) => [
          <p
            key={`${row.feature}-label`}
            className={`pr-2 text-right ${caseStudyStyles.body} text-[#2C2B2A] md:pr-4`}
          >
            {row.feature}
          </p>,
          <div key={`${row.feature}-verso`} className="flex justify-center">
            <Dot filled={row.verso} />
          </div>,
          <div key={`${row.feature}-kindle`} className="flex justify-center">
            <Dot filled={row.kindle} />
          </div>,
          <div key={`${row.feature}-libby`} className="flex justify-center">
            <Dot filled={row.libby} />
          </div>,
        ])}
      </div>
    </div>
  )
}
