import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'
import { env } from './env'

const server = fastify()

server.get('/hello', async () => {
  const transaction = await knex('transaction')
    .insert({
      id: crypto.randomUUID(),
      title: 'transação de teste',
      amount: 1000,
    })
    .returning('*')

  return transaction
})

server
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
