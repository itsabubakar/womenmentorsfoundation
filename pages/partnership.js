import OtherHeader from "../components/OtherHeader"
import PartnershipText from "../components/PartnershipText"
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
            <OtherHeader text={"Let's work together in building models and mentors for women."} />
            <p className="text-left text-xl py-10 lg:text-center px-5 lg:px-0">We fill the gap between innovators and those who can help them make a long-term impact.</p>
            <PartnershipText />
        </div>
    )
}

export default partnership