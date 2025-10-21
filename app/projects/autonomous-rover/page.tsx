import SiteNav from "@/components/site-nav";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RoverProject() {
  return (
    <>
      <SiteNav />
      <main className="pb-24">
        {/* Video Demo at the top */}
        <section className="pt-24 pb-8">
          <h1 className="text-4xl font-semibold tracking-tight mb-6">
            Autonomous Baseball Rover
          </h1>
          <div className="aspect-video mb-8">
            <iframe
              className="w-full h-full rounded-xl object-cover"
              src="https://www.youtube.com/embed/Lpi9gI_-LS4?autoplay=1&loop=1&playlist=Lpi9gI_-LS4&mute=1&rel=0"
              title="Autonomous Rover Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>Controls</Badge>
            <Badge>OpenCV</Badge>
            <Badge>PID</Badge>
          </div>
        </section>

        {/* Project Description */}
        <section className="mt-8 mb-12">
          <h2 className="text-xl font-semibold mb-3">Project Description</h2>
          <p className="text-lg text-zinc-600">
            An autonomous rover system utilizing computer vision and PID control for precise navigation. The project showcases advanced surface-aware gain adjustments and centroiding approaches for robust performance. <br /><br />
            <span className="block mt-2 text-base text-zinc-500">
              (Add more details about your design, challenges, results, or future work here.)
            </span>
          </p>
        </section>

        {/* Documentation */}
        <section className="mt-16 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Documentation</h2>
          <div className="space-y-3">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Project Poster</h3>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 mb-4">
                  Detailed overview of the project methodology and results.
                </p>
                <a 
                  href="/pdfs/controllersPoster.pdf" 
                  className="inline-flex items-center px-4 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-800"
                >
                  View Poster
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Final Report</h3>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 mb-4">
                  Comprehensive documentation of the project implementation and findings.
                </p>
                <a 
                  href="/pdfs/rover-report.pdf" 
                  className="inline-flex items-center px-4 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-800"
                >
                  Read Report
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}