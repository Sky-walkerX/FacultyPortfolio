import { defineType, defineField } from "sanity"

export const profile = defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
      description: "Your full name as it should appear on the portfolio",
    }),
    defineField({
      name: "title",
      title: "Professional Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(200),
      description: "Your current position or professional title",
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      validation: (Rule) => Rule.required().min(50).max(1000),
      description: "A brief professional biography (50-1000 characters)",
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      description: "Professional headshot photo",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "email",
      validation: (Rule) => Rule.required().email(),
      description: "Professional email address",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.regex(/^[+]?[1-9][\d]{0,15}$/).warning("Please enter a valid phone number"),
      description: "Contact phone number (optional)",
    }),
    defineField({
      name: "office",
      title: "Office Location",
      type: "string",
      description: "Physical office location or address",
    }),
    defineField({
      name: "officeHours",
      title: "Office Hours",
      type: "string",
      description: "When students can visit during office hours",
    }),
    defineField({
      name: "cv",
      title: "CV/Resume",
      type: "file",
      options: {
        accept: ".pdf,.doc,.docx",
      },
      description: "Upload your CV or resume (PDF preferred)",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", title: "Platform", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
        },
      ],
      description: "Professional social media links (LinkedIn, ResearchGate, etc.)",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "image",
    },
  },
})

export const education = defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "degree",
      title: "Degree",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "e.g., Ph.D. in Computer Science, M.S. in Engineering",
    }),
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Name of the university or institution",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .regex(/^\d{4}$/)
          .error("Please enter a valid year (YYYY)"),
      description: "Graduation year (YYYY format)",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Additional details about your studies, thesis, honors, etc.",
    }),
    defineField({
      name: "gpa",
      title: "GPA",
      type: "string",
      description: "Grade Point Average (optional)",
    }),
    defineField({
      name: "advisor",
      title: "Advisor/Supervisor",
      type: "string",
      description: "Name of your thesis advisor or supervisor",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
      description: "Order in which this education should appear (0 = first)",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Year (Newest First)",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "degree",
      subtitle: "institution",
      description: "year",
    },
    prepare({ title, subtitle, description }) {
      return {
        title,
        subtitle: `${subtitle} • ${description}`,
      }
    },
  },
})

export const project = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(200),
      description: "Clear, descriptive title for your project",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().min(50).max(1000),
      description: "Detailed description of the project (50-1000 characters)",
    }),
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Screenshot, diagram, or representative image",
    }),
    defineField({
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      description: "Programming languages, frameworks, tools used",
    }),
    defineField({
      name: "link",
      title: "Project Link",
      type: "url",
      description: "Link to project repository, demo, or publication",
    }),
    defineField({
      name: "status",
      title: "Project Status",
      type: "string",
      options: {
        list: [
          { title: "In Progress", value: "in-progress" },
          { title: "Completed", value: "completed" },
          { title: "On Hold", value: "on-hold" },
        ],
      },
      initialValue: "completed",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      description: "Leave empty if project is ongoing",
    }),
    defineField({
      name: "collaborators",
      title: "Collaborators",
      type: "array",
      of: [{ type: "string" }],
      description: "Names of people you collaborated with",
    }),
    defineField({
      name: "funding",
      title: "Funding Source",
      type: "string",
      description: "Grant agency, company, or funding source",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
      description: "Order in which this project should appear",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Start Date (Newest First)",
      name: "startDateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "status",
      media: "image",
      startDate: "startDate",
    },
    prepare({ title, subtitle, media, startDate }) {
      return {
        title,
        subtitle: `${subtitle} • ${new Date(startDate).getFullYear()}`,
        media,
      }
    },
  },
})

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Job title or position name",
    }),
    defineField({
      name: "institution",
      title: "Institution",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Company, university, or organization name",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      description: "Leave empty if this is your current position",
    }),
    defineField({
      name: "current",
      title: "Current Position",
      type: "boolean",
      initialValue: false,
      description: "Check if this is your current position",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().min(50),
      description: "Detailed description of your role and responsibilities",
    }),
    defineField({
      name: "achievements",
      title: "Key Achievements",
      type: "array",
      of: [{ type: "string" }],
      description: "List of key achievements or accomplishments",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "City, State/Country",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
      description: "Order in which this experience should appear",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Start Date (Newest First)",
      name: "startDateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "position",
      subtitle: "institution",
      current: "current",
      startDate: "startDate",
    },
    prepare({ title, subtitle, current, startDate }) {
      const year = new Date(startDate).getFullYear()
      const status = current ? "Current" : year.toString()
      return {
        title,
        subtitle: `${subtitle} • ${status}`,
      }
    },
  },
})

export const publication = defineType({
  name: "publication",
  title: "Publications",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Publication Title",
      type: "string",
      validation: (Rule) => Rule.required().min(10),
      description: "Full title of the publication",
    }),
    defineField({
      name: "journal",
      title: "Journal/Conference",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Name of journal, conference, or publication venue",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .regex(/^\d{4}$/)
          .error("Please enter a valid year (YYYY)"),
      description: "Publication year (YYYY format)",
    }),
    defineField({
      name: "authors",
      title: "Authors",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
      description: "List of all authors in order",
    }),
    defineField({
      name: "link",
      title: "Publication Link",
      type: "url",
      description: "DOI, arXiv, or direct link to the publication",
    }),
    defineField({
      name: "abstract",
      title: "Abstract",
      type: "text",
      description: "Publication abstract or summary",
    }),
    defineField({
      name: "type",
      title: "Publication Type",
      type: "string",
      options: {
        list: [
          { title: "Journal Article", value: "journal" },
          { title: "Conference Paper", value: "conference" },
          { title: "Book Chapter", value: "book-chapter" },
          { title: "Book", value: "book" },
          { title: "Preprint", value: "preprint" },
          { title: "Other", value: "other" },
        ],
      },
      initialValue: "journal",
    }),
    defineField({
      name: "citations",
      title: "Citation Count",
      type: "number",
      description: "Number of citations (optional)",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
      description: "Order in which this publication should appear",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Year (Newest First)",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
    {
      title: "Citations (Highest First)",
      name: "citationsDesc",
      by: [{ field: "citations", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "journal",
      year: "year",
      type: "type",
    },
    prepare({ title, subtitle, year, type }) {
      return {
        title,
        subtitle: `${subtitle} • ${year} • ${type}`,
      }
    },
  },
})

export const schemaTypes = [profile, education, project, experience, publication]
