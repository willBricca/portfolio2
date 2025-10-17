import SiteNav from "@/components/site-nav";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "Fire-detecting Drone",
    summary: "Wildfire scouting drone; controls + perception prototype.",
    image: "/images/drone.jpg",
    tags: ["Aerial Robotics", "Controls"],
    href: "/projects/fire-detecting-drone",
  },
  {
    name: "Project Worlds Fastest Running Shoe",
    summary: "Air bladder pods replacing conventional foam; drop-testing; rapid-prototyping.",
    image: "/images/hypershoe.jpg",
    tags: ["Soft Robotics", "FEA", "Python"],
    href: "/projects/hypershoe",
  },
  {
    name: "Autonomous Baseball Rover",
    summary: "Centroiding + PID approach; surface-aware gains.",
    image: "/images/rover.png",
    tags: ["Controls", "OpenCV", "PID"],
    href: "/projects/autonomous-rover",
  },
  // Add more as needed...
];

export default function Home() {
  return (
    <>
      <SiteNav />
  <main>
        {/* ========== HERO (kept) ========== */}
  <section className="min-h-screen flex items-center pb-24 pt-24 section-animate">
          <div className="w-full">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
              Mechanical engineer building{" "}
              <span className="text-zinc-500">control-driven</span> systems that ship.
            </h1>
            <p className="mt-6 text-lg text-zinc-600 max-w-2xl">
              Robotics, soft mechanisms, vehicle dynamics. Python/MATLAB, CAD, controls.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/cv.pdf" className="underline underline-offset-4">Download CV</a>
            </div>
          </div>
        </section>

        {/* ========== ABOUT (text left, image right) ========== */}
  <section id="about" className="min-h-screen flex items-center section-animate">
          <div className="grid md:grid-cols-2 gap-10 w-full">
            {/* Text */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About</h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                I’m Dylan, a UCSB mechanical engineer focused on controls,
                autonomy, and soft systems. I like turning models into motion—fast:
                derive, simulate, build, test, iterate. Recent work includes a
                wildfire-mapping drone (controls + perception), high-return
                variable-stiffness shoe pods (rigorous drop-test instrumentation),
                and an autonomous rover (vision centroiding with surface-aware PID).
                I care about clean interfaces, robust controllers, and shipping
                hardware that actually works in the field.
              </p>
              <p className="mt-4 text-zinc-600">
                Tooling I live in: Python/MATLAB for control + data, CAD/FEA for
                structure, OpenCV for perception, and plenty of bench-top fixtures
                to make the numbers honest.
              </p>
              <div className="mt-6">
                <a className="underline underline-offset-4" href="mailto:dkauffmann@ucsb.edu">
                  dkauffmann@ucsb.edu
                </a>
              </div>
            </div>
            {/* Image */}
            <div className="relative">
              <Image
                src="/images/dylan-portrait.jpg" // supply this asset
                alt="Dylan — mechanical engineer"
                width={1600}
                height={2000}
                priority
                className="rounded-2xl object-cover w-full h-full max-h-[70vh]"
              />
            </div>
          </div>
        </section>

        {/* ========== PROJECTS (full swipe down) ========== */}
  <section id="projects" className="min-h-screen flex items-center section-animate">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Projects</h2>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <Card key={p.name} className="overflow-hidden hover:shadow-sm transition-shadow">
                  <CardHeader className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      {p.href ? (
                        <a href={p.href} className="underline hover:no-underline">{p.name}</a>
                      ) : (
                        p.name
                      )}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {(p.tags ?? []).map((t) => <Badge key={t}>{t}</Badge>)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-zinc-600">{p.summary}</p>
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={1200}
                        height={800}
                        className="rounded-xl aspect-[3/2] object-cover"
                      />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ========== PUBLICATIONS (optional extra section) ========== */}
  <section id="publications" className="min-h-screen flex items-center section-animate">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Publications & Reports</h2>
            <ul className="mt-4 list-disc pl-5 text-zinc-700 space-y-2">
              <li><a className="underline" href="/pdfs/hypershoe-report.pdf">Energy Return in Air-Bladder Pods (PDF)</a></li>
              <li><a className="underline" href="/pdfs/tokenization-thesis.pdf">Swiss Real-Estate Tokenization (PDF)</a></li>
            </ul>
          </div>
        </section>

        {/* ========== CONTACT (footer-style) ========== */}
  <section id="contact" className="py-20 section-animate">
          <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 text-zinc-600">
            Email: <a className="underline" href="mailto:dkauffmann@ucsb.edu">dkauffmann@ucsb.edu</a>
          </p>
        </section>
      </main>
    </>
  );
}
