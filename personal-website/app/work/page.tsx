import Header from "@/components/Header";

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1134px] px-4 py-12 md:px-6 md:py-16">
        <h1 className="font-display text-3xl text-black md:text-4xl">Work</h1>
        <p className="mt-4 max-w-[640px] font-sans text-[18px] leading-relaxed text-[#6F6F6F]">
          Case studies and deep dives will live here. For now, see selected projects on the home
          page.
        </p>
      </main>
    </>
  );
}
