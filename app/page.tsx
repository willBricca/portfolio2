import SiteNav from "@/components/site-nav";
import Image from "next/image";
import HeroClient from "@/components/hero-client";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HomeDots from "@/components/home-dots";
import ScrollTopOnLoad from "@/components/scroll-top-on-load";

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

const workExperience = [
  {
    title: "Undergraduate Research Assistant",
    company: "Hawks Lab, UCSB",
    duration: "Present",
    summary: "Conducting research in the Hawks Lab at UC Santa Barbara.",
    tags: ["Research", "Engineering", "Analysis"],
    logo: "/images/UCSBLogo.png",
  },
  {
    title: "Process Engineer Intern",
    company: "URtech",
    duration: "June 2024 - Sep. 2024",
    summary: "Process engineering and optimization in Ft. Lauderdale, FL.",
    tags: ["Process Engineering", "Manufacturing", "Optimization"],
    logo: "/images/URtechLogo.jpeg",
  },
  {
    title: "Financial Analyst Intern",
    company: "Blue Opal Capital",
    duration: "Dec. 2023 - Mar. 2024",
    summary: "Financial analysis and research in Santa Barbara, CA.",
    tags: ["Financial Analysis", "Research", "Data Analysis"],
    logo: "/images/BlueOpalLogo.jpeg",
  },
];

export default function Home() {
  return (
    <>
      <SiteNav />
    <ScrollTopOnLoad />
  <main>
        {/* ========== HERO (kept) ========== */}
    <section id="hero">
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
    </section>

        {/* ========== ABOUT (text left, image right) ========== */}
  <section id="about" className="min-h-screen flex items-center section-animate py-24">
          <div className="grid md:grid-cols-2 gap-10 w-full">
            {/* Text */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About</h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                I’m Dylan, a mechanical engineer interested in systems that think and move; 
                where mechanics, control, and computation come together. I’m drawn to problems 
                that require both precision and creativity, the kind that force you to understand 
                how things behave and why.

              </p>
              <p className="mt-4 text-zinc-600">
                Looking ahead, I’m excited by how engineering is evolving — intelligent machines, 
                adaptive systems, and the seamless integration of technology into everyday life. 
                I want to help shape how these systems connect with the world around us.
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

        {/* ========== PROJECTS (full-width horizontal cards stacked vertically) ========== */}
  <section id="projects" className="min-h-screen flex items-center section-animate py-24">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Projects</h2>
                        <div className="space-y-4">
              {projects.map((p) => (
                <Card key={p.name} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-zinc-200/60 bg-white/90 backdrop-blur-sm rounded-xl p-0">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image on the left, perfectly aligned with card borders */}
                    {p.image && (
                      <div className="relative flex-shrink-0 w-full md:w-[280px] h-48 md:h-44 overflow-hidden rounded-t-xl md:rounded-t-none md:rounded-l-xl">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>
                    )}
                    {/* Content with Apple-like spacing and typography */}
                    <div className="flex-1 flex flex-col justify-center px-6 py-6 md:px-8 md:py-7">
                      <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-2 text-zinc-900">
                        {p.href ? (
                          <a href={p.href} className="hover:text-zinc-600 transition-colors duration-200">{p.name}</a>
                        ) : (
                          p.name
                        )}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {(p.tags ?? []).map((t) => (
                          <Badge key={t} variant="secondary" className="text-xs px-2.5 py-0.5 bg-zinc-100 text-zinc-700 border-0 hover:bg-zinc-200 transition-colors">
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-zinc-600 text-sm md:text-base leading-relaxed">{p.summary}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ========== WORK EXPERIENCE (same style as projects) ========== */}
        <section id="experience" className="min-h-screen flex items-center section-animate py-24">
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Work Experience</h2>
            <div className="space-y-4">
              {workExperience.map((exp, idx) => (
                <Card key={idx} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-zinc-200/60 bg-white/90 backdrop-blur-sm rounded-xl p-0">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Company logo on the left, same style as projects */}
                    {exp.logo && (
                      <div className="relative flex-shrink-0 w-full md:w-[280px] h-48 md:h-44 overflow-hidden rounded-t-xl md:rounded-t-none md:rounded-l-xl bg-white flex items-center justify-center">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          fill
                          className="object-contain p-8 group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                      </div>
                    )}
                    {/* Content with Apple-like spacing and typography */}
                    <div className="flex-1 flex flex-col justify-center px-6 py-6 md:px-8 md:py-7">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-zinc-900">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-zinc-500 mt-1 md:mt-0">{exp.duration}</span>
                      </div>
                      <p className="text-base text-zinc-700 font-medium mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {exp.tags.map((t) => (
                          <Badge key={t} variant="secondary" className="text-xs px-2.5 py-0.5 bg-zinc-100 text-zinc-700 border-0 hover:bg-zinc-200 transition-colors">
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-zinc-600 text-sm md:text-base leading-relaxed">{exp.summary}</p>
                    </div>
                  </div>
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
      <HomeDots />
      </main>
    </>
  );
}
