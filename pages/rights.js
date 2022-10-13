import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import RightsConc from "../components/RightsConc"
import Head from "next/head"
import SectionTwo from "../components/SectionTwo"

const rights = () => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Women Model & Mentors&apos; Foundation - Rights</title>
            </Head>
            <Header
                title={"Womens' Right"}
                text={"Laws are being reformed to advance gender equality."} />
            <SectionTwo text={"Throughout history, women have been underrepresented in leadership roles. However, that's changing in present day Nigeria. Several organizations dedicated to empowering women have sprouted up over the past few decades. These organizations support education for women and promote gender equality in all walks of life. They also work to end gender-based violence and promote women in the political arena. Thanks to these organizations, Nigerian women are leading a revolution for equality."} title={"Women empowerment in Nigeria"} />
            <SectionTwo text={"One of the most prominent organizations is the Economic Consortium for West Africa (ECWA). Founded in 1966 by Nigerian businesswomen, it advocates for economic independence for African women. The organization conducts Women's Day events where African women talk about their issues and successes as businesswomen. These events help to unite African women and inspire them to achieve greater heights of success."} />
            <Newsletter />
        </div>
    )
}

export default rights