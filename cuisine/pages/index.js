import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>MyCuisine</title>
        <meta name="description" content="Cuisine, Cook, meal, recieps, ingredients, steps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <h1 className={styles.title}>Cuisine </h1>
      
    </div>
  )
}
