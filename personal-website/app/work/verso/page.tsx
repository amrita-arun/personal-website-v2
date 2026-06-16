import type { Metadata } from 'next'
import VersoCaseStudy from '@/components/case-studies/VersoCaseStudy'

export const metadata: Metadata = {
  title: 'Verso — Amrita Arun',
  description:
    'Case study: prototyping a reading app that prioritizes synthesis over completion.',
}

export default function VersoPage() {
  return <VersoCaseStudy />
}
