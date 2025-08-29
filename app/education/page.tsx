import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { getEducation } from "@/lib/sanity-queries"

export default async function EducationPage() {
  const education = await getEducation()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-medium text-foreground mb-4">Education</h1>
          <p className="text-base text-muted-foreground max-w-2xl">
            Academic qualifications and educational background in Computer Science and Engineering.
          </p>
        </div>

        <div className="space-y-6">
          {education && education.length > 0 ? (
            education.map((edu) => (
              <Card key={edu._id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-foreground">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">{edu.year}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                  {edu.percentage && <p className="text-sm text-foreground">Score: {edu.percentage}</p>}
                  {edu.description && <p className="text-sm text-muted-foreground mt-3">{edu.description}</p>}
                </CardContent>
              </Card>
            ))
          ) : (
            <>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-foreground">Ph.D. (Computer Science)</h3>
                    <span className="text-sm text-muted-foreground">2021</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Jawaharlal Nehru University, New Delhi</p>
                  <p className="text-sm text-foreground">Status: Qualified</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-foreground">M.Tech (Computer Science and Engineering)</h3>
                    <span className="text-sm text-muted-foreground">2016</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Jawaharlal Nehru University, New Delhi</p>
                  <p className="text-sm text-foreground">Score: 85%</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-foreground">B.Tech (Computer Science and Engineering)</h3>
                    <span className="text-sm text-muted-foreground">2013</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">GGSIPU, Delhi</p>
                  <p className="text-sm text-foreground">Score: 73%</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-foreground">A.I.S.S.C.E (Class XII)</h3>
                    <span className="text-sm text-muted-foreground">2009</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">CBSE</p>
                  <p className="text-sm text-foreground">Score: 88%</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-foreground">A.I.S.S.E (Class X)</h3>
                    <span className="text-sm text-muted-foreground">2007</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">CBSE</p>
                  <p className="text-sm text-foreground">Score: 87%</p>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-medium text-foreground mb-8">Professional Qualifications</h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-foreground">National Eligibility Test (NET)</h3>
                  <span className="text-sm text-muted-foreground">2018, 2019</span>
                </div>
                <p className="text-sm text-muted-foreground">UGC-NTA</p>
                <p className="text-sm text-foreground">Status: Qualified</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
