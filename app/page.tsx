import SiteNav from "@/components/site-nav";
import Image from "next/image";
import HeroClient from "@/components/hero-client";
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
    name: "World's Fastest Running Shoe",
    summary: "Air bladder pods replacing conventional foam; drop-testing; rapid-prototyping.",
  image: "/images/UCSB.jpg",
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
        <HeroClient>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white/80 hero-animate delay-1">
                I like to
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white hero-animate delay-2">
                build.
              </h1>
            </div>
            <div className="mt-10 flex gap-3">
              <a href="/cv.pdf" className="text-white text-lg hover:text-white/90 transition-colors duration-200 hero-cta">Download CV</a>
            </div>
  </HeroClient>

        {/* ========== ABOUT (text left, image right) ========== */}
  <section id="about" className="min-h-screen flex items-center section-animate py-24">
          <div className="grid md:grid-cols-2 gap-10 w-full">
            {/* Text */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About</h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                I’m Dylan, a UCSB mechanical engineer who’s endlessly curious about how things 
                work and finding solutions. I like being out in the world, facing real forces, seeing 
                how theory holds up in the element. What drives me is the thrill of figuring 
                something out for the first time and knowing I earned that understanding. 
              </p>
              <p className="mt-4 text-zinc-600">
                Tooling I live in: Python/MATLAB for control + data, CAD/FEA for
                structure, OpenCV for perception, and plenty of bench-top fixtures
                to make the numbers honest.
              </p>
              <div className="mt-6">
                <a href="/about" className="inline-flex items-center px-3 py-1.5 rounded-md bg-zinc-900 text-white hover:bg-zinc-800">
                  Learn more
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
  <section id="projects" className="min-h-screen flex items-center section-animate py-24">
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
  <section id="publications" className="min-h-screen flex items-center section-animate py-24">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Publications & Reports</h2>
            <ul className="mt-4 list-disc pl-5 text-zinc-700 space-y-2">
              <li><a className="underline" href="#"> Upcoming Paper: Hypershoe</a></li>
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
