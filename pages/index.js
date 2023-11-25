import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500','600', '700'],
  style: ['normal', 'italic'],
})

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${poppins.className}`}
    >
      <div className='flex flex-wrap w-[600px] mx-auto mt-40'>
        <h1 className='text-center text-9xl text font-bold content-center'>Em Breve</h1>
        <h3 className='text-center text-2xl font-medium mt-4'>Vamos celebrar o lançamento do nosso site em breve!</h3>
      </div>
    </main>
  )
}
