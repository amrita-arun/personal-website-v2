import type { Metadata } from "next";
import Header from "@/components/Header";
import { VersoCaseStudy } from "@/components/case-studies/VersoCaseStudy";

export const metadata: Metadata = {
  title: "Verso — Case Study",
  description:
    "Verso: a reading app designed for synthesis, not completion. UI/UX case study (CreateSC '26).",
};

export default function VersoCaseStudyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1134px] px-4 py-12 md:px-6 md:py-16">
        <VersoCaseStudy />
      </main>
    </>
  );
}
