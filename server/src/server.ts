import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
const app = fastify()
const prisma = new PrismaClient()
// definindo uma rota: quando acessar hello mostre todos os usuários
// HTTP method: GET
app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})
// criando uma api: ele precisa ouvir da porta 3333 e então, após executar a requisição
// mostrar o console log que criei
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🎉 HTTP server running on http://localhost:3333')
  })
