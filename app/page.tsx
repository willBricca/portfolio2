import SiteNav from "@/components/site-nav";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
            <Card className="overflow-hidden">
              <CardHeader className="space-y-2">
                <h3 className="text-xl font-semibold">Hypershoe: variable-stiffness pods</h3>
                <div className="flex gap-2"><Badge>Soft Robotics</Badge><Badge>FEA</Badge><Badge>Python</Badge></div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-zinc-600">&gt;80% energy return; drop-test rig; latex vs TPU.</p>
                <Image src="/images/hypershoe.jpg" alt="Hypershoe" width={1200} height={800} className="rounded-xl"/>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="space-y-2">
                <h3 className="text-xl font-semibold">Autonomous baseball rover</h3>
                <div className="flex gap-2"><Badge>Controls</Badge><Badge>OpenCV</Badge><Badge>PID</Badge></div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-zinc-600">Centroiding + PID approach; surface-aware gains.</p>
                <Image src="/images/rover.jpg" alt="Rover" width={1200} height={800} className="rounded-xl"/>
              </CardContent>
            </Card>
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
