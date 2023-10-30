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
                text={"Women Models & Mentors Foundation (WMM) is on an active quest for activities, choices, and lifestyles that lead to overall health for girls and women."} />
            <SectionTwo text={"WMM is chiefly concerned with wellness of women, the pioneer president(Hajiya Bilkisu Abba Ibrahim) has initiated several partnerships initiatives and collaborations that encourage and promote awareness in women wellness.The most recent partnership on 14th october, 2022 WMM signed a 3 year partnership program with halal wellness to help WMM members rejuvenate their overall well being for improved mind, body and soul. WMM members have commenced registration and participation with remarkable results already witnessed."} title={'Women wellness'} />

        </div>
    )
}

export default rights