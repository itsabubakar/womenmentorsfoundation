import React from 'react'
import Image from 'next/image'
import OtherHeader from '../components/OtherHeader'
import img from '../public/images/img-2.jpg'
import AboutText from '../components/AboutText'
import Newsletter from '../components/Newsletter'



const About = () => {
    return (
        <div>
            <OtherHeader bg={"about-bg"} src={img} text={"This is Women Mentors Foundation"} />
            <AboutText />
            <Newsletter />
        </div>
    )
}

export default About