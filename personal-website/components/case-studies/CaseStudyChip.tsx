type CaseStudyChipProps = {
  label: string
}

export function CaseStudyChip({ label }: CaseStudyChipProps) {
  return (
    <span className="inline-flex items-center justify-center rounded-[30px] border border-black px-[15px] py-[5px] font-sans text-[14px] leading-[1.5] tracking-[-0.28px] text-black">
      {label}
    </span>
  )
}
