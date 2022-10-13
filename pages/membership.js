import MembershipText from "../components/MembershipText"
import Newsletter from "../components/Newsletter"
import OtherHeader from "../components/OtherHeader"
import SectionTwo from "../components/SectionTwo"
import Head from "next/head"

const membership = () => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Women Model & Mentors&apos; Foundation - Membership</title>
            </Head>
            <OtherHeader bg={'membership-bg'} text={"Our Membership Programs"} />
            <MembershipText />
            <SectionTwo bg={'bg-Sail'} title={"Eligibility"} text={"Women Mentors Foundation is a social enterprise with non-negotiable values. We’ve got high standards for the organizations that publish on our platform. At Women Mentors Foundation, we are hopeful about the change we can bring about in the world - and we believe that everyone has the ability to make a significant difference. That is why solidarity is central to our work. Our members recognize that they, too, must demonstrate solidarity in order to advance our joint effort for a sustainable society in which everyone is free."} />
            <SectionTwo mg={"-mb-20"} text={"Join us, a group of innovators and start making positive long term impacts."} size={"4xl"} underline={'underline decoration-Moody-blue underline-offset-[9px] leading-[50px]'} />
            <Newsletter />
        </div>
    )
}

export default membership