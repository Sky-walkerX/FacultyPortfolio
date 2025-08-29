import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-serif text-lg font-semibold mb-4">Faculty Portfolio</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A comprehensive academic portfolio showcasing education, research projects, professional experience, and
              scholarly publications in computer science and related fields.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/education" className="text-muted-foreground hover:text-accent transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-muted-foreground hover:text-accent transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-muted-foreground hover:text-accent transition-colors">
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:faculty@university.edu"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  ResearchGate
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Google Scholar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Faculty Portfolio. Built with Next.js and Sanity CMS.
          </p>
        </div>
      </div>
    </footer>
  )
}
