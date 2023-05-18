import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto'})
const baijamjuree = BaiJamjuree({subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree'})

export const metadata = {
  title: 'Capsula do Tempo',
  description: 'Uma capsula do tempo construída com React, Next.js, TailWindCSS e TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans text-gray-100 bg-gray-900`}>{children}</body>
    </html>
  )
}
