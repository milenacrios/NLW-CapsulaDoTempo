// fastify-jwt.d.ts
import '@fastify/jwt'

declare module '@fastify/jwt' {
  export interface FastifyJWT {
    payload: { id: number }
    user: {
      sub: string
      name: string
      avatarUrl: string
    }
  }
}
