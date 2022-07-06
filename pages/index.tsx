import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rakesh</title>
        <meta name="description" content="Personal portfolio of Rakesh" />
      </Head>

      <main>
        <h1 className="text-blue-600">Rakesh</h1>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
