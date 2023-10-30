import Head from 'next/head'
import SectionOne from '../components/SectionOne'
import Hero from '../components/Hero'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>Women Mentors & Models Foundation - Homepage</title>
      </Head>
      <main className=''>
        <Hero />
        <SectionTwo bg={'bg-fi'} title={'Who we are'} text={"Our foundation is non-governmental, non-partisan and equips women in the areas of entrepreneurship, coaching, skills acquisition, politics, education, marital counselling, capacity building and a host of other areas."} />
        <SectionTwo text={"WMM members are role models, mentors and other progressive women drawn from different sectors of the society"} size={"4xl"} underline={'underline decoration-Moody-blue underline-offset-[9px] leading-[50px]'} />
        <SectionTwo bg={'bg-t'} title={"Women empowerment is necessary foundation for a peaceful, prosperous and sustainable world."} text={"Women Models & Mentors Foundation offers memberships, courses, media partnerships, and other services are available to organizations in a digital age. It's all about amplifying your experiences, increasing your abilities, and collaborating to allow female voices to lead for good change."} />
        <SectionOne />
      </main>
    </div>
  )
}


