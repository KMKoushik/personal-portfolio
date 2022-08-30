import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>KM Koushik</title>
        <meta name="description" content="Personal portfolio of Koushik KM" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="mx-auto w-11/12 max-w-screen-xl lg:flex lg:justify-between">
        <div className="flex flex-col justify-between pt-12 lg:sticky lg:top-0 lg:h-screen lg:w-1/3 lg:pt-20 lg:pb-32">
          <div>
            <h1 className="text-5xl font-bold lg:text-6xl">KM Koushik</h1>
            <h2 className="mt-2 text-xl font-semibold lg:text-2xl">Full-Stack Developer</h2>
            <p className="mt-4 text-base text-white/70 lg:w-10/12 lg:text-lg">
              Software developer at Opyn. I also work on projects that solves my problems
            </p>
          </div>
          <div className="hidden leading-relaxed text-white/70 lg:block">
            If you&apos;d like to talk, just send an email at{' '}
            <Link href="mailto:hey@koushik.dev">
              <a className="border-white/90 py-1 font-medium text-white hover:border-b">hey@koushik.dev</a>
            </Link>
            {' or DM me on '}
            <Link href="https://twitter.com/KM_Koushik_">
              <a className="border-white/90 py-1 font-medium text-white hover:border-b">Twitter</a>
            </Link>
          </div>
        </div>

        <div className="py-14 lg:w-1/2 lg:py-20">
          <h2 className="text-sm font-semibold uppercase text-white/60 lg:mb-5">Projects</h2>
          <Link href="https://www.squeethportal.xyz/">
            <a className="mt-3 block rounded-xl bg-canvas/80 p-6 transition-all lg:p-10 lg:hover:scale-[103%]">
              <h1 className="text-xl font-semibold lg:text-3xl">Squeeth Portal</h1>
              <p className="mt-2 text-white/70">An alternate UI to interact with squeeth contracts.</p>
            </a>
          </Link>

          <Link href="https://chrome.google.com/webstore/detail/big-n-convert-wei-to-ethe/poaklelpbnkhfeompcgdaabmhmhodepn">
            <a className="mt-3 block rounded-xl bg-canvas/80 p-6 transition-all lg:p-10 lg:hover:scale-[103%]">
              <h1 className="text-xl font-semibold lg:text-3xl">Big-N</h1>
              <p className="mt-2 text-white/70">
                An browser extension to quickly convert Big numbers (wei) to Ether and vice versa
              </p>
            </a>
          </Link>

          <h2 className="mt-14 text-sm font-semibold uppercase text-white/60 lg:mb-5 lg:mt-20">Work</h2>
          <Link href="https://www.opyn.co/">
            <a className="mt-3 block rounded-xl bg-canvas/80 p-6 transition-all lg:p-10 lg:hover:scale-[103%]">
              <h1 className="text-xl font-semibold lg:text-3xl">Opyn</h1>
              <div className="mt-2 text-lg font-medium lg:text-xl">Full-stack developer</div>
              <p className="mt-2 text-white/70">
                Opyn is building DeFi-native derivatives and options infrastructure in DeFi
              </p>
              <div className="mt-6 text-xs font-medium uppercase text-white/60">Mar 2021 - Current</div>
            </a>
          </Link>

          <Link href="https://testomat.io/">
            <a className="mt-3 block rounded-xl bg-canvas/80 p-6 transition-all lg:p-10 lg:hover:scale-[103%]">
              <h1 className="text-xl font-semibold lg:text-3xl">Testomat.io</h1>
              <div className="mt-2 text-lg font-medium lg:text-xl">Software developer</div>
              <p className="mt-2 text-white/70">Test management system for automated tests</p>
              <div className="mt-6 text-xs font-medium uppercase text-white/60">Feb 2020 - Mar 2021</div>
            </a>
          </Link>

          <Link href="https://5ff40ba6532c8e0007d1db3f--wisgloo-site.netlify.app/">
            <a className="mt-3 block rounded-xl bg-canvas/80 p-6 transition-all lg:p-10 lg:hover:scale-[103%]">
              <h1 className="text-xl font-semibold lg:text-3xl">Wisgloo</h1>
              <div className="mt-2 text-lg font-medium lg:text-xl">Co-Founder</div>
              <p className="mt-2 text-white/70">Wisgloo is a platform for creators to build their online community</p>
              <div className="mt-6 text-xs font-medium uppercase text-white/60">Oct 2020 - Mar 2021</div>
            </a>
          </Link>

          <Link href="https://www.manageengine.com/mobile-device-management/">
            <a className="mt-3 block rounded-xl bg-canvas/80 p-6 transition-all lg:p-10 lg:hover:scale-[103%]">
              <h1 className="text-xl font-semibold lg:text-3xl">Zoho</h1>
              <div className="mt-2 text-lg font-medium lg:text-xl">Member Technical Staff</div>
              <p className="mt-2 text-white/70">Manage and secure devices, apps and data from a unified console.</p>
              <div className="mt-6 text-xs font-medium uppercase text-white/60">May 2017 - Oct 2019</div>
            </a>
          </Link>
        </div>

        <div className="mb-20 leading-relaxed text-white/70 lg:hidden">
          If you&apos;d like to talk, just send an email at{' '}
          <Link href="mailto:hey@koushik.dev">
            <a className="border-white/90 py-1 font-medium text-white hover:border-b">hey@koushik.dev</a>
          </Link>
          {' or DM me on '}
          <Link href="https://twitter.com/KM_Koushik_">
            <a className="border-white/90 py-1 font-medium text-white hover:border-b">Twitter</a>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Home
