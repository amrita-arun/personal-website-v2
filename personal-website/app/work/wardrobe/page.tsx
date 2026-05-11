import type { Metadata } from "next";
import Header from "@/components/Header";
import { WardrobeCaseStudy } from "@/components/case-studies/WardrobeCaseStudy";

export const metadata: Metadata = {
  title: "Wardrobe — Case Study",
  description:
    "Wardrobe iOS app: weather-aware outfit recommendations and carousel-driven SwiftUI interactions.",
};

export default function WardrobeCaseStudyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1134px] px-4 py-12 md:px-6 md:py-16">
        <WardrobeCaseStudy />
      </main>
    </>
  );
}
