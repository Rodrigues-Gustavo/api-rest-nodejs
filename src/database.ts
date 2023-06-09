import knex from 'knex'

export const configKnex = knex({
  client: 'sqlite',
  connection: {
    filename: './tmp/server.db',
  },
})
