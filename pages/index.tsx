import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import pny from "../components/pny.png"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <div>
      <Head>
        <title>
          PonyVil
        </title>
      </Head>
      <Header />



      <main className="text-center items-center">
        <h6 className="text-lg"> WELCOME TO PONY VIL</h6>
        <div className="flex">
          <Image className="animate-bounce" src={pny} alt={''} />
          <Image className="animate-spin" src={pny} alt={''} />
        </div>
      </main>
    </div>
  )
}
