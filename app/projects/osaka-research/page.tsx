import SiteNav from "@/components/site-nav";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OsakaResearchProject() {
  return (
    <>
      <SiteNav />
      <main className="pb-24">
        {/* Top Image */}
        <section className="pt-24">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src="/images/osaka-image.jpg"
              alt="Osaka University — running augmentation research"
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>

        {/* Title + Tags */}
        <section className="pt-6 pb-8">
          <h1 className="text-4xl font-semibold tracking-tight mb-6">
            Osaka University Research: Running Augmentation
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>Soft Mechanisms</Badge>
            <Badge>Biomechanics</Badge>
            <Badge>Research</Badge>
            <Badge>Prototyping</Badge>
          </div>
        </section>

        {/* Project Description */}
        <section className="mt-8 mb-12">
          <h2 className="text-xl font-semibold mb-3">Project Description</h2>
          <p className="text-lg text-zinc-600">
            Researched running augmentation that minimizes required joint power while
            accomplishing the same external work on the environment. The approach
            explores compliant mechanisms and elastic energy storage to replicate
            natural tendencies of animals that exhibit locomotion efficiency
            better than humans. We aimed for improved energy return, reduced joint loading, and
            better economy of motion.
            <br /><br />
          </p>
        </section>

        {/* Documentation */}
        <section className="mt-16 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Documentation</h2>
          <div className="space-y-3">
            {/* Poster */}
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Research Poster</h3>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 mb-4">
                  A high level overview of the research objectives, methods, and findings.
                </p>
                <a
                  href="/pdfs/augment_poster.pdf"
                  className="inline-flex items-center px-4 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-800"
                >
                  View Poster
                </a>
              </CardContent>
            </Card>

            {/* Paper */}
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Research Paper</h3>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 mb-4">
                  Full write-up with modeling, experimental protocol, and analysis.
                </p>
                <a
                  href="/pdfs/augment_paper.pdf"
                  className="inline-flex items-center px-4 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-800"
                >
                  Read Paper
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
