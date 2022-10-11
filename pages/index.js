import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Women Mentors' Foundation - Homepage</title>
      </Head>
      <main>
        <Hero />
      </main>
    </div>
  )
}


