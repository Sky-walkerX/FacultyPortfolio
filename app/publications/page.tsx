import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getPublications } from "@/lib/sanity-queries"
import { Footer } from "@/components/footer"

export default async function PublicationsPage() {
  const publications = await getPublications()

  const getPublicationTypeLabel = (type: string) => {
    const types = {
      journal: "Journal Article",
      conference: "Conference Paper",
      "book-chapter": "Book Chapter",
      book: "Book",
      preprint: "Preprint",
      other: "Other",
    }
    return types[type as keyof typeof types] || type
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHeader
        title="Publications"
        description="Research papers and articles contributing to the advancement of computer science and technology."
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="space-y-6">
          {publications && publications.length > 0 ? (
            publications.map((pub, index) => (
              <div
                key={pub._id}
                className="animate-in slide-in-from-right duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="hover:shadow-md transition-all duration-300 hover:border-accent/30">
                  <CardHeader>
                    <CardTitle className="font-serif text-lg">{pub.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <span>{pub.journal}</span>
                      <span>•</span>
                      <span>{pub.year}</span>
                      <span>•</span>
                      <span>{getPublicationTypeLabel(pub.type)}</span>
                      {pub.citations && (
                        <>
                          <span>•</span>
                          <span>{pub.citations} citations</span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">Authors: {pub.authors.join(", ")}</p>
                  </CardHeader>
                  <CardContent>
                    {pub.abstract && <p className="text-muted-foreground mb-4">{pub.abstract}</p>}
                    {pub.link && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={pub.link} target="_blank" rel="noopener noreferrer">
                          Read Paper
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-lg">Sample Publication</CardTitle>
                <p className="text-sm text-muted-foreground">Sample Journal • 2023</p>
                <p className="text-sm text-muted-foreground">Authors: Dr. Faculty Name</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Add your publications through the Sanity CMS to see them displayed here.
                </p>
                <Button variant="outline" size="sm">
                  Add Publications
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
