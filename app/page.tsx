import Link from "next/link"
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Consulta de placas</h1>
      <p>
        <Link href="/plates">Placas</Link>
      </p>
    </main>
  )
}