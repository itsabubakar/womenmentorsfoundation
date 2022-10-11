import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import WellnessConc from "../components/WellnessConc"

const rights = () => {
    return (
        <div>
            <Header
                title={"Wellness"}
                text={"The active quest for activities, choices, and lifestyles that lead to overall health."} />
            <WellnessConc />
            <Newsletter />
        </div>
    )
}

export default rights