export type HomeWorkTagVariant = 'pink' | 'pinkSoft' | 'orange'

export type HomeWorkSlide = {
  title: string
  subtitle?: string
  description?: string
  tags?: readonly string[]
  imageSrc?: string
  imageAlt?: string
  caseStudyHref?: string
  devpostHref?: string
  codeHref?: string
  codeLabel?: string
  accentColor: string
  tagVariant: HomeWorkTagVariant
}

export const homeWorkSlides: readonly HomeWorkSlide[] = [
  {
    title: 'Verso',
    subtitle: 'designathon · 3rd @ CreateSC',
    description:
      "A reading app concept that won 3rd place at USC's nationwide UIUX designathon. Built several production screens solo.",
    tags: ['Figma', 'Prototyping', 'UI/UX', 'Product Thinking'],
    imageSrc: '/verso.png',
    imageAlt: 'Verso reading app mockup',
    caseStudyHref: '/work/verso',
    devpostHref: 'https://devpost.com/software/verso-ctf4e9',
    accentColor: '#DC4F7C',
    tagVariant: 'pink',
  },
  {
    title: 'Wardrobe',
    subtitle: 'iOS mobile app',
    description:
      'Outfit curation from scratch - Figma to full SwiftUI production. Smart, curated suggestions based on your preferences.',
    tags: ['SwiftUI', 'Figma', 'iOS', 'Interaction design'],
    imageSrc: '/wardrobe.png',
    imageAlt: 'Wardrobe iOS app mockup',
    caseStudyHref: '/work/wardrobe',
    codeHref: 'https://github.com/amrita-arun',
    codeLabel: 'Code',
    accentColor: '#CF4D52',
    tagVariant: 'pinkSoft',
  },
  {
    title: 'SwiftMotionKit',
    subtitle: 'iOS motion framework',
    description:
      'Exploring fluid gesture-driven interactions in Swift with custom motion primitives and gesture APIs.',
    tags: ['Swift', 'iOS', 'Interaction design'],
    imageSrc: '/swiftMotionKitTwitter.gif',
    imageAlt: 'SwiftMotionKit interaction demo',
    codeHref: 'https://github.com/amrita-arun/SwiftMotionKit',
    codeLabel: 'View Code',
    accentColor: '#F3842D',
    tagVariant: 'pink',
  },
  {
    title: 'Due',
    subtitle: 'fullstack web app',
    description:
      'Reimagining homework as a dynamic, engaging learning experience. From concept to MVP. Scaled to 50 users.',
    tags: ['Web Development', 'AI', 'System Design', '0 → 1', 'Startup'],
    imageSrc: '/due.jpeg',
    imageAlt: 'Due homework app mockup',
    codeHref: 'https://github.com/kristiiwuu/mvp',
    codeLabel: 'View Code',
    accentColor: '#A1A645',
    tagVariant: 'orange',
  },
] as const
