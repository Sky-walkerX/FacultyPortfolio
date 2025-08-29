import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { getProjects } from "@/lib/sanity-queries"
import { urlFor } from "@/lib/sanity"

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        title="Projects"
        description="Research projects and initiatives that demonstrate innovation and academic excellence."
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {projects && projects.length > 0 ? (
            projects.map((project, index) => (
              <div
                key={project._id}
                className="animate-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full">
                  {project.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={urlFor(project.image).width(400).height(192).url() || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-serif group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{new Date(project.startDate).getFullYear()}</span>
                      {project.endDate && <span>- {new Date(project.endDate).getFullYear()}</span>}
                      {project.status === "in-progress" && (
                        <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">In Progress</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.collaborators && project.collaborators.length > 0 && (
                      <p className="text-sm text-muted-foreground mb-4">
                        Collaborators: {project.collaborators.join(", ")}
                      </p>
                    )}
                    {project.funding && (
                      <p className="text-sm text-muted-foreground mb-4">Funding: {project.funding}</p>
                    )}
                    {project.link && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))
          ) : (
            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=192&width=400"
                  alt="Sample Project"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif">Sample Project</CardTitle>
                <p className="text-sm text-muted-foreground">2023 - Present</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Add your projects through the Sanity CMS to see them displayed here.
                </p>
                <Button variant="outline" size="sm">
                  Add Projects
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
