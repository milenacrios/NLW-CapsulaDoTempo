import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import cors from '@fastify/cors'
const app = fastify()
app.register(cors, {
  origin: true, // todas URLS de front-end poderão acessar este backend
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🎉 HTTP server running on http://localhost:3333')
  })
