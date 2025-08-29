import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { SectionCard } from "@/components/section-card"
import { getExperience } from "@/lib/sanity-queries"
import { Footer } from "@/components/footer"

export default async function ExperiencePage() {
  const experience = await getExperience()

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        title="Experience"
        description="Professional experience and roles that have contributed to my expertise in computer science and education."
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="space-y-6">
          {experience && experience.length > 0 ? (
            experience.map((exp, index) => (
              <div
                key={exp._id}
                className="animate-in slide-in-from-left duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SectionCard
                  title={exp.position}
                  subtitle={`${exp.institution} • ${formatDate(exp.startDate)} - ${
                    exp.current ? "Present" : exp.endDate ? formatDate(exp.endDate) : "Present"
                  }`}
                >
                  <div className="space-y-3">
                    <p className="text-muted-foreground">{exp.description}</p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                    {exp.location && <p className="text-sm text-muted-foreground">Location: {exp.location}</p>}
                  </div>
                </SectionCard>
              </div>
            ))
          ) : (
            <SectionCard title="Professor of Computer Science" subtitle="University Name • 2020 - Present">
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Add your experience through the Sanity CMS to see it displayed here.
                </p>
              </div>
            </SectionCard>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
