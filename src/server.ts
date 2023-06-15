import fastify from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'

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
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
