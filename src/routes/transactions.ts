import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionsRoutes(server: FastifyInstance) {
  server.get('/hello', async () => {
    const transactions = await knex('transaction')
      .where('amount', 1000)
      .select('*')

    return transactions
  })
}
