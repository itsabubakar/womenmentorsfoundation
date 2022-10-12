import MembershipText from "../components/MembershipText"
import Newsletter from "../components/Newsletter"
import OtherHeader from "../components/OtherHeader"
import SectionTwo from "../components/SectionTwo"

const membership = () => {
    return (
        <div>
            <OtherHeader bg={'membership-bg'} text={"Our Membership Programs"} />
            <MembershipText />
            <SectionTwo bg={'bg-Sail'} title={"Eligibility"} text={"Women Mentors Foundation is a social enterprise with non-negotiable values. We’ve got high standards for the organizations that publish on our platform. At Women Mentors Foundation, we are hopeful about the change we can bring about in the world - and we believe that everyone has the ability to make a significant difference. That is why solidarity is central to our work. Our members recognize that they, too, must demonstrate solidarity in order to advance our joint effort for a sustainable society in which everyone is free."} />
            <Newsletter />
        </div>
    )
}

export default membership