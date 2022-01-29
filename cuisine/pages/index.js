import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({joke}) {
  console.log(joke)
  return (
    <div >
      <Head>
        <title>MyCuisine</title>
        <meta name="description" content="Cuisine, Cook, meal, recieps, ingredients, steps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <h1 className={styles.title}>Cuisine </h1>
        <span className={styles.description}>
          
          <br></br>
          <h1>{joke.contents.jokes[0].joke.title}</h1>
          <h3>{joke.contents.jokes[0].joke.text}</h3>

          </span>
      
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://api.jokes.one/jod?category=animal')
  const data = await res.json()

  return {
    props: {
      joke: data
    }
  }
}
