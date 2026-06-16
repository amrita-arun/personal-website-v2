import Link from 'next/link'

export default function WardrobePage() {
  return (
    <main className="flex-1 px-6 py-16 text-black md:py-20">
      <div className="mx-auto max-w-3xl space-y-6">
        <Link href="/" className="inline-block text-sm text-[#8E8E8E] hover:text-black">
          ← back home
        </Link>
        <h1 className="font-serif text-4xl font-normal">Wardrobe</h1>
        <p className="text-base leading-relaxed text-[#4A4A4A]">
          Case-study page is coming next. This route is active so the homepage thumbnail works.
        </p>
      </div>
    </main>
  )
}
