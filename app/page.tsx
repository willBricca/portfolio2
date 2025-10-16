import SiteNav from "@/components/site-nav";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "Hypershoe: variable-stiffness pods",
    summary: ">80% energy return; drop-test rig; latex vs TPU.",
    image: "/images/hypershoe.jpg",
    tags: ["Soft Robotics", "FEA", "Python"],
    href: "/pdfs/hypershoe-report.pdf", // optional
  },
  {
    name: "Autonomous baseball rover",
    summary: "Centroiding + PID approach; surface-aware gains.",
    image: "/images/rover.jpg",
    tags: ["Controls", "OpenCV", "PID"],
    href: undefined,
  },
  {
  name: "Fire-detecting drone",
  summary: "Wildfire scouting drone; controls + perception prototype.",
  image: "/images/drone.jpg",
  tags: ["Aerial Robotics", "Controls"],
  href: "/pdfs/drone-brief.pdf"
  }

  // Add more here as needed:
  // { name: "Fire-detecting drone", summary: "Capstone concept…", image: "/images/drone.jpg", tags: ["Aerial", "Controls"], href: "/pdfs/drone-notes.pdf" },
];

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="pb-24">
        {/* HERO */}
        <section className="pt-24 pb-16">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Mechanical engineer building <span className="text-zinc-500">control-driven</span> systems that ship.
          </h1>
          <p className="mt-6 text-lg text-zinc-600 max-w-2xl">
            Robotics, soft mechanisms, vehicle dynamics. Python/MATLAB, CAD, controls.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/cv.pdf" className="underline underline-offset-4">Download CV</a>
            <a href="#projects" className="underline underline-offset-4">View projects</a>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-8">
          <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
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
        </section>


        {/* PUBLICATIONS */}
        <section id="publications" className="mt-20 space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Publications & Reports</h2>
          <ul className="list-disc pl-5 text-zinc-700">
            <li><a className="underline" href="/pdfs/hypershoe-report.pdf">Energy Return in Air-Bladder Pods (PDF)</a></li>
            <li><a className="underline" href="/pdfs/tokenization-thesis.pdf">Swiss Real-Estate Tokenization (PDF)</a></li>
          </ul>
        </section>

        {/* ABOUT + CONTACT */}
        <section id="about" className="mt-20 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">About</h2>
            <p className="mt-4 text-zinc-600">
              UCSB mechanical engineering. Controls, autonomy, soft systems. Build, test, iterate.
            </p>
          </div>
          <div id="contact">
            <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-4 text-zinc-600">
              Email: <a className="underline" href="mailto:dkauffmann@ucsb.edu">dkauffmann@ucsb.edu</a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
