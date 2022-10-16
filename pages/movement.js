import Newsletter from "../components/Newsletter"
import OtherHeader from "../components/OtherHeader"
import Head from "next/head"

const movement = () => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Women Model & Mentors&apos; Foundation - Join The Movement</title>
            </Head>
            <OtherHeader text={"Together we will create ripples of change"} size={"text-4xl md:text-7xl"} bg={'membership-bg'} />
            <section className="text-2xl flex justify-center mt-28">
                <div className="max-w-3xl mx-5 md:mx-0 text-center sm:text-left">
                    <p className="mb-4">At Women Models and Mentors (WMM), we provide equitable opportunities for women and girls to study, grow, and interact with others, towards reaching their full economic potential.</p>
                    <p className="mb-4">Every opinion is valuable and every idea counts.</p>
                    <p>WMM believes that we can help build a better future for everybody by working together.</p>
                </div>
            </section>
            <Newsletter />
        </div>
    )
}

export default movement