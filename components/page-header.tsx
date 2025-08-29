interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-muted/50 py-12 mb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">{title}</h1>
        {description && <p className="text-lg text-muted-foreground max-w-3xl">{description}</p>}
      </div>
    </div>
  )
}
