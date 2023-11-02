import MembershipText from "../components/MembershipText"
import OtherHeader from "../components/OtherHeader"
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
            <OtherHeader text={"Membership Programmes"} />
            <MembershipText />


        </div>
    )
}

export default membership