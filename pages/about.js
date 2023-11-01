import React from 'react'
import Image from 'next/image'
import OtherHeader from '../components/OtherHeader'
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
            <OtherHeader bg={"about-bg"} text={"This is Women Mentors Foundation"} />
            <AboutText />
        </div>
    )
}

export default About