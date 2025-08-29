import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

if (!projectId) {
  console.warn("Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable")
}

export const client = projectId
  ? createClient({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: "2024-01-01",
    })
  : null

const builder = client ? imageUrlBuilder(client) : null

export function urlFor(source: any) {
  if (!builder) {
    console.warn("Sanity client not configured - returning placeholder image")
    return { url: () => "/placeholder.svg?height=400&width=400" }
  }
  return builder.image(source)
}

export function isSanityConfigured(): boolean {
  return !!client
}

// Types for our portfolio data
export interface Education {
  _id: string
  degree: string
  institution: string
  year: string
  description?: string
}

export interface Project {
  _id: string
  title: string
  description: string
  image?: any
  technologies: string[]
  link?: string
  year: string
}

export interface Experience {
  _id: string
  position: string
  institution: string
  startDate: string
  endDate?: string
  description: string
  current: boolean
}

export interface Publication {
  _id: string
  title: string
  journal: string
  year: string
  authors: string[]
  link?: string
  abstract?: string
}

export interface Profile {
  _id: string
  name: string
  title: string
  bio: string
  image?: any
  email: string
  phone?: string
  office?: string
  cv?: any
}
