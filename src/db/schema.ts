import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
        name: 'notes',
        columns: [
          { name: 'note', type: 'string' },
          { name: 'description', type: 'string', isOptional: true },
          { name: 'created_at', type: 'number' },
        ]
      }),
  ]
})

