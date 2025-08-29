import { AnimatedCounter } from "./animated-counter"
import { Card, CardContent } from "@/components/ui/card"

interface StatsSectionProps {
  stats?: {
    totalProjects: number
    totalPublications: number
    totalCitations: number
    yearsExperience: number
  }
}

export function StatsSection({ stats }: StatsSectionProps) {
  const defaultStats = {
    totalProjects: 12,
    totalPublications: 25,
    totalCitations: 450,
    yearsExperience: 8,
  }

  const displayStats = stats || defaultStats

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
      <Card className="text-center hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-6">
          <AnimatedCounter end={displayStats.totalProjects} />
          <p className="text-sm text-muted-foreground mt-2">Projects</p>
        </CardContent>
      </Card>

      <Card className="text-center hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-6">
          <AnimatedCounter end={displayStats.totalPublications} />
          <p className="text-sm text-muted-foreground mt-2">Publications</p>
        </CardContent>
      </Card>

      <Card className="text-center hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-6">
          <AnimatedCounter end={displayStats.totalCitations} />
          <p className="text-sm text-muted-foreground mt-2">Citations</p>
        </CardContent>
      </Card>

      <Card className="text-center hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-6">
          <AnimatedCounter end={displayStats.yearsExperience} suffix="+" />
          <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
        </CardContent>
      </Card>
    </div>
  )
}
