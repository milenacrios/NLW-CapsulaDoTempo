import { EmptyMemories } from '@/components/EmptyMemories'
import { api } from '@/lib/api'
import { cookies } from 'next/headers'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
dayjs.locale(ptBr)
//contrato
interface Memory {
  id: string
  coverUrl: string
  excerpt: string
  createAt: string
}
export default async function Home() {
  const isAuthenticated = cookies().has('token')
  //usuário não autenticado
  if (!isAuthenticated) {
    return <EmptyMemories />
  }
 //usuário autenticado, carregue as memórias
  const token = cookies().get('token')?.value
  const response  = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const memories: Memory[] = response.data
  //caso o usuário não tenha nenhuma memória
  if (memories.length === 0){
    return <EmptyMemories />
  }
  
  return (
    <div className='flex flex-col gap-10 p-8'>
      {memories.map((memory) => {
        return (
          <div key={memory.id} className='space-y-4'>
            <time className='-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50'>
              {dayjs(memory.createAt).format('D[ de ]MMMM[, ]YYYY')}
            </time>
            <Image src={memory.coverUrl} alt="" width={592} height={280} className='w-full aspect-video object-cover rounded-lg'/>
            <p className='text-lg leading-relaxed text-gray-100'>
              {memory.excerpt}
            </p>
            <Link href={`/memories/${memory.id}`} className='flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100'>
              Ler mais
              <ArrowRight className='w-4 h-4'/> 
            </Link>
          </div>
          
        )
      })}
    </div>
  )
}