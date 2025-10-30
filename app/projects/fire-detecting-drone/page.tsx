import SiteNav from "@/components/site-nav";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function FireDroneProject() {
  return (
    <>
      <SiteNav />
      <main className="pb-24">
        {/* Top Image */}
        <section className="pt-24">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <Image
              src="/images/fpv_initial.jpg"
              alt="Fire-Detecting Drone in testing"
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>

        {/* Title + Tags */}
        <section className="pt-6 pb-8">
          <h1 className="text-4xl font-semibold tracking-tight mb-6">
            Fire-Detecting Drone
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>Aerial Robotics</Badge>
            <Badge>Controls</Badge>
          </div>
        </section>

        {/* Project Description */}
        <section className="mt-8 mb-12">
          <h2 className="text-xl font-semibold mb-3">Project Description</h2>
          <p className="text-lg text-zinc-600">
            Beginning our Capstone, we are building a FPV quadcopter to test thermal imaging
            practices. In tandem, we are developing a VTOL fixed-wing platform to extend flight
            time and range for wildfire monitoring.
            <span className="block mt-2 text-base text-zinc-500">
              (Drone currently uses a MicoAir743 flight controller and ArduPilot firmware. More
              details to come as the project progresses!)
            </span>
          </p>
        </section>

      </main>
    </>
  );
}
