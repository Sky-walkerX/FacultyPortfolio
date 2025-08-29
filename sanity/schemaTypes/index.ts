import { type SchemaTypeDefinition } from 'sanity'
import { profile, education, project, experience, publication } from '../schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, education, project, experience, publication],
}
