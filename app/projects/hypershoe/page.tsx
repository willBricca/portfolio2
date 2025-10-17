import SiteNav from "@/components/site-nav";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HypershoeProject() {
  return (
    <>
      <SiteNav />
      <main className="pb-24">
        <section className="pt-24 pb-8">
          <h1 className="text-4xl font-semibold tracking-tight mb-6">
            Hypershoe: Variable-Stiffness Pods
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>Soft Robotics</Badge>
            <Badge>FEA</Badge>
            <Badge>Python</Badge>
          </div>
        </section>
        <section className="mt-8 mb-12">
          <h2 className="text-xl font-semibold mb-3">Project Description</h2>
          <p className="text-lg text-zinc-600">
            &gt;80% energy return; drop-test rig; latex vs TPU. Explores soft robotics and material optimization for high-performance footwear. <br /><br />
            <span className="block mt-2 text-base text-zinc-500">
              (Add more details about your design, testing, results, or future work here.)
            </span>
          </p>
        </section>
        {/* Documentation */}
        <section className="mt-16 space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Documentation</h2>
          <div className="space-y-3">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Project Report</h3>
              </CardHeader>
              <CardContent>
                <a 
                  href="/pdfs/hypershoe-report.pdf" 
                  className="inline-flex items-center px-4 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-800"
                >
                  View Report
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}