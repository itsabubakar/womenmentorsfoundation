import Newsletter from "../components/Newsletter"
import OtherHeader from "../components/OtherHeader"
import PartnershipText from "../components/PartnershipText"
import SectionTwo from "../components/SectionTwo"

const partnership = () => {
    return (
        <div>
            <OtherHeader text={"Let's work together in building models and mentors for women."} size={'text-4xl'} bg={"partnership-bg"} />
            <SectionTwo text={"We fill the gap between innovators and those who can help them make a long-term impact."} size={"4xl"} underline={'underline decoration-Moody-blue underline-offset-[9px] leading-[50px]'} />
            <PartnershipText />
            <Newsletter />
        </div>
    )
}

export default partnership