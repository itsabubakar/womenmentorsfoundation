import Events from "../components/Events"
import OtherHeader from "../components/OtherHeader"
import Head from "next/head"

const events = () => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Women Model & Mentors&apos; Foundation - Upcoming Events</title>
            </Head>
            <OtherHeader text={"Upcoming Events"} bg={'event-bg'} />
            <Events />
            <Events />
            <Events />
            <Events />
        </div>
    )
}

export default events