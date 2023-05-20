import { NextRequest, NextResponse } from "next/server";
const signInURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`
export function middleware(request: NextRequest){
  const token = request.cookies.get('token')?.value
  if (!token) {
    return NextResponse.redirect(signInURL, {
      //salvando a url original que o usuário queria acessar sem autenticação
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20;`,
      },
    })
  }
  return NextResponse.next()
}
export const config = {
  //em quais caminhos quero obrigar o acesso exclusivo a quem estiver logado
  matcher: '/memories/:path*',
}