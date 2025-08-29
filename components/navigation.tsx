"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "About", href: "/" },
  { name: "Education", href: "/education" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Publications", href: "/publications" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b border-border/20 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors duration-200 tracking-tight"
          >
            Dr. Abhinesh Kaushik
          </Link>

          <div className="flex items-center space-x-10">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200 relative py-2 px-1",
                  pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute -bottom-5 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
