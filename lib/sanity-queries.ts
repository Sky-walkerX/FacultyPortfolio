import { client, isSanityConfigured } from "./sanity"

const fallbackProfile = {
  _id: "fallback",
  name: "Dr. Abhinesh Kaushik",
  title: "Assistant Professor & Deputy Registrar",
  bio: "I am an Assistant Professor and Deputy Registrar at Indian Institute of Information Technology, Lucknow, with expertise in Wireless Sensor Networks, Machine Learning, and Computer Science. I hold a Ph.D. from Jawaharlal Nehru University and have published extensively in peer-reviewed journals and conferences.",
  email: "abhinesh.kaushik@gmail.com",
  phone: "8587012012",
  office: "Indian Institute of Information Technology, Lucknow",
  officeHours: "Contact for appointment",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/abhinesh-kaushik-67a83647",
    },
    {
      platform: "Google Scholar",
      url: "https://scholar.google.com/citations?user=KqxVnuwAAAAJ&hl=en&oi=ao",
    },
    {
      platform: "ORCID",
      url: "https://orcid.org/0000-0002-7864-6202",
    },
  ],
}

const fallbackEducation = [
  {
    _id: "fallback-1",
    degree: "Ph.D. (Computer Science)",
    institution: "Jawaharlal Nehru University, New Delhi",
    year: "2021",
    description: "Qualified",
    order: 1,
  },
  {
    _id: "fallback-2",
    degree: "M.Tech (Computer Science and Engineering)",
    institution: "Jawaharlal Nehru University, New Delhi",
    year: "2016",
    description: "85%",
    order: 2,
  },
  {
    _id: "fallback-3",
    degree: "B.Tech (Computer Science and Engineering)",
    institution: "GGSIPU, Delhi",
    year: "2013",
    description: "73%",
    order: 3,
  },
  {
    _id: "fallback-4",
    degree: "A.I.S.S.C.E",
    institution: "CBSE",
    year: "2009",
    description: "88%",
    order: 4,
  },
  {
    _id: "fallback-5",
    degree: "A.I.S.S.E",
    institution: "CBSE",
    year: "2007",
    description: "87%",
    order: 5,
  },
]

const fallbackProjects = [
  {
    _id: "fallback-1",
    title: "AI Based Real Time Detection of Air Pollution and Prediction of Clean Air",
    description:
      "AI-based system for real-time detection of air pollution and prediction of clean air amidst crop residue burning in Uttar Pradesh (primarily Western Uttar Pradesh). Principal Investigator role.",
    technologies: ["AI", "Machine Learning", "Environmental Monitoring"],
    status: "in-progress",
    startDate: "2024-01-01",
    funding: "17.58 lakh",
    order: 1,
  },
  {
    _id: "fallback-2",
    title: "Phytoinspired Advanced Nanomaterials from Agro-Industrial Residues",
    description:
      "Development of phytoinspired advanced nanomaterials from agro-industrial residues for wastewater treatment. Co-Principal Investigator role.",
    technologies: ["Nanotechnology", "Environmental Engineering"],
    status: "in-progress",
    startDate: "2024-01-01",
    funding: "15.36 lakh",
    order: 2,
  },
  {
    _id: "fallback-3",
    title: "Automated Supporting Document Generation for GST Notices",
    description:
      "Automated system for supporting document generation for GST notices for Department of Commercial Taxes. Project Coordinator role.",
    technologies: ["Automation", "Document Processing", "GST"],
    status: "completed",
    startDate: "2023-01-01",
    endDate: "2024-01-01",
    funding: "19 lakh",
    order: 3,
  },
  {
    _id: "fallback-4",
    title: "|GURU| (MOD GURU) - Modern Classroom Quiz Application",
    description:
      "Android application that modernizes traditional teaching with technology. Works on peer-to-peer network with minimal Wi-Fi support. Won 1st prize at university project competition with cash reward of 10,000 rupees.",
    technologies: ["Android", "Java", "P2P Networking"],
    status: "completed",
    startDate: "2013-01-01",
    endDate: "2013-03-01",
    order: 4,
  },
]

const fallbackExperience = [
  {
    _id: "fallback-1",
    position: "Assistant Professor & Deputy Registrar",
    institution: "Indian Institute of Information Technology, Lucknow",
    startDate: "2021-12-24",
    current: true,
    description:
      "Assistant Professor in Department of Information Technology. Also serving as Deputy Registrar, Faculty In-charge (Training and Placements), Faculty In-charge (Student Activity), and Chairman Disciplinary Committee.",
    achievements: [
      "Deputy Registrar since September 2023",
      "Faculty In-charge Training and Placements since September 2023",
      "Faculty In-charge Student Activity since March 2022",
      "Chairman Disciplinary Committee since September 2022",
    ],
    location: "Lucknow, UP",
    order: 1,
  },
  {
    _id: "fallback-2",
    position: "Guest Faculty",
    institution: "Ramanujan College, University of Delhi",
    startDate: "2021-01-15",
    endDate: "2021-12-24",
    current: false,
    description:
      "Guest Faculty in Department of B.Voc (Software Development). Also served as Convener for Ramanujan Consultancy Club and CELECT Placement Cell.",
    achievements: [
      "Convener, Ramanujan Consultancy Club",
      "Convener, CELECT Placement Cell",
      "Member, Departmental NAAC Committee",
    ],
    location: "Delhi",
    order: 2,
  },
  {
    _id: "fallback-3",
    position: "Guest Faculty",
    institution: "Jesus and Mary College, University of Delhi",
    startDate: "2020-12-01",
    endDate: "2021-12-24",
    current: false,
    description: "Guest Faculty in Department of Computer Science.",
    location: "Delhi",
    order: 3,
  },
  {
    _id: "fallback-4",
    position: "Probationary Engineer",
    institution: "Bharat Electronics Limited (Ministry of Defence, CPSE)",
    startDate: "2015-04-15",
    endDate: "2015-06-16",
    current: false,
    description:
      "Worked as probationary engineer in Naval department of BEL Software Technology Center. Involved in development of indigenous tracker processor for submarines.",
    location: "Bengaluru, Karnataka",
    order: 4,
  },
]

const fallbackPublications = [
  {
    _id: "fallback-1",
    title: "Machine Learning Driven Centroid Localization Algorithm for Wireless Sensor Networks",
    journal: "Peer-To-Peer Networking and Applications",
    year: "2025",
    authors: ["Tanwar, K.", "Kaushik, A."],
    type: "journal",
    link: "https://doi.org/10.1007/s12083-025-02026-4",
    order: 1,
  },
  {
    _id: "fallback-2",
    title:
      "Improved 3D DV-Hop Algorithm Using scatteredness Between Beacon nodes for Calculation of the hopsize for Stochastic Wireless sensor Network",
    journal: "Physica Scripta",
    year: "2025",
    authors: ["Warade, A.", "Kaushik, A."],
    type: "journal",
    link: "https://doi.org/10.1088/1402%2d4896/Ade8b7",
    order: 2,
  },
  {
    _id: "fallback-3",
    title: "A Comparative Study and Survey of Chain-Based Routing Protocols in Wireless Sensor Networks",
    journal: "Journal of Supercomputing",
    year: "2025",
    authors: ["Verma, R.K.", "Jain, S.", "Kaushik, A."],
    type: "journal",
    link: "https://doi.org/10.1007/S11227-025-07412-6",
    order: 3,
  },
  {
    _id: "fallback-4",
    title: "Three-Dimensional DV-Hop Based on Improved Adaptive Differential Evolution Algorithm",
    journal: "Journal of Supercomputing",
    year: "2024",
    authors: ["Mani, V.", "Kaushik, A."],
    type: "journal",
    link: "https://doi.org/10.1007/S11227-024-06432-Y",
    order: 4,
  },
  {
    _id: "fallback-5",
    title: "Improved 3-Dimensional DV-Hop Localization Algorithm based on Information of Nearby Nodes",
    journal: "Wireless networks",
    year: "2021",
    authors: ["Kaushik, A.", "Lobiyal, D.K.", "Kumar, S."],
    type: "journal",
    link: "https://doi.org/10.1007/s11276-020-02533-7",
    order: 5,
  },
  {
    _id: "fallback-6",
    title: "Localization in Mobile Wireless Sensor Networks using Drones",
    journal: "Transactions on Emerging Telecommunication Technologies",
    year: "2021",
    authors: ["Kaushik A", "Lobiyal D.K."],
    type: "journal",
    link: "https://doi.org/10.1002/ett.4213",
    order: 6,
  },
  {
    _id: "fallback-7",
    title: "Enhanced Three-Dimensional DV-Hop Algorithm",
    journal:
      "ICT Systems and Sustainability. Advances in Intelligent Systems and Computing, vol 1270. Springer, Singapore",
    year: "2021",
    authors: ["Kaushik A.", "Lobiyal D.K."],
    type: "conference",
    link: "http://doi-org-443.webvpn.fjmu.edu.cn/10.1007/978-981-15-8289-9_25",
    order: 7,
  },
  {
    _id: "fallback-8",
    title: "Localization in Wireless Sensor Networks using a Mobile Anchor and Subordinate Node",
    journal: "Lecture Notes in Computer Networks, Springer",
    year: "2021",
    authors: ["Kaushik A", "Lobiyal D.K."],
    type: "conference",
    link: "http://doi-org/10.1007/978-981-33-6173-7_12",
    order: 8,
  },
]

export async function getProfile() {
  if (!isSanityConfigured()) {
    console.log("[v0] Sanity not configured, returning fallback profile data")
    return fallbackProfile
  }

  try {
    return await client!.fetch(`
      *[_type == "profile"][0] {
        _id,
        name,
        title,
        bio,
        image,
        email,
        phone,
        office,
        officeHours,
        cv,
        socialLinks
      }
    `)
  } catch (error) {
    console.error("[v0] Error fetching profile:", error)
    return fallbackProfile
  }
}

export async function getEducation() {
  if (!isSanityConfigured()) {
    console.log("[v0] Sanity not configured, returning fallback education data")
    return fallbackEducation
  }

  try {
    return await client!.fetch(`
      *[_type == "education"] | order(order asc, year desc) {
        _id,
        degree,
        institution,
        year,
        description,
        gpa,
        advisor,
        order
      }
    `)
  } catch (error) {
    console.error("[v0] Error fetching education:", error)
    return fallbackEducation
  }
}

export async function getProjects() {
  if (!isSanityConfigured()) {
    console.log("[v0] Sanity not configured, returning fallback projects data")
    return fallbackProjects
  }

  try {
    return await client!.fetch(`
      *[_type == "project"] | order(order asc, startDate desc) {
        _id,
        title,
        description,
        image,
        technologies,
        link,
        status,
        startDate,
        endDate,
        collaborators,
        funding,
        order
      }
    `)
  } catch (error) {
    console.error("[v0] Error fetching projects:", error)
    return fallbackProjects
  }
}

export async function getFeaturedProjects(limit = 3) {
  if (!isSanityConfigured()) {
    console.log("[v0] Sanity not configured, returning fallback featured projects")
    return fallbackProjects.slice(0, limit)
  }

  try {
    return await client!.fetch(`
      *[_type == "project"] | order(order asc, startDate desc) [0...${limit}] {
        _id,
        title,
        description,
        image,
        technologies,
        link,
        status,
        startDate,
        endDate
      }
    `)
  } catch (error) {
    console.error("[v0] Error fetching featured projects:", error)
    return fallbackProjects.slice(0, limit)
  }
}

export async function getExperience() {
  if (!isSanityConfigured()) {
    console.log("[v0] Sanity not configured, returning fallback experience data")
    return fallbackExperience
  }

  try {
    return await client!.fetch(`
      *[_type == "experience"] | order(order asc, startDate desc) {
        _id,
        position,
        institution,
        startDate,
        endDate,
        current,
        description,
        achievements,
        location,
        order
      }
    `)
  } catch (error) {
    console.error("[v0] Error fetching experience:", error)
    return fallbackExperience
  }
}

export async function getCurrentPosition() {
  if (!isSanityConfigured()) {
    console.log("[v0] Sanity not configured, returning fallback current position")
    return fallbackExperience[0]
  }

  try {
    return await client!.fetch(`
      *[_type == "experience" && current == true][0] {
        _id,
        position,
        institution,
        startDate,
        description,
        location
      }
    `)
  } catch (error) {
    console.error("[v0] Error fetching current position:", error)
    return fallbackExperience[0]
  }
}

export async function getPublications() {
  if (!isSanityConfigured()) {
    console.log("[v0] Sanity not configured, returning fallback publications data")
    return fallbackPublications
  }

  try {
    return await client!.fetch(`
      *[_type == "publication"] | order(order asc, year desc) {
        _id,
        title,
        journal,
        year,
        authors,
        link,
        abstract,
        type,
        citations,
        order
      }
    `)
  } catch (error) {
    console.error("[v0] Error fetching publications:", error)
    return fallbackPublications
  }
}

export async function getRecentPublications(limit = 5) {
  if (!isSanityConfigured()) {
    console.log("[v0] Sanity not configured, returning fallback recent publications")
    return fallbackPublications.slice(0, limit)
  }

  try {
    return await client!.fetch(`
      *[_type == "publication"] | order(year desc) [0...${limit}] {
        _id,
        title,
        journal,
        year,
        authors,
        link,
        type
      }
    `)
  } catch (error) {
    console.error("[v0] Error fetching recent publications:", error)
    return fallbackPublications.slice(0, limit)
  }
}

export async function getPublicationsByType(type: string) {
  if (!isSanityConfigured()) {
    console.log("[v0] Sanity not configured, returning fallback publications by type")
    return fallbackPublications.filter((pub) => pub.type === type)
  }

  try {
    return await client!.fetch(
      `
      *[_type == "publication" && type == $type] | order(year desc) {
        _id,
        title,
        journal,
        year,
        authors,
        link,
        abstract,
        citations
      }
    `,
      { type },
    )
  } catch (error) {
    console.error("[v0] Error fetching publications by type:", error)
    return fallbackPublications.filter((pub) => pub.type === type)
  }
}

export async function getPortfolioStats() {
  if (!isSanityConfigured()) {
    console.log("[v0] Sanity not configured, returning fallback stats")
    return {
      totalProjects: 4,
      totalPublications: 9,
      totalCitations: 0, // Not specified in resume
      yearsExperience: 10,
      currentProjects: 2,
    }
  }

  try {
    return await client!.fetch(`
      {
        "totalProjects": count(*[_type == "project"]),
        "totalPublications": count(*[_type == "publication"]),
        "totalCitations": sum(*[_type == "publication"].citations),
        "yearsExperience": count(*[_type == "experience"]),
        "currentProjects": count(*[_type == "project" && status == "in-progress"])
      }
    `)
  } catch (error) {
    console.error("[v0] Error fetching portfolio stats:", error)
    return {
      totalProjects: 4,
      totalPublications: 9,
      totalCitations: 0,
      yearsExperience: 10,
      currentProjects: 2,
    }
  }
}
