import SiteNav from "@/components/site-nav";
import Image from "next/image";
import HeroClient from "@/components/hero-client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HomeDots from "@/components/home-dots";
import ScrollTopOnLoad from "@/components/scroll-top-on-load";

const projects = [
  {
    name: "Fire-Mapping Drone",
    summary:
      "Both a quad drone for imaging testing, in tandem with development of a VTOL fixed-wing platform for extended wildfire monitoring.",
    image: "/images/fpv_initial.jpg",
    tags: ["Aerial Robotics", "Controls", "VTOL", "Design"],
    href: "/projects/fire-detecting-drone",
  },
  {
    name: "Junior Capstone Autonomous Baseball Retriever",
    summary:
      "Autonomous rover designed to retrieve baseballs from a field, using computer vision and PID control for navigation.",
    image: "/images/rover.png",
    tags: ["Controls", "SolidWorks", "Prototyping"],
    href: "/projects/autonomous-rover",
  },
  {
    name: "Osaka Research",
    summary:
      "Experimental research at Osaka University focused on rehabilitative running augmentation.",
    image: "/images/osaka-image.jpg",
    tags: ["Design", "MATLAB", "Prototyping"],
    href: "/projects/osaka-research",
  },
];

const workExperience = [
  {
    title: "Mechanical Engineer",
    company: "Dragon Q Energy",
    duration: "September 2024 - Present",
    summary:
      "Design and fabrication of lithium-ion battery housing (48p14s modules, 7.5 kWh MVPs). Lead bus-bar design, welding, and overall production. Automating assembly workflow to begin scaling production currently.",
    tags: ["Mechanical Design", "Energy Systems", "CAN-Bus", "Prototyping"],
    logo: "/images/DQE_logo.png",
  },
  {
    title: "Project Research Engineer",
    company: "Osaka University",
    duration: "Summer 2024",
    summary:
      "Experimental research in running augmentation techniques aimed at making human running more efficient. More information can be found above in Projects.",
    tags: ["Soft Mechanisms", "Research", "Prototyping"],
    logo: "/images/osaka-logo.png",
  },
];

export default function Home() {
  return (
    <>
      <SiteNav />
      <ScrollTopOnLoad />
      <main>
        {/* HERO */}
        <section id="hero">
          <HeroClient>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white/80 hero-animate delay-1">
                I like
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white hero-animate delay-2">
                building.
              </h1>
            </div>
            <div className="mt-10 flex gap-3">
              <a
                href="/pdfs/cv.pdf"
                className="text-white text-lg hover:text-white/90 transition-colors duration-200 hero-cta"
              >
                Download CV
              </a>
            </div>
          </HeroClient>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="min-h-screen flex items-center section-animate py-24"
        >
          <div className="grid md:grid-cols-2 gap-10 w-full">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                About
              </h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                I’m Will Bricca, and I appreciate building. It is, in my opinion, how we all learn best.
                At Dragon Q Energy, I’ve found that I thrive in fast-paced environments 
                where ideas move quickly from concept to deployment.
                Through both personal and academic projects, I’ve designed, built, 
                and tested FPV drones and autonomous rovers, constantly failing along the way.
                My experience also includes research at Osaka University in inverse 
                kinematics where I worked on running augmentation techniques. 
              </p>
              <div className="mt-6">
                <a
                  className="underline underline-offset-4"
                  href="mailto:briccawill@gmail.com"
                >
                  briccawill@gmail.com
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/will-portrait.jpg"
                alt="Will Bricca — Mechanical Engineer"
                width={1600}
                height={2000}
                priority
                className="rounded-2xl object-cover w-full h-full max-h-[70vh]"
              />
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="min-h-screen flex items-center section-animate py-24"
        >
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((p) => (
                <Card
                  key={p.name}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-zinc-200/60 bg-white/90 backdrop-blur-sm rounded-xl p-0"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {p.image && (
                      <div className="relative flex-shrink-0 w-full md:w-[280px] h-48 md:h-44 overflow-hidden rounded-t-xl md:rounded-t-none md:rounded-l-xl">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                    )}
                    <div className="flex-1 flex flex-col justify-center px-6 py-6 md:px-8 md:py-7">
                      <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-2 text-zinc-900">
                        {p.href ? (
                          <a
                            href={p.href}
                            className="hover:text-zinc-600 transition-colors duration-200"
                          >
                            {p.name}
                          </a>
                        ) : (
                          p.name
                        )}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {(p.tags ?? []).map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="text-xs px-2.5 py-0.5 bg-zinc-100 text-zinc-700 border-0 hover:bg-zinc-200 transition-colors"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                        {p.summary}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section
          id="experience"
          className="min-h-screen flex items-center section-animate py-24"
        >
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
              Work Experience 
            </h2>
            <div className="space-y-4">
              {workExperience.map((exp, idx) => (
                <Card
                  key={idx}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-zinc-200/60 bg-white/90 backdrop-blur-sm rounded-xl p-0"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    {exp.logo && (
                      <div className="relative flex-shrink-0 w-full md:w-[350px] h-56 md:h-52 overflow-hidden rounded-t-xl md:rounded-t-none md:rounded-l-xl bg-white flex items-center justify-center">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          fill
                          className="object-contain scale-100 group-hover:scale-102 transition-transform duration-700 ease-out"
                        />
                      </div>
                    )}
                    <div className="flex-1 flex flex-col justify-center px-6 py-6 md:px-8 md:py-7">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-zinc-900">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-zinc-500 mt-1 md:mt-0">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-base text-zinc-700 font-medium mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {exp.tags.map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="text-xs px-2.5 py-0.5 bg-zinc-100 text-zinc-700 border-0 hover:bg-zinc-200 transition-colors"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                        {exp.summary}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 section-animate">
          <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 text-zinc-600">
            Email:{" "}
            <a className="underline" href="mailto:briccawill@gmail.com">
              briccawill@gmail.com
            </a>
          </p>
        </section>

        <HomeDots />
      </main>
    </>
  );
}
