import React from 'react'
import Image from 'next/image'
import OtherHeader from '../components/OtherHeader'
import img from '../public/images/img-2.jpg'
import AboutText from '../components/AboutText'
import Newsletter from '../components/Newsletter'
import Head from 'next/head'



const About = () => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Women Models & Mentors&apos; Foundation - About us</title>
            </Head>
            <OtherHeader bg={"about-bg"} src={img} text={"This is Women Mentors Foundation"} />
            <AboutText />
            <Newsletter />
        </div>
    )
}

export default About