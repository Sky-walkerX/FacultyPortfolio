import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-6xl mx-auto px-8 py-20">
        <div className="mb-24">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              Dr. Abhinesh Kaushik
            </h1>
            <div className="space-y-2 mb-8">
              <p className="text-2xl text-primary font-medium">Assistant Professor</p>
              <p className="text-xl text-muted-foreground">Indian Institute of Information Technology, Lucknow</p>
              <p className="text-lg text-muted-foreground">
                Deputy Registrar • Faculty In-Charge (Training & Placements)
              </p>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-lg text-foreground/90 leading-relaxed max-w-4xl font-light">
              Deputy Registrar and Faculty In-Charge of Training & Placements at IIIT Lucknow. Research expertise in
              Wireless Sensor Networks, Machine Learning, and Localization Algorithms. Leading multiple funded research
              projects and supervising doctoral and master's students in cutting-edge technology research.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-base">
            <div className="space-y-1">
              <span className="text-muted-foreground font-medium">Email</span>
              <div>
                <a href="mailto:abhinesh@iiitl.ac.in" className="text-primary hover:text-primary/80 transition-colors">
                  abhinesh@iiitl.ac.in
                </a>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-muted-foreground font-medium">Phone</span>
              <div className="text-foreground">+91 8587012012</div>
            </div>
            <div className="space-y-1">
              <span className="text-muted-foreground font-medium">ORCID</span>
              <div>
                <a
                  href="https://orcid.org/0000-0002-7864-6202"
                  className="text-primary hover:text-primary/80 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  0000-0002-7864-6202
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            {
              title: "Education",
              description: "Ph.D. Computer Science, JNU\nM.Tech CSE, B.Tech CSE",
              href: "/education",
              highlight: "Ph.D. Qualified",
            },
            {
              title: "Projects",
              description: "AI-based Air Pollution Detection\n₹17.58 lakh funding",
              href: "/projects",
              highlight: "3 Active Projects",
            },
            {
              title: "Experience",
              description: "Deputy Registrar, IIIT Lucknow\nMultiple Administrative Roles",
              href: "/experience",
              highlight: "3+ Years",
            },
            {
              title: "Publications",
              description: "Wireless Sensor Networks\nMachine Learning Research",
              href: "/publications",
              highlight: "9+ Papers",
            },
          ].map((item) => (
            <Card
              key={item.title}
              className="group hover:bg-card/60 transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-8">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="p-0 h-auto text-primary hover:text-primary/80 font-medium"
                >
                  <Link href={item.href}>Explore →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Current Research & Projects</h2>
          <div className="space-y-8">
            <Card className="border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    AI Based Real Time Detection of Air Pollution
                  </h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Principal Investigator
                  </span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm text-muted-foreground">
                  <div>CSTUP, Uttar Pradesh</div>
                  <div>₹17.58 lakh funding</div>
                  <div>2024-2027</div>
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Leading research on AI-based real-time detection and prediction of clean air amidst crop residue
                  burning in Western Uttar Pradesh, focusing on environmental monitoring and pollution control.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Machine Learning Driven Centroid Localization
                  </h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Published 2025
                  </span>
                </div>
                <div className="mb-4 text-sm text-muted-foreground">
                  Peer-to-Peer Networking and Applications Journal
                </div>
                <p className="text-foreground/90 leading-relaxed">
                  Published research on machine learning approaches for wireless sensor network localization algorithms,
                  advancing the field of distributed computing and network optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-12 text-foreground">Leadership & Administrative Roles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Current Role
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Deputy Registrar</h3>
                <p className="text-sm text-muted-foreground mb-4">IIIT Lucknow • September 2023 - Present</p>
                <p className="text-foreground/90 leading-relaxed">
                  Overseeing academic administration and institutional operations at the national institute level,
                  managing strategic initiatives and policy implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Current Role
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Faculty In-Charge, Training & Placements</h3>
                <p className="text-sm text-muted-foreground mb-4">IIIT Lucknow • September 2023 - Present</p>
                <p className="text-foreground/90 leading-relaxed">
                  Leading placement activities and industry partnerships for student career development, establishing
                  connections with top-tier companies and organizations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
