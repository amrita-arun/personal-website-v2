import { libreBaskerville } from '@/lib/fonts'
import {
  versoChips,
  versoComparisonRows,
  versoInteractionFeatures,
  versoMedia,
  versoMeta,
  versoOutcomes,
  versoReadingTools,
  versoSolutionFeatures,
} from '@/lib/content/verso'
import { CaseStudyChip } from './CaseStudyChip'
import { CaseStudyMedia } from './CaseStudyMedia'
import { CaseStudySection } from './CaseStudySection'
import { CaseStudySplit } from './CaseStudySplit'
import { ComparisonMatrix } from './ComparisonMatrix'
import { caseStudyStyles } from './case-study-styles'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

function MetaGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-10 md:gap-14">
      {versoMeta.map((item) => (
        <div key={item.label} className="text-center">
          <p className={caseStudyStyles.metaLabel}>{item.label}</p>
          <div className={`mt-6 ${caseStudyStyles.metaValue}`}>
            {Array.isArray(item.value) ? (
              item.value.map((line) => <p key={line}>{line}</p>)
            ) : (
              <p>{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

function SolutionBody({
  lines,
  isList,
}: {
  lines: readonly string[]
  isList?: boolean
}) {
  if (isList) {
    const [intro, ...items] = lines
    const outro = items[items.length - 1]
    const listItems = items.slice(0, -1)
    return (
      <>
        <p>{intro}</p>
        <ul className="mt-2 list-disc space-y-1 pl-6">
          {listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-2">{outro}</p>
      </>
    )
  }

  return (
    <>
      {lines.map((line, i) => (
        <p key={line} className={i > 0 ? 'mt-2' : ''}>
          {line}
        </p>
      ))}
    </>
  )
}

export default function VersoCaseStudy() {
  return (
    <main className="flex-1 pb-24 text-black">
      <div className="mx-auto w-full max-w-[1335px] px-6 md:px-[107px]">
        <header className="flex flex-col items-center pt-6 text-center md:pt-10">
          <h1
            className={`${libreBaskerville.className} text-[36px] font-normal leading-normal`}
          >
            Verso
          </h1>
          <p className="mt-4 max-w-[646px] font-sans text-[20px] font-medium leading-[25px] text-[#DC4F7C]">
            prototyping a reading app that prioritizes synthesis over completion
          </p>

          <div className="mt-6 w-full">
            <CaseStudyMedia src={versoMedia.hero} alt="Verso prototype demo" variant="hero" />
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {versoChips.map((chip) => (
              <CaseStudyChip key={chip} label={chip} />
            ))}
          </div>

          <div className="mt-12 w-full md:mt-16">
            <MetaGrid />
          </div>
        </header>

        <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
          <CaseStudySection label="THE PROMPT">
            <p>
              Find a digital experience that feels over-optimized (i.e. sterile, frictionless,
              forgettable).
            </p>
            <p className="mt-4">
              Reimagine it so the interface changes through repeated use, introducing variation,
              wear, or adaptation over time.
            </p>
            <p className="mt-4">
              Prototype interactions where the system evolves with use in ways that would be
              difficult to express in a static design.
            </p>
          </CaseStudySection>

          <section className="space-y-6 md:space-y-8">
            <h2 className={caseStudyStyles.sectionLabel}>PROBLEM</h2>
            <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-12">
              <div className={`max-w-[420px] ${caseStudyStyles.body}`}>
                <p className="font-bold">
                  No reading app helps you understand what your annotations reveal about you.
                </p>
                <p className="mt-4">
                  Current reading platforms let you highlight. None of them synthesize. Your
                  annotations sit disconnected, never building into anything bigger.
                </p>
              </div>
              <ComparisonMatrix rows={[...versoComparisonRows]} />
            </div>
          </section>

          <section className="space-y-10 md:space-y-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
              {/* Left: all copy */}
              <div className="flex-1 space-y-8">
                <div>
                  <h2 className={caseStudyStyles.sectionLabel}>{versoReadingTools.sectionLabel}</h2>
                  <p className={`mt-6 md:mt-8 ${caseStudyStyles.body}`}>
                    {versoReadingTools.intro.beforeBold}{' '}
                    <span className="font-bold">{versoReadingTools.intro.bold}</span>{' '}
                    {versoReadingTools.intro.afterBold}
                  </p>
                </div>
                {versoReadingTools.items.map((item) => (
                  <div key={item.title} className="space-y-3">
                    <h3 className={caseStudyStyles.featureTitle}>{item.title}</h3>
                    <p className={caseStudyStyles.body}>{item.body}</p>
                  </div>
                ))}
              </div>

              {/* Right: FIG 01 Kindle + FIG 02 Libby */}
              <div className="flex w-full flex-col gap-8 lg:w-[38%] lg:shrink-0">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full">
                    <CaseStudyMedia src={versoMedia.kindle} alt="Kindle reader app" variant="feature" />
                  </div>
                  <div className="text-center">
                    <p className={caseStudyStyles.caption}>FIG 01</p>
                    <p className={caseStudyStyles.body}>Kindle Reader App</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full">
                    <CaseStudyMedia src={versoMedia.libby} alt="Libby reading app" variant="feature" />
                  </div>
                  <div className="text-center">
                    <p className={caseStudyStyles.caption}>FIG 02</p>
                    <p className={caseStudyStyles.body}>Libby Reading App</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-10 md:space-y-12">
            <div>
              <h2 className={caseStudyStyles.sectionLabel}>SOLUTION</h2>
              <div className={`mt-6 md:mt-8 ${caseStudyStyles.body}`}>
                <p className="font-bold">Synthesis over completion.</p>
                <p className="mt-4">
                  Verso turns your annotations into a living portrait of how you think — across
                  every book you&apos;ve ever read.
                </p>
                <div className="mt-5">
                  <a
                    href="https://devpost.com/software/verso-ctf4e9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-[10px] border border-black bg-white/70 px-3.5 py-1.5 font-sans text-[14px] font-medium text-black tracking-[-0.01em] transition hover:shadow-[-2px_3px_0px_0px_#CF4D52]"
                  >
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                    <span>View Devpost</span>
                  </a>
                </div>
              </div>
            </div>

            {versoSolutionFeatures.map((feature) => (
              <CaseStudySplit
                key={feature.title}
                title={feature.title}
                mediaSrc={feature.media}
                mediaAlt={feature.title}
                reverse={feature.reverse}
              >
                <SolutionBody lines={feature.body} isList={'isList' in feature && feature.isList} />
              </CaseStudySplit>
            ))}
          </section>

          <section className="space-y-6">
            <h2 className={caseStudyStyles.sectionLabel}>INTERACTION DESIGN</h2>
            <div className="space-y-10 pt-4 md:space-y-12 md:pt-6">
              {versoInteractionFeatures.map((feature) => (
                <CaseStudySplit
                  key={`${feature.title}-${feature.media}`}
                  title={feature.title}
                  mediaSrc={feature.media}
                  mediaAlt={feature.title}
                  reverse={feature.reverse}
                >
                  <SolutionBody lines={feature.body} />
                </CaseStudySplit>
              ))}
            </div>
          </section>

          <CaseStudySection label="AI TOOLS">
            <div className="space-y-4">
              <p>
                I used Figma Make with Claude Sonnet to build the functional prototype. The
                annotation-to-canvas pipeline, staggered drift animations, ghost prompt triggering at
                exactly the 3rd annotation, and the timeline scrubber all required a live system - not
                a Figma Design frame.
              </p>
              <p>
                <span className="font-bold">What AI accelerated: </span>
                component logic, animation timing, state management, design → live product.
              </p>
              <p>
                <span className="font-bold">What stayed mine: </span>
                every design decision, interaction model, and design system choice.
              </p>
              <p>
                AI didn&apos;t design Verso. It let me build fast enough to test whether my design
                decisions actually felt right in motion.
              </p>

              <div className="pt-2">
                <a
                  href="https://devpost.com/software/verso-ctf4e9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[10px] border border-black bg-white/70 px-3.5 py-1.5 font-sans text-[14px] font-medium text-black tracking-[-0.01em] transition hover:shadow-[-2px_3px_0px_0px_#CF4D52]"
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
                  <span>View Devpost</span>
                </a>
              </div>
            </div>
          </CaseStudySection>

          <section className="pt-4 md:pt-8">
            <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:items-end lg:gap-8">
              <div className="flex flex-1 flex-col items-center gap-4">
                <div className="w-full">
                  <CaseStudyMedia
                    src={versoMedia.fig03Canvas}
                    alt="Canvas Figma Design Frame"
                    variant="large"
                  />
                </div>
                <div className={`text-center ${caseStudyStyles.body}`}>
                  <p className={caseStudyStyles.caption}>FIG 03</p>
                  <p>Canvas Figma Design Frame</p>
                </div>
              </div>

              <ArrowRight
                className="hidden h-8 w-8 shrink-0 self-center text-black lg:block"
                strokeWidth={1.5}
              />

              <div className="flex flex-1 flex-col items-center gap-4">
                <div className="w-full">
                  <CaseStudyMedia
                    src={versoMedia.fig04Prototype}
                    alt="Translated Canvas Prototype"
                    variant="large"
                  />
                </div>
                <div className={`text-center ${caseStudyStyles.body}`}>
                  <p className={caseStudyStyles.caption}>FIG 04</p>
                  <p>Translated Canvas Prototype</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6 md:space-y-8">
            <h2 className={caseStudyStyles.sectionLabel}>OUTCOMES</h2>
            <CaseStudySplit
              title={versoOutcomes.title}
              mediaSrc={versoOutcomes.media}
              mediaAlt="CreateSC 2026 award — 3rd place and MVP"
              reverse={false}
            >
              {versoOutcomes.body.map((line, i) => (
                <p key={line} className={i > 0 ? 'mt-4' : ''}>
                  {line}
                </p>
              ))}
            </CaseStudySplit>
          </section>
        </div>
      </div>
    </main>
  )
}
