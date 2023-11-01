import OtherHeader from "../components/OtherHeader"
import PartnershipText from "../components/PartnershipText"
import SectionTwo from "../components/SectionTwo"
import Head from "next/head"

const partnership = () => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Women Model & Mentors&apos; Foundation - Partnerships</title>
            </Head>
            <OtherHeader text={"Let's work together in building models and mentors for women."} size={'text-4xl'} />
            <SectionTwo mg={"mt-20"} text={"We fill the gap between innovators and those who can help them make a long-term impact."} size={"4xl"} underline={'underline decoration-Moody-blue underline-offset-[9px] leading-[50px]'} />
            <PartnershipText />
        </div>
    )
}

export default partnership