import SiteNav from "@/components/site-nav";
import { Badge } from "@/components/ui/badge";

export default function FireDroneProject() {
  return (
    <>
      <SiteNav />
      <main className="pb-24">
        <section className="pt-24 pb-8">
          <h1 className="text-4xl font-semibold tracking-tight mb-6">
            Fire-Detecting Drone
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>Aerial Robotics</Badge>
            <Badge>Controls</Badge>
          </div>
        </section>
        <section className="mt-8 mb-12">
          <h2 className="text-xl font-semibold mb-3">Project Description</h2>
          <p className="text-lg text-zinc-600">
            Wildfire scouting drone prototype with onboard controls and perception. Designed for rapid deployment and autonomous fire mapping in challenging environments. <br /><br />
            <span className="block mt-2 text-base text-zinc-500">
              (Add more details about your design, sensors, mapping algorithms, results, or future work here.)
            </span>
          </p>
        </section>
        {/* Documentation */}
        <section className="mt-16 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Documentation</h2>
          <div className="space-y-3">
            {/* Add poster/report links here if available */}
          </div>
        </section>
      </main>
    </>
  );
}