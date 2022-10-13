import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import WellnessConc from "../components/WellnessConc"
import Head from "next/head"
import SectionTwo from "../components/SectionTwo"
import SectionThree from "../components/SectionThree"

const rights = () => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Women Model & Mentors&apos; Foundation - Wellness</title>
            </Head>
            <Header
                title={"Wellness"}
                text={"The active quest for activities, choices, and lifestyles that lead to overall health."} />
            <SectionTwo text={"Women's Wellness is a term used to describe the myriad of ways in which women maintain their physical and emotional health. This encompasses everything from diet and exercise to stress management and mental health. Women have unique needs that must be addressed in a holistic way in order to maintain good health."} title={'Women wellness'} />
            <SectionTwo bg={'bg-fi'} text={"One of the most important aspects of women's wellness is staying hydrated. Too often, women don't drink enough water and end up feeling thirsty and tired. Not drinking enough water can lead to dehydration, which can cause fatigue, headaches, and an upset stomach. It's important to drink at least eight glasses of water a day, and to avoid drinking sweetened drinks."} />
            <SectionTwo text={"Another important part of women's wellness is getting enough protein. Protein is essential for the body to build and repair muscles, and it's also important for maintaining a healthy weight. Women need at least 56 grams of protein a day, and the best sources of protein are lean proteins, such as chicken and fish"} />
            <Newsletter />
        </div>
    )
}

export default rights