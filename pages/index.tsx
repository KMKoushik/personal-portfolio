import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rakesh</title>
        <meta name="description" content="Personal portfolio of Rakesh" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="mx-auto w-11/12 max-w-screen-xl lg:flex lg:justify-between">
        <div className="flex flex-col justify-between pt-12 lg:sticky lg:top-0 lg:h-screen lg:w-1/3 lg:pt-20 lg:pb-32">
          <div>
            <h1 className="text-5xl font-bold lg:text-6xl">Rakesh</h1>
            <h2 className="mt-2 text-xl font-semibold lg:text-2xl">Designer, Full-Stack Developer, and Entrepreneur</h2>
            <p className="mt-4 text-base text-white/70 lg:w-10/12 lg:text-lg">
              I am a part-time Indie Hacker trying to bootstrap a few products. I also work as a Senior Software
              Engineer during the remaining time!
            </p>
          </div>
          <div className="hidden leading-relaxed text-white/70 lg:block">
            If you&apos;d like to talk, just send an email at{' '}
            <Link href="mailto:hey@rakesh.one">
              <a className="border-white/90 py-1 font-medium text-white hover:border-b">hey@rakesh.one</a>
            </Link>
            {' or DM me on '}
            <Link href="https://twitter.com/Rakesh_UP_">
              <a className="border-white/90 py-1 font-medium text-white hover:border-b">Twitter</a>
            </Link>
          </div>
        </div>

        <div className="py-14 lg:w-1/2 lg:py-20">
          <h2 className="text-sm font-semibold uppercase text-white/60 lg:mb-5">Projects</h2>
          <Link href="https://joinspots.com/">
            <a className="mt-3 block rounded-sm bg-canvas/80 p-6 transition-all lg:p-10 lg:hover:scale-[103%]">
              <h1 className="text-xl font-semibold lg:text-3xl">Spots</h1>
              <p className="mt-2 text-white/70">
                Speed up your browser workflow with the most powerful keyboard driven command bar
              </p>
            </a>
          </Link>

          <Link href="https://interestcal.com/">
            <a className="mt-3 block rounded-sm bg-canvas/80 p-6 transition-all lg:p-10 lg:hover:scale-[103%]">
              <h1 className="text-xl font-semibold lg:text-3xl">InterestCal</h1>
              <p className="mt-2 text-white/70">Free, fast, and secure financial calculators</p>
            </a>
          </Link>

          <h2 className="mt-14 text-sm font-semibold uppercase text-white/60 lg:mb-5 lg:mt-20">Work</h2>
          <Link href="https://aragon.org/">
            <a className="mt-3 block rounded-sm bg-canvas/80 p-6 transition-all lg:p-10 lg:hover:scale-[103%]">
              <h1 className="text-xl font-semibold lg:text-3xl">Aragon</h1>
              <div className="mt-2 text-lg font-medium lg:text-xl">Senior Frontend Engineer</div>
              <p className="mt-2 text-white/70">Next generation DAO platform that is simple, modular, and adaptable</p>
              <div className="mt-6 text-xs font-medium uppercase text-white/60">November 2021 - Current</div>
            </a>
          </Link>

          <Link href="https://commonwealth.im/">
            <a className="mt-3 block rounded-sm bg-canvas/80 p-6 transition-all lg:p-10 lg:hover:scale-[103%]">
              <h1 className="text-xl font-semibold lg:text-3xl">Commonwealth Labs</h1>
              <div className="mt-2 text-lg font-medium lg:text-xl">Frontend Engineer</div>
              <p className="mt-2 text-white/70">
                Commonwealth is a Reddit like platform for on-chain decentralized communities
              </p>
              <div className="mt-6 text-xs font-medium uppercase text-white/60">May 2021 - November 2021</div>
            </a>
          </Link>

          <Link href="https://5ff40ba6532c8e0007d1db3f--wisgloo-site.netlify.app/">
            <a className="mt-3 block rounded-sm bg-canvas/80 p-6 transition-all lg:p-10 lg:hover:scale-[103%]">
              <h1 className="text-xl font-semibold lg:text-3xl">Wisgloo</h1>
              <div className="mt-2 text-lg font-medium lg:text-xl">Co-Founder</div>
              <p className="mt-2 text-white/70">Wisgloo is a platform for creators to build their online community</p>
              <div className="mt-6 text-xs font-medium uppercase text-white/60">October 2020 - April 2021</div>
            </a>
          </Link>

          <Link href="https://supertokens.com/">
            <a className="mt-3 block rounded-sm bg-canvas/80 p-6 transition-all lg:p-10 lg:hover:scale-[103%]">
              <h1 className="text-xl font-semibold lg:text-3xl">SuperTokens</h1>
              <div className="mt-2 text-lg font-medium lg:text-xl">Lead frontend developer</div>
              <p className="mt-2 text-white/70">SuperTokens is a YC startup building open source user auth solutions</p>
              <div className="mt-6 text-xs font-medium uppercase text-white/60">April 2020 - September 2020</div>
            </a>
          </Link>

          <Link href="https://www.manageengine.com/browser-security/">
            <a className="mt-3 block rounded-sm bg-canvas/80 p-6 transition-all lg:p-10 lg:hover:scale-[103%]">
              <h1 className="text-xl font-semibold lg:text-3xl">Zoho</h1>
              <div className="mt-2 text-lg font-medium lg:text-xl">Member Technical Staff</div>
              <p className="mt-2 text-white/70">
                Enterprise SaaS that helps IT administrators manage and secure browsers in their org
              </p>
              <div className="mt-6 text-xs font-medium uppercase text-white/60">May 2017 - October 2019</div>
            </a>
          </Link>
        </div>

        <div className="mb-20 leading-relaxed text-white/70 lg:hidden">
          If you&apos;d like to talk, just send an email at{' '}
          <Link href="mailto:hey@rakesh.one">
            <a className="border-white/90 py-1 font-medium text-white hover:border-b">hey@rakesh.one</a>
          </Link>
          {' or '}
          <Link href="https://twitter.com/Rakesh_UP_">
            <a className="border-white/90 py-1 font-medium text-white hover:border-b">DM me on Twitter</a>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Home
