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
        <title>Women Mentors&apos; Foundation - Homepage</title>
      </Head>
      <main>
        <Hero />
        <SectionOne />
        <SectionTwo bg={'bg-fi'} title={'Women empowerment is necessary foundation for a peaceful, prosperous and sustainable world.'} text={"Women Mentors Foundation offers memberships, courses, media partnerships, and other services are available to organizations in a digital age. It's all about amplifying your experiences, increasing your abilities, and collaborating to allow female voices to lead for good change."} />
        <SectionThree />
        <SectionTwo text={"We fill the gap between innovators and those who can help them make a long-term impact."} size={"4xl"} underline={'underline decoration-Moody-blue underline-offset-[9px] leading-[50px]'} />
        <SectionTwo bg={'bg-t'} title={"What we are"} text={"Women Mentors Foundation is life changing. It's a free environment for your thoughts and a place to be heard. It is a place to be surrounded by strong, talented, clever women that are passionate about change and want to make a difference in the world. "} />
      </main>
    </div>
  )
}


