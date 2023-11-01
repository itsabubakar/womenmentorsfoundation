import Head from 'next/head'
import SectionOne from '../components/SectionOne'
import Hero from '../components/Hero'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'

import ImgOne from '../public/images/img5.jpg'
import ImgTwo from '../public/images/img21.jpg'
import ImgThree from '../public/images/img23.jpg'


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
        <SectionOne />
        <SectionTwo imgSrc={ImgOne} frr={true} title={"Our Vision"} text={"Our vision is to serve as a gateway to support women, enabling equal access to scarce resources and opportunities as they develop successful and sustainable careers and business."} />
        <SectionTwo imgSrc={ImgTwo} frr={false} title={"Our Mision"} text={"Our mission is to promote women and younger ones in Socio-economic phases, and providing opportunity to develop and become more competent in their roles as well as preparing them for growth opportunities in the future."} />
        <SectionTwo imgSrc={ImgThree} frr={true} title={'Who we are'} text={"Our foundation is non-governmental, non-partisan and equips women in the areas of entrepreneurship, coaching, skills acquisition, politics, education, marital counselling, capacity building and a host of other areas."} />

      </main>
    </div>
  )
}


